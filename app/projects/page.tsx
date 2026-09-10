import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/content/projects-data';
import { ProjectCard } from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects — Federico Dominguez Molina',
  description:
    'Selected work in AI agents, LLM systems, machine learning, and data engineering — across social impact research, civic technology, and finance.',
  openGraph: {
    title: 'Projects — Federico Dominguez Molina',
    description:
      'Selected work in AI agents, LLM systems, machine learning, and data engineering.',
  },
};

export default function ProjectsPage() {
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
          <p className="font-mono text-xs uppercase tracking-widest text-secondary">
            Selected Work
          </p>
          <h1 className="text-3xl font-normal tracking-tight text-zinc-100">Projects</h1>
          <div className="h-px w-11 bg-secondary" />
        </div>

        <p className="max-w-2xl leading-relaxed text-zinc-400">
          Systems I&apos;ve built across research, government, and industry — from satellite-driven
          pollution alerts inside a World Bank and NASA-backed trial to LLM agents and recommender
          systems serving hundreds of thousands of people.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
