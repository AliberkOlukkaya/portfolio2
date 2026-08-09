"use client";

import * as React from "react";
import type { Project } from "@/lib/content";

const projectIcons: Record<string, string> = {
  "traffic-enforcement": "🚘",
  phoenixdf: "📚",
  "taskflow-ai": "🧠",
  gamescope: "🎮",
};

type ProjectTabsProps = {
  projects: Project[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function ProjectTabs({
  projects,
  activeId,
  onSelect,
}: ProjectTabsProps) {
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const focusProject = (index: number) => {
    const normalizedIndex =
      ((index % projects.length) + projects.length) % projects.length;

    itemRefs.current[normalizedIndex]?.focus();
    onSelect(projects[normalizedIndex]!.id);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusProject(index + 1);
        break;

      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusProject(index - 1);
        break;

      case "Home":
        event.preventDefault();
        focusProject(0);
        break;

      case "End":
        event.preventDefault();
        focusProject(projects.length - 1);
        break;
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Projects"
      aria-orientation="horizontal"
      className="
        -mx-6 flex flex-nowrap items-center gap-5
        overflow-x-auto px-6 pb-5
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden

        md:mx-0 md:px-0

        xl:-mx-20
        xl:w-[calc(100%+10rem)]
        xl:justify-between
        xl:gap-4

        2xl:-mx-28
        2xl:w-[calc(100%+14rem)]
      "
    >
      {projects.map((project, index) => {
        const isActive = project.id === activeId;

        return (
          <button
            key={project.id}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`project-tab-${project.id}`}
            aria-selected={isActive}
            aria-controls={`project-panel-${project.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(project.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`
              group relative flex shrink-0 items-center gap-2.5
              border-0 bg-transparent px-1 py-3

              font-heading text-[15px] font-extrabold leading-none
              tracking-[-0.03em]
              xl:text-[16px]
              2xl:text-[17px]

              transition-all duration-300
              hover:-translate-y-0.5
              focus-visible:outline-none

              ${
                isActive
                  ? `
                    text-white
                    drop-shadow-[0_0_14px_rgba(157,120,255,0.85)]
                  `
                  : `
                    text-[#d2c7ee]
                    hover:text-white
                    hover:drop-shadow-[0_0_10px_rgba(157,120,255,0.65)]
                  `
              }
            `}
          >
            <span
              aria-hidden="true"
              className={`
                text-[21px] leading-none
                transition-all duration-300
                xl:text-[22px]

                ${
                  isActive
                    ? `
                      opacity-100
                      drop-shadow-[0_0_8px_rgba(157,120,255,0.9)]
                    `
                    : `
                      opacity-90
                      group-hover:scale-110
                      group-hover:opacity-100
                    `
                }
              `}
            >
              {projectIcons[project.id] ?? "✦"}
            </span>

            <span className="relative whitespace-nowrap">
              {project.title}

              {isActive && (
                <span
                  aria-hidden="true"
                  className="
                    absolute -bottom-2.5 left-0
                    h-[2px] w-full rounded-full

                    bg-gradient-to-r
                    from-fuchsia-400
                    via-violet-400
                    to-indigo-400

                    shadow-[0_0_12px_rgba(157,120,255,0.95)]
                  "
                />
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
