import Link from 'next/link';
import type { Project } from '@/content/projects-data';

export function ProjectCard({ project }: { project: Project }) {
  const href = project.link || project.github || '#';
  const isExternal = project.link || project.github;

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group block p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <svg
            className="w-5 h-5 text-zinc-400 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
