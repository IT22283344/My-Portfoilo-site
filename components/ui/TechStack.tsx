import React from "react";

import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { techStack } from "@/data";

const TechStack = () => {
  return (
    <section id="stack" className="py-20 md:py-28">
      <header className="text-center">
        <p className="eyebrow">Toolkit</p>
        <h2 className="heading mt-3">
          Technologies I <span className="text-purple">work with</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
          The stack behind the work above, day to day.
        </p>
      </header>

      <div className="mt-12 flex flex-col items-center">
        <InfiniteMovingCards items={techStack} direction="right" speed="slow" />
      </div>
    </section>
  );
};

export default TechStack;
