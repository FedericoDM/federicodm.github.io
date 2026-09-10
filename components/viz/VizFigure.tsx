'use client';

import type { RefObject } from 'react';

type VizFigureProps = {
  wrapRef: RefObject<HTMLDivElement>;
  canvasRef: RefObject<HTMLCanvasElement>;
  /** What the figure is showing, in the language of the case study. */
  method: string;
  /** Live simulation state — the numbers that move. */
  readout: React.ReactNode;
};

/**
 * Shared shell for the in-context project figures. The "schematic" tag is not
 * decoration: these illustrate the method, and the numbers below are the
 * running simulation's own state, not measurements from the project.
 */
export function VizFigure({ wrapRef, canvasRef, method, readout }: VizFigureProps) {
  return (
    <figure className="space-y-3">
      <div
        ref={wrapRef}
        aria-hidden="true"
        className="h-56 w-full sm:h-64"
      >
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-zinc-800/70 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
        <span className="text-zinc-400">{method}</span>
        <span className="rounded border border-zinc-800 px-1.5 py-0.5 text-zinc-600">
          schematic
        </span>
        <span className="ml-auto flex items-center gap-3">{readout}</span>
      </figcaption>
    </figure>
  );
}
