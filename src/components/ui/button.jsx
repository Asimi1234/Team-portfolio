import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Reusable Button. Pass `asChild` won't work here (kept dependency-light),
 * so for links just render an <a> with these classes via buttonVariants(),
 * or use the `as` prop below.
 *
 * Variants: default | secondary | outline | ghost
 * Sizes:    default | sm | lg | icon
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30",
        secondary:
          "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 hover:bg-secondary/90",
        outline:
          "border-2 border-border bg-transparent hover:bg-muted hover:border-primary/40",
        ghost: "hover:bg-muted hover:text-foreground",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-13 px-8 text-base py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, as: Comp = "button", ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
