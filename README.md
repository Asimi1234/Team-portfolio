# SIWES Portfolio 2024

A responsive group portfolio site showing what our engineering team did during
our SIWES industrial training placements. Built with React, Vite, Tailwind CSS,
a shadcn/ui Tabs component, and React Router.

## Features

- Sticky navbar with smooth-scroll links and a mobile menu
- Hero section with the school logo, gradient background, and a "Meet Our Team" button
- Mission section ("Why SIWES Matters") with icon cards
- Team section (the main part): a Tabs component with one tab per member, each
  showing that person's Career Blueprint (bio, vision, SIWES alignment, industry
  guide, skill roadmap)
- Contact section and footer with quick links and a university link
- Mobile-first, responsive, with a single place to change the colour scheme

## Getting started

If you already have this project folder (with its `package.json`), everything is
installed with a single command:

```bash
npm install     # install all dependencies listed in package.json
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build into /dist
npm run preview # preview the production build
```

## Installing from scratch

If you're recreating the project from an empty folder — or you just want to know
exactly what's installed and why — here are the full steps.

### 0. Prerequisites
- **Node.js 18+** and **npm** (check with `node -v` and `npm -v`)

### 1. Create the Vite + React app

```bash
npm create vite@latest siwes-portfolio -- --template react
cd siwes-portfolio
```

### 2. Install the runtime dependencies

```bash
npm install react-router-dom @radix-ui/react-tabs lucide-react \
  class-variance-authority clsx tailwind-merge
```

| Package | Why it's here |
|---------|---------------|
| `react-router-dom` | Router setup (the app is wrapped in `BrowserRouter`) |
| `@radix-ui/react-tabs` | The accessible primitive behind the shadcn/ui Tabs (Team section) |
| `lucide-react` | All the icons |
| `class-variance-authority` | Button variants/sizes (`buttonVariants`) |
| `clsx` + `tailwind-merge` | The `cn()` helper in `src/lib/utils.js` that merges class names |

### 3. Install and configure Tailwind CSS

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p          # creates tailwind.config.js + postcss.config.js
```

Then set the content paths in **`tailwind.config.js`** so Tailwind scans your files:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

> This project's `tailwind.config.js` also maps the colour tokens (emerald/teal/
> slate) and adds the fade-in animations — see the existing file for the full setup.

Add the Tailwind directives to the **top of `src/index.css`**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`postcss.config.js` (created by the `-p` flag) wires Tailwind into the build:

```js
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
```

### 4. Add the `@` import alias (used by the shadcn components)

Imports like `@/lib/utils` and `@/components/ui/tabs` need an alias. In
**`vite.config.js`**:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
```

### 5. Run it

```bash
npm run dev
```

That reproduces the exact toolchain this project uses: **Vite 5, React 18,
Tailwind CSS 3, React Router 6, Radix Tabs, and lucide-react.**

## Changing the content

Almost everything you'll want to edit lives in `src/data/`. Look for the
`[PLACEHOLDER]` strings and replace them. No React knowledge needed.

**Global settings — `src/data/site.js`**
- `brandName`, `schoolLogoUrl` (drop a file in `/public` and use `/logo.png`)
- University name, URL, and resources label
- Navigation links and contact details

While `schoolLogoUrl` still has a placeholder, the site shows a simple
graduation-cap badge. Replace it with a real URL or `/public` path to use your
crest.

**Team members — `src/data/team.js`**
- Each object is one tab. Replace every `[PLACEHOLDER]`.
- `photoUrl`: paste a URL or use a `/public` path. Leave the placeholder to show
  an initials avatar.
- The list arrays (roadmap, current skills, skills to develop, gaps) can grow or
  shrink freely.
- To add a fifth member, copy one object, give it a unique `id`, and add it to
  the list. The tabs adjust on their own.

**Mission copy — `src/components/Mission.jsx`**
Edit the paragraphs and the `features` list.

**Colours and fonts — `src/index.css` and `tailwind.config.js`**
The colours are HSL values under `:root` in `index.css`. Change `--primary`,
`--accent`, and so on once to re-theme the whole site. The font is set in
`tailwind.config.js`.

## Project structure

```
src/
  main.jsx                 entry point (wraps App in BrowserRouter)
  App.jsx                  assembles the page sections
  index.css                Tailwind + colour tokens
  lib/utils.js             cn() class-merge helper
  data/
    site.js                global config (brand, nav, university)
    team.js                team member blueprints
  components/
    ui/
      tabs.jsx             shadcn/ui Tabs (Radix based)
      button.jsx           Button (variants and sizes)
      card.jsx             Card and subcomponents
    Section.jsx            section wrapper (spacing + heading)
    Logo.jsx               logo with placeholder fallback
    Navbar.jsx             sticky nav + mobile menu
    Hero.jsx               hero section
    Mission.jsx            "Why SIWES Matters"
    Team.jsx               tabs wiring the members together
    MemberBlueprint.jsx    one member's full portfolio
    Footer.jsx             contact section + footer
```

## Tech stack

- React 18 (functional components and hooks)
- Vite 5
- Tailwind CSS 3
- shadcn/ui Tabs (`@radix-ui/react-tabs`)
- React Router 6
- lucide-react icons

No authentication, database, or external API calls. All content is static and
edited directly in `src/data/`.
