import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date string, e.g. "2026-09-09". */
  date: string;
  tags: string[];
  draft: boolean;
  body: string;
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * YAML parses an unquoted `date: 2026-09-09` into a Date, while a quoted one
 * stays a string. Normalize both to `YYYY-MM-DD` so frontmatter can be written
 * either way.
 */
function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value ? String(value) : '';
}

function readPost(filename: string): Post {
  const source = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
  const { data, content } = matter(source);

  return {
    slug: filename.replace(/\.mdx?$/, ''),
    title: String(data.title ?? 'Untitled'),
    description: String(data.description ?? ''),
    date: toISODate(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    body: content,
  };
}

/**
 * Every post on disk, drafts included. Static export needs at least one param
 * per dynamic route, so drafts are still built as pages — they're just kept out
 * of `getPosts()`, which means nothing links to them and they carry a visible
 * DRAFT badge. Unlisted, not published.
 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((filename) => /\.mdx?$/.test(filename))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Published posts, for anything reader-facing. Drafts surface only in `next dev`. */
export function getPosts(): Post[] {
  const showDrafts = process.env.NODE_ENV === 'development';
  return getAllPosts().filter((post) => showDrafts || !post.draft);
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatDate(date: string): string {
  if (!date) return '';
  // Parsed as UTC so the rendered day doesn't shift under the build machine's timezone.
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
