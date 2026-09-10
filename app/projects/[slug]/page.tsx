import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/content/projects-data';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Federico Dominguez Molina`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
  };
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100"
    >
      {children}
      <span aria-hidden="true" className="font-mono text-xs">
        ↗
      </span>
    </a>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-mono text-xs uppercase tracking-widest text-secondary">{title}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-zinc-400">
          <span aria-hidden="true" className="flex-shrink-0 font-mono text-secondary">
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((entry) => entry.slug === project.slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="space-y-12">
      <div className="space-y-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-100"
        >
          <span aria-hidden="true">←</span> All projects
        </Link>

        <div className="space-y-4">
          {(project.org || project.period) && (
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              {[project.org, project.period].filter(Boolean).join(' · ')}
            </p>
          )}
          <h1 className="max-w-3xl text-3xl font-normal leading-tight tracking-tight text-zinc-100 md:text-4xl">
            {project.title}
          </h1>
          <div className="h-px w-11 bg-secondary" />
        </div>

        {(project.link || project.github) && (
          <div className="flex flex-wrap gap-3">
            {project.link && <ExternalLink href={project.link}>View project</ExternalLink>}
            {project.github && <ExternalLink href={project.github}>Source</ExternalLink>}
          </div>
        )}
      </div>

      {project.image && (
        <div className="aspect-video w-full max-w-3xl overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
          {/* Decorative: the case study below carries the actual content */}
          <img src={project.image} alt="" className="h-full w-full object-cover" />
        </div>
      )}

      <div className="max-w-2xl space-y-10">
        <p className="text-lg leading-relaxed text-zinc-300">{project.description}</p>

        {project.context && (
          <Section title="Context">
            <p className="leading-relaxed text-zinc-400">{project.context}</p>
          </Section>
        )}

        {project.approach && (
          <Section title="Approach">
            <Bullets items={project.approach} />
          </Section>
        )}

        {project.outcome && (
          <Section title="Outcome">
            <Bullets items={project.outcome} />
          </Section>
        )}

        <Section title="Stack">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-sm font-medium text-secondary">
                {tag}
              </span>
            ))}
          </div>
        </Section>
      </div>

      <nav className="grid gap-4 border-t border-zinc-800 pt-8 sm:grid-cols-2">
        {previous ? (
          <Link href={`/projects/${previous.slug}`} className="group space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">
              ← Previous
            </span>
            <p className="text-zinc-400 transition-colors group-hover:text-zinc-100">
              {previous.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/projects/${next.slug}`} className="group space-y-1 sm:text-right">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">
              Next →
            </span>
            <p className="text-zinc-400 transition-colors group-hover:text-zinc-100">
              {next.title}
            </p>
          </Link>
        )}
      </nav>
    </article>
  );
}
