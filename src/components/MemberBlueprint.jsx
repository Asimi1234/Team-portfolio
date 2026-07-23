import {
  Target,
  Rocket,
  Building2,
  ListChecks,
  CheckCircle2,
  Circle,
  Sparkles,
  Factory,
  GraduationCap,
  Hash,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

/**
 * Avatar — member photo with initials fallback while the placeholder URL
 * is in place.
 */
function Avatar({ name, photoUrl }) {
  const isPlaceholder = !photoUrl || photoUrl.includes("[");
  const initials =
    name && !name.includes("[")
      ? name
          .split(" ")
          .map((w) => w[0])
          .filter(Boolean)
          .slice(0, 2)
          .join("")
          .toUpperCase()
      : "?";

  if (isPlaceholder) {
    return (
      <div className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#1E2938] to-[#16A349] text-3xl font-extrabold text-white shadow-lg ring-4 ring-card">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={photoUrl}
      alt={name}
      className="h-28 w-28 shrink-0 rounded-2xl object-cover shadow-lg ring-4 ring-card"
    />
  );
}

/**
 * BlueprintCard — a titled section within a member's portfolio. `accent`
 * maps to static classes so Tailwind's JIT can detect them.
 */
const ACCENTS = {
  primary: "bg-primary/10 text-icon",
  accent: "bg-accent/10 text-icon",
};

function BlueprintCard({ icon: Icon, title, accent = "primary", children }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-3 text-base">
          <span
            className={`grid h-9 w-9 place-items-center rounded-lg ${ACCENTS[accent]}`}
          >
            <Icon className="h-5 w-5" />
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </CardContent>
    </Card>
  );
}

/**
 * MemberBlueprint — full "Personal Career Blueprint" for one team member,
 * rendered inside each Tab.
 */
export default function MemberBlueprint({ member }) {
  const { name, role, level, matric, photoUrl, vision, alignment, industry, skills } =
    member;

  return (
    <div className="space-y-6">
      {/* a) Bio Header */}
      <Card className="overflow-hidden hover:translate-y-0 hover:border-border hover:shadow-sm">
        <div className="h-24 bg-gradient-to-r from-[#1E2938] to-[#16A349]" />
        <CardContent className="flex flex-col items-center gap-4 pb-6 text-center sm:flex-row sm:items-end sm:text-left">
          {/* Only the avatar overlaps the banner; name + role sit below it */}
          <div className="-mt-20">
            <Avatar name={name} photoUrl={photoUrl} />
          </div>
          <div className="pb-1">
            <h3 className="text-2xl font-extrabold tracking-tight">{name}</h3>
            <p className="mt-1 inline-block rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-icon">
              {role}
            </p>
            {(level || matric) && (
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-medium text-muted-foreground sm:justify-start">
                {level && (
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {level} Level
                  </span>
                )}
                {matric && (
                  <span className="inline-flex items-center gap-1.5">
                    <Hash className="h-3.5 w-3.5" />
                    {matric}
                  </span>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Blueprint grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* b) My Vision */}
        <BlueprintCard icon={Target} title="My Vision" accent="primary">
          <p className="mb-4 font-medium text-foreground">{vision.goal}</p>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground/70">
            5–10 Year Roadmap
          </p>
          <ol className="mb-4 space-y-2">
            {vision.roadmap.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-bold text-icon">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="flex gap-2">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span className="italic">{vision.ambition}</span>
          </p>
        </BlueprintCard>

        {/* c) SIWES Alignment */}
        <BlueprintCard icon={Rocket} title="SIWES Alignment" accent="accent">
          <p className="mb-3">{alignment.support}</p>
          <p className="mb-3">
            <span className="font-semibold text-foreground">Leverage: </span>
            {alignment.leverage}
          </p>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground/70">
            Skill Gaps Being Addressed
          </p>
          <ul className="space-y-1.5">
            {alignment.gaps.map((gap, i) => (
              <li key={i} className="flex gap-2">
                <Circle className="mt-1 h-3 w-3 shrink-0 fill-accent/30 text-accent" />
                <span>{gap}</span>
              </li>
            ))}
          </ul>
        </BlueprintCard>

        {/* d) Industry Guide */}
        <BlueprintCard icon={Building2} title="Industry Guide" accent="primary">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-icon">
              <Target className="h-3.5 w-3.5" />
              {industry.dreamCompany}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-xs font-bold text-foreground/70">
              <Factory className="h-3.5 w-3.5" />
              {industry.focus}
            </span>
          </div>
          <p>
            <span className="font-semibold text-foreground">
              Why this industry?{" "}
            </span>
            {industry.why}
          </p>
        </BlueprintCard>

        {/* e) Skill Roadmap */}
        <BlueprintCard icon={ListChecks} title="Skill Roadmap" accent="accent">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground/70">
            Current Strengths
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {skills.current.map((s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-icon"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                {s}
              </span>
            ))}
          </div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground/70">
            To Develop Before Graduation
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {skills.toDevelop.map((s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-accent/40 px-3 py-1 text-xs font-semibold text-accent"
              >
                <Circle className="h-3.5 w-3.5" />
                {s}
              </span>
            ))}
          </div>
          <p>
            <span className="font-semibold text-foreground">Action plan: </span>
            {skills.actionPlan}
          </p>
        </BlueprintCard>
      </div>
    </div>
  );
}
