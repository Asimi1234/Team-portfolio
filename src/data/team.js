/* ═══════════════════════════════════════════════════════════════════
   TEAM DATA — the heart of the portfolio.
   ───────────────────────────────────────────────────────────────────
   NOTE: The names below are the real group members. The descriptive
   text (goals, dream companies, skills) is sample content written for a
   group of Computer Engineering students doing their SIWES in-house,
   under the school's Web Development team. Edit any of it to match what
   each person actually wants to say.

   HOW TO CUSTOMIZE:
   • Each object in this array = one tab / one member's Career Blueprint.
   • Edit `role` and the text to match the real person.
   • `photoUrl`: paste an image URL, or drop a file in /public and use
     "/my-photo.jpg". Left as a placeholder here, so an initials avatar
     shows until you add a real photo.
   • `skills.current` / `skills.toDevelop`: arrays — add/remove freely.
   • To add another member, copy one object and append it. The Tabs grid
     adapts automatically.
   ═══════════════════════════════════════════════════════════════════ */

export const team = [
  {
    id: "member-1",
    name: "Asimi Israel",
    role: "Team Lead / Full-Stack Developer",
    photoUrl: "/asimi.jpg",

    vision: {
      goal: "Become a full-stack software engineer who can take a product from an idea to something people actually use, and eventually lead an engineering team of my own.",
      roadmap: [
        "Next 1-2 years: finish my degree with a strong final-year project and keep building side projects I can show employers.",
        "3-5 years: work as a software engineer at a Nigerian product company and grow into a senior role.",
        "5-10 years: lead a small engineering team, or start something of my own with a few people I trust.",
      ],
      ambition:
        "I want to build tools that make everyday things less frustrating for regular Nigerians, the kind of app your parents can use without calling you for help.",
    },

    alignment: {
      support:
        "Running the web team's projects has pushed me past just writing code. I now plan tasks, review other people's work, and explain decisions, which is exactly the job I'm aiming for.",
      leverage:
        "I treat this placement like a portfolio. Everything we ship gets documented, so I have real, working examples to point to when I start applying for roles.",
      gaps: [
        "Keeping a team unblocked and moving in the same direction",
        "Writing clean code that someone else can pick up months later",
      ],
    },

    industry: {
      dreamCompany: "Paystack",
      focus: "Software / Fintech",
      why: "Paystack solved a real problem for Nigerian businesses and did it with engineering people actually respect. I want to work somewhere that ships to a large audience and cares about how the code is written, not just that it works.",
    },

    skills: {
      current: ["JavaScript & React", "Git and team workflow", "Breaking big tasks into small ones"],
      toDevelop: ["System design", "Writing tests", "Backend scaling"],
      actionPlan:
        "Before I graduate I want to ship at least two projects end to end, learn how to write proper tests, and read through a couple of real open-source codebases to see how experienced people structure things.",
    },
  },

  {
    id: "member-2",
    name: "Idowu Mustapha Ayomide",
    role: "Frontend Developer",
    photoUrl: "/mustapha.jpg",
    vision: {
      goal: "Become a frontend engineer who also understands design, so I can build interfaces that look good and are genuinely easy to use.",
      roadmap: [
        "Next 1-2 years: get really comfortable with React and one design tool, and rebuild a few popular apps for practice.",
        "3-5 years: work as a frontend developer, ideally somewhere that takes design seriously.",
        "5-10 years: grow into a product or design-engineering role where I have a say in how things look and feel.",
      ],
      ambition:
        "I'd love for someone to use something I built and not even notice the interface, because it just worked the way they expected.",
    },
    alignment: {
      support:
        "On the web team I handle most of the layout and styling, so I get daily practice turning rough sketches into pages that work on phones and laptops. That's the exact skill frontend jobs ask for.",
      leverage:
        "I'm saving screenshots and short write-ups of everything I design and build here, so I can put together a proper portfolio site before I start job hunting.",
      gaps: [
        "Making pages usable for everyone, not just the average user",
        "Keeping styles organised as a project grows bigger",
      ],
    },
    industry: {
      dreamCompany: "A design-led product team (e.g. Figma-style)",
      focus: "Software / Product Design",
      why: "I like the space where design and code meet. The teams that care about the small details of an interface are the ones I learn the most from, and that's where I want to be.",
    },
    skills: {
      current: ["HTML, CSS & Tailwind", "Figma and basic UI design", "Responsive layouts"],
      toDevelop: ["Accessibility (a11y)", "Animations and micro-interactions", "TypeScript"],
      actionPlan:
        "I'm going to redesign and rebuild two apps I use often, learn the basics of accessibility properly, and start writing my components in TypeScript instead of plain JavaScript.",
    },
  },

  {
    id: "member-3",
    name: "Habeeb Quadri",
    role: "Frontend Developer",
    photoUrl: "/quadri.jpg",
    vision: {
      goal: "Become a frontend developer who's good at the tricky parts, connecting interfaces to real data and making busy screens like dashboards and forms feel simple.",
      roadmap: [
        "Next 1-2 years: get really solid with React and how the frontend talks to APIs, and build a few data-heavy interfaces.",
        "3-5 years: work as a frontend developer on a product with a lot of moving parts.",
        "5-10 years: grow into a senior frontend role, owning big features end to end.",
      ],
      ambition:
        "I want to take a screen that looks intimidating, full of data and options, and turn it into something people can use without thinking.",
    },
    alignment: {
      support:
        "On the web team I build the parts of our pages that pull in data and react to what the user does. Wiring the frontend up to real APIs on live projects has taught me where things break and how to handle it.",
      leverage:
        "Every feature I build here I document and push to GitHub, so I'm slowly building a public track record of frontend work I can show.",
      gaps: [
        "Managing state cleanly as an interface gets more complex",
        "Handling loading, empty, and error states properly",
      ],
    },
    industry: {
      dreamCompany: "Flutterwave or Interswitch",
      focus: "Software / Frontend",
      why: "Fintech apps have busy, data-heavy screens that still have to be clear and correct. I like that challenge, making something complicated feel calm and simple to use.",
    },
    skills: {
      current: ["JavaScript & React", "Connecting frontends to APIs", "Reading and fixing other people's bugs"],
      toDevelop: ["State management (React Query / Redux)", "Frontend performance", "TypeScript"],
      actionPlan:
        "Before graduation I want to build one data-heavy interface that handles loading and error states properly, learn a state-management tool, and start using TypeScript on my projects.",
    },
  },

  {
    id: "member-4",
    name: "Akayin-ode Ziyad",
    role: "Frontend & UI/UX Designer",
    photoUrl: "/ziyad.jpg",
    vision: {
      goal: "Become a UI/UX designer who can both design an interface and build it, so good ideas don't get lost on the way from design to code.",
      roadmap: [
        "Next 1-2 years: get fluent in Figma and the fundamentals of design, and turn a few of my own designs into working pages.",
        "3-5 years: work as a UI/UX or product designer on a team that actually ships real products.",
        "5-10 years: grow into a senior product designer, or lead the design side of a small team.",
      ],
      ambition:
        "I want someone to use something I designed and feel like it just makes sense, without anyone having to explain it to them.",
    },
    alignment: {
      support:
        "On the web team I plan how our pages should look and flow before anyone writes code, then help build them. Watching real users get confused (or not) has taught me more about design than any tutorial.",
      leverage:
        "I keep my wireframes, mockups, and the before-and-after of every redesign, which is slowly turning into a design portfolio I can show employers.",
      gaps: [
        "Backing up my design choices with real user feedback",
        "Keeping a consistent design system as a project grows",
      ],
    },
    industry: {
      dreamCompany: "A product-led company with a real design team",
      focus: "Software / UI/UX Design",
      why: "I want to work somewhere design has a seat at the table, not where it's an afterthought bolted on at the end. That's where the products people actually enjoy come from.",
    },
    skills: {
      current: ["Figma and wireframing", "Visual and layout design", "Turning designs into responsive pages"],
      toDevelop: ["User research and testing", "Design systems", "Prototyping and interaction design"],
      actionPlan:
        "Before graduation I want to run a small usability test on one of our projects, build a reusable design system in Figma, and prototype a full app flow from start to finish.",
    },
  },

  {
    id: "member-5",
    name: "Taiwo Olaoye",
    role: "Frontend Developer",
    photoUrl: "/olaoye.jpg",
    vision: {
      goal: "Become a frontend developer known for building interfaces that don't break, ones that are accessible, well tested, and work for everyone.",
      roadmap: [
        "Next 1-2 years: get comfortable with React and learn how to test the interfaces I build.",
        "3-5 years: work as a frontend developer on a team that cares about quality and accessibility.",
        "5-10 years: grow into a senior frontend role where I help set how the team builds and tests its UI.",
      ],
      ambition:
        "I want to be the person whose features just work, on every device and for every user, the first time.",
    },
    alignment: {
      support:
        "On the web team I build features and then test them hard across different phones and browsers before we ship. Doing both on real projects has taught me to build things properly the first time.",
      leverage:
        "I keep a record of the bugs I've caught and how I fixed them, which is turning into a solid story about my eye for detail that I can share with employers.",
      gaps: [
        "Writing automated tests for the components I build",
        "Making interfaces accessible for everyone, not just the average user",
      ],
    },
    industry: {
      dreamCompany: "A product company that cares about quality",
      focus: "Software / Frontend",
      why: "I want to work somewhere that treats a solid, accessible interface as part of the job, not an afterthought. Those are the teams that build things people actually trust.",
    },
    skills: {
      current: ["HTML, CSS & React basics", "Testing across devices", "Clear, useful bug reports"],
      toDevelop: ["Automated component testing", "Accessibility (a11y)", "TypeScript"],
      actionPlan:
        "Before graduation I want to build a few polished, accessible components, write automated tests for them, and get comfortable checking my work against accessibility guidelines.",
    },
  },
];
