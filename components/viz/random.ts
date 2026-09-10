/** Small seeded PRNG so every figure lays out identically on each load and resize. */
export function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** On-brand and still distinguishable: the hero gradient's blues and violets. */
export const CLUSTER_COLORS = [
  [96, 165, 250], // blue-400
  [167, 139, 250], // violet-400
  [56, 189, 248], // sky-400
  [129, 140, 248], // indigo-400
  [45, 212, 191], // teal-400
] as const;

export const rgba = (color: readonly number[], alpha: number) =>
  `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
