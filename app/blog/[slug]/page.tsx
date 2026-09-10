import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { formatDate, getAllPosts, getPost } from '@/lib/blog';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — Federico Dominguez Molina`,
    description: post.description,
    // Drafts are built so the route exists, but should never be indexed.
    robots: post.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date || undefined,
    },
  };
}

/**
 * Explicit element styling rather than @tailwindcss/typography, which isn't a
 * dependency here — this keeps the post body on the same palette as the rest
 * of the site without adding one.
 */
const components = {
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="scroll-mt-24 pt-4 text-xl font-normal text-zinc-100" {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3 className="scroll-mt-24 pt-2 text-base font-medium text-zinc-100" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="leading-relaxed text-zinc-400" {...props} />
  ),
  a: (props: React.ComponentProps<'a'>) => (
    <a className="text-secondary underline underline-offset-4 hover:text-secondary-light" {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="list-disc space-y-2 pl-5 text-zinc-400 marker:text-zinc-600" {...props} />
  ),
  ol: (props: React.ComponentProps<'ol'>) => (
    <ol className="list-decimal space-y-2 pl-5 text-zinc-400 marker:text-zinc-600" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => <li className="leading-relaxed" {...props} />,
  strong: (props: React.ComponentProps<'strong'>) => (
    <strong className="font-medium text-zinc-100" {...props} />
  ),
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote className="border-l-2 border-secondary pl-4 italic text-zinc-400" {...props} />
  ),
  code: (props: React.ComponentProps<'code'>) => (
    <code
      className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-300"
      {...props}
    />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre
      className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900/70 p-4 font-mono text-sm text-zinc-300 [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
  hr: (props: React.ComponentProps<'hr'>) => (
    <hr className="border-zinc-800" {...props} />
  ),
};

export default function PostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="space-y-10">
      <div className="space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-100"
        >
          <span aria-hidden="true">←</span> All posts
        </Link>

        <div className="space-y-4">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <time
              dateTime={post.date}
              className="font-mono text-xs uppercase tracking-widest text-zinc-500"
            >
              {formatDate(post.date)}
            </time>
            {post.draft && (
              <span className="rounded border border-zinc-700 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                Draft
              </span>
            )}
          </div>
          <h1 className="max-w-3xl text-3xl font-normal leading-tight tracking-tight text-zinc-100 md:text-4xl">
            {post.title}
          </h1>
          <div className="h-px w-11 bg-secondary" />
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-sm font-medium text-secondary">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-2xl space-y-6">
        <MDXRemote
          source={post.body}
          components={components}
          options={{
            mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] },
          }}
        />
      </div>
    </article>
  );
}
