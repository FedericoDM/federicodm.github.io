import Link from 'next/link';
import type { Project } from '@/content/projects-data';

// Deterministic gradient per project so imageless cards look intentional
function slugGradient(slug: string): React.CSSProperties {
  let hash = 0;
  for (const char of slug) hash = (hash * 31 + char.charCodeAt(0)) % 360;
  return {
    background: `linear-gradient(135deg, hsl(${hash}, 35%, 14%) 0%, hsl(${(hash + 45) % 360}, 40%, 22%) 100%)`,
  };
}

function initials(title: string): string {
  return title
    .split(' ')
    .filter((word) => /^[A-Z]/.test(word))
    .slice(0, 3)
    .map((word) => word[0])
    .join('');
}

export function ProjectCard({ project }: { project: Project }) {
  const href = project.link || project.github;
  const isExternal = !!href;

  const content = (
    <>
      {/* Project Image */}
      <div className="relative w-full aspect-video mb-4 bg-zinc-900 rounded-lg overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={slugGradient(project.slug)}
          >
            <span className="font-mono text-2xl tracking-widest text-zinc-500">
              {initials(project.title)}
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-normal text-zinc-100 group-hover:text-secondary transition-colors">
            {project.title}
          </h3>
          {isExternal && (
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
          )}
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
    </>
  );

  const cardClasses =
    'group block h-full p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0';

  if (isExternal) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}