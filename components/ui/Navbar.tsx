"use client";

import { useCallback, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { cn } from "@/lib/util";
import { navItem, GITHUB_URL } from "@/data";

const sectionIds = navItem.map((item) => item.link.replace("#", ""));

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Solidify the bar once the page has scrolled past the hero's top edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is currently in view.
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close the mobile panel on Escape, and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[5000] transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-surface-0/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-md text-[15px] font-semibold tracking-tight text-ink"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-md border border-line bg-surface-2 text-[13px] font-bold text-purple transition-colors group-hover:border-line-strong"
          >
            H
          </span>
          Hirusha
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItem.map((item) => {
              const id = item.link.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.link}>
                  <a
                    href={item.link}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm transition-colors duration-200",
                      isActive
                        ? "text-ink"
                        : "text-ink-muted hover:text-ink"
                    )}
                  >
                    {item.name}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-px bg-purple transition-opacity duration-200",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm text-ink-muted transition-colors duration-200 hover:border-line-strong hover:text-ink sm:inline-flex"
          >
            <FaGithub aria-hidden="true" className="h-4 w-4" />
            GitHub
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface-2 text-ink transition-colors duration-200 hover:border-line-strong md:hidden"
          >
            {open ? (
              <HiX className="h-5 w-5" aria-hidden="true" />
            ) : (
              <HiMenuAlt4 className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel: a real stacked layout, not a shrunken desktop row. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-surface-0/95 backdrop-blur-xl md:hidden"
      >
        <nav aria-label="Mobile" className="px-5 py-3 sm:px-10">
          <ul className="flex flex-col">
            {navItem.map((item) => {
              const id = item.link.replace("#", "");
              return (
                <li key={item.link}>
                  <a
                    href={item.link}
                    onClick={close}
                    aria-current={active === id ? "true" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-[15px] transition-colors duration-200",
                      active === id
                        ? "bg-surface-2 text-ink"
                        : "text-ink-muted hover:bg-surface-2 hover:text-ink"
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li className="mt-2 border-t border-line pt-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-[15px] text-ink-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
              >
                <FaGithub aria-hidden="true" className="h-4 w-4" />
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
