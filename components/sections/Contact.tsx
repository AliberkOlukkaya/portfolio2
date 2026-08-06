import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/content";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        index="05 / Contact"
        title="Let's build something"
        subtitle="I'm open to AI and data engineering roles, collaborations, and interesting problems. The fastest way to reach me is email."
      />

      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-base-700/40 p-5 backdrop-blur-md transition-all hover:border-purple-500/50 hover:shadow-glow-sm"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-400 transition-transform group-hover:scale-110">
              <Mail size={20} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-ink-dim">Email</span>
              <span className="block truncate text-ink group-hover:text-purple-400">
                {profile.email}
              </span>
            </span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-base-700/40 p-5 backdrop-blur-md transition-all hover:border-purple-500/50 hover:shadow-glow-sm"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-400 transition-transform group-hover:scale-110">
              <Phone size={20} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-ink-dim">Phone</span>
              <span className="block truncate text-ink group-hover:text-purple-400">
                {profile.phone}
              </span>
            </span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-line bg-base-700/40 p-5 backdrop-blur-md transition-all hover:border-purple-500/50 hover:shadow-glow-sm"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-400 transition-transform group-hover:scale-110">
              <Github size={20} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-ink-dim">GitHub</span>
              <span className="block truncate text-ink group-hover:text-purple-400">
                AliberkOlukkaya
              </span>
            </span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-line bg-base-700/40 p-5 backdrop-blur-md transition-all hover:border-purple-500/50 hover:shadow-glow-sm"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-purple-500/15 text-purple-400 transition-transform group-hover:scale-110">
              <Linkedin size={20} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-ink-dim">LinkedIn</span>
              <span className="block truncate text-ink group-hover:text-purple-400">
                aliberk-olukkaya
              </span>
            </span>
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-7 py-3.5 font-medium text-white transition-all hover:bg-purple-500 hover:shadow-glow"
          >
            <Mail size={18} /> Say hello
          </a>
        </div>
      </Reveal>
    </section>
  );
}
