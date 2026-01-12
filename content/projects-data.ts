export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: 'air-pollution-alert-system',
    title: 'Global Air Pollution Alert System',
    description: 'Pioneered a global alert system targeting air pollution advocates from 30+ cities using X (Twitter), natural language processing, graph analysis, and real-time pollution data.',
    tags: ['Python', 'NLP', 'Graph Analysis', 'Real-time Data'],
    link: 'https://climate.uchicago.edu/entities/empowering-environmental-governance-with-satellite-data-a-global-randomized-control-trial/',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=450&fit=crop',
  },
  {
    slug: 'automated-trading-platform',
    title: 'Automated Trading Platform',
    description: 'Designed EC2 architecture and Python code to auto-trade over 10+ portfolios through Interactive Brokers with daily stock price ingestion.',
    tags: ['Python', 'AWS EC2', 'Trading', 'Automation'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop',
  },
  {
    slug: 'fastapi-research-platform',
    title: 'Interactive Laboratory Games Platform',
    description: 'Co-developed FastAPI web platform to play laboratory games and inform research on children decision-making behavior.',
    tags: ['Python', 'FastAPI', 'Research', 'Web Development'],
    link: 'https://uchicago.app.box.com/s/e1vqcx2353uod7g4m3rt7nkfh7znanxr',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=450&fit=crop',
  },
  {
    slug: 'ml-loan-recommender',
    title: 'ML Loan Recommendation System',
    description: 'Developed machine learning recommender system to offer customized loans to over 500,000 borrowers, improving conversion rates.',
    tags: ['Python', 'ML', 'scikit-learn', 'Recommendation Systems'],
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=450&fit=crop',
  },
  {
    slug: 'social-media-analytics',
    title: 'Social Media Analytics Alert System',
    description: 'Led automatic alert system project to help 20+ clients improve customer relationships via social media analytics and real-time monitoring.',
    tags: ['Python', 'NLP', 'Social Media', 'AWS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
  },
  {
    slug: 'climate-data-platform',
    title: 'Long Beach Climate Data Platform',
    description: 'Built a Python data platform allowing City of Long Beach Climate Office to download data from 2010-2023, improving access and saving hundreds of work hours annually.',
    tags: ['Python', 'Data Engineering', 'Climate', 'Civic Tech'],
    github: 'https://github.com/City-of-Long-Beach-Public/climate_inventory',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=450&fit=crop',
  },
  {
    slug: 'policing-bias-visualizations',
    title: 'Policing Research Bias Detection',
    description: 'Created 10+ interactive visualizations and dashboards with Plotly to detect bias in 250+ policing research papers for academic research.',
    tags: ['Python', 'Plotly', 'Data Visualization', 'Research'],
    link: 'https://www.cambridge.org/core/journals/law-and-society-review/article/academic-copaganda/1D096FAF1C38403739FCBB8D482FE24A',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
  },
];
