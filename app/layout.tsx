import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MobileMenu } from '@/components/MobileMenu';


export const metadata: Metadata = {
title: "Federico Dominguez Molina — Data Scientist",
description: "Data Scientist building systems that transform data into actionable insights for social impact and business growth. M.S. in Computational Analysis from UChicago.",
openGraph: {
title: "Federico Dominguez Molina — Data Scientist",
description: "Data Scientist building systems that transform data into actionable insights for social impact and business growth.",
images: ['/og.png']
},
metadataBase: new URL('https://federicodm.github.io')
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
    <html lang="en" className="scroll-smooth">
    <body className="bg-[#0a0a0a] text-zinc-100">
    <header className="border-b border-zinc-800">
    <nav className="mx-auto max-w-3xl px-6 py-6 flex items-center justify-between">
    <a href="#home" className="font-normal text-zinc-100 hover:text-zinc-400 transition-colors">Federico Dominguez</a>
    <div className="hidden sm:flex items-center gap-8 text-sm">
    <a href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors">About</a>
    <a href="#experience" className="text-zinc-400 hover:text-zinc-100 transition-colors">Experience</a>
    <a href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">Projects</a>
    <a href="#contact" className="text-zinc-400 hover:text-zinc-100 transition-colors">Contact</a>
    </div>
    <MobileMenu />
    </nav>
    </header>
    <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>
    <footer className="mx-auto max-w-3xl px-6 py-12 border-t border-zinc-800">
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
