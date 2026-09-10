'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Hash links are written absolute (`/#about`) so they still resolve from
 * `/projects/...` and `/blog/...`, where there is no such section to scroll to.
 */
export const navLinks = [
  { href: '/#about', label: 'About', section: 'about' },
  { href: '/#experience', label: 'Experience', section: 'experience' },
  { href: '/projects', label: 'Projects', route: '/projects' },
  // Add once the first post is published:
  // { href: '/blog', label: 'Blog', route: '/blog' },
  { href: '/#contact', label: 'Contact', section: 'contact' },
];

export function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // Only the band near the top of the viewport counts as "current"
      { rootMargin: '-15% 0px -75% 0px' }
    );

    navLinks.forEach(({ section }) => {
      if (!section) return;
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

/** A route link owns the whole subtree; a section link only counts on the home page. */
export function useIsActive() {
  const pathname = usePathname();
  const activeSection = useActiveSection();

  return (link: (typeof navLinks)[number]) => {
    if (link.route) return pathname.startsWith(link.route);
    return pathname === '/' && activeSection === link.section;
  };
}

export function NavLinks() {
  const isActive = useIsActive();

  return (
    <div className="hidden sm:flex items-center gap-8 text-sm">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`relative transition-colors ${
            isActive(link) ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          {link.label}
          <span
            className={`absolute -bottom-1.5 left-0 h-px bg-secondary transition-all duration-300 ${
              isActive(link) ? 'w-full' : 'w-0'
            }`}
          />
        </Link>
      ))}
    </div>
  );
}
