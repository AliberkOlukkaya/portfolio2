"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

import ProjectTabs from "@/components/sections/projects/ProjectTabs";
import ProjectDetails from "@/components/sections/projects/ProjectDetails";
import ProjectImageStack from "@/components/sections/projects/ProjectImageStack";

const stackColors = [
  {
    bg: "bg-[#fff1e8]",
    text: "text-[#8a3b12]",
    border: "border-[#ffb38a]",
    shadow:
      "shadow-[0_10px_26px_-16px_rgba(255,120,70,0.55)]",
  },
  {
    bg: "bg-[#ede4ff]",
    text: "text-[#5b21b6]",
    border: "border-[#b794f4]",
    shadow:
      "shadow-[0_10px_26px_-16px_rgba(139,92,246,0.55)]",
  },
  {
    bg: "bg-[#dff4ff]",
    text: "text-[#0b5cab]",
    border: "border-[#7dd3fc]",
    shadow:
      "shadow-[0_10px_26px_-16px_rgba(56,189,248,0.55)]",
  },
  {
    bg: "bg-[#dcffe8]",
    text: "text-[#117a46]",
    border: "border-[#6ee7b7]",
    shadow:
      "shadow-[0_10px_26px_-16px_rgba(52,211,153,0.55)]",
  },
  {
    bg: "bg-[#fff3bf]",
    text: "text-[#9a6700]",
    border: "border-[#facc15]",
    shadow:
      "shadow-[0_10px_26px_-16px_rgba(250,204,21,0.55)]",
  },
  {
    bg: "bg-[#ffe0e6]",
    text: "text-[#b4234d]",
    border: "border-[#f9a8d4]",
    shadow:
      "shadow-[0_10px_26px_-16px_rgba(244,114,182,0.55)]",
  },
];

export default function Projects() {
  const reduce = useReducedMotion();

  const featuredProjects = React.useMemo(
    () =>
      projects.filter(
        (project) => project.id !== "portfolio",
      ),
    [],
  );

  const [activeId, setActiveId] = React.useState(
    featuredProjects[0]!.id,
  );

  const active =
    featuredProjects.find(
      (project) => project.id === activeId,
    ) ?? featuredProjects[0]!;

  const enter = reduce
    ? {
        opacity: 1,
      }
    : {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      };

  const from = reduce
    ? {
        opacity: 0,
      }
    : {
        opacity: 0,
        y: 12,
        filter: "blur(6px)",
      };

  const exit = reduce
    ? {
        opacity: 0,
      }
    : {
        opacity: 0,
        y: -12,
        filter: "blur(6px)",
      };

  return (
    <section
      id="projects"
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          z-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -inset-x-[3%]
            -inset-y-[5%]

            translate-y-10
            scale-[1.06]

            bg-[url('/contact-bg.png')]
            bg-cover
            bg-center
            bg-no-repeat

            opacity-[0.17]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_55%_50%,rgba(139,92,246,0.10),transparent_48%)]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_25%_65%,rgba(168,85,247,0.06),transparent_38%)]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.82)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-64

            bg-gradient-to-b
            from-black
            via-black/75
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-64

            bg-gradient-to-t
            from-black
            via-black/75
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-32

            bg-gradient-to-r
            from-black
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-y-0
            right-0
            w-32

            bg-gradient-to-l
            from-black
            to-transparent
          "
        />

        <div
          className="
            absolute inset-0
            bg-black/26
          "
        />
      </div>

      {/* PROJECT CONTENT */}

      <div
        className="
          relative z-10

          mx-auto
          w-full
          max-w-[1600px]

          px-5
          py-24

          sm:px-7
          md:py-32

          lg:min-h-[900px]
          lg:px-10
        "
      >
        {/* HEADER */}

        <Reveal
          className="
            mb-12
            text-center

            md:mb-16
          "
        >
          <p
            className="
              mb-4

              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.32em]

              text-purple-300
            "
          >
            Selected Work
          </p>

          <h2
            className="
              font-heading
              text-4xl
              font-bold
              tracking-[-0.045em]

              text-white

              sm:text-5xl
            "
          >
            Featured Projects
          </h2>

          <span
            className="
              mx-auto
              mt-5
              block
              h-px
              w-24

              bg-gradient-to-r
              from-transparent
              via-purple-400
              to-transparent
            "
          />
        </Reveal>

        {/* PROJECT TABS */}

        <Reveal>
          <ProjectTabs
            projects={featuredProjects}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </Reveal>

        {/* PROJECT TITLE */}

        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.h3
            key={active.id}
            initial={from}
            animate={enter}
            exit={exit}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
              opacity: {
                duration: 0.3,
              },
            }}
            className="
              mt-14

              max-w-[1450px]

              font-heading
              font-bold
              tracking-[-0.055em]

              text-white

              md:mt-16
            "
            style={{
              fontSize:
                "clamp(2.2rem, 3.2vw, 3.8rem)",
              lineHeight: 1.08,
            }}
          >
            {active.title}
          </motion.h3>
        </AnimatePresence>

        {/* BODY */}

        <div
          role="tabpanel"
          id={`project-panel-${active.id}`}
          aria-labelledby={`project-tab-${active.id}`}
          className="
            mt-10
            grid
            items-start

            gap-10

            lg:grid-cols-[minmax(330px,0.8fr)_205px_minmax(0,1.45fr)]
            lg:gap-10

            xl:grid-cols-[minmax(360px,0.82fr)_225px_minmax(0,1.5fr)]
            xl:gap-12
          "
          style={{
            isolation: "isolate",
          }}
        >
          {/* LEFT — PROJECT DETAILS */}

          <div
            className="
              relative z-20
              min-w-0

              lg:-ml-6
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={active.id}
                initial={from}
                animate={enter}
                exit={exit}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                  opacity: {
                    duration: 0.3,
                  },
                }}
              >
                <ProjectDetails
                  project={active}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER — TECHNOLOGY STACK */}

          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.aside
              key={`stack-${active.id}`}
              initial={from}
              animate={enter}
              exit={exit}
              transition={{
                duration: 0.45,
                delay: 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative z-20
                lg:pt-1
              "
            >
              <p
                className="
                  mb-5

                  font-mono
                  text-[12px]
                  font-black
                  uppercase
                  tracking-[0.22em]

                  text-white/85
                "
              >
                Technology Stack
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-3

                  lg:flex-col
                "
              >
                {active.stack.map(
                  (tech, index) => {
                    const color =
                      stackColors[
                        index %
                          stackColors.length
                      ];

                    return (
                      <div
                        key={tech}
                        className={`
                          flex
                          min-h-[50px]

                          items-center
                          justify-center

                          rounded-[13px]

                          border
                          ${color.border}
                          ${color.bg}
                          ${color.shadow}

                          px-5
                          py-3

                          text-center

                          font-mono
                          text-[15px]
                          font-black
                          tracking-[0.01em]

                          ${color.text}

                          transition-all
                          duration-300
                          ease-[cubic-bezier(0.16,1,0.3,1)]

                          hover:-translate-y-1
                          hover:scale-[1.035]
                          hover:brightness-[1.06]
                        `}
                      >
                        {tech}
                      </div>
                    );
                  },
                )}
              </div>
            </motion.aside>
          </AnimatePresence>

          {/* RIGHT — PROJECT VISUAL */}

          <div
            className="
              relative
              min-w-0

              lg:flex
              lg:min-h-[430px]
              lg:items-start
            "
            style={{
              isolation: "isolate",
            }}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={`image-${active.id}`}
                initial={from}
                animate={enter}
                exit={exit}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                  opacity: {
                    duration: 0.3,
                  },
                }}
                className="
                  ml-auto

                  flex
                  min-h-[430px]
                  w-full
                  max-w-[720px]

                  items-start
                  justify-center
                "
              >
                <ProjectImageStack
                  projectId={active.id}
                  projectTitle={
                    active.title
                  }
                  screenshots={
                    active.screenshots
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}