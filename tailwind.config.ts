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
DEFAULT: '#6366f1' // indigo-500
}
}
}
},
plugins: []
} satisfies Config;