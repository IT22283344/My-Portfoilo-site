import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * SVGs gain nothing from the image optimizer (they are already tiny and
 * resolution independent) and Next only recognises them when `sharp` is
 * installed, so serve them as-is.
 */
export function isSvg(src: string) {
  return src.toLowerCase().endsWith(".svg");
}
