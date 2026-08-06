import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, education, certificates } from "@/lib/content";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading index="01 / About" title="Engineer behind the models" />

      <div className="grid gap-8 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-ink-muted">
            {profile.summary}
          </p>
          <p className="mt-6 leading-relaxed text-ink-muted">
            My work sits at the intersection of{" "}
            <span className="text-ink">machine learning</span>,{" "}
            <span className="text-ink">full-stack development</span>, and{" "}
            <span className="text-ink">applied AI</span> — turning models into
            products people can actually use.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="flex flex-col gap-4">
            {/* Education card */}
            <div className="group rounded-2xl border border-line bg-base-700/40 p-5 backdrop-blur-md transition-all hover:border-purple-500/50 hover:shadow-glow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400 transition-transform group-hover:scale-110">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-heading font-semibold text-ink">{education.degree}</h3>
              <p className="mt-1 text-sm text-ink-muted">{education.school}</p>
              <p className="mt-1 text-xs text-ink-dim">
                {education.period} · {education.location}
              </p>
            </div>

            {/* Certificate card */}
            {certificates.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-line bg-base-700/40 p-5 backdrop-blur-md transition-all hover:border-purple-500/50 hover:shadow-glow-sm"
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 transition-transform group-hover:scale-110">
                  <Award size={20} />
                </div>
                <h3 className="font-heading font-semibold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{c.org}</p>
                <p className="mt-1 text-xs text-ink-dim">{c.year}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
