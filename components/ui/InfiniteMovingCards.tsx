"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/util";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    /** Optional: rendered as a text-only pill when there is no logo asset. */
    img: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const duplicated = React.useRef(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // React 18 StrictMode mounts effects twice in dev; without this guard the
    // list was cloned a second time and the marquee ran at half speed.
    if (duplicated.current) return;
    duplicated.current = true;
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "60s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]",
        className
      )}
    >
      {/* The visible marquee is decorative and duplicated in the DOM, so it is
          hidden from assistive tech; the real list follows below. */}
      <ul
        ref={scrollerRef}
        aria-hidden="true"
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap items-center gap-3 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="surface-card flex flex-shrink-0 items-center gap-2.5 rounded-xl px-5 py-3.5"
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={22}
                height={22}
                unoptimized
                className="h-[22px] w-[22px] object-contain"
              />
            )}
            <span className="whitespace-nowrap text-sm font-medium text-ink-muted">
              {item.name}
            </span>
          </li>
        ))}
      </ul>

      <ul className="sr-only">
        {Array.from(new Set(items.map((i) => i.name))).map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
