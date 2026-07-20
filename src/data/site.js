/* ═══════════════════════════════════════════════════════════════════
   SITE CONFIG — edit these values to customize global content.
   Everything here is plain text, so no React knowledge is required.
   ═══════════════════════════════════════════════════════════════════ */

export const site = {
  brandName: "SIWES Portfolio 2025",

  // Prominent logo shown in the hero + navbar.
  // Replace with your school crest, e.g. "/logo.png" placed in /public.
  schoolLogoUrl: "/oou-logo.jpeg", // file lives in /public

  university: {
    name: "Olabisi Onabanjo University",
    // Official site / resources page students should be directed to.
    url: "https://oouagoiwoye.edu.ng",
    resourcesLabel: "Visit University Resources",
  },

  // Navbar + footer links. `href` values are the section ids below.
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Mission", href: "#mission" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    department: "Department of Computer Engineering",
    session: "2025 SIWES Group",
  },
};
