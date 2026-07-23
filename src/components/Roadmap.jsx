import Section from "./Section";
import Reveal from "./Reveal";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

/**
 * Roadmap — the learning journey over the placement, as a vertical timeline.
 * Stages run in the order we actually picked things up, from hardware
 * simulation through to the modern web stack.
 */
const stages = [
  {
    title: "Arduino & simulation",
    text: "We started with hardware — wiring up components in simulation to see how Arduino circuits behave before running anything on a real board.",
    tags: ["Arduino", "Circuit simulation", "Components"],
  },
  {
    title: "HTML & CSS",
    text: "Then onto the web: structuring pages with HTML and styling them with CSS — the foundations behind everything you see on screen.",
    tags: ["HTML", "CSS", "Responsive layout"],
  },
  {
    title: "React, Tailwind & Supabase",
    text: "Finally the modern stack — building interactive UIs with React, styling fast with Tailwind CSS, and wiring up data and auth with Supabase.",
    tags: ["React", "Tailwind CSS", "Supabase"],
  },
];

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="The Journey"
      title="From circuits to full-stack"
      subtitle="What we picked up over the placement, roughly in the order we learned it."
    >
      <div className="mx-auto max-w-2xl">
        <ol>
          {stages.map((s, i) => {
            const isLast = i === stages.length - 1;
            return (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 110}
                className="flex gap-6"
              >
                {/* Marker column: number + connector, nudged down together */}
                <div className="relative mt-12 flex shrink-0 flex-col items-center">
                  <span className="z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground ring-4 ring-background">
                    {i + 1}
                  </span>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-14 -bottom-8 w-px -translate-x-1/2 bg-border"
                    />
                  )}
                </div>
                <Card
                  className={cn(
                    "flex-1 hover:translate-y-0 hover:border-border hover:shadow-sm",
                    !isLast && "mb-8"
                  )}
                >
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-icon"
                      >
                        {t}
                      </span>
                    ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
