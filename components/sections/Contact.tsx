import Reveal from "@/components/Reveal";
import { profile } from "@/lib/content";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="
        relative overflow-hidden
        border-t border-white/[0.08]
        bg-black px-6 py-24
        md:py-28
      "
    >
      {/* Alt taraftaki hafif mor-mavi ışık */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-[-14rem] left-1/2
          h-80 w-[46rem]
          -translate-x-1/2
          rounded-full

          bg-[radial-gradient(circle,rgba(109,64,224,0.18),transparent_66%)]
          blur-3xl
        "
      />

      <Reveal>
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="text-center">
            <p
              className="
                font-mono text-xs font-bold
                uppercase tracking-[0.28em]
                text-purple-400
              "
            >
              Contact
            </p>

            <h2
              className="
                mt-4 font-heading
                text-4xl font-bold
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Let&apos;s connect
            </h2>
          </div>

          {/* Sadece tıklanabilir logolar */}
          <nav
            aria-label="Contact links"
            className="
              mt-12 flex items-center
              justify-center gap-6
              sm:gap-8
            "
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={
                    link.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.label}
                  title={link.label}
                  className="
                    group relative
                    grid h-20 w-20
                    place-items-center
                    rounded-full

                    border border-white/[0.12]
                    bg-white/[0.04]
                    text-white

                    shadow-[0_18px_45px_-28px_rgba(157,120,255,0.7)]
                    backdrop-blur-md

                    transition-[transform,border-color,background-color,box-shadow]
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    hover:-translate-y-2
                    hover:scale-[1.08]
                    hover:border-purple-400/60
                    hover:bg-purple-500/15
                    hover:shadow-[0_24px_60px_-24px_rgba(109,64,224,0.85)]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-purple-400
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-black

                    sm:h-24 sm:w-24
                  "
                >
                  {/* Hover sırasında arkada beliren ışık */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute inset-2
                      rounded-full

                      bg-[radial-gradient(circle,rgba(157,120,255,0.35),transparent_68%)]
                      opacity-0 blur-lg

                      transition-opacity duration-700
                      group-hover:opacity-100
                    "
                  />

                  <Icon
                    size={31}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="
                      relative z-10

                      transition-[transform,color]
                      duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      group-hover:scale-110
                      group-hover:text-purple-200

                      sm:h-9 sm:w-9
                    "
                  />
                </a>
              );
            })}
          </nav>

          <div
            className="
              mt-16 flex items-center
              justify-center gap-4
            "
          >
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/15" />

            <span
              className="
                font-mono text-[10px]
                uppercase tracking-[0.22em]
                text-white/35
              "
            >
              Aliberk Olukkaya · 2026
            </span>

            <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/15" />
          </div>
        </div>
      </Reveal>
    </footer>
  );
}