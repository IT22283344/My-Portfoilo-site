import React from "react";
import { cn } from "@/lib/util";

type Variant = "primary" | "secondary" | "ghost";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-purple text-surface-0 font-semibold hover:brightness-110 active:brightness-95 shadow-soft",
  secondary:
    "border border-line bg-surface-2 text-ink hover:border-line-strong hover:bg-surface-1",
  ghost: "text-ink-muted hover:text-ink hover:bg-surface-2",
};

/**
 * Shared button/link. Renders an <a> when `href` is supplied and a <button>
 * otherwise, so a link is never faked with a click handler.
 *
 * The original props (title / icon / position / handleClick / otherClasses)
 * are kept so existing call sites keep working.
 */
const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses,
  variant = "primary",
  href,
  external = false,
  fullWidth = false,
  ariaLabel,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  variant?: Variant;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
}) => {
  const classes = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm",
    "transition-[background-color,border-color,color,filter,transform] duration-200 ease-out-expo",
    "active:translate-y-px",
    VARIANTS[variant],
    fullWidth ? "w-full" : "w-full sm:w-auto",
    otherClasses
  );

  const content = (
    <>
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {content}
    </button>
  );
};

export default MagicButton;
