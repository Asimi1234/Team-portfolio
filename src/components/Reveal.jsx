import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveal — animates its children in when they scroll into view.
 * Wrap any block to give it an on-scroll entrance instead of a
 * mount-time one. Uses IntersectionObserver (no dependency) and
 * reveals once, then stops observing.
 *
 * Props:
 *  - as: element tag to render (default "div")
 *  - delay: entrance delay in ms (use to stagger siblings)
 *  - className / children / ...rest
 */
export default function Reveal({
  as: Comp = "div",
  delay = 0,
  className,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn("reveal", visible && "is-visible", className)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
