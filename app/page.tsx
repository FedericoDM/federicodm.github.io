import Link from 'next/link';
import { projects } from '@/content/projects-data';
import { ProjectCard } from '@/components/ProjectCard';


export default function HomePage() {
return (
<div className="space-y-10">
<section className="flex flex-col gap-6">
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Data Engineer & Data Scientist</h1>
<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
I build reliable data systems and clear insights. I enjoy pipelines, performance, and ML that ships.
</p>
<div className="flex gap-3">
<Link href="/projects" className="px-4 py-2 rounded-xl bg-accent text-white">See Projects</Link>
<Link href="/writing" className="px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700">Read Writing</Link>
</div>
</section>


<section className="space-y-4">
<h2 className="text-2xl font-semibold">Featured Projects</h2>
<div className="grid sm:grid-cols-2 gap-6">
{projects.slice(0, 4).map(p => <ProjectCard key={p.slug} project={p} />)}
</div>
</section>
</div>
);
}