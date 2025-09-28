import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
title: "Federico Dominguez Molina — Portfolio",
description: "Data Engineering & Data Science projects, writing, and contact.",
openGraph: {
title: "Federico Dominguez Molina — Portfolio",
description: "Data Engineering & Data Science projects, writing, and contact.",
images: ['/og.png']
},
metadataBase: new URL('https://your-domain.tld')
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
    <html lang="en" className="scroll-smooth">
    <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
    <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 z-50">
    <nav className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
    <Link href="/" className="font-semibold">Fede</Link>
    <div className="flex items-center gap-4 text-sm">
    <Link href="/projects">Projects</Link>
    <Link href="/writing">Writing</Link>
    <Link href="/about">About</Link>
    <a href="mailto:you@example.com" className="px-3 py-1 rounded-xl bg-accent text-white">Contact</a>
    </div>
    </nav>
    </header>
    <main className="mx-auto max-w-4xl px-4 py-10">{children}</main>
    <footer className="mx-auto max-w-4xl px-4 py-10 text-sm text-zinc-500">© {new Date().getFullYear()} Federico D.</footer>
    </body>
    </html>
);
}