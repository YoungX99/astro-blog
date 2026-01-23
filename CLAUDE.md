# Jason Blog - Project Documentation

## Overview

This is an Astro-based personal blog with MDX support, Tailwind CSS styling, and dark mode capabilities.

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 4 with Typography plugin
- **Content**: Markdown/MDX with Astro Content Collections
- **Build**: Vite

## Project Structure

```
src/
├── content/blog/        # Blog posts (.md, .mdx)
├── pages/
│   ├── index.astro      # Home page
│   ├── about.astro      # About page
│   └── blog/
│       ├── index.astro  # Blog listing
│       └── [...slug].astro  # Dynamic blog post route
├── layouts/
│   └── BlogPost.astro   # Blog post layout
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── BaseHead.astro
│   ├── TableOfContents.astro  # TOC component (conditional)
│   ├── ThemeToggle.astro
│   └── ...
├── styles/
│   └── global.css       # Global styles & Tailwind utilities
└── consts.ts            # Site configuration
```

## Key Features

### Blog Post Frontmatter Schema

```yaml
title: string (required)
description: string (required)
pubDate: date (required)
updatedDate: date (optional)
heroImage: image (optional)
toc: boolean (optional, default: false)  # Enable table of contents
```

### Table of Contents (TOC)

- Controlled via `toc: true` in post frontmatter
- Extracts h2 and h3 headings automatically
- Fixed sidebar on desktop (>1280px), hidden on mobile
- Smooth scroll navigation

### Dark Mode

- Controlled via `ENABLE_DARK_MODE` in `src/consts.ts`
- Uses class-based strategy (`.dark` selector)
- Currently disabled by default

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Styling Conventions

- Use Tailwind utility classes
- Custom utilities defined in `global.css` using `@utility` directive
- Common utilities: `nav-link`, `text-muted`, `img-container`, `img-zoom`
- Typography plugin for prose content styling

## Adding a New Blog Post

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add required frontmatter (title, description, pubDate)
3. Add `toc: true` if table of contents is needed
4. Write content using standard Markdown

## Code Patterns

- Astro components use TypeScript in frontmatter
- Props defined via `interface Props` or inline types
- Conditional rendering with `{condition && <Component />}`
- View transitions enabled for smooth page navigation
