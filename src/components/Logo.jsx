import { GraduationCap } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Logo — shows the school crest if `schoolLogoUrl` is a real URL,
 * otherwise falls back to a clean icon badge so the layout never breaks
 * while the placeholder is in place.
 */
export default function Logo({ className, size = 40 }) {
  const url = site.schoolLogoUrl;
  const isPlaceholder = !url || url.includes("[");

  if (isPlaceholder) {
    return (
      <span
        className={cn(
          "grid place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md",
          className
        )}
        style={{ width: size, height: size }}
        aria-label="School logo placeholder"
      >
        <GraduationCap style={{ width: size * 0.55, height: size * 0.55 }} />
      </span>
    );
  }

  return (
    <img
      src={url}
      alt="School logo"
      className={cn("rounded-xl object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
}
