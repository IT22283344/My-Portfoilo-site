"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/util";

export const TextGenerateEffect = ({
  words,
  className,
  as: Tag = "div",
}: {
  words: string;
  className?: string;
  /** Rendered element. Use "h1" so the page has a real top-level heading. */
  as?: "h1" | "h2" | "div";
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words]);

  const renderWords = () => {
    return (
      <motion.span ref={scope} className="block">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${idx > 3 ? "text-purple" : "dark:text-white text-black"
                } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };

  return (
    <Tag className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <span className="my-4 block">
        {/* remove  text-2xl from the original */}
        <span className="block dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </span>
      </span>
    </Tag>
  );
};