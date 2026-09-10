import type { Metadata } from 'next';
import Link from 'next/link';
import { formatDate, getPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Federico Dominguez Molina',
  description:
    'Notes on LLM systems, agentic workflows, and building data pipelines that survive contact with real data.',
  openGraph: {
    title: 'Blog — Federico Dominguez Molina',
    description: 'Notes on LLM systems, agentic workflows, and data engineering.',
  },
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-100"
        >
          <span aria-hidden="true">←</span> Home
        </Link>

        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-secondary">Writing</p>
          <h1 className="text-3xl font-normal tracking-tight text-zinc-100">Blog</h1>
          <div className="h-px w-11 bg-secondary" />
        </div>

        <p className="max-w-2xl leading-relaxed text-zinc-400">
          Notes on LLM systems, agentic workflows, and what it actually takes to make data
          pipelines hold up in production.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 text-zinc-500">
          First post in progress — check back soon.
        </p>
      ) : (
        <ul className="divide-y divide-zinc-800 border-t border-zinc-800">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block space-y-2 py-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <time
                    dateTime={post.date}
                    className="font-mono text-xs uppercase tracking-widest text-zinc-600"
                  >
                    {formatDate(post.date)}
                  </time>
                  {post.draft && (
                    <span className="rounded border border-zinc-700 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      Draft
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-normal text-zinc-100 transition-colors group-hover:text-secondary">
                  {post.title}
                </h2>
                <p className="max-w-2xl leading-relaxed text-zinc-500">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
