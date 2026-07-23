import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

/**
 * Hero — a framed dark canvas: a fine grid, a soft green glow, and the OOU
 * crest faded into the corner. Centered content pairs a clean sans line with
 * a serif-italic accent, above a badge and two CTAs.
 */
export default function Hero() {
  const step = (i) => ({ animationDelay: `${i * 100}ms` });

  const crest = site.schoolLogoUrl;
  const hasCrest = crest && !crest.includes("[");

  return (
    <section
      id="hero"
      className="relative w-full px-3 pb-3 pt-[4.75rem] sm:px-4 sm:pb-4 sm:pt-[5.5rem]"
    >
      <div className="relative flex min-h-[88vh] w-full flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0d12] px-6 py-24 text-center sm:rounded-[2rem]">
        {/* Fine grid, faded toward the edges */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.07,
            maskImage:
              "radial-gradient(ellipse 75% 60% at 50% 35%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 60% at 50% 35%, black 25%, transparent 100%)",
          }}
        />
        {/* Soft green glow behind the headline */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

        {/* Faded OOU crest, clipped into the top-right corner */}
        {hasCrest && (
          <img
            src={crest}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 select-none object-contain opacity-[0.13] grayscale invert sm:h-80 sm:w-80"
            style={{
              maskImage:
                "radial-gradient(circle at 60% 40%, black 45%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(circle at 60% 40%, black 45%, transparent 78%)",
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <span
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur animate-fade-in-up"
            style={step(0)}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {site.contact.department}
          </span>

          <h1
            className="mt-8 font-display text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl md:text-7xl animate-fade-in-up"
            style={step(1)}
          >
            From lecture notes to{" "}
            <span className="font-serif text-[1.1em] font-normal italic text-accent">
              real code.
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/55 animate-fade-in-up"
            style={step(2)}
          >
            Where we did our SIWES on the school's web team — what we built, what
            we learned, and where each of us is headed next.
          </p>

          <div
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row animate-fade-in-up"
            style={step(3)}
          >
            <a
              href="#team"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white/90"
            >
              Meet Our Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#mission"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Why SIWES Matters
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
