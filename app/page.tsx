import Link from 'next/link';
import { projects } from '@/content/projects-data';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillCard } from '@/components/SkillCard';


export default function HomePage() {
return (
<div className="space-y-24">
{/* Hero Section */}
<section id="home" className="space-y-6">
<h1 className="text-3xl md:text-4xl font-normal text-zinc-100">
Federico Dominguez Molina
</h1>
<div className="flex flex-wrap gap-3">
<a
href="mailto:fd.molina@outlook.com"
className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors text-sm"
>
Email
</a>
<a
href="https://github.com/FedericoDM"
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors text-sm"
>
GitHub
</a>
<a
href="https://linkedin.com/in/federico-dominguez-molina"
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors text-sm"
>
LinkedIn
</a>
<a
href="/Resume_FedericoDominguezMolina.pdf"
target="_blank"
rel="noopener noreferrer"
className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors text-sm"
>
Resume
</a>
</div>
<p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
Data Scientist and Engineer @ <span className="text-zinc-100">Energy & Environment Lab</span>
</p>
</section>

{/* About Section */}
<section id="about" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">About</h2>
<div className="p-8 rounded-lg border border-zinc-800 bg-zinc-900/50 max-w-3xl">
<p className="text-base text-zinc-300 leading-relaxed mb-6">
Data Scientist building systems that transform data into actionable insights for social impact and business growth.
Currently working on environmental advocacy and public health at the Energy & Environment Lab.
</p>
<p className="text-zinc-400 leading-relaxed">
I hold an M.S. in Computational Analysis and Public Policy (MSCAPP) from the University of Chicago
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
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary hidden sm:block" style={{marginLeft: '-4.5px'}} />
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
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary hidden sm:block" style={{marginLeft: '-4.5px'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Junior Data Scientist</h3>
<p className="text-sm text-zinc-500">deep_dive</p>
</div>
<span className="text-sm text-zinc-600">June 2020 - Oct 2021</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500">
<li>• Extracted and parsed data from key Mexican governmental sources for strategic analysis</li>
<li>• Implemented dynamic Power BI dashboard to monitor government projects and infrastructure</li>
<li>• Devised supervised ML models achieving top inflation forecaster status in Mexico</li>
</ul>
</div>

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary hidden sm:block" style={{marginLeft: '-4.5px'}} />
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
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary hidden sm:block" style={{marginLeft: '-4.5px'}} />
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
<h2 className="text-2xl font-normal text-zinc-100">Highlighted Projects</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
{projects.map(p => <ProjectCard key={p.slug} project={p} />)}
</div>
</section>

{/* Skills Section */}
<section id="skills" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">Skills & Expertise</h2>
<div className="grid md:grid-cols-2 gap-6">
<SkillCard
title="Python"
icon={
<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
<path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
</svg>
}
skills={['pandas', 'numpy', 'scikit-learn', 'pytorch', 'transformers', 'fastapi', 'flask', 'selenium', 'requests', 'boto3', 'pyspark', 'sqlalchemy', 'streamlit', 'plotly', 'seaborn']}
/>
<SkillCard
title="Machine Learning"
icon={
<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
</svg>
}
skills={['scikit-learn', 'xgboost', 'pytorch', 'tensorflow', 'statsmodels', 'regression', 'classification', 'neural networks', 'forecasting', 'recommendation systems']}
/>
<SkillCard
title="NLP & AI"
icon={
<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
</svg>
}
skills={['transformers', 'BERT', 'GPT', 'spaCy', 'NLTK', 'sentiment analysis', 'text classification', 'regex', 'entity recognition']}
/>
<SkillCard
title="Cloud & DevOps"
icon={
<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
}
skills={['AWS Lambda', 'EC2', 'Neptune', 'S3', 'IAM', 'SQS', 'SNS', 'Route53', 'Databricks', 'Docker', 'serverless']}
/>
</div>
</section>

{/* Education Section */}
<section id="education" className="space-y-8">
<h2 className="text-2xl font-normal text-zinc-100">Education</h2>
<div className="space-y-6 max-w-2xl">
<div className="space-y-1">
<h3 className="font-normal text-zinc-100">M.S. in Computational Analysis and Public Policy (MSCAPP)</h3>
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
