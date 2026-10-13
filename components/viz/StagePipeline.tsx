'use client';

import { useEffect, useState } from 'react';

export type Who = 'human' | 'model' | 'code';
export type Stage = { name: string; who: Who; detail: string };

const WHO_STYLE: Record<Who, { label: string; text: string; border: string }> = {
  human: { label: 'Human', text: 'text-amber-400', border: 'border-amber-400/60' },
  model: { label: 'Model', text: 'text-blue-400', border: 'border-blue-400/60' },
  code: { label: 'Code', text: 'text-zinc-300', border: 'border-zinc-400/60' },
};

const STEP_SECONDS = 2.6;
const GRID_COLS: Record<number, string> = {
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-3 lg:grid-cols-6',
};

/**
 * A pipeline of stages, each tagged by who does the work. Steps through on its
 * own until the reader hovers or clicks a stage, then stays where they put it.
 */
export function StagePipeline({ stages, caption }: { stages: Stage[]; caption: string }) {
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(
      () => setActive((stage) => (stage + 1) % stages.length),
      STEP_SECONDS * 1000
    );
    return () => window.clearInterval(timer);
  }, [touched, stages.length]);

  const select = (index: number) => {
    setTouched(true);
    setActive(index);
  };

  const current = stages[active];

  return (
    <figure className="space-y-4">
      <ol className={`grid gap-2 ${GRID_COLS[stages.length] ?? 'sm:grid-cols-5'}`}>
        {stages.map((stage, index) => {
          const style = WHO_STYLE[stage.who];
          const isActive = index === active;
          return (
            <li key={stage.name}>
              <button
                type="button"
                onClick={() => select(index)}
                onMouseEnter={() => select(index)}
                aria-pressed={isActive}
                className={`flex h-full w-full flex-col gap-2 rounded-lg border p-3 text-left transition-colors duration-300 motion-reduce:transition-none ${
                  isActive ? `${style.border} bg-zinc-900` : 'border-zinc-800 bg-zinc-900/40'
                }`}
              >
                <span className={`font-mono text-[10px] uppercase tracking-[0.16em] ${style.text}`}>
                  {String(index + 1).padStart(2, '0')} · {style.label}
                </span>
                <span className={`text-sm leading-snug ${isActive ? 'text-zinc-100' : 'text-zinc-400'}`}>
                  {stage.name}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <p className="min-h-[4.5rem] leading-relaxed text-zinc-400 sm:min-h-[3rem]" aria-live="polite">
        <span className={WHO_STYLE[current.who].text}>{current.name}.</span> {current.detail}
      </p>

      <figcaption className="border-t border-zinc-800/70 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
        {caption}
      </figcaption>
    </figure>
  );
}
