import { User } from "lucide-react";
import Section from "./Section";
import { Card, CardContent } from "./ui/card";
import { site } from "@/data/site";

/**
 * CoordinatorAvatar — the coordinator's photo, or a person-icon placeholder
 * while `photoUrl` is a [PLACEHOLDER].
 */
function CoordinatorAvatar({ name, photoUrl }) {
  const isPlaceholder = !photoUrl || photoUrl.includes("[");

  if (isPlaceholder) {
    return (
      <div className="grid h-44 w-44 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-[#1E2938] to-[#16A349] text-white shadow-xl ring-4 ring-card">
        <User className="h-20 w-20" />
      </div>
    );
  }

  return (
    <img
      src={photoUrl}
      alt={name}
      className="h-44 w-44 shrink-0 rounded-3xl object-cover shadow-xl ring-4 ring-card"
    />
  );
}

/**
 * Coordinator — a compact section acknowledging the SIWES coordinator who
 * supervised the group. Content lives in site.coordinator.
 */
export default function Coordinator() {
  const { coordinator } = site;
  if (!coordinator) return null;

  return (
    <Section
      id="coordinator"
      eyebrow="Supervision"
      title="Our SIWES Coordinator"
      subtitle="This portfolio was put together under the guidance of our coordinator."
    >
      <Card className="mx-auto max-w-xl">
        <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
          <CoordinatorAvatar
            name={coordinator.name}
            photoUrl={coordinator.photoUrl}
          />
          <blockquote className="max-w-md font-serif text-xl italic leading-snug text-foreground/80 sm:text-2xl">
            This portfolio came together under his guidance — from our first
            project to this team portfolio page.
          </blockquote>
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              {coordinator.name}
            </h3>
            <p className="mt-2 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              {coordinator.title}
            </p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
