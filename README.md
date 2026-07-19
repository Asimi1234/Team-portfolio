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

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build into /dist
npm run preview # preview the production build
```

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
