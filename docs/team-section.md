# Team Section — "Personal Career Blueprint Portfolio"

This document explains the section shown in the screenshots: the **Team** area of
the site, where each member gets a tab containing their **Career Blueprint**
(Bio header → My Vision → SIWES Alignment → Industry Guide → Skill Roadmap).

It covers three things:

1. **How we got here** — where this section came from.
2. **Which files build it** — the exact files and what each one does.
3. **The design schema** — layout, colours, tokens, icons, and responsive rules.

---

## 1. How we arrived here

This section was part of the original brief for the site: a Group SIWES portfolio
where the **core feature** is a tabbed set of member profiles. The brief asked for:

- A **Shadcn/ui Tabs** component, one tab per group member.
- Each tab to hold a **"Personal Career Blueprint Portfolio"** with five parts:
  - **Bio Header** — photo, name, role
  - **My Vision** — career goal, 5–10 year roadmap, personal ambition
  - **SIWES Alignment** — how SIWES supports the path, leverage strategy, skill gaps
  - **Industry Guide** — dream company / mentor, sector, why that industry
  - **Skill Roadmap** — current strengths, skills to develop, action plan

From there it evolved through several rounds of feedback:

- Emojis in the Industry Guide were swapped for **lucide icons**.
- Copy was rewritten in a **natural, first-person voice** (less "AI" sounding).
- The group was set as **Computer Engineering students doing SIWES in-house on the
  school's web development team**, so the content is web/software focused.
- Grew from **4 to 5 members**, each with a distinct focus.
- The colour scheme was changed from indigo/violet to **emerald + slate**.
- The bio-header banner gradient was simplified (emerald → teal) and the **name was
  moved fully below the banner** so dark text never sits on the green.
- Real **member photos** were added (HEIC files converted to web-friendly JPGs in
  `public/`).

---

## 2. Files that build this section

Data flows from a single data file, through a section wrapper and the Tabs
component, into one blueprint component per member:

```
src/data/team.js              ← the content (one object per member)
        │
        ▼
src/components/Team.jsx        ← section wrapper + Tabs; maps members → tabs
        │  (uses)
        ├── src/components/Section.jsx        ← heading / spacing wrapper
        ├── src/components/ui/tabs.jsx         ← shadcn/ui Tabs (Radix based)
        │
        ▼  (one per member)
src/components/MemberBlueprint.jsx   ← the whole card layout in the screenshots
        │  (uses)
        ├── src/components/ui/card.jsx         ← Card / CardHeader / CardContent
        └── lucide-react                       ← all the icons

Styling tokens:
src/index.css                 ← colour scheme (CSS variables)
tailwind.config.js            ← maps those variables to Tailwind colour names
```

### `src/data/team.js` — the content
An exported array `team`, one object per member. **This is the only file you edit
to change what a member says.** Each object:

```js
{
  id: "member-1",                         // unique; used as the tab value
  name: "Asimi Israel",                   // shown on the tab + bio header
  role: "Team Lead / Full-Stack Developer",
  photoUrl: "/asimi.jpg",                 // file in /public, or "" for initials

  vision: {
    goal: "…",                            // bold line at top of "My Vision"
    roadmap: ["…", "…", "…"],             // numbered 5–10 year list
    ambition: "…",                        // italic line with the sparkle icon
  },
  alignment: {
    support: "…",                         // first paragraph of "SIWES Alignment"
    leverage: "…",                        // "Leverage:" paragraph
    gaps: ["…", "…"],                     // "Skill Gaps Being Addressed" list
  },
  industry: {
    dreamCompany: "Paystack",             // green badge (target icon)
    focus: "Software / Fintech",          // grey badge (factory icon)
    why: "…",                             // "Why this industry?" paragraph
  },
  skills: {
    current: ["…", "…", "…"],             // solid green pills (check icon)
    toDevelop: ["…", "…", "…"],           // dashed teal pills (circle icon)
    actionPlan: "…",                      // "Action plan:" paragraph
  },
}
```

Arrays (`roadmap`, `gaps`, `current`, `toDevelop`) can be any length — the UI
renders however many items you give it. Add a member by copying an object and
giving it a new `id`; the tabs adapt automatically.

### `src/components/Team.jsx` — tabs wiring
- Wraps everything in `Section` (id `team`, eyebrow "Meet The Team", the heading,
  and the subtitle).
- Renders one `TabsTrigger` per member (the tab bar) and one `TabsContent` per
  member (each holding a `MemberBlueprint`).
- `defaultValue={team[0]?.id}` opens the first member by default.
- The tab bar is centered and horizontally scrollable (`overflow-x-auto`), and long
  names truncate at `max-w-[9rem]`.

### `src/components/MemberBlueprint.jsx` — the layout in the screenshots
Everything visible in the images lives here. It contains three pieces:

- **`Avatar`** — renders the member photo (`<img>` with `object-cover`) when
  `photoUrl` is a real path, or a gradient tile with initials while it's still a
  `[PLACEHOLDER]`.
- **`BlueprintCard`** — a reusable titled card: an accent-tinted icon badge + title
  in the header, body content below. The `accent` prop (`primary` | `accent` |
  `secondary`) is looked up in a static `ACCENTS` map (see the JIT note below).
- **`MemberBlueprint`** (default export) — assembles the **Bio Header** card plus a
  two-column grid of four `BlueprintCard`s (My Vision, SIWES Alignment, Industry
  Guide, Skill Roadmap).

### `src/components/ui/tabs.jsx` — shadcn/ui Tabs
Thin wrappers around `@radix-ui/react-tabs` (`Tabs`, `TabsList`, `TabsTrigger`,
`TabsContent`). Provides keyboard accessibility, the active-tab styling
(`data-[state=active]`), and the fade-in animation on the active panel.

### `src/components/ui/card.jsx` — Card primitives
`Card`, `CardHeader`, `CardTitle`, `CardContent` — rounded, bordered white
containers used for every card in this section.

### `src/components/Section.jsx` — section wrapper
Provides consistent vertical spacing and the centered eyebrow/title/subtitle block
above the tabs.

---

## 3. Design schema

### Colour scheme (single source of truth)
Colours are **HSL design tokens** defined once in `src/index.css` under `:root`, and
mapped to Tailwind names in `tailwind.config.js`. Change them here and the whole
site (this section included) re-themes.

| Token         | Value (HSL)     | Colour        | Where it shows in this section |
|---------------|-----------------|---------------|--------------------------------|
| `--primary`   | `161 94% 30%`   | emerald       | banner start, role badge, "My Vision" & "Skill Roadmap" icons, current-strength pills, roadmap numbers |
| `--accent`    | `175 84% 32%`   | teal          | banner end, "SIWES Alignment" icon, ambition sparkle, gap dots, dashed "to develop" pills |
| `--secondary` | `215 25% 35%`   | slate-blue    | "Industry Guide" icon + dream-company badge |
| `--muted`     | `210 40% 96%`   | light grey    | the `focus` badge background |
| `--card`      | `0 0% 100%`     | white         | all card backgrounds |
| `--foreground`| `222 47% 11%`   | near-black    | headings and strong text |
| `--muted-foreground` | `215 16% 47%` | grey    | body paragraph text |

Tints like `bg-primary/10` (10% opacity) create the soft pastel backgrounds behind
icons and pills.

### Bio Header (top card)
- A `Card` with `overflow-hidden`.
- A **96px banner** (`h-24`) using `bg-gradient-to-r from-primary to-accent`
  (emerald → teal).
- The avatar is `112px` (`h-28 w-28`), pulled up with `-mt-20` so **only the avatar
  overlaps the banner** — the name and role sit below it on white (this is the fix
  that keeps dark text off the green).
- Role is an emerald pill: `bg-primary/10 text-primary`.
- Layout: stacked and centered on mobile, side-by-side and bottom-aligned from `sm`
  up (`flex-col … sm:flex-row sm:items-end`).

### The four blueprint cards
- Arranged in a responsive grid: **one column on mobile, two from `md` up**
  (`grid gap-6 md:grid-cols-2`).
- Each is a `BlueprintCard` with an icon badge whose colour is set by `accent`:

| Card            | Icon (lucide) | Accent      |
|-----------------|---------------|-------------|
| My Vision       | `Target`      | primary (emerald) |
| SIWES Alignment | `Rocket`      | accent (teal)     |
| Industry Guide  | `Building2`   | secondary (slate) |
| Skill Roadmap   | `ListChecks`  | primary (emerald) |

Inline icons within the cards: `Sparkles` (ambition), `Circle` (gap dots and
to-develop pills), `Target` + `Factory` (industry badges), `CheckCircle2`
(current-strength pills).

### Typography & small-print labels
- Card titles: `text-base font-bold`.
- Sub-labels ("5–10 YEAR ROADMAP", "SKILL GAPS BEING ADDRESSED", etc.):
  `text-xs font-bold uppercase tracking-wider text-foreground/70`.
- Body text: `text-sm leading-relaxed text-muted-foreground`.

### Pills / badges
- **Current strengths:** solid pill — `rounded-full bg-primary/10 text-primary` with
  a `CheckCircle2` icon.
- **To develop:** outlined dashed pill — `border border-dashed border-accent/40
  text-accent` with a `Circle` icon (signals "not done yet").
- **Dream company:** `bg-secondary/10 text-secondary` with a `Target` icon.
- **Focus/sector:** `bg-muted text-foreground/70` with a `Factory` icon.

### Motion & accessibility
- Radix Tabs give full keyboard support (arrow keys, focus rings via
  `focus-visible:ring`).
- The active tab panel fades/rises in (`data-[state=active]:animate-fade-in-up`,
  defined in `tailwind.config.js`).
- Avatar images use `alt={name}`.

### One gotcha worth knowing (JIT-safe accent colours)
Tailwind's compiler only keeps class names it can find as **complete strings** in the
source. A dynamically built class like `` `bg-${accent}/10` `` would get purged and
the colour would silently disappear. That's why `MemberBlueprint.jsx` uses a static
lookup map:

```js
const ACCENTS = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  secondary: "bg-secondary/10 text-secondary",
};
```

If you add a new accent, add its full class strings here — don't build them by
string interpolation.

---

## Quick "where do I change X?" reference

| I want to change…                                  | Edit this |
|----------------------------------------------------|-----------|
| A member's text, role, photo, or skills            | `src/data/team.js` |
| A member's photo (add the image file)              | drop it in `public/`, set `photoUrl: "/name.jpg"` |
| The section heading / subtitle                     | `src/components/Team.jsx` (the `Section` props) |
| Card layout, order, icons, or which fields show    | `src/components/MemberBlueprint.jsx` |
| The whole site's colours                           | `src/index.css` (`:root` tokens) |
| Tab bar behaviour / styling                        | `src/components/Team.jsx` + `src/components/ui/tabs.jsx` |
```
