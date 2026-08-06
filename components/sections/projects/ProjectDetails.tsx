"use client";

import type { Project } from "@/lib/content";
import { Trophy } from "lucide-react";

export default function ProjectDetails({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="max-w-[430px]">
      <div className="mb-7 flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
          {project.subtitle}
        </span>

        <span className="h-1 w-1 rounded-full bg-purple-400/70" />

        <span className="font-mono text-xs font-semibold text-[#b9b0d0]">
          {project.year}
        </span>

        {project.award && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
            <Trophy size={13} aria-hidden="true" />
            {project.award}
          </span>
        )}
      </div>

      <p
        className="
          font-heading
          text-[21px]
          font-semibold
          leading-[1.72]
          tracking-[-0.025em]
          text-white

          sm:text-[23px]
          sm:leading-[1.75]
        "
      >
        {project.description}
      </p>
    </div>
  );
}