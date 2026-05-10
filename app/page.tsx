import Link from 'next/link';
import { projects } from '@/content/projects-data';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillCard } from '@/components/SkillCard';


export default function HomePage() {
return (
<div className="space-y-24">
{/* Hero Section */}
<section id="home" className="space-y-6">
<div className="flex items-center gap-6">
  <img
    src="/FedericoDominguezMolina_Headshot.jpg"
    alt="Federico Dominguez Molina"
    className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 ring-1 ring-zinc-700"
  />
  <h1 className="text-3xl md:text-4xl font-normal text-zinc-100">
    Federico Dominguez Molina
  </h1>
</div>
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
Data Scientist & ML Engineer building <span className="text-zinc-100">LLM systems for social impact</span>
</p>
</section>

{/* About Section */}
<section id="about" className="space-y-8">
  <div className="space-y-3">
    <p className="text-xs font-mono uppercase tracking-widest text-secondary">About Me</p>
    <h2 className="text-2xl font-normal text-zinc-100">About</h2>
    <div className="w-11 h-px bg-secondary" />
  </div>
  <div className="p-8 rounded-lg border border-zinc-800 bg-zinc-900/50 max-w-3xl space-y-6">
    <p className="text-base text-zinc-300 leading-relaxed">
      I'm a data scientist passionate about turning messy, real-world data into
      insights that drive decisions—especially when those decisions improve outcomes
      for underrepresented communities.
    </p>
    <p className="text-zinc-400 leading-relaxed">
      Over the past five+ years I've built end-to-end pipelines for everything from
      satellite-driven pollution alerts (in a World Bank– and NASA-backed RCT) to
      LLM-powered classification systems, an ML recommender serving 500,000+
      borrowers, and an AI agent that analyzes investment portfolios against
      macroeconomic regimes. I work primarily in <span className="text-zinc-100">Python</span> and
      <span className="text-zinc-100"> AWS</span>, and I'm happiest at the intersection of ML/AI engineering and social impact.
    </p>
    <p className="text-zinc-400 leading-relaxed">
      I hold an M.S. in Computational Analysis and Public Policy from the University
      of Chicago and a B.A. in Economics (Honors) from ITAM in Mexico City.
    </p>
  </div>
</section>

{/* Experience Section */}
<section id="experience" className="space-y-8">
<div className="space-y-3">
  <p className="text-xs font-mono uppercase tracking-widest text-secondary">Work History</p>
  <h2 className="text-2xl font-normal text-zinc-100">Experience</h2>
  <div className="w-11 h-px bg-secondary" />
</div>
<div className="relative space-y-8 max-w-2xl">
{/* Timeline line */}
<div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800 hidden sm:block" />

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary hidden sm:block" style={{marginLeft: '-4.5px', boxShadow: '0 0 8px rgba(59,130,246,0.6)'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Data Scientist</h3>
<p className="text-sm text-zinc-500">Energy & Environment Lab</p>
</div>
<span className="text-sm text-zinc-600">June 2024 - Present</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500 list-none">
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Implemented multi-platform content dissemination pipelines (YouTube, WhatsApp) within a World Bank & NASA-backed randomized controlled trial</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Architected a global alert system to track and notify on air pollution events using NLP and graph analysis, reaching over 200,000 impressions in three months</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Designed a social-media scraper extracting ~11 million daily posts, delivering $50,000 in monthly cost savings</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Led LLM classification improvement from 65% → 87% accuracy via prompt engineering — built annotated datasets and iterative evaluation loops for systematic prompt adjustment</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Built BigQuery ETL pipeline on GCP to process GDELT data across 800 African cities</span></li>
</ul>
</div>

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-zinc-800 border border-secondary hidden sm:block" style={{marginLeft: '-4.5px'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Data Science Research Assistant</h3>
<p className="text-sm text-zinc-500">University of Chicago</p>
</div>
<span className="text-sm text-zinc-600">Feb 2023 - June 2024</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500 list-none">
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Co-developed FastAPI web platform for behavioral research games studying children's decision-making</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Created 10+ interactive visualizations with Plotly to detect bias in 250+ policing research papers</span></li>
</ul>
</div>

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-zinc-800 border border-secondary hidden sm:block" style={{marginLeft: '-4.5px'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Data Engineering Fellow</h3>
<p className="text-sm text-zinc-500">Coding it Forward</p>
</div>
<span className="text-sm text-zinc-600">June 2023 - Aug 2023</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500 list-none">
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Automated data collection & cleaning for six websites, reducing 10+ weekly hours of manual work</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Built Python data platform for Long Beach Climate Office accessing 2010-2023 data</span></li>
</ul>
</div>

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-zinc-800 border border-secondary hidden sm:block" style={{marginLeft: '-4.5px'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Senior Data Scientist</h3>
<p className="text-sm text-zinc-500">deep_dive</p>
</div>
<span className="text-sm text-zinc-600">Oct 2021 - Oct 2023</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500 list-none">
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Led automatic alert system for 20+ clients to improve customer relationships via social media analytics</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Built serverless architecture collecting data on 250,000+ commercial goods for strategic pricing</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Developed ML recommender system offering customized loans to 500,000+ borrowers</span></li>
</ul>
</div>

<div className="relative space-y-3 sm:pl-8">
<div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-zinc-800 border border-secondary hidden sm:block" style={{marginLeft: '-4.5px'}} />
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
<div>
<h3 className="font-normal text-zinc-100">Junior Data Scientist</h3>
<p className="text-sm text-zinc-500">deep_dive</p>
</div>
<span className="text-sm text-zinc-600">June 2020 - Oct 2021</span>
</div>
<ul className="space-y-2 text-sm text-zinc-500 list-none">
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Extracted and parsed data from key Mexican governmental sources to support decision-making for 10+ clients</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Implemented dynamic Power BI dashboard to monitor government projects and infrastructure, proactively flagging 50+ potential risks</span></li>
<li className="flex gap-2"><span className="text-secondary flex-shrink-0 font-mono">→</span><span>Devised supervised ML models achieving top inflation forecaster status in Mexico with an RMSE of 2%</span></li>
</ul>
</div>
</div>
</section>

{/* Projects Section */}
<section id="projects" className="space-y-8">
<div className="space-y-3">
  <p className="text-xs font-mono uppercase tracking-widest text-secondary">Selected Work</p>
  <h2 className="text-2xl font-normal text-zinc-100">Highlighted Projects</h2>
  <div className="w-11 h-px bg-secondary" />
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
{projects.map(p => <ProjectCard key={p.slug} project={p} />)}
</div>
</section>

{/* Skills Section */}
<section id="skills" className="space-y-8">
<div className="space-y-3">
  <p className="text-xs font-mono uppercase tracking-widest text-secondary">Technical Stack</p>
  <h2 className="text-2xl font-normal text-zinc-100">Skills & Expertise</h2>
  <div className="w-11 h-px bg-secondary" />
</div>
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
skills={['scikit-learn', 'xgboost', 'pytorch', 'statsmodels', 'regression', 'classification', 'clustering', 'neural networks', 'forecasting', 'recommendation systems']}
/>
<SkillCard
title="NLP & AI"
icon={
<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
</svg>
}
skills={['transformers', 'BERT', 'GPT', 'spaCy', 'NLTK', 'sentiment analysis', 'text classification', 'regex', 'entity recognition', 'finetuning']}
/>
<SkillCard
title="Cloud & DevOps"
icon={
<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
}
skills={['AWS Lambda', 'EC2', 'Neptune', 'RDS', 'DynamoDB', 'S3', 'IAM', 'SQS', 'SNS', 'Route53', 'Databricks', 'Docker', 'serverless']}
/>
<SkillCard
title="LLMs & AI Agents"
icon={
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  }
skills={['Claude API', 'Prompt Engineering', 'Function Calling', 'Tool Use', 'AI Agents', 'Finetuning', 'HuggingFace', 'transformers', 'pytorch', 'Flan-T5']}
/>
</div>
</section>

{/* Education Section */}
<section id="education" className="space-y-8">
<div className="space-y-3">
  <p className="text-xs font-mono uppercase tracking-widest text-secondary">Background</p>
  <h2 className="text-2xl font-normal text-zinc-100">Education</h2>
  <div className="w-11 h-px bg-secondary" />
</div>
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
<div className="space-y-3">
  <p className="text-xs font-mono uppercase tracking-widest text-secondary">Research</p>
  <h2 className="text-2xl font-normal text-zinc-100">Publications</h2>
  <div className="w-11 h-px bg-secondary" />
</div>
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
<div className="space-y-3">
  <p className="text-xs font-mono uppercase tracking-widest text-secondary">In the Press</p>
  <h2 className="text-2xl font-normal text-zinc-100">Featured</h2>
  <div className="w-11 h-px bg-secondary" />
</div>
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
<div className="space-y-3">
  <p className="text-xs font-mono uppercase tracking-widest text-secondary">Get in Touch</p>
  <h2 className="text-2xl font-normal text-zinc-100">Contact</h2>
  <div className="w-11 h-px bg-secondary" />
</div>
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