import { projects } from '@/content/projects-data';
import { ProjectCard } from '@/components/ProjectCard';


export default function ProjectsPage() {
return (
<div className="space-y-12">
<div className="space-y-4">
<h1 className="text-3xl font-normal text-zinc-100">Projects</h1>
<p className="text-zinc-400">A selection of things I've built and shipped.</p>
</div>
<div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
{projects.map(p => <ProjectCard key={p.slug} project={p} />)}
</div>
</div>
);
}
