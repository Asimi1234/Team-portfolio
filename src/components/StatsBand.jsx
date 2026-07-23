import { Users, Code2, Building2, CalendarDays } from "lucide-react";
import Reveal from "./Reveal";
import { Card, CardContent } from "./ui/card";
import { site } from "@/data/site";
import { team } from "@/data/team";

/**
 * StatsBand — four figure cards between the hero and the mission. Each has a
 * colored icon chip, a slate value, and a small label. Values come from the
 * team + site data so they stay in sync.
 */
const stats = [
  { icon: Users, value: String(team.length), label: "Team members" },
  { icon: Code2, value: site.placementTeam, label: "Placement team" },
  { icon: Building2, value: site.university.shortName, label: "Host institution" },
  { icon: CalendarDays, value: site.session, label: "SIWES session" },
];

export default function StatsBand() {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-icon">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl font-extrabold tracking-tight text-secondary">
                    {s.value}
                  </span>
                  <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </span>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
