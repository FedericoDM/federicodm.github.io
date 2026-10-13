export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  /** Surfaced in the home-page preview grid. Keep this to three. */
  featured?: boolean;
  org?: string;
  period?: string;
  /** Collaborator, shown under the title as "With <name>, <role>". */
  credit?: { name: string; role?: string; href?: string };
  /** Case-study body. Any section left undefined is simply not rendered. */
  context?: string;
  approach?: string[];
  outcome?: string[];};

export const projects: Project[] = [
  {
    slug: 'air-pollution-alert-system',
    title: 'Global Air Pollution Alert System',
    description:
      'Built within a World Bank & NASA-backed RCT: a global alert system targeting air pollution advocates from 30+ cities using X (Twitter), NLP, graph analysis, and real-time satellite pollution data. Reached 200,000+ impressions in three months.',
    tags: ['Python', 'NLP', 'AWS', 'Graph Analysis', 'Real-time Data'],
    link: 'https://climate.uchicago.edu/entities/empowering-environmental-governance-with-satellite-data-a-global-randomized-control-trial/',
    image: '/projects/air-pollution-card.svg',
    featured: true,
    org: 'Energy & Environment Lab',
    period: '2024 — Present',
    context:
      'Satellite instruments measure air quality almost everywhere on earth, but that data rarely reaches the people positioned to act on it. This system was built inside a World Bank and NASA-backed randomized controlled trial testing whether putting pollution data directly in front of local environmental advocates changes governance outcomes.',
    approach: [
      'Identified and ranked air pollution advocates across 30+ cities using NLP and graph analysis over X (Twitter) networks',
      'Ingested real-time satellite pollution readings and joined them against city-level advocate audiences',
      'Raised LLM classification accuracy from 65% to 87% through prompt engineering — building annotated datasets and iterative evaluation loops rather than one-shot prompt guesses',
    ],
    outcome: [
      'Over 200,000 impressions in the first three months',
      'A social-media scraper extracting roughly 11 million posts daily, cutting $50,000 per month in data costs',
    ],
  },
  {
    slug: 'ecoscout-government-contacts',
    title: 'EcoScout: AI Agents for Government Contact Data',
    description:
      'Multi-agent pipeline that mapped 5,501 local government bodies across nine African countries, collecting contact details, websites and social media for mayors, governors, council chairs, environmental regulators and planning authorities.',
    tags: ['AI Agents', 'Multi-Agent Systems', 'LLMs', 'Web Scraping', 'Data Collection'],
    image: '/projects/ecoscout-card.svg',
    featured: true,
    org: 'Energy & Environment Lab',
    credit: {
      name: 'Vishal Vincent Joseph',
      role: 'Data Science Research Manager at the E&E Lab',
      href: 'http://vishalvjoseph.com/',
    },
    context:
      'A potential intervention would deliver air-quality information directly to local government offices and measure its effect on outcomes. That starts with knowing who those offices are and how to reach them, across countries whose governments are structured and named in very different ways.',
    approach: [
      'Framed each country by hand first: a governance profile of its tiers, units, executives and environmental roles, checked against legal and statistical sources',
      'A discovery agent searches the web for candidate websites for each institution, and a judge decides which one is correct, if any',
      'Deterministic scraping code reads the sites that were found, and a separate contact agent looks up whatever is still missing',
      'Code verifies every result at the end: domain lookups, phone checks and HTTP status checks on every site',
      'Kept each agent to a narrow job and did as much as possible in plain code, since an agent given too many tasks fails on at least one',
    ],
    outcome: [
      '5,501 bodies and 5,331 executive seats mapped across nine countries, using 1,021 agent runs and 10,662 web searches in about 26 hours of wall-clock time',
      'The channel that works is country-specific: South Africa is 98% reachable by phone, Angola 91% by social media, Tanzania 86% by website',
      'Low numbers are measured, not untested: 1,054 of DR Congo’s 1,061 bodies were searched and confirmed to have no discoverable web presence',
    ],
  },
  {
    slug: 'ml-loan-recommender',
    title: 'ML Loan Recommendation System',
    description:
      'Developed machine learning recommender system to offer customized loans to over 500,000 borrowers, improving conversion rates.',
    tags: ['Python', 'ML', 'scikit-learn', 'Recommendation Systems'],
    image: '/projects/loan-recommender-card.svg',
    featured: true,
    org: 'deep_dive',
    period: '2021 — 2023',
    context:
      'Offering every borrower the same loan product wastes both sides of the transaction. With a book of more than half a million borrowers, matching people to the product they would actually accept is a recommendation problem, not a marketing one.',
    approach: [
      'Engineered custom borrower features from the underlying account and behavioral data',
      'Applied K-Means clustering to group borrowers into meaningful segments',
      'Designed similarity metrics to match each borrower against the loan products that fit their segment',
    ],
    outcome: [
      'Deployed end to end for a base of 500,000+ borrowers',
      'Improved conversion rates on loan offers',
    ],
  },
  {
    slug: 'ai-trading-agent',
    title: 'AI Trading Agent',
    description:
      'Proof-of-concept AI agent built with Claude and custom tools to analyze investment portfolios against macroeconomic regimes and generate trade recommendations. Demonstrates LLM tool use, function calling, and agent orchestration patterns.',
    tags: ['Claude API', 'AI Agent', 'Function Calling', 'Python', 'Trading'],
    image: '/projects/ai-trading-agent-card.svg',
    org: 'Personal project',
    context:
      'Portfolio review is a research task before it is a trading task: read the current macro regime, check how the holdings are positioned against it, then decide what to change. Gathering evidence, reasoning over it and proposing an action is what an agent with tools is actually good at, especially at scale.',
    approach: [
      'Built custom tools the model calls to pull portfolio holdings and macroeconomic indicators',
      'Used Claude with function calling to reason over regime classification and current exposure together',
      'Orchestrated multi-step analysis so the agent gathers evidence before recommending trades, rather than answering from a single prompt',
    ],
    outcome: [
      'A working proof of concept for LLM tool use, function calling, and agent orchestration applied to portfolio analysis',
    ],
  },
  {
    slug: 'automated-trading-platform',
    title: 'Automated Trading Platform',
    description:
      'Designed EC2 architecture and Python code to auto-trade over 10+ portfolios through Interactive Brokers with daily stock price ingestion.',
    tags: ['Python', 'AWS EC2', 'Trading', 'SQL', 'Automation'],
    image: '/projects/automated-trading-card.svg',
    org: 'Personal project',
    context:
      'Running more than ten portfolios by hand does not scale, and manual execution introduces exactly the timing and consistency errors a strategy is meant to avoid.',
    approach: [
      'Designed the EC2 architecture to run scheduled trading jobs unattended',
      'Wrote the Python execution layer against the Interactive Brokers API',
      'Set up daily stock price ingestion into SQL so strategies always trade against current data',
    ],
    outcome: ['Automated execution across 10+ portfolios without manual intervention'],
  },
  {
    slug: 'climate-data-platform',
    title: 'Long Beach Climate Data Platform',
    description:
      'Built a Python data platform allowing City of Long Beach Climate Office to download data from 2010-2023, improving access and saving hundreds of work hours annually.',
    tags: ['Python', 'Data Engineering', 'Climate', 'Civic Tech'],
    github: 'https://github.com/City-of-Long-Beach-Public/climate_inventory',
    image: '/projects/climate-data-card.svg',
    org: 'Coding it Forward · City of Long Beach',
    period: '2023',
    context:
      "The City of Long Beach Climate Office needed its own historical climate inventory to do its job, but assembling it meant repeated manual collection from scattered sources — work that had to be redone every time someone needed a number.",
    approach: [
      'Built a Python platform to pull and consolidate the climate inventory covering 2010 through 2023',
      'Automated the collection and cleaning steps that had previously been done by hand',
      'Released it publicly so the office owns and maintains the pipeline itself',
    ],
    outcome: [
      'Saved the Climate Office hundreds of work hours annually',
      'Open sourced under the City of Long Beach GitHub organization',
    ],
  },
  {
    slug: 'policing-bias-visualizations',
    title: 'Policing Research Bias Detection',
    description:
      'Created 10+ interactive visualizations and dashboards with Plotly to detect bias in 250+ policing research papers for academic research.',
    tags: ['Python', 'Plotly', 'Data Visualization', 'Research'],
    link: 'https://www.cambridge.org/core/journals/law-and-society-review/article/academic-copaganda/1D096FAF1C38403739FCBB8D482FE24A',
    image: '/projects/policing-research-card.svg',
    org: 'University of Chicago',
    period: '2023 — 2024',
    context:
      'Claims about policing carry more weight when they come from peer-reviewed research, which makes systematic bias in that literature consequential. Detecting it requires reading the corpus as a dataset rather than as individual papers.',
    approach: [
      'Scraped hundreds of media mentions for 250+ policing research papers to detect patterns of bias',
      'Built 10+ interactive Plotly visualizations and dashboards to make those patterns inspectable',

    ],
    outcome: [
      'Supported "Academic Copaganda" with Dr. Robert Vargas, published in Law and Society Review',
    ],  },
  {
    slug: 'social-media-analytics',
    title: 'Social Media Analytics Alert System',
    description:
      'Led automatic alert system project to help 20+ clients improve customer relationships via social media analytics and real-time monitoring.',
    tags: ['Python', 'NLP', 'Social Media', 'AWS'],
    image: '/projects/social-media-alerts-card.svg',
    org: 'deep_dive',
    period: '2021 — 2023',
    context:
      'Customer sentiment moves on social media faster than any reporting cycle can capture. Clients needed to hear about a developing problem while they could still respond to it.',
    approach: [
      'Led the project end to end, from alerting design through client rollout',
      'Applied NLP over social media streams to surface events worth acting on',
      'Ran real-time monitoring on AWS so alerts fired as conversations developed',
    ],
    outcome: ['Deployed for 20+ clients to improve customer relationship management'],
  },
  {
    slug: 'fastapi-research-platform',
    title: 'Interactive Laboratory Games Platform',
    description:
      'Co-developed FastAPI web platform to play laboratory games and inform research on children decision-making behavior.',
    tags: ['Python', 'FastAPI', 'Research', 'Web Development'],
    link: 'https://uchicago.app.box.com/s/e1vqcx2353uod7g4m3rt7nkfh7znanxr',
    image: '/projects/lab-games-card.svg',
    org: 'University of Chicago',
    period: '2023 — 2024',
    context:
      'Behavioral research on how children make decisions depends on running controlled games consistently across every participant, which is hard to do with paper instruments and a room full of kids.',
    approach: [
      'Co-developed a FastAPI web platform to administer the laboratory games',
      'Captured play data in a form researchers could analyze directly',
    ],
    outcome: ['Used to inform research on children’s decision-making behavior'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
