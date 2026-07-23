import { useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * ThemeToggle — flips the `dark` class on <html> and persists the
 * choice. The initial class is set by an inline script in index.html
 * (before paint) so there's no flash; this component reads that as its
 * starting state and writes the DOM + localStorage on each toggle.
 */
export default function ThemeToggle({ className = "" }) {
  // Seed from the class the pre-paint script already set. State exists
  // only to re-render the icon/aria-label; the DOM class drives styling.
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      /* ignore storage failures (e.g. private mode) */
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative grid h-10 w-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground ${className}`}
    >
      <Sun
        className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}
