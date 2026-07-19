import { Code2, GraduationCap, Wrench, TrendingUp } from "lucide-react";
import Section from "./Section";
import { Card, CardContent } from "./ui/card";

/**
 * Mission — "Why SIWES Matters". A short narrative on the left and a
 * grid of icon feature cards on the right. Edit copy freely below.
 */
const features = [
  {
    icon: Wrench,
    title: "Practical skills",
    text: "We got to apply what we'd only read about in lectures, working on real projects and real bugs instead of textbook examples.",
  },
  {
    icon: Code2,
    title: "Seeing the work up close",
    text: "Being on a real team showed us how things actually run day to day: the workflows, the deadlines, and the tools people rely on.",
  },
  {
    icon: GraduationCap,
    title: "Getting ready for work",
    text: "Meeting deadlines, working in a team, and explaining our ideas clearly turned out to matter as much as the technical side.",
  },
  {
    icon: TrendingUp,
    title: "Building the workforce",
    text: "Training students on the job is how the country grows the pool of skilled technical people its industries depend on.",
  },
];

export default function Mission() {
  return (
    <Section
      id="mission"
      eyebrow="Our Purpose"
      title="Why SIWES Matters"
      subtitle="SIWES puts students inside real workplaces before they graduate. Here's what that meant for us."
      className="bg-muted/40"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Narrative */}
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground animate-fade-in-up">
          <p>
            The point of SIWES is simple: give students a taste of the job before
            they finish school. For us that meant joining the school's web
            development team and building real applications that real people
            depend on, instead of throwaway exercises for marks.
          </p>
          <p>
            Working on live projects taught us fast. We had to plan features, fix
            bugs that affected actual users, and rely on each other to ship on
            time. Everyone came out of it with a clearer idea of the kind of
            developer they want to become.
          </p>
          <p>
            It also reminded us that this is bigger than any one of us. The more
            students who get proper hands-on training, the stronger the pool of
            skilled people the country's tech industry can draw from.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <Card key={f.title} className="animate-fade-in-up">
              <CardContent className="p-6">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
