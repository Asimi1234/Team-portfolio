import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar with smooth-scroll anchor links + mobile hamburger menu.
 * Becomes opaque/blurred once the user scrolls past the hero.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3"
        >
          <Logo size={40} />
          <span className="text-base font-extrabold tracking-tight sm:text-lg">
            {site.brandName}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button
            as="a"
            href="#team"
            onClick={(e) => handleNavClick(e, "#team")}
            size="sm"
            className="ml-2"
          >
            Meet Our Team
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground hover:bg-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0 border-b-0"
        )}
      >
        <div className="container flex flex-col gap-1 py-4">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
          <Button
            as="a"
            href="#team"
            onClick={(e) => handleNavClick(e, "#team")}
            className="mt-2 w-full"
          >
            Meet Our Team
          </Button>
        </div>
      </div>
    </header>
  );
}
