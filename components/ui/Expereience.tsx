import React from "react";
import Image from "next/image";

import { workExperience, education } from "@/data";
import { Button } from "./MovingBorders";

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 md:py-28">
      <header className="text-center">
        <p className="eyebrow">Career</p>
        <h2 className="heading mt-3">
          Where I&apos;ve <span className="text-purple">worked</span>
        </h2>
      </header>

      <ol className="mt-12 flex w-full flex-col gap-5">
        {workExperience.map((role, index) => (
          <li key={role.id}>
            <Button
              as="div"
              // Deterministic so server and client render identical markup.
              duration={12000 + index * 1500}
              borderRadius="1rem"
              className="border-line text-ink"
              containerClassName="w-full"
            >
              <div className="flex w-full flex-col gap-5 p-6 md:flex-row md:gap-8 lg:p-8">
                <div className="flex items-start gap-4 md:w-64 md:flex-shrink-0 md:flex-col md:gap-2">
                  <Image
                    src={role.thumbnail}
                    alt=""
                    aria-hidden="true"
                    width={128}
                    height={128}
                    unoptimized
                    className="h-11 w-11 flex-shrink-0 object-contain md:h-14 md:w-14"
                  />
                  <div className="md:mt-1">
                    <p className="text-sm font-medium text-ink">
                      {role.company}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-ink-faint">
                      {role.period}
                    </p>
                  </div>
                </div>

                <div className="md:border-l md:border-line md:pl-8">
                  <h3 className="text-start text-base font-semibold tracking-[-0.01em] text-ink lg:text-lg">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-start text-sm leading-relaxed text-ink-muted">
                    {role.desc}
                  </p>
                </div>
              </div>
            </Button>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <h3 className="eyebrow text-center">Education</h3>
        <ul className="mx-auto mt-6 flex max-w-3xl flex-col gap-3">
          {education.map((item) => (
            <li
              key={item.id}
              className="surface-card flex flex-col gap-1.5 rounded-xl p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <p className="text-sm font-semibold text-ink">
                  {item.institution}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {item.qualification}
                </p>
              </div>
              <p className="flex-shrink-0 font-mono text-xs text-ink-faint">
                {item.period}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
