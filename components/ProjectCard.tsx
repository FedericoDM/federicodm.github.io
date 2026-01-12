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
      className="group block"
    >
      {/* Project Image */}
      <div className="relative w-full aspect-video mb-4 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-zinc-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-normal text-zinc-100 group-hover:text-secondary transition-colors">
            {project.title}
          </h3>
          <svg
            className="w-4 h-4 text-zinc-600 group-hover:text-secondary flex-shrink-0 transition-colors"
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

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-secondary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
