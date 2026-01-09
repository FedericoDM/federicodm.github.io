import type { Config } from 'tailwindcss';


export default {
darkMode: 'class',
content: [
'./app/**/*.{ts,tsx,mdx}',
'./components/**/*.{ts,tsx}',
'./content/**/*.{md,mdx}'
],
theme: {
extend: {
colors: {
accent: {
DEFAULT: '#a1a1aa', // zinc-400 - subtle gray for links
light: '#d4d4d8',   // zinc-300
dark: '#71717a'     // zinc-500
},
bg: {
DEFAULT: '#0a0a0a', // almost black
light: '#171717'    // zinc-900
}
},
fontFamily: {
sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
mono: ['SF Mono', 'Consolas', 'Monaco', 'monospace']
}
}
},
plugins: []
} satisfies Config;
