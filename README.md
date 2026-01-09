# Personal Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Clean, minimalist design with dark mode support
- Fully responsive (mobile, tablet, desktop)
- Project showcase with filtering
- Writing/blog section
- About page with experience timeline
- Optimized for GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

1. **Personal Details**: Edit [app/layout.tsx](app/layout.tsx) to update your name, email, and metadata
2. **Projects**: Modify [content/projects-data.ts](content/projects-data.ts) to add your projects
3. **About Page**: Update [app/about/page.tsx](app/about/page.tsx) with your background and experience
4. **Writing**: Edit [app/writing/page.tsx](app/writing/page.tsx) to add your blog posts

### Color Scheme

The accent color can be changed in [tailwind.config.ts](tailwind.config.ts). Current theme uses indigo (`#6366f1`).

## Deployment to GitHub Pages

1. Update `next.config.mjs` with your repository name:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  images: { unoptimized: true }
};
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `out` folder to GitHub Pages

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (via inline SVG)
- **Deployment**: GitHub Pages (static export)

## License

MIT License - feel free to use this template for your own portfolio!
