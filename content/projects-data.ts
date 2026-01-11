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
    github: 'https://github.com/FedericoDM',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=450&fit=crop',
  },
  {
    slug: 'water-compliance-verification',
    title: 'Public Water Systems Compliance Verification',
    description: 'Implemented 10+ in-house algorithms to verify compliance of 350,000 Public Water Systems across the US for 45+ different pollutants.',
    tags: ['Python', 'Data Engineering', 'Public Health', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1583224964940-2c47f36a40e9?w=800&h=450&fit=crop',
  },
  {
    slug: 'fastapi-research-platform',
    title: 'Interactive Laboratory Games Platform',
    description: 'Co-developed FastAPI web platform to play laboratory games and inform research on children decision-making behavior.',
    tags: ['Python', 'FastAPI', 'Research', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=450&fit=crop',
  },
  {
    slug: 'policing-bias-visualizations',
    title: 'Policing Research Bias Detection',
    description: 'Created 10+ interactive visualizations and dashboards with Plotly to detect bias in 250+ policing research papers for academic research.',
    tags: ['Python', 'Plotly', 'Data Visualization', 'Research'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
  },
  {
    slug: 'climate-data-platform',
    title: 'Long Beach Climate Data Platform',
    description: 'Built a Python data platform allowing City of Long Beach Climate Office to download data from 2010-2023, improving access and saving hundreds of work hours annually.',
    tags: ['Python', 'Data Engineering', 'Climate', 'Civic Tech'],
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=450&fit=crop',
  },
  {
    slug: 'social-media-analytics',
    title: 'Social Media Analytics Alert System',
    description: 'Led automatic alert system project to help 20+ clients improve customer relationships via social media analytics and real-time monitoring.',
    tags: ['Python', 'NLP', 'Social Media', 'AWS'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
  },
  {
    slug: 'serverless-pricing-architecture',
    title: 'Serverless Pricing Data Collection',
    description: 'Created serverless computing architecture to collect data of over 250,000 commercial goods for strategic pricing analysis.',
    tags: ['Python', 'AWS Lambda', 'Serverless', 'Web Scraping'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
  },
  {
    slug: 'ml-loan-recommender',
    title: 'ML Loan Recommendation System',
    description: 'Developed machine learning recommender system to offer customized loans to over 500,000 borrowers, improving conversion rates.',
    tags: ['Python', 'ML', 'scikit-learn', 'Recommendation Systems'],
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=450&fit=crop',
  },
  {
    slug: 'sports-betting-webscraping',
    title: 'Sports Betting Odds Scraper',
    description: 'Engineered serverless computing architecture to scrape odds of 3,000+ daily sport matches for maximum profit gain analysis.',
    tags: ['Python', 'AWS Lambda', 'Selenium', 'Web Scraping'],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=450&fit=crop',
  },
  {
    slug: 'automated-trading-platform',
    title: 'Automated Trading Platform',
    description: 'Designed EC2 architecture and Python code to auto-trade over 10+ portfolios through Interactive Brokers with daily stock price ingestion.',
    tags: ['Python', 'AWS EC2', 'Trading', 'Automation'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop',
  },
];
