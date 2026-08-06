"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/content";

export default function ProjectTabs({
  projects,
  activeId,
  onSelect,
}: {
  projects: Project[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const reduce = useReducedMotion();
  const btnRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = projects.findIndex((p) => p.id === activeId);

  const focusTab = (index: number) => {
    const i = ((index % projects.length) + projects.length) % projects.length;
    btnRefs.current[i]?.focus();
    onSelect(projects[i]!.id);
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(projects.length - 1);
        break;
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Projects"
      aria-orientation="horizontal"
      className="-mx-6 flex snap-x gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
    >
      {projects.map((p, i) => {
        const isActive = p.id === activeId;
        return (
          <motion.button
            key={p.id}
            ref={(el) => {
              btnRefs.current[i] = el;
            }}
            role="tab"
            id={`project-tab-${p.id}`}
            aria-selected={isActive}
            aria-controls={`project-panel-${p.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(p.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            whileHover={!reduce && !isActive ? { y: -2 } : {}}
            whileTap={!reduce ? { scale: 0.98 } : {}}
            className={[
              "relative shrink-0 snap-start whitespace-nowrap rounded-xl border px-5 py-3 text-sm font-medium transition-all",
              isActive
                ? "border-purple-500/60 bg-purple-600/15 text-ink shadow-glow-sm"
                : "border-line bg-base-700/50 text-ink-muted backdrop-blur-sm hover:border-purple-500/40 hover:bg-purple-600/10 hover:text-ink hover:shadow-[0_0_24px_-8px_rgba(157,120,255,0.3)]",
            ].join(" ")}
          >
            {isActive && !reduce && (
              <motion.span
                layoutId="project-tab-active"
                className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-purple-600/15 shadow-glow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{p.title}</span>
            {isActive && (
              <motion.span
                layoutId="project-tab-underline"
                className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
