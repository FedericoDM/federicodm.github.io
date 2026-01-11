import Link from 'next/link';
import { projects } from '@/content/projects-data';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillIcon } from '@/components/SkillIcon';


export default function HomePage() {
return (
<div className="space-y-24">
{/* Hero Section */}
<section id="home" className="space-y-6">
<h1 className="text-3xl md:text-4xl font-normal text-zinc-100">
Federico Dominguez Molina
</h1>
<p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
Data Scientist building systems that transform data into actionable insights for social impact and business growth.
Currently working on environmental advocacy and public health at the <span className="text-zinc-100">Energy & Environment Lab</span>.
</p>
<div className="flex gap-6 text-sm">
<a href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">Projects</a>
<a href="#experience" className="text-zinc-400 hover:text-zinc-100 transition-colors">Experience</a>
<a href="#contact" className="text-zinc-400 hover:text-zinc-100 transition-colors">Contact</a>
</div>
</section>

{/* About Section */}
<section id="about" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">About</h2>
<div className="space-y-6 max-w-2xl">
<p className="text-zinc-400 leading-relaxed">
I hold an M.S. in Computational Analysis and Public Policy from the University of Chicago
and a B.A. in Economics (Honors) from ITAM in Mexico. My work combines technical expertise
with a passion for using data science to solve real-world problems—from environmental advocacy
to public health compliance and business intelligence.
</p>
</div>
</section>

{/* Experience Section */}
<section id="experience" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">Experience</h2>
<div className="relative space-y-8 max-w-2xl">
{/* Timeline line */}
<div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800 hidden sm:block" />

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary hidden sm:block" style={{marginLeft: '-4.5px'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Data Scientist</h3>
<p className="text-sm text-zinc-500">Energy & Environment Lab</p>
</div>
<span className="text-sm text-zinc-600">June 2024 - Present</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500">
<li>• Pioneered global alert system targeting air pollution advocates across 30+ cities using NLP, graph analysis, and real-time data</li>
<li>• Implemented 10+ algorithms to verify compliance of 350,000 US Public Water Systems for 45+ pollutants</li>
</ul>
</div>

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-zinc-700 hidden sm:block" style={{marginLeft: '-4.5px'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Senior Data Scientist</h3>
<p className="text-sm text-zinc-500">deep_dive</p>
</div>
<span className="text-sm text-zinc-600">Oct 2021 - Oct 2023</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500">
<li>• Led automatic alert system for 20+ clients to improve customer relationships via social media analytics</li>
<li>• Built serverless architecture collecting data on 250,000+ commercial goods for strategic pricing</li>
<li>• Developed ML recommender system offering customized loans to 500,000+ borrowers</li>
</ul>
</div>

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-zinc-700 hidden sm:block" style={{marginLeft: '-4.5px'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Data Science Research Assistant</h3>
<p className="text-sm text-zinc-500">University of Chicago</p>
</div>
<span className="text-sm text-zinc-600">Feb 2023 - June 2024</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500">
<li>• Co-developed FastAPI web platform for laboratory games informing children's decision-making research</li>
<li>• Created 10+ interactive visualizations with Plotly to detect bias in 250+ policing research papers</li>
</ul>
</div>

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-zinc-700 hidden sm:block" style={{marginLeft: '-4.5px'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Data Engineering Fellow</h3>
<p className="text-sm text-zinc-500">Coding it Forward</p>
</div>
<span className="text-sm text-zinc-600">June 2023 - Aug 2023</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500">
<li>• Automated data collection & cleaning for six websites, reducing 10+ weekly hours of manual work</li>
<li>• Built Python data platform for Long Beach Climate Office accessing 2010-2023 data</li>
</ul>
</div>
</div>
</section>

{/* Projects Section */}
<section id="projects" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">Projects</h2>
<div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
{projects.map(p => <ProjectCard key={p.slug} project={p} />)}
</div>
</section>

{/* Skills Section */}
<section id="skills" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">Skills & Expertise</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
<SkillIcon name="Python" icon="python" />
<SkillIcon name="Machine Learning" icon="ml" />
<SkillIcon name="Data Analysis" icon="data" />
<SkillIcon name="Cloud (AWS)" icon="cloud" />
<SkillIcon name="Databases" icon="database" />
<SkillIcon name="Web APIs" icon="web" />
</div>
</section>

{/* Education Section */}
<section id="education" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">Education</h2>
<div className="space-y-6 max-w-2xl">
<div className="space-y-1">
<h3 className="font-normal text-zinc-100">M.S. in Computational Analysis and Public Policy</h3>
<p className="text-sm text-zinc-500">University of Chicago</p>
<p className="text-sm text-zinc-600">June 2024</p>
</div>
<div className="space-y-1">
<h3 className="font-normal text-zinc-100">B.A. in Economics, Honors</h3>
<p className="text-sm text-zinc-500">Instituto Tecnológico Autónomo de México (ITAM)</p>
<p className="text-sm text-zinc-600">June 2020</p>
</div>
</div>
</section>

{/* Publications Section */}
<section id="publications" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">Publications</h2>
<div className="max-w-2xl">
<a
href="https://www.cambridge.org/core/journals/law-and-society-review/article/academic-copaganda/1D096FAF1C38403739FCBB8D482FE24A"
target="_blank"
rel="noopener noreferrer"
className="group block"
>
<p className="text-zinc-400 group-hover:text-zinc-100 transition-colors">
<span className="font-normal text-zinc-100 group-hover:text-secondary">Academic Copaganda</span> (with Dr. Robert Vargas) • <span className="text-secondary">Law and Society Review →</span>
</p>
</a>
</div>
</section>

{/* Featured Section */}
<section id="featured" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">Featured</h2>
<div className="max-w-2xl space-y-4">
<a
href="https://blog.codingitforward.com/meet-the-2023-fellows-federico-dominguez-molina-a1bf4f5df171"
target="_blank"
rel="noopener noreferrer"
className="block group"
>
<p className="text-zinc-400 group-hover:text-zinc-100 transition-colors">
<span className="text-zinc-100">Featured Fellow</span> • Coding it Forward 2023 <span className="text-secondary">→</span>
</p>
</a>
<a
href="https://harris.uchicago.edu/news-events/news/student-profile-federico-dominguez-mscapp-class-2024"
target="_blank"
rel="noopener noreferrer"
className="block group"
>
<p className="text-zinc-400 group-hover:text-zinc-100 transition-colors">
<span className="text-zinc-100">Student Profile</span> • The Harris School of Public Policy <span className="text-secondary">→</span>
</p>
</a>
</div>
</section>

{/* Contact Section */}
<section id="contact" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">Contact</h2>
<div className="max-w-2xl space-y-6">
<p className="text-zinc-400 leading-relaxed">
I'm always interested in discussing data science challenges, social impact projects,
or collaboration opportunities. Feel free to reach out.
</p>
<div className="flex flex-wrap gap-6 text-sm">
<a
href="mailto:fd.molina@outlook.com"
className="text-zinc-400 hover:text-zinc-100 transition-colors"
>
Email
</a>
<a
href="https://github.com/FedericoDM"
target="_blank"
rel="noopener noreferrer"
className="text-zinc-400 hover:text-zinc-100 transition-colors"
>
GitHub
</a>
<a
href="https://linkedin.com/in/federico-dominguez-molina"
target="_blank"
rel="noopener noreferrer"
className="text-zinc-400 hover:text-zinc-100 transition-colors"
>
LinkedIn
</a>
<a
href="/Resume_FedericoDominguezMolina.pdf"
target="_blank"
rel="noopener noreferrer"
className="text-secondary hover:text-secondary-light transition-colors font-medium"
>
Download Resume
</a>
</div>
</div>
</section>
</div>
);
}
