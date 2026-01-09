import { projects } from '@/content/projects-data';
import { ProjectCard } from '@/components/ProjectCard';


export default function ProjectsPage() {
return (
<div className="space-y-6">
<h1 className="text-3xl font-bold">Projects</h1>
<p className="text-zinc-600 dark:text-zinc-400">A selection of things I’ve built and shipped.</p>
<div className="grid sm:grid-cols-2 gap-6">
{projects.map(p => <ProjectCard key={p.slug} project={p} />)}
</div>
</div>
);
}