'use client';

import { StagePipeline, type Stage } from './StagePipeline';

/**
 * One daily run, following the sections of the agent's own report. Structure
 * only: no tickers, portfolios or figures from the real output.
 */
const STAGES: Stage[] = [
  {
    name: 'Gather evidence',
    who: 'code',
    detail:
      'Tools pull sector ETF performance over one, five and twenty days, the latest holdings of every portfolio, and each trading agent’s track record.',
  },
  {
    name: 'Classify the regime',
    who: 'model',
    detail:
      'The model reads the market data alongside the news and names the macro regime: which sector dominates, and how high the risk level is.',
  },
  {
    name: 'Check portfolio health',
    who: 'model',
    detail:
      'Each portfolio is rated Healthy or Watch by how well its positions fit that regime, with the reasoning written out.',
  },
  {
    name: 'Flag weak agents',
    who: 'model',
    detail:
      'Underperforming or regime-misaligned trading agents are flagged for Replace or Monitor, each with a priority.',
  },
  {
    name: 'Propose changes',
    who: 'model',
    detail:
      'Concrete proposals: replace an agent with a stronger unused one, keep watching, or incubate a new agent the regime calls for.',
  },
  {
    name: 'Human approval',
    who: 'human',
    detail:
      'Every proposal is advisory. Nothing changes in any portfolio until a person reviews and approves it.',
  },
];

export function TradingAgentFigure() {
  return <StagePipeline stages={STAGES} caption="One daily run · select a stage" />;
}
