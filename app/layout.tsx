import './globals.css';
import type { Metadata } from 'next';
import { MobileMenu } from '@/components/MobileMenu';


export const metadata: Metadata = {
title: "Federico Dominguez Molina — Data Scientist & Engineer",
description: "Data Scientist & Engineer building agentic pipelines, LLM systems, and data automation for social impact and business. M.S. in Computational Analysis from UChicago.",
icons: {
  icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230a0a0a'/%3E%3Ctext x='16' y='22' font-family='monospace' font-size='11' font-weight='600' fill='%233b82f6' text-anchor='middle'%3EFDM%3C/text%3E%3C/svg%3E",
},
openGraph: {
title: "Federico Dominguez Molina — Data Scientist & Engineer",
description: "Data Scientist & Engineer building agentic pipelines, LLM systems, and data automation for social impact and business.",
images: ['/og.png']
},
metadataBase: new URL('https://federicodm.github.io')
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
    <html lang="en" className="scroll-smooth">
    <body className="bg-[#0a0a0a] text-zinc-100">
    <header className="border-b border-zinc-800">
    <nav className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
    <a href="#home" className="text-lg font-medium text-secondary hover:text-secondary-light transition-colors">FDM</a>
    <div className="hidden sm:flex items-center gap-8 text-sm">
    <a href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors">About</a>
    <a href="#experience" className="text-zinc-400 hover:text-zinc-100 transition-colors">Experience</a>
    <a href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">Projects</a>
    <a href="#contact" className="text-zinc-400 hover:text-zinc-100 transition-colors">Contact</a>
    </div>
    <MobileMenu />
    </nav>
    </header>
    <main className="mx-auto max-w-5xl px-6 py-16">{children}</main>
    <footer className="mx-auto max-w-5xl px-6 py-12 border-t border-zinc-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-zinc-600">
        <div>© {new Date().getFullYear()} Federico Dominguez Molina</div>
        <div className="flex gap-6">
          <a href="https://github.com/FedericoDM" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/federico-dominguez-molina" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
    </body>
    </html>
);
}