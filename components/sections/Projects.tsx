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

const featuredProjects = projects.filter(
  (project) => project.id !== "portfolio",
);

export default function Projects() {
  const reduceMotion = useReducedMotion();

  const [activeId, setActiveId] = React.useState(
    featuredProjects[0]!.id,
  );

  const activeProject =
    featuredProjects.find(
      (project) => project.id === activeId,
    ) ?? featuredProjects[0]!;

  const enterAnimation = reduceMotion
    ? {
        opacity: 1,
      }
    : {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      };

  const initialAnimation = reduceMotion
    ? {
        opacity: 0,
      }
    : {
        opacity: 0,
        y: 12,
        filter: "blur(6px)",
      };

  const exitAnimation = reduceMotion
    ? {
        opacity: 0,
      }
    : {
        opacity: 0,
        y: -12,
        filter: "blur(6px)",
      };

  const transition = {
    duration: 0.45,
    ease: [0.16, 1, 0.3, 1] as const,
    opacity: {
      duration: 0.3,
    },
  };

  return (
    <section
      id="projects"
      className="
        mx-auto max-w-7xl px-6 py-24
        md:py-32
        lg:max-w-[1500px]
      "
    >
      <Reveal className="mb-12 text-center md:mb-16">
        <span
          className="
            mb-3 block font-mono text-xs
            uppercase tracking-[0.28em]
            text-purple-400
          "
        >
          Selected work
        </span>

        <h2
          className="
            font-heading text-3xl font-bold tracking-tight
            sm:text-4xl
            md:text-5xl
          "
        >
          Featured Projects
        </h2>

        <span
          className="
            mx-auto mt-4 block h-px w-28
            bg-gradient-to-r
            from-transparent via-purple-400 to-transparent
          "
        />
      </Reveal>

      <Reveal>
        <ProjectTabs
          projects={featuredProjects}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </Reveal>

      <AnimatePresence mode="wait" initial={false}>
        <motion.h3
          key={activeProject.id}
          initial={initialAnimation}
          animate={enterAnimation}
          exit={exitAnimation}
          transition={transition}
          className="
            mt-10 font-heading font-bold
            leading-[1.08] tracking-tight
            text-balance text-ink
            md:mt-12
          "
          style={{
            fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
          }}
        >
          {activeProject.title}
        </motion.h3>
      </AnimatePresence>

      <div
        role="tabpanel"
        id={`project-panel-${activeProject.id}`}
        aria-labelledby={`project-tab-${activeProject.id}`}
        className="
          mt-8 grid items-start gap-10
          md:mt-10
          md:grid-cols-[minmax(340px,0.75fr)_minmax(0,1.75fr)]
          md:gap-12
          lg:gap-16
        "
        style={{
          isolation: "isolate",
        }}
      >
        <div className="relative z-30 min-w-0 md:order-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeProject.id}
              initial={initialAnimation}
              animate={enterAnimation}
              exit={exitAnimation}
              transition={transition}
            >
              <ProjectDetails project={activeProject} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="relative min-w-0 md:order-2"
          style={{
            isolation: "isolate",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeProject.id}
              initial={initialAnimation}
              animate={enterAnimation}
              exit={exitAnimation}
              transition={transition}
              className="
                grid items-start gap-6
                xl:grid-cols-[minmax(0,1fr)_160px]
              "
            >
              <div className="min-w-0">
                <ProjectImageStack
                  projectId={activeProject.id}
                  projectTitle={activeProject.title}
                  screenshots={activeProject.screenshots}
                />
              </div>

              <aside className="min-w-0 xl:pt-2">
                <p
                  className="
                    mb-4 font-mono text-[11px] font-bold
                    uppercase tracking-[0.18em]
                    text-white
                  "
                >
                  Technology stack
                </p>

                <ul
                  className="
                    flex flex-wrap gap-2.5
                    xl:flex-col
                    xl:items-stretch
                  "
                >
                  {activeProject.stack.map((technology) => (
                    <li
                      key={technology}
                      className="
                        rounded-xl
                        border border-white/80
                        bg-[#f4f1e9]
                        px-3 py-2.5

                        text-center font-mono
                        text-xs font-bold
                        text-[#171426]

                        shadow-[0_8px_24px_-18px_rgba(255,255,255,0.8)]

                        transition-all duration-300

                        hover:-translate-y-0.5
                        hover:border-purple-300
                        hover:bg-white
                        hover:shadow-[0_12px_30px_-18px_rgba(157,120,255,0.9)]
                      "
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </aside>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}