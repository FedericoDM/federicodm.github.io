import Link from 'next/link';

type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
};

const articles: Article[] = [
  {
    slug: 'building-scalable-data-pipelines',
    title: 'Building Scalable Data Pipelines with Apache Spark',
    description: 'Lessons learned from processing billions of events daily in production.',
    date: '2024-03-15',
    readTime: '8 min read',
  },
  {
    slug: 'ml-production-best-practices',
    title: 'ML in Production: Best Practices',
    description: 'A practical guide to deploying and monitoring machine learning models at scale.',
    date: '2024-02-20',
    readTime: '12 min read',
  },
  {
    slug: 'data-quality-monitoring',
    title: 'Data Quality Monitoring at Scale',
    description: 'Implementing automated data validation and alerting systems.',
    date: '2024-01-10',
    readTime: '6 min read',
  },
];

export default function WritingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Writing</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Thoughts on data engineering, machine learning, and building reliable systems.
        </p>
      </div>

      <div className="space-y-6">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="group block p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10"
          >
            <Link href={`/writing/${article.slug}`} className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <svg
                  className="w-5 h-5 text-zinc-400 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {article.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-zinc-500">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <p className="text-zinc-600 dark:text-zinc-400 text-center">
          More articles coming soon. Subscribe to my newsletter or follow me on social media for updates.
        </p>
      </div>
    </div>
  );
}
