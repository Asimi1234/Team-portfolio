import Section from "./Section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import MemberBlueprint from "./MemberBlueprint";
import { team } from "@/data/team";

/**
 * Team — the core feature. A shadcn/ui Tabs component with one tab per
 * member, each rendering that member's Career Blueprint Portfolio.
 * The tab list wraps and scrolls gracefully on mobile.
 */
export default function Team() {
  return (
    <Section
      id="team"
      eyebrow="Meet The Team"
      title="The people behind the work"
      subtitle="Pick a name to see where they did their placement, what they're aiming for, and the skills they're still working on."
    >
      <Tabs
        defaultValue={team[0]?.id}
        className="mx-auto w-full max-w-5xl animate-fade-in"
      >
        {/* Scrollable tab bar for small screens */}
        <div className="flex justify-center overflow-x-auto pb-2">
          <TabsList className="flex-nowrap">
            {team.map((member, i) => (
              <TabsTrigger key={member.id} value={member.id}>
                <span className="max-w-[9rem] truncate">
                  {member.name.includes("[") ? `Member ${i + 1}` : member.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {team.map((member) => (
          <TabsContent key={member.id} value={member.id}>
            <MemberBlueprint member={member} />
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
