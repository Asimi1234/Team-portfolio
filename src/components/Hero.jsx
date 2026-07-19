import { ArrowRight, Users } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { site } from "@/data/site";

/**
 * Hero — headline, prominent logo, mission subheading, and CTA that
 * smooth-scrolls to the Team section. Background uses a soft gradient
 * + subtle grid pattern.
 */
export default function Hero() {
  const scrollToTeam = (e) => {
    e.preventDefault();
    document.querySelector("#team")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background: gradient + subtle grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-24 bottom-24 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="container py-20 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          {/* Prominent logo */}
          <div className="animate-fade-in-up">
            <Logo size={88} className="shadow-xl" />
          </div>

          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm animate-fade-in-up">
            <Users className="h-3.5 w-3.5" />
            {site.contact.session}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            From lecture notes to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              real code
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl animate-fade-in-up">
            We're a group of Computer Engineering students at {site.university.name},
            doing our SIWES on the school's web development team. This is a record of
            what we built, what we actually learned, and where each of us is headed
            next.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-in-up">
            <Button as="a" href="#team" onClick={scrollToTeam} size="lg">
              Meet Our Team
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              as="a"
              href="#mission"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#mission")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              size="lg"
            >
              Why SIWES Matters
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
