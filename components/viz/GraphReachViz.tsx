'use client';

import { useRef } from 'react';
import { mulberry32, rgba } from './random';
import { useCanvasScene, type Scene } from './useCanvasScene';
import { VizFigure } from './VizFigure';

const NODE_TARGET = 46;
/** Minimum spacing between nodes, in the aspect-corrected metric below.
 *  Tuned so rejection sampling actually places most of NODE_TARGET. */
const MIN_SPACING = 0.075;
/** Neighbours each node links to; the graph is undirected and deduplicated. */
const NEIGHBOURS = 2;
/** Seconds a signal takes to cross one edge. */
const TRAVEL = 0.45;
/** Seconds to hold a fully-reached graph before seeding the next advocate. */
const HOLD = 2.2;
/**
 * The figure is much wider than it is tall, so raw normalized distance would
 * pick "neighbours" that look far apart on screen. Weighting the vertical axis
 * by the box's rough aspect keeps the mesh even.
 */
const ASPECT = 0.36;
const ACCENT = [96, 165, 250] as const;
const TAU = Math.PI * 2;

type GraphNode = {
  nx: number;
  ny: number;
  x: number;
  y: number;
  degree: number;
  reached: boolean;
  pending: boolean;
  heat: number;
};
type GraphEdge = { a: GraphNode; b: GraphNode };
type Signal = { from: GraphNode; to: GraphNode; t: number };

export function GraphReachViz() {
  const reachedRef = useRef<HTMLSpanElement>(null);
  const nodesRef = useRef<HTMLSpanElement>(null);
  const edgesRef = useRef<HTMLSpanElement>(null);

  const { wrapRef, canvasRef } = useCanvasScene((): Scene => {
    const rand = mulberry32(43127);
    let width = 0;
    let height = 0;
    let signals: Signal[] = [];
    let reachedCount = 0;
    let holdTimer = 0;
    let readoutTimer = 0;
    let seedIndex = 0;

    const spacing = (ax: number, ay: number, bx: number, by: number) =>
      Math.hypot(ax - bx, (ay - by) * ASPECT);

    // --- Build the graph once; it is the same network every load. ---
    const nodes: GraphNode[] = [];
    for (let attempt = 0; attempt < NODE_TARGET * 40 && nodes.length < NODE_TARGET; attempt++) {
      const nx = 0.03 + rand() * 0.94;
      const ny = 0.06 + rand() * 0.88;
      let ok = true;
      for (const node of nodes) {
        if (spacing(nx, ny, node.nx, node.ny) < MIN_SPACING) {
          ok = false;
          break;
        }
      }
      if (!ok) continue;
      nodes.push({ nx, ny, x: 0, y: 0, degree: 0, reached: false, pending: false, heat: 0 });
    }

    const edges: GraphEdge[] = [];
    const seen = new Set<string>();
    for (let i = 0; i < nodes.length; i++) {
      const ranked = nodes
        .map((node, index) => ({ index, distance: spacing(nodes[i].nx, nodes[i].ny, node.nx, node.ny) }))
        .filter((entry) => entry.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, NEIGHBOURS);

      for (const { index } of ranked) {
        const key = i < index ? `${i}-${index}` : `${index}-${i}`;
        if (seen.has(key)) continue;
        seen.add(key);
        edges.push({ a: nodes[i], b: nodes[index] });
        nodes[i].degree++;
        nodes[index].degree++;
      }
    }

    // Centrality stand-in: the best-connected accounts are the ones worth seeding.
    const ranked = [...nodes].sort((a, b) => b.degree - a.degree);
    const advocates = ranked.slice(0, 3);
    const maxDegree = ranked[0]?.degree || 1;

    const neighbours = (node: GraphNode) =>
      edges
        .filter((edge) => edge.a === node || edge.b === node)
        .map((edge) => (edge.a === node ? edge.b : edge.a));

    const launchFrom = (node: GraphNode) => {
      for (const other of neighbours(node)) {
        if (other.reached || other.pending) continue;
        other.pending = true;
        signals.push({ from: node, to: other, t: 0 });
      }
    };

    const reset = () => {
      for (const node of nodes) {
        node.reached = false;
        node.pending = false;
        node.heat = 0;
      }
      signals = [];
      holdTimer = 0;

      const seed = ranked[seedIndex % Math.max(advocates.length, 1)] ?? nodes[0];
      seedIndex++;
      seed.reached = true;
      seed.heat = 1;
      reachedCount = 1;
      launchFrom(seed);
    };

    const project = () => {
      for (const node of nodes) {
        node.x = (0.03 + node.nx * 0.94) * width;
        node.y = (0.08 + node.ny * 0.84) * height;
      }
    };

    reset();

    return {
      warmStart: 1.1,

      layout: (nextWidth, nextHeight) => {
        width = nextWidth;
        height = nextHeight;
        project();
      },

      update: (dt) => {
        for (let i = signals.length - 1; i >= 0; i--) {
          const signal = signals[i];
          signal.t += dt / TRAVEL;
          if (signal.t < 1) continue;

          signals.splice(i, 1);
          signal.to.pending = false;
          if (!signal.to.reached) {
            signal.to.reached = true;
            signal.to.heat = 1;
            reachedCount++;
            launchFrom(signal.to);
          }
        }

        for (const node of nodes) node.heat *= Math.pow(0.22, dt);

        if (!signals.length) {
          holdTimer += dt;
          if (holdTimer > HOLD) reset();
        }

        readoutTimer += dt;
        if (readoutTimer >= 0.1) {
          readoutTimer = 0;
          // Sizes are read off the graph that was actually built, not hardcoded.
          if (nodesRef.current) nodesRef.current.textContent = String(nodes.length);
          if (edgesRef.current) edgesRef.current.textContent = String(edges.length);
          if (reachedRef.current) {
            reachedRef.current.textContent = String(reachedCount).padStart(2, '0');
          }
        }
      },

      draw: (ctx) => {
        ctx.lineWidth = 0.7;
        for (const edge of edges) {
          const live = edge.a.reached && edge.b.reached;
          ctx.strokeStyle = rgba(ACCENT, live ? 0.22 : 0.08);
          ctx.beginPath();
          ctx.moveTo(edge.a.x, edge.a.y);
          ctx.lineTo(edge.b.x, edge.b.y);
          ctx.stroke();
        }

        // Travelling signal: a short bright segment, not a dot, so direction reads.
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        for (const signal of signals) {
          const head = Math.min(signal.t, 1);
          const tail = Math.max(0, head - 0.32);
          ctx.strokeStyle = rgba(ACCENT, 0.85);
          ctx.beginPath();
          ctx.moveTo(
            signal.from.x + (signal.to.x - signal.from.x) * tail,
            signal.from.y + (signal.to.y - signal.from.y) * tail
          );
          ctx.lineTo(
            signal.from.x + (signal.to.x - signal.from.x) * head,
            signal.from.y + (signal.to.y - signal.from.y) * head
          );
          ctx.stroke();
        }
        ctx.lineCap = 'butt';

        for (const node of nodes) {
          const weight = node.degree / maxDegree;
          const radius = 1.8 + weight * 2.6 + node.heat * 2.4;

          if (node.heat > 0.01) {
            ctx.shadowColor = rgba(ACCENT, 0.7);
            ctx.shadowBlur = node.heat * 16;
          }
          ctx.fillStyle = node.reached
            ? rgba(ACCENT, 0.55 + node.heat * 0.45)
            : 'rgba(148, 163, 184, 0.32)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, TAU);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Ring the seeded accounts so "ranked advocates" is visible, not implied.
        ctx.lineWidth = 1;
        for (const advocate of advocates) {
          ctx.strokeStyle = rgba(ACCENT, advocate.reached ? 0.45 : 0.22);
          ctx.beginPath();
          ctx.arc(advocate.x, advocate.y, 8.5, 0, TAU);
          ctx.stroke();
        }
      },
    };
  });

  return (
    <VizFigure
      wrapRef={wrapRef}
      canvasRef={canvasRef}
      method="reach through the advocate graph"
      readout={
        <>
          <span>
            nodes <span ref={nodesRef} className="text-zinc-400">0</span>
          </span>
          <span className="text-zinc-700">·</span>
          <span>
            edges <span ref={edgesRef} className="text-zinc-400">0</span>
          </span>
          <span className="text-zinc-700">·</span>
          <span>
            reached <span ref={reachedRef} className="text-zinc-400">01</span>
          </span>
        </>
      }
    />
  );
}
