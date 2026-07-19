import { Mail, Building, ExternalLink, GraduationCap } from "lucide-react";
import Section from "./Section";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { site } from "@/data/site";

/**
 * Contact section + site Footer.
 * The Contact block is a distinct section (anchor #contact); the footer
 * below it holds quick nav, copyright, and the university resource link.
 */
export default function Footer() {
  const year = 2024; // static — the "SIWES Portfolio 2024" cohort year

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Contact ─────────────────────────────────────────────── */}
      <Section
        id="contact"
        eyebrow="Get In Touch"
        title="Contact Our Group"
        subtitle="Got a question about our placements, or want to work together? Send us a message."
        className="bg-muted/40"
      >
        <Card className="mx-auto max-w-3xl">
          <CardContent className="grid gap-6 p-8 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <p className="font-semibold">{site.contact.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Building className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Department
                </p>
                <p className="font-semibold">{site.contact.department}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary/10 text-secondary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Institution
                </p>
                <p className="font-semibold">{site.university.name}</p>
              </div>
            </div>
            <div className="flex items-center sm:justify-end">
              <Button
                as="a"
                href={site.university.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                {site.university.resourcesLabel}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-background">
        <div className="container py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            {/* Brand */}
            <div className="max-w-sm text-center md:text-left">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <Logo size={36} />
                <span className="text-lg font-extrabold">{site.brandName}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A record of our industrial training placements and what each of us
                took away from them.
              </p>
            </div>

            {/* Quick nav */}
            <nav className="flex flex-col items-center gap-2 md:items-start">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Quick Links
              </p>
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* University CTA */}
            <div className="text-center md:text-right">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Our Institution
              </p>
              <Button
                as="a"
                href={site.university.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
              >
                <GraduationCap className="h-4 w-4" />
                {site.university.name}
              </Button>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>
              © {year} {site.brandName}. Made by the {site.university.name} SIWES
              group.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
