import { cn } from "@/lib/utils";

/**
 * Section — consistent vertical rhythm + anchor id + optional eyebrow/title.
 * Wrap every page section in this so spacing and headings stay uniform.
 *
 * Props:
 *  - id: anchor id used by the navbar smooth-scroll links
 *  - eyebrow: small label above the title
 *  - title: section heading
 *  - subtitle: supporting line under the title
 *  - className / children
 */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  children,
  containerClassName,
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 md:py-28", className)}>
      <div className={cn("container", containerClassName)}>
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-in-up">
            {eyebrow && (
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
