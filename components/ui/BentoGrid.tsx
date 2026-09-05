"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import Lottie from "react-lottie";

import { cn, isSvg } from "@/lib/util";
import { BackgroundGradientAnimation } from "./GradiantBg";
import GlobeDemo from "./GridGlobe";
import MagicButton from "./MagicButton";
import animationData from "@/data/confetti.json";
import { profile } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgAlt,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgAlt?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["JavaScript", "TypeScript", "Python", "Linux"];
  const rightLists = ["React", "Next.js", "NestJS", "React Native"];
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 4000);
    } catch {
      // Clipboard API unavailable (insecure context / denied permission):
      // fall back to letting the visitor mail me directly.
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div
      className={cn(
        "surface-card group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
        className
      )}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              src={img}
              alt={imgAlt ?? ""}
              width={600}
              height={600}
              unoptimized={isSvg(img)}
              sizes="(max-width: 768px) 100vw, 33vw"
              className={cn(
                imgClassName,
                "object-cover object-center opacity-90 transition-transform duration-500 ease-out-expo group-hover/bento:scale-[1.03]"
              )}
            />
          )}
        </div>
        <div
          className={cn(
            "absolute bottom-5 right-0",
            id === 5 && "w-full opacity-75"
          )}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt=""
              width={600}
              height={600}
              unoptimized={isSvg(spareImg)}
              aria-hidden="true"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex h-full w-full items-center justify-center text-white" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "relative z-10 flex min-h-40 flex-col p-5 transition-transform duration-300 ease-out-expo group-hover/bento:translate-x-1 md:h-full lg:p-8"
          )}
        >
          {description && <div className="eyebrow mb-2">{description}</div>}
          <div className="max-w-[26ch] text-balance text-lg font-semibold leading-snug tracking-[-0.01em] text-ink lg:text-2xl">
            {title}
          </div>
        </div>

        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <div className="absolute right-3 flex w-fit gap-2 lg:right-4 lg:gap-3">
            <ul className="flex flex-col gap-2 lg:gap-4">
              {leftLists.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-surface-2/80 px-3 py-2 text-center font-mono text-[11px] text-ink-muted lg:px-3.5 lg:py-2.5 lg:text-xs"
                >
                  {item}
                </li>
              ))}
              <li aria-hidden="true" className="rounded-lg bg-surface-2/40 px-3 py-4" />
            </ul>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li aria-hidden="true" className="rounded-lg bg-surface-2/40 px-3 py-4" />
              {rightLists.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-surface-2/80 px-3 py-2 text-center font-mono text-[11px] text-ink-muted lg:px-3.5 lg:py-2.5 lg:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {id === 6 && (
          <div className="relative z-20 mt-5 px-5 pb-5 lg:px-8">
            {copied && (
              <div className="pointer-events-none absolute bottom-5 right-0" aria-hidden="true">
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
            )}

            <MagicButton
              title={copied ? "Email copied" : "Copy my email address"}
              icon={
                copied ? (
                  <IoCheckmarkDone aria-hidden="true" className="h-4 w-4" />
                ) : (
                  <IoCopyOutline aria-hidden="true" className="h-4 w-4" />
                )
              }
              position="left"
              handleClick={handleCopy}
              variant="secondary"
            />
            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
