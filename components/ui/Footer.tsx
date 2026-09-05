import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { socialMedia, profile } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full pb-10 pt-20 md:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-80 overflow-hidden opacity-30"
      >
        <Image
          src="/footer-grid.svg"
          alt=""
          width={1200}
          height={600}
          unoptimized
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Contact</p>
        <h2 className="heading mt-3 max-w-[20ch]">
          Let&apos;s build something{" "}
          <span className="text-purple">together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
          Have a project in mind, or hiring? My inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-5 font-mono text-sm text-ink-muted underline-offset-4 transition-colors hover:text-purple hover:underline"
        >
          {profile.email}
        </a>

        <div className="mt-8 w-full max-w-xs sm:w-auto">
          <MagicButton
            title="Get in touch"
            href={`mailto:${profile.email}`}
            variant="primary"
            icon={<FaLocationArrow aria-hidden="true" className="h-3.5 w-3.5" />}
            position="right"
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6 border-t border-line pt-8 md:flex-row md:justify-between">
        <p className="text-sm text-ink-faint">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>

        <ul className="flex items-center gap-2.5" aria-label="Social profiles">
          {socialMedia.map((profileLink) => {
            const icon = (
              <Image
                src={profileLink.img}
                alt=""
                width={18}
                height={18}
                unoptimized
                aria-hidden="true"
                className="h-[18px] w-[18px]"
              />
            );

            return (
              <li key={profileLink.id}>
                {profileLink.link ? (
                  <a
                    href={profileLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profileLink.name} profile`}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface-2 transition-colors duration-200 hover:border-line-strong"
                  >
                    {icon}
                  </a>
                ) : (
                  // No URL configured yet — render the mark, not a dead link.
                  <span
                    role="img"
                    aria-label={`${profileLink.name} (link not set up yet)`}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface-2 opacity-45"
                  >
                    {icon}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
