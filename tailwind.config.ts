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
DEFAULT: '#6366f1', // indigo-500
light: '#818cf8',   // indigo-400
dark: '#4f46e5'     // indigo-600
}
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif']
}
}
},
plugins: []
} satisfies Config;