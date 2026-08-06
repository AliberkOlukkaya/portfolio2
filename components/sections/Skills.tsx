"use client";

import SectionHeading from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { skills } from "@/lib/content";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
} from "lucide-react";

const skillMeta = [
  {
    icon: Code2,
    description:
      "Core languages and programming foundations used across backend, data, and application development.",
  },
  {
    icon: BrainCircuit,
    description:
      "Machine learning, deep learning, and data tools used to build intelligent systems.",
  },
  {
    icon: Database,
    description:
      "Frameworks, databases, APIs, and engineering tools used to ship complete products.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-w-0 py-20 lg:py-28">
      <SectionHeading
        index="02 / Skills"
        title="Engineering toolkit"
        subtitle="Technologies I use to build practical AI, data, and software systems."
      />

      <RevealGroup
        className="
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-1
          2xl:grid-cols-2
        "
      >
        {skills.map((skillGroup, index) => {
          const meta = skillMeta[index] ?? skillMeta[0];
          const Icon = meta.icon;

          return (
            <RevealItem key={skillGroup.group}>
              <article
                className="
                  group relative isolate
                  min-h-[390px] overflow-hidden
                  rounded-[32px]
                  border border-white/[0.08]
                  bg-[#050509]
                  px-7 py-8

                  shadow-[0_28px_80px_-45px_rgba(0,0,0,0.95)]

                  transition-[transform,border-color,box-shadow]
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  hover:-translate-y-2
                  hover:scale-[1.015]
                  hover:border-purple-400/25
                  hover:shadow-[0_35px_95px_-42px_rgba(109,64,224,0.55)]
                "
              >
                {/* Alt taraftaki mor-mavi ışık */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    -bottom-28 -left-16 right-[-4rem]
                    h-64 rounded-full

                    bg-[radial-gradient(circle_at_30%_50%,rgba(36,132,198,0.55),transparent_38%),radial-gradient(circle_at_72%_55%,rgba(109,64,224,0.75),transparent_42%),radial-gradient(circle_at_95%_60%,rgba(192,38,211,0.48),transparent_35%)]

                    blur-3xl
                    opacity-70

                    transition-[opacity,transform]
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    group-hover:translate-y-[-10px]
                    group-hover:scale-110
                    group-hover:opacity-100
                  "
                />

                {/* İç yüzey parlaması */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0
                    rounded-[inherit]

                    bg-[linear-gradient(145deg,rgba(255,255,255,0.035),transparent_35%,transparent_70%,rgba(157,120,255,0.045))]
                  "
                />

                <div className="relative z-10 flex h-full flex-col">
                  {/* İkon */}
                  <div
                    className="
                      mb-10 flex h-14 w-14
                      items-center justify-center
                      rounded-full

                      border border-white/[0.08]
                      bg-[linear-gradient(145deg,#1b1d2c,#090a12)]
                      text-white

                      shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_-14px_rgba(99,102,241,0.7)]

                      transition-transform duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      group-hover:rotate-3
                      group-hover:scale-110
                    "
                  >
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  {/* Başlık */}
                  <h3
                    className="
                      font-heading text-[25px]
                      font-bold tracking-[-0.04em]
                      text-white
                    "
                  >
                    {skillGroup.group}
                  </h3>

                  {/* Açıklama */}
                  <p
                    className="
                      mt-3 max-w-sm
                      font-body text-[15px]
                      leading-[1.7]
                      text-white/55
                    "
                  >
                    {meta.description}
                  </p>

                  {/* Teknolojiler */}
                  <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-3">
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className="
                          relative pl-3
                          font-mono text-xs
                          font-semibold text-white/70

                          transition-colors duration-300

                          before:absolute
                          before:left-0 before:top-1/2
                          before:h-1 before:w-1
                          before:-translate-y-1/2
                          before:rotate-45
                          before:bg-purple-400/80

                          group-hover:text-white
                        "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Alt bağlantı hissi */}
                  <div
                    className="
                      mt-auto flex items-center gap-2
                      pt-9

                      font-heading text-sm
                      font-semibold text-white/75

                      transition-colors duration-300
                      group-hover:text-white
                    "
                  >
                    Explore toolkit

                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="
                        transition-transform duration-500
                        ease-[cubic-bezier(0.16,1,0.3,1)]

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}