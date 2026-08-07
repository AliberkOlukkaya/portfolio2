"use client";

import SectionHeading from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { skills } from "@/lib/content";
import {
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
    <section
      id="skills"
      className="
        min-w-0
        py-20
        lg:py-28
      "
    >
      <SectionHeading
        index="02 / Skills"
        title="Engineering toolkit"
        subtitle="Technologies I use to build practical AI, data, and software systems."
      />

      <RevealGroup
        className="
          grid gap-5
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
                  group relative
                  min-h-[340px]
                  overflow-hidden
                  rounded-[28px]

                  border border-black/10
                  bg-[#f4f1f7]

                  px-7 py-7

                  shadow-[0_24px_60px_-34px_rgba(0,0,0,0.55)]

                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  hover:-translate-y-1.5
                  hover:scale-[1.01]
                  hover:border-purple-400/35

                  hover:shadow-[0_28px_70px_-32px_rgba(124,58,237,0.28)]
                "
              >
                {/* subtle accent */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute -bottom-20 -right-16

                    h-48 w-48
                    rounded-full

                    bg-[radial-gradient(circle,rgba(139,92,246,0.18),rgba(99,102,241,0.08)_45%,transparent_72%)]

                    blur-[46px]

                    transition-transform
                    duration-700

                    group-hover:scale-110
                  "
                />

                <div className="relative z-10">
                  {/* icon */}
                  <div
                    className="
                      flex h-12 w-12
                      items-center justify-center

                      rounded-2xl

                      border border-black/10
                      bg-white

                      text-purple-700

                      shadow-sm
                    "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </div>

                  {/* title */}
                  <h3
                    className="
                      mt-7

                      font-heading
                      text-[26px]
                      font-bold
                      tracking-[-0.045em]

                      text-[#121018]
                    "
                  >
                    {skillGroup.group}
                  </h3>

                  {/* description */}
                  <p
                    className="
                      mt-3
                      max-w-sm

                      font-body
                      text-[16px]
                      font-medium
                      leading-[1.75]

                      text-[#625d6d]
                    "
                  >
                    {meta.description}
                  </p>

                  {/* technologies */}
                  <ul
                    className="
                      mt-7
                      flex flex-wrap
                      gap-2.5
                    "
                  >
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className="
                          rounded-full

                          border border-black/[0.10]
                          bg-white

                          px-3.5 py-2

                          font-mono
                          text-[13px]
                          font-semibold

                          text-[#403a4a]

                          shadow-[0_4px_14px_-10px_rgba(0,0,0,0.35)]

                          transition-all
                          duration-300

                          group-hover:border-purple-400/25
                        "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}