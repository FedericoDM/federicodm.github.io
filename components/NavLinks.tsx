'use client';

import { useEffect, useState } from 'react';

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
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

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

export function NavLinks() {
  const active = useActiveSection();

  return (
    <div className="hidden sm:flex items-center gap-8 text-sm">
      {navLinks.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`relative transition-colors ${
            active === id ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
          }`}
        >
          {label}
          <span
            className={`absolute -bottom-1.5 left-0 h-px bg-secondary transition-all duration-300 ${
              active === id ? 'w-full' : 'w-0'
            }`}
          />
        </a>
      ))}
    </div>
  );
}