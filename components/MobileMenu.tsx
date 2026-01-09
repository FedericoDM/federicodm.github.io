'use client';

import Link from 'next/link';
import { useState } from 'react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-zinc-700 dark:text-zinc-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-lg">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/writing"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Writing
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              About
            </Link>
            <a
              href="mailto:you@example.com"
              className="px-4 py-2 rounded-xl bg-accent text-white text-center hover:bg-accent-dark transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
