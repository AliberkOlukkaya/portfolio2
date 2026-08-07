"use client";

import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        min-w-0
        py-20
        lg:py-28
      "
    >
      <SectionHeading
        index="03 / Experience"
        title="Selected experience"
        subtitle="Technical work, leadership, and operational responsibility."
      />

      <div className="space-y-5">
        {experience.map((item) => (
          <article
            key={`${item.org}-${item.role}`}
            className="
              group relative
              overflow-hidden
              rounded-[28px]

              border border-black/10
              bg-[#f4f1f7]

              px-7 py-7

              shadow-[0_24px_60px_-36px_rgba(0,0,0,0.50)]

              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]

              hover:-translate-y-1
              hover:border-purple-400/30

              hover:shadow-[0_28px_70px_-34px_rgba(124,58,237,0.24)]
            "
          >
            {/* left accent */}
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-6 left-0 top-6

                w-[3px]
                rounded-full

                bg-gradient-to-b
                from-purple-500
                via-violet-500
                to-indigo-500

                opacity-75
              "
            />

            <div
              className="
                grid gap-6
                xl:grid-cols-[130px_minmax(0,1fr)]
              "
            >
              {/* date */}
              <div>
                <span
                  className="
                    inline-flex
                    rounded-full

                    border border-purple-500/15
                    bg-purple-500/[0.07]

                    px-3.5 py-2

                    font-mono
                    text-[13px]
                    font-bold
                    tracking-[0.06em]

                    text-purple-800
                  "
                >
                  {item.period}
                </span>
              </div>

              {/* content */}
              <div className="min-w-0">
                <h3
                  className="
                    font-heading
                    text-[25px]
                    font-bold
                    leading-tight
                    tracking-[-0.04em]

                    text-[#141119]
                  "
                >
                  {item.role}
                </h3>

                <p
                  className="
                    mt-2

                    text-[16px]
                    font-medium
                    leading-relaxed

                    text-[#686171]
                  "
                >
                  {item.org}
                  {item.location ? ` · ${item.location}` : ""}
                </p>

                <ul className="mt-6 space-y-3.5">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="
                        relative
                        pl-6

                        text-[16px]
                        font-medium
                        leading-[1.75]

                        text-[#4f4959]

                        before:absolute
                        before:left-0
                        before:top-[0.7em]

                        before:h-2
                        before:w-2

                        before:rounded-full
                        before:bg-purple-500

                        before:shadow-[0_0_8px_rgba(139,92,246,0.35)]
                      "
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}