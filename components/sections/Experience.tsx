"use client";

import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-w-0 py-20 lg:py-28"
    >
      <SectionHeading
        index="03 / Experience"
        title="Selected experience"
        subtitle="Technical work, leadership, and operational responsibility."
      />

      <div className="border-t border-white/10">
        {experience.map((item, index) => (
          <article
            key={`${item.org}-${item.role}`}
            className="
              group relative
              border-b border-white/10
              py-7
              transition-colors duration-500
              hover:border-purple-400/30
              hover:bg-white/[0.018]
            "
          >
            <div className="grid gap-5 xl:grid-cols-[112px_minmax(0,1fr)]">
              {/* Tarih ve sıra */}
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.08em] text-purple-400">
                  {item.period}
                </span>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#736b89]">
                  Record {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Deneyim içeriği */}
              <div className="min-w-0">
                <h3
                  className="
                    font-heading text-[20px] font-bold
                    leading-tight tracking-[-0.035em]
                    text-white
                  "
                >
                  {item.role}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#aaa2bd]">
                  {item.org}
                  {item.location ? ` · ${item.location}` : ""}
                </p>

                <ul className="mt-5 space-y-4">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="
                        grid grid-cols-[24px_minmax(0,1fr)]
                        gap-3 text-sm leading-[1.75]
                        text-[#c4bbd8]
                      "
                    >
                      <span className="pt-[2px] font-mono text-[10px] font-bold text-purple-400/80">
                        {String(pointIndex + 1).padStart(2, "0")}
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hover çizgisi */}
            <span
              aria-hidden="true"
              className="
                absolute bottom-0 left-0 h-px w-0
                bg-gradient-to-r
                from-purple-400 via-indigo-400 to-transparent
                transition-[width] duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:w-full
              "
            />
          </article>
        ))}
      </div>
    </section>
  );
}