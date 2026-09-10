'use client';

import { useRef } from 'react';
import { CLUSTER_COLORS, mulberry32, rgba } from './random';
import { useCanvasScene, type Scene } from './useCanvasScene';
import { VizFigure } from './VizFigure';

const K = 3;
const POINT_COUNT = 150;
/** Seconds between Lloyd iterations — slow enough to watch a step land. */
const STEP_INTERVAL = 0.95;
/** Simulated before the first paint. Long enough to cover two iterations, so
 *  the figure opens with the centroids already converging on the clusters
 *  rather than sitting on a motionless iteration zero. */
const WARM_START = 2.6;
/** Centroid easing per second; the assignment is instant, the move is not. */
const EASE = 5;
/** Seconds to sit on a converged solution before re-seeding. */
const HOLD = 2.6;
const MAX_ITERATIONS = 12;
const FIELD = { left: 0.04, right: 0.96, top: 0.08, bottom: 0.9 };
const TAU = Math.PI * 2;

type Point = { nx: number; ny: number; x: number; y: number; cluster: number };
type Centroid = { nx: number; ny: number; tx: number; ty: number; x: number; y: number };

const clamp01 = (value: number) => Math.min(0.98, Math.max(0.02, value));

export function KMeansViz() {
  const iterationRef = useRef<HTMLSpanElement>(null);
  const inertiaRef = useRef<HTMLSpanElement>(null);

  const { wrapRef, canvasRef } = useCanvasScene((): Scene => {
    let seed = 8412;
    let rand = mulberry32(seed);
    let points: Point[] = [];
    let centroids: Centroid[] = [];
    let width = 0;
    let height = 0;
    let timer = 0;
    let holdTimer = 0;
    let readoutTimer = 0;
    let iteration = 0;
    let inertia = 0;
    let converged = false;

    /** Sum of three uniforms: near enough to normal for a cloud of points. */
    const gaussian = () => (rand() + rand() + rand() - 1.5) * 0.9;

    const assign = () => {
      let total = 0;
      for (const point of points) {
        let best = 0;
        let bestDistance = Infinity;
        for (let i = 0; i < centroids.length; i++) {
          const dx = centroids[i].nx - point.nx;
          const dy = centroids[i].ny - point.ny;
          const distance = dx * dx + dy * dy;
          if (distance < bestDistance) {
            bestDistance = distance;
            best = i;
          }
        }
        point.cluster = best;
        total += bestDistance;
      }
      // Real inertia: mean squared distance to the assigned centroid.
      inertia = total / Math.max(points.length, 1);
    };

    const iterate = () => {
      assign();

      let maxMove = 0;
      for (let i = 0; i < centroids.length; i++) {
        let sx = 0;
        let sy = 0;
        let count = 0;
        for (const point of points) {
          if (point.cluster !== i) continue;
          sx += point.nx;
          sy += point.ny;
          count++;
        }
        // Standard k-means housekeeping: an empty cluster is re-seeded onto the
        // point its own centroid serves worst, rather than left stranded where
        // it happened to start.
        if (!count) {
          let worst: Point | undefined;
          let worstDistance = -1;
          for (const point of points) {
            const owner = centroids[point.cluster];
            if (!owner) continue;
            const distance = (point.nx - owner.nx) ** 2 + (point.ny - owner.ny) ** 2;
            if (distance > worstDistance) {
              worstDistance = distance;
              worst = point;
            }
          }
          if (worst) {
            maxMove = Math.max(
              maxMove,
              Math.hypot(worst.nx - centroids[i].nx, worst.ny - centroids[i].ny)
            );
            centroids[i].tx = worst.nx;
            centroids[i].ty = worst.ny;
          }
          continue;
        }
        const tx = sx / count;
        const ty = sy / count;
        maxMove = Math.max(maxMove, Math.hypot(tx - centroids[i].nx, ty - centroids[i].ny));
        centroids[i].tx = tx;
        centroids[i].ty = ty;
      }

      iteration++;
      if (maxMove < 0.004 || iteration >= MAX_ITERATIONS) converged = true;
    };

    const seedData = () => {
      rand = mulberry32(seed);
      seed = (seed * 31 + 17) % 100000;

      // Blob centres spread apart by rejection sampling, so the clusters are
      // genuinely separable and convergence means something.
      const blobs: { x: number; y: number }[] = [];
      for (let i = 0; i < K; i++) {
        let best = { x: 0.5, y: 0.5 };
        let bestSpacing = -1;
        for (let attempt = 0; attempt < 24; attempt++) {
          const candidate = { x: 0.12 + rand() * 0.76, y: 0.14 + rand() * 0.72 };
          let nearest = Infinity;
          for (const blob of blobs) {
            nearest = Math.min(nearest, Math.hypot(blob.x - candidate.x, blob.y - candidate.y));
          }
          if (nearest > bestSpacing) {
            bestSpacing = nearest;
            best = candidate;
          }
        }
        blobs.push(best);
      }

      points = [];
      for (let i = 0; i < POINT_COUNT; i++) {
        const blob = blobs[i % K];
        points.push({
          nx: clamp01(blob.x + gaussian() * 0.07),
          ny: clamp01(blob.y + gaussian() * 0.07),
          x: 0,
          y: 0,
          cluster: 0,
        });
      }

      // Centroids start scattered, so the first iterations visibly do work.
      centroids = [];
      for (let i = 0; i < K; i++) {
        const nx = 0.1 + rand() * 0.8;
        const ny = 0.12 + rand() * 0.76;
        centroids.push({ nx, ny, tx: nx, ty: ny, x: 0, y: 0 });
      }

      iteration = 0;
      timer = 0;
      holdTimer = 0;
      converged = false;
      assign();
    };

    const project = () => {
      const spanX = FIELD.right - FIELD.left;
      const spanY = FIELD.bottom - FIELD.top;
      for (const point of points) {
        point.x = (FIELD.left + point.nx * spanX) * width;
        point.y = (FIELD.top + point.ny * spanY) * height;
      }
      for (const centroid of centroids) {
        centroid.x = (FIELD.left + centroid.nx * spanX) * width;
        centroid.y = (FIELD.top + centroid.ny * spanY) * height;
      }
    };

    const updateReadout = () => {
      if (iterationRef.current) {
        iterationRef.current.textContent = String(iteration).padStart(2, '0');
      }
      if (inertiaRef.current) inertiaRef.current.textContent = inertia.toFixed(3);
    };

    seedData();

    return {
      warmStart: WARM_START,

      layout: (nextWidth, nextHeight) => {
        width = nextWidth;
        height = nextHeight;
        project();
      },

      update: (dt) => {
        if (converged) {
          holdTimer += dt;
          if (holdTimer > HOLD) seedData();
        } else {
          timer += dt;
          if (timer >= STEP_INTERVAL) {
            timer = 0;
            iterate();
          }
        }

        // Frame-rate independent easing.
        const k = 1 - Math.exp(-EASE * dt);
        for (const centroid of centroids) {
          centroid.nx += (centroid.tx - centroid.nx) * k;
          centroid.ny += (centroid.ty - centroid.ny) * k;
        }

        project();

        readoutTimer += dt;
        if (readoutTimer >= 0.1) {
          readoutTimer = 0;
          updateReadout();
        }
      },

      draw: (ctx) => {
        // Assignment lines first, faint: they show membership without competing.
        ctx.lineWidth = 0.6;
        for (const point of points) {
          const centroid = centroids[point.cluster];
          if (!centroid) continue;
          ctx.strokeStyle = rgba(CLUSTER_COLORS[point.cluster % CLUSTER_COLORS.length], 0.07);
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(centroid.x, centroid.y);
          ctx.stroke();
        }

        for (const point of points) {
          ctx.fillStyle = rgba(CLUSTER_COLORS[point.cluster % CLUSTER_COLORS.length], 0.55);
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1.9, 0, TAU);
          ctx.fill();
        }

        for (let i = 0; i < centroids.length; i++) {
          const color = CLUSTER_COLORS[i % CLUSTER_COLORS.length];
          const centroid = centroids[i];

          ctx.shadowColor = rgba(color, 0.6);
          ctx.shadowBlur = 12;
          ctx.fillStyle = rgba(color, 0.95);
          ctx.beginPath();
          ctx.arc(centroid.x, centroid.y, 4.2, 0, TAU);
          ctx.fill();
          ctx.shadowBlur = 0;

          ctx.strokeStyle = rgba(color, 0.32);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(centroid.x, centroid.y, 9, 0, TAU);
          ctx.stroke();
        }
      },
    };
  });

  return (
    <VizFigure
      wrapRef={wrapRef}
      canvasRef={canvasRef}
      method="k-means over borrower features"
      readout={
        <>
          <span>k = {K}</span>
          <span className="text-zinc-700">·</span>
          <span>
            iter <span ref={iterationRef} className="text-zinc-400">00</span>
          </span>
          <span className="text-zinc-700">·</span>
          <span>
            inertia <span ref={inertiaRef} className="text-zinc-400">0.000</span>
          </span>
        </>
      }
    />
  );
}
