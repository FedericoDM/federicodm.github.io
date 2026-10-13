'use client';

import { StagePipeline, type Stage } from './StagePipeline';

/** The five stages and who does each, as presented in the EcoScout talk. */
const STAGES: Stage[] = [
  {
    name: 'Frame country',
    who: 'human',
    detail:
      'A person decides what the country’s local governments even are: tiers, units, executives and what each body is called locally.',
  },
  {
    name: 'Discover websites',
    who: 'model',
    detail:
      'A discovery agent searches the web for candidate websites for each institution, and a judge decides which one is correct, if any.',
  },
  {
    name: 'Read website information',
    who: 'code',
    detail: 'Scraping code reads the sites that were found. Deterministic, so it costs no model calls.',
  },
  {
    name: 'Fill the gaps',
    who: 'model',
    detail: 'A contact agent looks up whatever is still missing, separately, via web search.',
  },
  {
    name: 'Verify and export',
    who: 'code',
    detail: 'Domain lookups, phone checks and HTTP status checks on every site before anything is exported.',
  },
];

type Channel = 'phone' | 'social' | 'website';

/** Share of each country's bodies reachable through its strongest single channel. */
const REACH: { country: string; share: number; channel: Channel }[] = [
  { country: 'South Africa', share: 98, channel: 'phone' },
  { country: 'Ghana', share: 94, channel: 'phone' },
  { country: 'Angola', share: 91, channel: 'social' },
  { country: 'Tanzania', share: 86, channel: 'website' },
  { country: 'Egypt', share: 59, channel: 'website' },
  { country: 'Senegal', share: 37, channel: 'social' },
  { country: 'Nigeria', share: 37, channel: 'social' },
  { country: 'Morocco', share: 23, channel: 'social' },
  { country: 'DR Congo', share: 6, channel: 'phone' },
];

const CHANNEL_STYLE: Record<Channel, { label: string; bar: string }> = {
  phone: { label: 'Phone', bar: 'bg-teal-400' },
  social: { label: 'Social media', bar: 'bg-violet-400' },
  website: { label: 'Website', bar: 'bg-blue-400' },
};

export function EcoScoutFigure() {
  return (
    <div className="space-y-10">
      <StagePipeline stages={STAGES} caption="Five stages, three kinds of work · select a stage" />

      <figure className="space-y-4">
        <div className="space-y-2">
          {REACH.map((row) => (
            <div key={row.country} className="grid grid-cols-[6.5rem_1fr_2.5rem] items-center gap-3 text-sm">
              <span className="text-zinc-400">{row.country}</span>
              <span className="h-2 overflow-hidden rounded-full bg-zinc-800/70">
                <span
                  className={`block h-full rounded-full ${CHANNEL_STYLE[row.channel].bar}`}
                  style={{ width: `${row.share}%` }}
                />
              </span>
              <span className="text-right font-mono text-xs text-zinc-300">{row.share}%</span>
            </div>
          ))}
        </div>

        <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-zinc-800/70 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
          <span className="text-zinc-400">Reachable via strongest channel</span>
          {(Object.keys(CHANNEL_STYLE) as Channel[]).map((channel) => (
            <span key={channel} className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${CHANNEL_STYLE[channel].bar}`} />
              {CHANNEL_STYLE[channel].label}
            </span>
          ))}
        </figcaption>
      </figure>
    </div>
  );
}
