"use client";

import type { Project } from "@/lib/content";
import { Trophy, Github, ArrowUpRight } from "lucide-react";
import { HoverButtonLink } from "@/components/ui/button-hover";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="font-mono text-sm text-purple-400">{project.year}</span>
        <span className="text-sm text-ink-dim">·</span>
        <span className="text-sm text-ink">{project.subtitle}</span>
        {project.award && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1.5 text-sm font-medium text-emerald-300 shadow-glow-sm">
            <Trophy size={14} aria-hidden="true" /> {project.award}
          </span>
        )}
      </div>

      <p className="max-w-2xl font-body text-pretty text-lg leading-relaxed text-ink sm:text-xl md:text-[1.35rem] md:leading-[1.7]">
        {project.description}
      </p>

      <ul className="mt-7 space-y-3">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-base leading-relaxed text-ink-muted md:text-[1.05rem]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
            {h}
          </li>
        ))}
      </ul>

      <ul className="mt-7 flex flex-wrap gap-2.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-lg border border-purple-500/30 bg-purple-600/10 px-3 py-1.5 font-mono text-sm text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {(project.repositoryUrl || project.liveUrl) && (
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <HoverButtonLink
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
              <ArrowUpRight size={18} aria-hidden="true" />
            </HoverButtonLink>
          )}
          {project.repositoryUrl && (
            <HoverButtonLink
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} aria-hidden="true" />
              Source
            </HoverButtonLink>
          )}
        </div>
      )}
    </div>
  );
}
