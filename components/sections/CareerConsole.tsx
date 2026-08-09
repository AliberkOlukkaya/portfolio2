"use client";

import { motion } from "framer-motion";
import { Braces, BriefcaseBusiness, Code2 } from "lucide-react";

import { skills } from "@/lib/content";
import { dictionaries, getExperience, type Locale } from "@/lib/i18n";

const skillNames: Record<string, string> = {
  Programming: "programming",
  "AI & Data": "aiAndData",
  Development: "development",
};

/* ------------------------------------------------ */
/* CODE LINE                                         */
/* ------------------------------------------------ */

function CodeLine({
  number,
  children,
}: {
  number: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="
        grid
        grid-cols-[42px_minmax(0,1fr)]
        gap-4
      "
    >
      <span
        aria-hidden="true"
        className="
          select-none
          text-right

          font-mono
          text-[12px]
          leading-[30px]

          text-white/20
        "
      >
        {number}
      </span>

      <div
        className="
          min-w-0

          font-mono
          text-[14px]
          leading-[30px]

          text-[#e7e4ed]

          sm:text-[15px]
          xl:text-[16px]
        "
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------ */
/* MAC WINDOW                                        */
/* ------------------------------------------------ */

function MacCodeWindow({
  filename,
  icon,
  children,
}: {
  filename: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        group relative
        overflow-hidden

        rounded-[20px]

        border border-white/[0.13]

        bg-[#0b0b13]

        shadow-[
          inset_0_1px_0_rgba(255,255,255,0.10),
          inset_0_0_65px_rgba(139,92,246,0.035),
          0_32px_90px_-38px_rgba(0,0,0,0.95)
        ]

        transition-[transform,border-color,box-shadow]
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]

        hover:-translate-y-1
        hover:border-white/[0.18]

        hover:shadow-[
          inset_0_1px_0_rgba(255,255,255,0.12),
          inset_0_0_75px_rgba(139,92,246,0.05),
          0_38px_105px_-40px_rgba(0,0,0,1),
          0_0_55px_-36px_rgba(139,92,246,0.55)
        ]
      "
    >
      {/* Inner reflection */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0

          bg-[radial-gradient(circle_at_60%_-15%,rgba(255,255,255,0.11),transparent_30%)]

          opacity-80
        "
      />

      {/* ------------------------------------------------ */}
      {/* MAC TITLE BAR                                    */}
      {/* ------------------------------------------------ */}

      <div
        className="
          relative z-10
          flex h-[58px]
          items-center

          border-b border-white/[0.08]

          bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))]

          px-5
        "
      >
        {/* macOS buttons */}
        <div className="flex items-center gap-[7px]">
          <span
            className="
              h-[12px] w-[12px]
              rounded-full

              bg-[#ff5f57]

              shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18)]
            "
          />

          <span
            className="
              h-[12px] w-[12px]
              rounded-full

              bg-[#febc2e]

              shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18)]
            "
          />

          <span
            className="
              h-[12px] w-[12px]
              rounded-full

              bg-[#28c840]

              shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18)]
            "
          />
        </div>

        {/* Filename */}
        <div
          className="
            pointer-events-none
            absolute left-1/2
            flex -translate-x-1/2
            items-center gap-2

            font-mono
            text-[12px]
            font-semibold

            text-white/45
          "
        >
          {icon}

          {filename}
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* EDITOR BODY                                      */}
      {/* ------------------------------------------------ */}

      <div
        className="
          relative z-10
          h-[650px]
          overflow-auto

          px-4 py-6

          sm:px-6
        "
      >
        {children}
      </div>

      {/* Bottom status */}
      <div
        className="
          relative z-10
          flex h-[38px]
          items-center justify-between

          border-t border-white/[0.07]

          bg-white/[0.018]

          px-5

          font-mono
          text-[9px]
          uppercase
          tracking-[0.15em]

          text-white/25
        "
      >
        <span>TypeScript</span>

        <span>UTF-8</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------ */
/* SKILLS CODE                                       */
/* ------------------------------------------------ */

function SkillsCode() {
  let line = 1;

  return (
    <>
      <CodeLine number={line++}>
        <span className="text-[#c084fc]">const</span>{" "}
        <span className="text-[#67e8f9]">
          engineeringToolkit
        </span>{" "}
        <span className="text-white/55">=</span>{" "}
        <span className="text-white">{"{"}</span>
      </CodeLine>

      {skills.map((group, groupIndex) => {
        const key =
          skillNames[group.group] ??
          group.group.toLowerCase().replace(/\s+/g, "");

        return (
          <div key={group.group}>
            <CodeLine number={line++}>
              <span className="pl-5">
                <span className="text-[#93c5fd]">
                  {key}
                </span>

                <span className="text-white/45">
                  : [
                </span>
              </span>
            </CodeLine>

            {group.items.map((skill, index) => (
              <CodeLine key={skill} number={line++}>
                <span className="pl-10">
                  <span className="text-[#f0abfc]">
                    &quot;{skill}&quot;
                  </span>

                  {index !== group.items.length - 1 && (
                    <span className="text-white/40">
                      ,
                    </span>
                  )}
                </span>
              </CodeLine>
            ))}

            <CodeLine number={line++}>
              <span className="pl-5 text-white/55">
                ]
                {groupIndex !== skills.length - 1
                  ? ","
                  : ""}
              </span>
            </CodeLine>

            {groupIndex !== skills.length - 1 && (
              <CodeLine number={line++}>
                <span />
              </CodeLine>
            )}
          </div>
        );
      })}

      <CodeLine number={line++}>
        <span className="text-white">{"}"}</span>
        <span className="text-white/55">;</span>
      </CodeLine>
    </>
  );
}

/* ------------------------------------------------ */
/* EXPERIENCE CODE                                   */
/* ------------------------------------------------ */

function ExperienceCode({ locale }: { locale: Locale }) {
  let line = 1;
  const experience = getExperience(locale);

  return (
    <>
      <CodeLine number={line++}>
        <span className="text-[#c084fc]">
          const
        </span>{" "}
        <span className="text-[#67e8f9]">
          experience
        </span>{" "}
        <span className="text-white/55">=</span>{" "}
        <span className="text-white">[</span>
      </CodeLine>

      {experience.map((item, experienceIndex) => (
        <div key={`${item.org}-${item.role}`}>
          <CodeLine number={line++}>
            <span className="pl-5 text-white">
              {"{"}
            </span>
          </CodeLine>

          <CodeLine number={line++}>
            <span className="pl-10">
              <span className="text-[#93c5fd]">
                role
              </span>

              <span className="text-white/45">
                :{" "}
              </span>

              <span className="text-[#f0abfc]">
                &quot;{item.role}&quot;
              </span>

              <span className="text-white/40">
                ,
              </span>
            </span>
          </CodeLine>

          <CodeLine number={line++}>
            <span className="pl-10">
              <span className="text-[#93c5fd]">
                organization
              </span>

              <span className="text-white/45">
                :{" "}
              </span>

              <span className="text-[#f0abfc]">
                &quot;{item.org}&quot;
              </span>

              <span className="text-white/40">
                ,
              </span>
            </span>
          </CodeLine>

          <CodeLine number={line++}>
            <span className="pl-10">
              <span className="text-[#93c5fd]">
                period
              </span>

              <span className="text-white/45">
                :{" "}
              </span>

              <span className="text-[#fde68a]">
                &quot;{item.period}&quot;
              </span>

              <span className="text-white/40">
                ,
              </span>
            </span>
          </CodeLine>

          {item.location && (
            <CodeLine number={line++}>
              <span className="pl-10">
                <span className="text-[#93c5fd]">
                  location
                </span>

                <span className="text-white/45">
                  :{" "}
                </span>

                <span className="text-[#86efac]">
                  &quot;{item.location}&quot;
                </span>

                <span className="text-white/40">
                  ,
                </span>
              </span>
            </CodeLine>
          )}

          <CodeLine number={line++}>
            <span className="pl-10">
              <span className="text-[#93c5fd]">
                highlights
              </span>

              <span className="text-white/45">
                : [
              </span>
            </span>
          </CodeLine>

          {item.points.map((point, pointIndex) => (
            <CodeLine
              key={pointIndex}
              number={line++}
            >
              <span
                className="
                  block max-w-xl
                  pl-14
                  text-[#f0abfc]
                "
              >
                &quot;{point}&quot;

                {pointIndex !==
                  item.points.length - 1 && (
                  <span className="text-white/40">
                    ,
                  </span>
                )}
              </span>
            </CodeLine>
          ))}

          <CodeLine number={line++}>
            <span className="pl-10 text-white/55">
              ]
            </span>
          </CodeLine>

          <CodeLine number={line++}>
            <span className="pl-5">
              <span className="text-white">
                {"}"}
              </span>

              {experienceIndex !==
                experience.length - 1 && (
                <span className="text-white/40">
                  ,
                </span>
              )}
            </span>
          </CodeLine>

          {experienceIndex !==
            experience.length - 1 && (
            <CodeLine number={line++}>
              <span />
            </CodeLine>
          )}
        </div>
      ))}

      <CodeLine number={line++}>
        <span className="text-white">]</span>
        <span className="text-white/55">;</span>
      </CodeLine>
    </>
  );
}

/* ------------------------------------------------ */
/* MAIN COMPONENT                                    */
/* ------------------------------------------------ */

export default function CareerConsole({ locale }: { locale: Locale }) {
  const copy = dictionaries[locale].career;

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden

        border-y border-white/[0.05]

        bg-[#07070d]

        px-5 py-24

        sm:px-8
        lg:px-12
        lg:py-32
      "
    >
      {/* background glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-64 top-20

          h-[38rem] w-[38rem]

          rounded-full

          bg-[radial-gradient(circle,rgba(109,40,217,0.14),rgba(67,56,202,0.05)_45%,transparent_72%)]

          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-64 bottom-10

          h-[36rem] w-[36rem]

          rounded-full

          bg-[radial-gradient(circle,rgba(59,130,246,0.10),rgba(79,70,229,0.04)_45%,transparent_72%)]

          blur-[130px]
        "
      />

      <div
        className="
          relative z-10
          mx-auto
          max-w-[1550px]
        "
      >
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-14
            text-center
          "
        >
          <p
            className="
              font-mono
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]

              text-purple-300
            "
          >
            {copy.eyebrow}
          </p>

          <h2
            className="
              mt-4

              font-heading
              text-[44px]
              font-black
              tracking-[-0.055em]

              text-white

              sm:text-[54px]
              lg:text-[64px]
            "
          >
            {copy.title}
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl

              text-[17px]
              font-medium
              leading-relaxed

              text-white/55

              sm:text-[18px]
            "
          >
            {copy.description}
          </p>
        </motion.div>

        {/* TWO MAC WINDOWS */}
        <div
          className="
            grid gap-8

            xl:grid-cols-2
            xl:gap-10
          "
        >
          {/* Skills */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              id="skills-console"
              className="mb-4 flex items-center gap-3"
            >
              <Code2
                size={19}
                className="text-purple-300"
              />

              <h3
                className="
                  font-heading
                  text-[22px]
                  font-bold
                  text-white
                "
              >
                {copy.toolkit}
              </h3>
            </div>

            <MacCodeWindow
              filename="skills.config.ts"
              icon={
                <Braces
                  size={14}
                  className="text-purple-300/70"
                />
              }
            >
              <SkillsCode />
            </MacCodeWindow>
          </motion.div>

          {/* Experience */}
          <motion.div
            id="experience"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <BriefcaseBusiness
                size={19}
                className="text-purple-300"
              />

              <h3
                className="
                  font-heading
                  text-[22px]
                  font-bold
                  text-white
                "
              >
                {copy.experience}
              </h3>
            </div>

            <MacCodeWindow
              filename="experience.ts"
              icon={
                <Braces
                  size={14}
                  className="text-purple-300/70"
                />
              }
            >
              <ExperienceCode locale={locale} />
            </MacCodeWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
