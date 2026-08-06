"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";
import ProjectTabs from "@/components/sections/projects/ProjectTabs";
import ProjectDetails from "@/components/sections/projects/ProjectDetails";
import ProjectImageStack from "@/components/sections/projects/ProjectImageStack";

export default function Projects() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = React.useState(projects[0]!.id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0]!;

  const enter = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: 0, filter: "blur(0px)" };
  const from = reduce
    ? { opacity: 0 }
    : { opacity: 0, y: 12, filter: "blur(6px)" };
  const exit = reduce
    ? { opacity: 0 }
    : { opacity: 0, y: -12, filter: "blur(6px)" };

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:max-w-[1500px]">
      <Reveal className="mb-12 md:mb-16">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>
        <span className="mt-3 block h-px w-24 bg-gradient-to-r from-purple-500 to-transparent" />
      </Reveal>

      <Reveal>
        <ProjectTabs
          projects={projects}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </Reveal>

      <AnimatePresence mode="wait" initial={false}>
        <motion.h3
          key={active.id}
          initial={from}
          animate={enter}
          exit={exit}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.3 }
          }}
          className="mt-10 font-heading text-balance font-bold tracking-tight text-ink md:mt-12"
          style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)", lineHeight: 1.1 }}
        >
          {active.title}
        </motion.h3>
      </AnimatePresence>

      <div
        role="tabpanel"
        id={`project-panel-${active.id}`}
        aria-labelledby={`project-tab-${active.id}`}
        className="mt-8 grid items-start gap-8 md:mt-10 md:grid-cols-[minmax(360px,0.85fr)_minmax(0,1.65fr)] md:gap-12 lg:gap-16"
        style={{ isolation: "isolate" }}
      >
        {/* Details column */}
        <div className="relative z-30 min-w-0 md:order-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={from}
              animate={enter}
              exit={exit}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.3 }
              }}
            >
              <ProjectDetails project={active} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image stack column — isolated container */}
        <div className="relative min-w-0 md:order-2" style={{ isolation: "isolate" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={from}
              animate={enter}
              exit={exit}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.3 }
              }}
            >
              <ProjectImageStack
                projectId={active.id}
                projectTitle={active.title}
                screenshots={active.screenshots}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
