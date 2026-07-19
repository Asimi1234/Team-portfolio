import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — merge conditional class names while resolving Tailwind conflicts.
 * Used throughout the shadcn/ui components.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
