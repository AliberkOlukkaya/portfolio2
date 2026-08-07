"use client";

import type { Project } from "@/lib/content";

import {
  ArrowUpRight,
  Github,
  Trophy,
} from "lucide-react";

export default function ProjectDetails({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="max-w-[470px]">
      {/* META */}

      <div
        className="
          mb-7
          flex flex-wrap
          items-center
          gap-3
        "
      >
        <span
          className="
            font-mono
            text-[11px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-purple-300
          "
        >
          {project.subtitle}
        </span>

        <span
          className="
            h-1 w-1
            rounded-full
            bg-purple-400/70
          "
        />

        <span
          className="
            font-mono
            text-[12px]
            font-semibold
            text-white/60
          "
        >
          {project.year}
        </span>

        {project.award && (
          <span
            className="
              inline-flex
              items-center
              gap-1.5

              rounded-full

              border
              border-emerald-500/35

              bg-emerald-500/10

              px-3.5
              py-1.5

              text-[11px]
              font-semibold
              text-emerald-300
            "
          >
            <Trophy
              size={13}
              aria-hidden="true"
            />

            {project.award}
          </span>
        )}
      </div>

      {/* DESCRIPTION */}

      <p
  className="
    max-w-[520px]

    font-body
    text-[23px]
    font-semibold
    leading-[1.68]
    tracking-[-0.025em]

    text-white

    xl:text-[25px]
    xl:leading-[1.64]
  "
>
  {project.description}
</p>

      {/* LINKS */}

      {(project.repositoryUrl || project.liveUrl) && (
        <div
          className="
            mt-10
            flex flex-wrap
            gap-3
          "
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2.5

                rounded-xl

                border
                border-white/15

                bg-white

                px-5
                py-3

                text-sm
                font-semibold
                text-black

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-purple-500
                hover:text-white
              "
            >
              Live demo

              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </a>
          )}

          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2.5

                rounded-xl

                border
                border-white/15

                bg-white/[0.04]

                px-5
                py-3

                text-sm
                font-semibold
                text-white

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-purple-400/40
                hover:bg-purple-500/10
              "
            >
              <Github
                size={17}
                aria-hidden="true"
              />

              Source
            </a>
          )}
        </div>
      )}
    </div>
  );
}