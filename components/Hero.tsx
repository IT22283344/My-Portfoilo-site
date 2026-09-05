import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerativeEffect";
import MagicButton from "./ui/MagicButton";
import { GITHUB_URL, profile } from "@/data";

const Hero = () => {
  return (
    <section id="top" className="relative pb-24 pt-32 md:pt-40">
      <div aria-hidden="true">
        <Spotlight
          id="spotlight-a"
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          id="spotlight-b"
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          id="spotlight-c"
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-surface-0 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-surface-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <Image
          src="/propic.png"
          alt={`Portrait of ${profile.name}`}
          width={896}
          height={1174}
          priority
          sizes="(max-width: 768px) 128px, 168px"
          className="mb-7 h-auto w-[128px] md:w-[168px]"
        />

        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/70 px-3.5 py-1.5 text-xs text-ink-muted backdrop-blur">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-purple"
          />
          {profile.role} · {profile.location}
        </p>

        <TextGenerateEffect
          as="h1"
          words="Building scalable web and mobile applications"
          className="max-w-[20ch] text-balance text-[clamp(1.9rem,1.1rem+3.4vw,3.75rem)] leading-[1.08] tracking-[-0.03em]"
        />

        <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-ink-muted md:text-base">
          Hi, I&apos;m {profile.name.split(" ")[0]} — {profile.summary}
        </p>

        <div className="mt-9 flex w-full max-w-sm flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
          <MagicButton
            title="View my work"
            href="#projects"
            variant="primary"
            icon={<FaLocationArrow aria-hidden="true" className="h-3.5 w-3.5" />}
            position="right"
          />
          <MagicButton
            title="Get in touch"
            href="#contact"
            variant="secondary"
          />
          <MagicButton
            title="GitHub"
            href={GITHUB_URL}
            external
            variant="ghost"
            otherClasses="border border-line sm:border-transparent"
            icon={<FaGithub aria-hidden="true" className="h-4 w-4" />}
            position="left"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
