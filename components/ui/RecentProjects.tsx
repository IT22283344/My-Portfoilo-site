import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

import { projects, GITHUB_URL } from "@/data";
import { isSvg } from "@/lib/util";

/** "Smart Fisher Lanka" -> "SF". Used by the no-screenshot placeholder. */
const monogram = (title: string) =>
  title
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

/**
 * Shown until a project has a real screenshot. A typographic panel is honest
 * about there being no image yet; a stock mockup would misrepresent the work.
 */
const ProjectPlaceholder = ({ title }: { title: string }) => (
  <div
    aria-hidden="true"
    className="relative flex h-full w-full items-center justify-center overflow-hidden bg-surface-2"
  >
    <Image
      src="/grid.svg"
      alt=""
      fill
      unoptimized
      className="object-cover opacity-[0.07]"
    />
    <span className="relative select-none text-5xl font-bold tracking-tight text-purple/25">
      {monogram(title)}
    </span>
  </div>
);

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <header className="text-center">
        <p className="eyebrow">Selected work</p>
        <h2 className="heading mt-3">
          Things I&apos;ve <span className="text-purple">built</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-relaxed text-ink-muted">
          Research, coursework and production systems, from data model through
          to interface.
        </p>
      </header>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((item) => (
          <li
            key={item.id}
            className="surface-card group flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
              {item.img ? (
                <Image
                  src={item.img}
                  alt={`Screenshot of ${item.title}`}
                  fill
                  unoptimized={isSvg(item.img)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
                />
              ) : (
                <ProjectPlaceholder title={item.title} />
              )}
            </div>

            <div className="flex flex-1 flex-col p-5 lg:p-6">
              <p className="eyebrow">{item.context}</p>

              <h3 className="mt-2.5 text-balance text-lg font-semibold leading-snug tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-ink-faint">{item.subtitle}</p>

              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.des}
              </p>

              <ul
                className="mt-5 flex flex-wrap gap-1.5"
                aria-label={`${item.title} tech stack`}
              >
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-t border-line pt-4 text-sm font-medium text-purple transition-colors hover:text-ink"
                >
                  Visit live site
                  <FaArrowRight
                    aria-hidden="true"
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-sm text-ink-muted">
        More on{" "}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-purple underline-offset-4 hover:underline"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
};

export default RecentProjects;
