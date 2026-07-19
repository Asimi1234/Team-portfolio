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
    photoUrl: "[INSERT PHOTO URL]",

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
    role: "Frontend & UI Developer",
    photoUrl: "[INSERT PHOTO URL]",
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
    role: "Backend & API Developer",
    photoUrl: "[INSERT PHOTO URL]",
    vision: {
      goal: "Become a backend engineer who's trusted to build the parts of a system that have to stay up and keep data safe.",
      roadmap: [
        "Next 1-2 years: get solid with Node.js and databases, and build a few APIs the rest of my team actually uses.",
        "3-5 years: work as a backend developer and learn how real systems handle a lot of users at once.",
        "5-10 years: move towards a backend or platform engineering role, with some cloud work mixed in.",
      ],
      ambition:
        "I want to be the person a team relies on when something important has to work correctly every single time.",
    },
    alignment: {
      support:
        "I build and maintain the APIs and the database side of our projects. Fixing things that break in front of real users has taught me more than any lecture, because there's no partial marks when the login stops working.",
      leverage:
        "Every API I build here I document and push to GitHub, so I'm slowly building a public track record of backend work I can show.",
      gaps: [
        "Writing secure code that handles bad input safely",
        "Designing databases that won't be painful to change later",
      ],
    },
    industry: {
      dreamCompany: "Flutterwave or Interswitch",
      focus: "Software / Fintech Backend",
      why: "Fintech backends have to be correct and secure, and I like that kind of pressure. When money is involved the engineering has to be serious, and that pushes you to get better.",
    },
    skills: {
      current: ["Node.js & Express", "SQL and database basics", "Reading and fixing other people's bugs"],
      toDevelop: ["Authentication & security", "Caching and performance", "Basic cloud deployment"],
      actionPlan:
        "Before graduation I want to build one properly secured API with authentication, learn to deploy it to a cloud service myself, and study how common security mistakes happen so I can avoid them.",
    },
  },

  {
    id: "member-4",
    name: "Ziyad",
    role: "Database & Deployment",
    photoUrl: "[INSERT PHOTO URL]",
    vision: {
      goal: "Become an engineer who keeps projects running smoothly behind the scenes, from the database to how the app gets deployed and tested.",
      roadmap: [
        "Next 1-2 years: learn database design and the basics of deployment properly, and set up good version-control habits on every project.",
        "3-5 years: work in a role that touches databases, testing, or DevOps, and get comfortable with cloud tools.",
        "5-10 years: grow into a DevOps or data-focused engineering role.",
      ],
      ambition:
        "I want to be the reason a team ships without drama, where deployments are boring because everything just works.",
    },
    alignment: {
      support:
        "On the web team I look after the database and help get our work online. Setting up deployments and catching bugs before they reach users has shown me the side of software that class never really covers.",
      leverage:
        "I keep notes on every setup and deployment process I learn here, so I can repeat it quickly and have something concrete to talk about in interviews.",
      gaps: [
        "Automating the repetitive setup and deployment steps",
        "Testing properly instead of just clicking around to check",
      ],
    },
    industry: {
      dreamCompany: "Andela or a cloud-focused company",
      focus: "Software / DevOps & Data",
      why: "I enjoy the infrastructure side more than the front-facing part. Companies that run many projects at once need people who keep everything organised and running, and that suits how I think.",
    },
    skills: {
      current: ["Database design (SQL)", "Git and version control", "Spotting bugs and edge cases"],
      toDevelop: ["CI/CD and automation", "Cloud platforms (AWS basics)", "Writing automated tests"],
      actionPlan:
        "I plan to set up an automated deploy pipeline for one of our projects, learn the basics of a cloud platform, and build the habit of writing tests instead of checking everything by hand.",
    },
  },

  {
    id: "member-5",
    name: "Dollar Richie",
    role: "QA & Testing",
    photoUrl: "[INSERT PHOTO URL]",
    vision: {
      goal: "Become a software engineer known for shipping work that doesn't break, by taking testing and quality seriously from the start.",
      roadmap: [
        "Next 1-2 years: learn how to test software properly and get comfortable finding problems before users do.",
        "3-5 years: work as a developer or QA engineer on a team that genuinely cares about quality.",
        "5-10 years: grow into a role where I help set how a whole team tests and ships its work.",
      ],
      ambition:
        "I want to be the person who catches the bug everyone else missed, before it ever reaches a real user.",
    },
    alignment: {
      support:
        "On the web team I test our features across different phones and browsers and report what's broken before we release. Doing this on real projects has taught me to think about all the ways something can go wrong.",
      leverage:
        "I keep a record of the bugs I've found and how they got fixed, which is turning into a solid story about my eye for detail that I can share with employers.",
      gaps: [
        "Writing automated tests instead of checking everything by hand",
        "Reproducing tricky bugs reliably so they can be fixed",
      ],
    },
    industry: {
      dreamCompany: "A product company with a strong QA culture",
      focus: "Software / Quality Assurance",
      why: "I'd rather work somewhere that treats quality as part of engineering, not an afterthought. Those are the teams that build things people actually trust.",
    },
    skills: {
      current: ["Manual testing across devices", "Attention to detail", "Clear, useful bug reports"],
      toDevelop: ["Automated testing tools", "Basic scripting for tests", "Reading code well enough to test it deeper"],
      actionPlan:
        "Before graduation I want to learn a testing framework, write automated tests for one of our projects, and get better at reading code so I can test it more thoroughly.",
    },
  },
];
