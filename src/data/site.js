/* ═══════════════════════════════════════════════════════════════════
   SITE CONFIG — edit these values to customize global content.
   Everything here is plain text, so no React knowledge is required.
   ═══════════════════════════════════════════════════════════════════ */

export const site = {
  brandName: "SIWES Portfolio 2025",

  // Prominent logo shown in the hero + navbar.
  // Replace with your school crest, e.g. "/logo.png" placed in /public.
  schoolLogoUrl: "/oou-logo.jpeg", // file lives in /public

  // SIWES session/cohort year, shown in the stats band.
  session: "2025",
  // The team the group was placed with, shown in the stats band.
  placementTeam: "Web Dev",

  university: {
    name: "Olabisi Onabanjo University",
    // Short form (initials) used where space is tight, e.g. the stats band.
    shortName: "OOU",
    // Official site / resources page students should be directed to.
    url: "https://oouagoiwoye.edu.ng",
    resourcesLabel: "Visit University Resources",
  },

  // SIWES coordinator shown in its own section.
  // Add a photo: drop the file in /public and set photoUrl to "/afeez.jpg".
  // Leave the placeholder to show a person-icon avatar until then.
  coordinator: {
    name: "Engr Afeez",
    title: "SIWES Coordinator",
    photoUrl: "/afeez.jpg",
  },

  // Navbar + footer links. `href` values are the section ids below.
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Mission", href: "#mission" },
    { label: "Journey", href: "#roadmap" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    department: "Department of Computer Engineering",
  },
};
