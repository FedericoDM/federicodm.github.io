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
      className="group block space-y-3"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-normal text-zinc-100 group-hover:text-zinc-400 transition-colors">
          {project.title}
        </h3>
        <svg
          className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 flex-shrink-0 transition-colors"
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

      <p className="text-sm text-zinc-500 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
