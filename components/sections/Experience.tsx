"use client";

import SectionHeading from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-6 py-24 md:py-32"
    >
      <SectionHeading index="03 / Experience" title="Where I've worked" />

      <RevealGroup className="relative flex flex-col gap-2">
        {/* Timeline line */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-purple-500/60 via-line to-transparent md:left-[9px]"
        />

        {experience.map((e) => (
          <RevealItem key={`${e.org}-${e.role}`}>
            <div className="relative flex gap-6 pb-10 pl-8 md:pl-10">
              {/* Node */}
              <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-purple-500 bg-base md:h-5 md:w-5">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              </span>

              <div className="flex-1">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-heading text-lg font-semibold text-ink">{e.role}</h3>
                  <span className="shrink-0 font-mono text-xs text-purple-400">
                    {e.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-ink-muted">
                  {e.org}
                  {e.location ? ` · ${e.location}` : ""}
                </p>
                <ul className="mt-3 space-y-2">
                  {e.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
