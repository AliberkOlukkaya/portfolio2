"use client";

import SectionHeading from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { skills } from "@/lib/content";
import { Code2, BrainCircuit, Wrench } from "lucide-react";

const icons = [Code2, BrainCircuit, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        index="02 / Skills"
        title="Tools of the trade"
        subtitle="The languages, frameworks, and libraries I reach for across the stack."
      />

      <RevealGroup className="grid gap-6 md:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealItem key={s.group}>
              <div className="group h-full rounded-2xl border border-line bg-base-700/40 p-6 backdrop-blur-md transition-all hover:border-purple-500/50 hover:shadow-glow-sm">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400 transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="mb-4 font-heading font-semibold text-ink">{s.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-base/50 px-3 py-1.5 text-sm text-ink-muted transition-colors hover:border-purple-500/40 hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
