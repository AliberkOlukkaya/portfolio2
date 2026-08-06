"use client";

import * as React from "react";
import type { Project } from "@/lib/content";
import { Button } from "@/components/ui/flow-hover-button";

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
  const buttonRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const normalizedIndex =
      ((index % projects.length) + projects.length) % projects.length;

    buttonRefs.current[normalizedIndex]?.focus();
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
        focusTab(index + 1);
        break;

      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTab(index - 1);
        break;

      case "Home":
        event.preventDefault();
        focusTab(0);
        break;

      case "End":
        event.preventDefault();
        focusTab(projects.length - 1);
        break;
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Projects"
      aria-orientation="horizontal"
      className="
        -mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-3
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
        md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0
        xl:grid-cols-4
      "
    >
      {projects.map((project, index) => {
        const isActive = project.id === activeId;

        return (
          <Button
            key={project.id}
            ref={(element) => {
              buttonRefs.current[index] = element;
            }}
            active={isActive}
            role="tab"
            id={`project-tab-${project.id}`}
            aria-selected={isActive}
            aria-controls={`project-panel-${project.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(project.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {project.title}
          </Button>
        );
      })}
    </div>
  );
}