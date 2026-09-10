'use client';

import { useEffect, useRef } from 'react';

/** Layer widths, input → output. Kept small: the panel sits in a narrow hero
 *  column, and 8-node layers there collapse into a mesh instead of reading
 *  as an architecture. */
const LAYERS = [4, 6, 6, 3];
/** Seconds between forward passes. */
const PASS_INTERVAL = 1.9;
/** Seconds a pulse takes to cross one edge. */
const PULSE_TRAVEL = 0.6;
/** Fraction of possible layer-to-layer connections actually drawn. */
const EDGE_DENSITY = 0.5;
/** Fraction of a layer's edges carrying a pulse on any given pass — sparse reads better than solid. */
const PULSE_DENSITY = 0.6;
/** Seconds between weight re-rolls: the "training step" shimmer. */
const RETRAIN_INTERVAL = 9;
/** Fraction of a node's activation still remaining one second later. */
const ACTIVATION_DECAY = 0.14;
/** Pixels within which the pointer excites a node. */
const POINTER_RADIUS = 110;
/** Seconds of simulation run before the first paint, so the hero opens mid-pass. */
const WARM_START = 1.4;
/** Where the graph sits in its panel, as fractions of the canvas box. The
 *  column labels are placed from these same numbers so the two can't drift. */
const WIDE_FIELD = { left: 0.5, right: 0.97, top: 0.1, bottom: 0.74 };
const NARROW_FIELD = { left: 0.06, right: 0.94, top: 0.14, bottom: 0.80 };
/** Wide screens seat the graph to the right of the hero copy; narrow ones let it
 *  span the full width behind the text, where the mask keeps it faint. */
const fieldFor = (width: number) => (width >= 900 ? WIDE_FIELD : NARROW_FIELD);

/** One per layer: names the pipeline the network stands in for, so the graphic
 *  says something instead of being generic ML wallpaper. */
const LAYER_LABELS = ['data', 'features', 'model', 'decision'];

/** Positive weights read blue, negative violet — the hero gradient's two ends. */
const POSITIVE = [96, 165, 250] as const;
const NEGATIVE = [167, 139, 250] as const;

type Rgb = readonly [number, number, number];

type Node = {
  /** Normalized position, so resizing never rebuilds the graph. */
  nx: number;
  ny: number;
  layer: number;
  activation: number;
  x: number;
  y: number;
};

type Edge = {
  from: Node;
  to: Node;
  weight: number;
  targetWeight: number;
};

type Pulse = {
  edge: Edge;
  /** Progress along the edge, 0 → 1. */
  t: number;
  strength: number;
};

const rgba = (c: Rgb, a: number) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;

/** Small seeded PRNG so the layout is identical on every load and every resize. */
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildNetwork(rand: () => number) {
  const layers: Node[][] = [];
  const nodes: Node[] = [];

  LAYERS.forEach((count, layerIndex) => {
    const baseX = layerIndex / (LAYERS.length - 1);
    const layerNodes: Node[] = [];

    for (let i = 0; i < count; i++) {
      const baseY = count === 1 ? 0.5 : i / (count - 1);
      const node: Node = {
        nx: baseX + (rand() - 0.5) * 0.012,
        ny: baseY + (rand() - 0.5) * 0.025,
        layer: layerIndex,
        activation: 0,
        x: 0,
        y: 0,
      };
      layerNodes.push(node);
      nodes.push(node);
    }

    layers.push(layerNodes);
  });

  const edges: Edge[] = [];
  const connect = (from: Node, to: Node) => {
    const weight = rand() * 2 - 1;
    edges.push({ from, to, weight, targetWeight: weight });
  };

  for (let l = 0; l < layers.length - 1; l++) {
    for (const from of layers[l]) {
      for (const to of layers[l + 1]) {
        // A sparse graph reads as an architecture; all-to-all reads as a mesh.
        // Biasing against long diagonals keeps the layer columns legible.
        const reach = Math.abs(from.ny - to.ny);
        if (rand() > EDGE_DENSITY * (1 - reach * 0.85)) continue;
        connect(from, to);
      }
    }

    // Pruning can orphan a node — give every one at least a path in and out.
    const pick = (layer: Node[]) => layer[Math.floor(rand() * layer.length)];
    for (const from of layers[l]) {
      if (!edges.some((edge) => edge.from === from)) connect(from, pick(layers[l + 1]));
    }
    for (const to of layers[l + 1]) {
      if (!edges.some((edge) => edge.to === to)) connect(pick(layers[l]), to);
    }
  }

  return { layers, nodes, edges };
}

export function NeuralNetwork() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const epochRef = useRef<HTMLSpanElement>(null);
  const lossRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rand = mulberry32(20240607);
    const { layers, nodes, edges } = buildNetwork(rand);
    const pulses: Pulse[] = [];
    /** Layer firings queued at absolute elapsed times — this is what cascades a pass. */
    const scheduled: { layer: number; at: number }[] = [];

    let width = 0;
    let height = 0;
    let elapsed = 0;
    let passTimer = PASS_INTERVAL * 0.4;
    let retrainTimer = 0;
    let readoutTimer = 0;
    let epoch = 1;
    let frame = 0;
    let lastTime = 0;
    let onScreen = true;
    const pointer = { x: 0, y: 0, active: false };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = () => {
      const field = fieldFor(width);
      const span = field.right - field.left;

      for (const node of nodes) {
        node.x = (field.left + node.nx * span) * width;
        node.y = (field.top + node.ny * (field.bottom - field.top)) * height;
      }

      // Publish the field so the DOM labels can be placed from the same numbers
      // the canvas just used, at whatever breakpoint is active.
      for (let l = 0; l < LAYERS.length; l++) {
        const t = l / (LAYERS.length - 1);
        wrap.style.setProperty(`--layer-${l}`, `${(field.left + t * span) * 100}%`);
      }
      wrap.style.setProperty('--field-bottom', `${field.bottom * 100}%`);
    };

    const fireLayer = (layer: number) => {
      if (layer >= layers.length - 1) return;

      for (const edge of edges) {
        if (edge.from.layer !== layer) continue;
        if (rand() > PULSE_DENSITY) continue;
        pulses.push({ edge, t: 0, strength: 0.6 + rand() * 0.4 });
      }

      // Next layer fires just before this wave lands, so the cascade overlaps slightly.
      scheduled.push({ layer: layer + 1, at: elapsed + PULSE_TRAVEL * 0.85 });
    };

    const update = (dt: number) => {
      elapsed += dt;

      passTimer += dt;
      if (passTimer >= PASS_INTERVAL) {
        passTimer = 0;
        scheduled.push({ layer: 0, at: elapsed });
      }

      // Scanned rather than shifted so a queue that lands out of order — which
      // it would if PASS_INTERVAL ever dropped below one cascade — can't stall.
      for (let i = scheduled.length - 1; i >= 0; i--) {
        if (scheduled[i].at > elapsed) continue;
        const { layer } = scheduled[i];
        scheduled.splice(i, 1);
        fireLayer(layer);
      }

      retrainTimer += dt;
      if (retrainTimer >= RETRAIN_INTERVAL) {
        retrainTimer = 0;
        epoch += 1;
        for (const edge of edges) edge.targetWeight = rand() * 2 - 1;
      }

      const settle = Math.min(1, dt * 1.6);
      for (const edge of edges) {
        edge.weight += (edge.targetWeight - edge.weight) * settle;
      }

      const decay = Math.pow(ACTIVATION_DECAY, dt);
      for (const node of nodes) node.activation *= decay;

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.t += dt / PULSE_TRAVEL;
        if (pulse.t < 1) continue;

        const landed = Math.abs(pulse.edge.weight) * pulse.strength * 0.9;
        pulse.edge.to.activation = Math.min(1, pulse.edge.to.activation + landed);
        pulses.splice(i, 1);
      }

      if (pointer.active) {
        let nearest: Node | null = null;
        let bestDistance = POINTER_RADIUS;

        for (const node of nodes) {
          const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
          if (distance < bestDistance) {
            bestDistance = distance;
            nearest = node;
          }
        }

        if (nearest) {
          const falloff = 1 - bestDistance / POINTER_RADIUS;
          nearest.activation = Math.max(nearest.activation, falloff);
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const edge of edges) {
        const magnitude = Math.abs(edge.weight);
        const glow = Math.max(edge.from.activation, edge.to.activation);
        const color = edge.weight >= 0 ? POSITIVE : NEGATIVE;

        ctx.strokeStyle = rgba(color, 0.08 + magnitude * 0.24 + glow * 0.6);
        ctx.lineWidth = 0.6 + magnitude * 0.6 + glow * 1;
        ctx.beginPath();
        ctx.moveTo(edge.from.x, edge.from.y);
        ctx.lineTo(edge.to.x, edge.to.y);
        ctx.stroke();
      }

      for (const pulse of pulses) {
        const { from, to } = pulse.edge;
        const color = pulse.edge.weight >= 0 ? POSITIVE : NEGATIVE;
        const tail = Math.max(0, pulse.t - 0.3);

        const hx = from.x + (to.x - from.x) * pulse.t;
        const hy = from.y + (to.y - from.y) * pulse.t;
        const tx = from.x + (to.x - from.x) * tail;
        const ty = from.y + (to.y - from.y) * tail;

        const gradient = ctx.createLinearGradient(tx, ty, hx, hy);
        gradient.addColorStop(0, rgba(color, 0));
        gradient.addColorStop(1, rgba(color, pulse.strength));

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();

        ctx.shadowBlur = 9;
        ctx.shadowColor = rgba(color, 0.9);
        ctx.fillStyle = rgba(color, pulse.strength);
        ctx.beginPath();
        ctx.arc(hx, hy, 2.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (const node of nodes) {
        const heat = node.activation;
        const color = heat > 0.5 ? POSITIVE : ([148, 163, 184] as Rgb);

        ctx.shadowBlur = heat * 18;
        ctx.shadowColor = rgba(POSITIVE, heat * 0.85);
        ctx.fillStyle = rgba(color, 0.4 + heat * 0.6);
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.6 + heat * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    /** Mirrors real simulation state — drift genuinely falls as the weights settle. */
    const updateReadout = () => {
      let drift = 0;
      for (const edge of edges) drift += Math.abs(edge.targetWeight - edge.weight);
      drift /= edges.length;

      if (statusRef.current) statusRef.current.textContent = pulses.length ? 'forward pass' : 'idle';
      if (epochRef.current) epochRef.current.textContent = String(epoch).padStart(2, '0');
      if (lossRef.current) lossRef.current.textContent = drift.toFixed(3);
    };

    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      if (!onScreen || document.hidden) {
        lastTime = now;
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      project();
      update(dt);
      draw();

      readoutTimer += dt;
      if (readoutTimer >= 0.1) {
        readoutTimer = 0;
        updateReadout();
      }
    };

    /** One representative frame for reduced-motion users: structure, no movement. */
    const drawStaticFrame = () => {
      project();
      for (const layer of layers) {
        for (const node of layer) node.activation = 0.12 + rand() * 0.45;
      }
      draw();
      updateReadout();
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 && pointer.x <= rect.width && pointer.y >= 0 && pointer.y <= rect.height;
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) drawStaticFrame();
    });
    resizeObserver.observe(wrap);

    resize();

    // Simulate a little before the first paint so the hero opens with signal
    // already in flight instead of an empty graph.
    for (let i = 0; i < Math.round(WARM_START * 60); i++) {
      project();
      update(1 / 60);
    }

    if (reduceMotion) {
      drawStaticFrame();
      return () => resizeObserver.disconnect();
    }

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(wrap);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    // A layer of the hero rather than an object sitting next to it: the canvas
    // fills the section and the mask fades it out under the copy.
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600"
    >
      <canvas ref={canvasRef} className="network-mask h-full w-full" />

      {/* Positions come from CSS vars that project() writes off the live field,
          so the labels track the columns they name across every breakpoint. */}
      {LAYER_LABELS.map((text, i) => (
        <span
          key={text}
          className="absolute hidden -translate-x-1/2 whitespace-nowrap lg:block"
          style={{ left: `var(--layer-${i})`, top: 'calc(var(--field-bottom) + 0.9rem)' }}
        >
          {text}
        </span>
      ))}

      <div
        className="absolute right-0 hidden items-center gap-3 lg:flex"
        style={{ top: 'calc(var(--field-bottom) + 2.6rem)' }}
      >
        <span className="text-zinc-500">{LAYERS.join(' → ')}</span>
        <span className="text-zinc-700">·</span>
        <span ref={statusRef} className="text-secondary">
          idle
        </span>
        <span className="text-zinc-700">·</span>
        <span>
          epoch <span ref={epochRef} className="text-zinc-500">01</span>
        </span>
        <span className="text-zinc-700">·</span>
        <span>
          drift <span ref={lossRef} className="text-zinc-500">0.000</span>
        </span>
      </div>
    </div>
  );
}
