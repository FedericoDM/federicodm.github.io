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
    slug: 'data-pipeline',
    title: 'Real-Time Data Pipeline',
    description: 'Built a scalable ETL pipeline processing 100M+ events daily using Apache Kafka and Spark.',
    tags: ['Python', 'Spark', 'Kafka', 'AWS'],
    github: 'https://github.com/yourusername/data-pipeline',
  },
  {
    slug: 'ml-recommender',
    title: 'ML Recommendation Engine',
    description: 'Collaborative filtering system improving user engagement by 35% using PyTorch and FastAPI.',
    tags: ['Python', 'PyTorch', 'FastAPI', 'Redis'],
    link: 'https://example.com',
  },
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard for business intelligence with real-time metrics and custom visualizations.',
    tags: ['Python', 'Plotly', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/yourusername/analytics-dashboard',
  },
  {
    slug: 'nlp-classifier',
    title: 'Text Classification Model',
    description: 'Fine-tuned BERT model for multi-label classification achieving 92% F1 score on production data.',
    tags: ['Python', 'Transformers', 'scikit-learn', 'MLflow'],
    github: 'https://github.com/yourusername/nlp-classifier',
  },
];
