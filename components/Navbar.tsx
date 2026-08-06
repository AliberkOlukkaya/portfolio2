"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{
        y: reduceMotion ? 0 : -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed inset-x-0 top-0 z-50
        flex justify-center
        px-4 pt-5
        sm:px-6
      "
    >
      <nav
        className={`
          relative flex w-full max-w-6xl
          items-center justify-between
          overflow-hidden rounded-full
          border border-white/20
          px-7 py-4

          bg-white/[0.035]
          backdrop-blur-2xl
          backdrop-saturate-150

          shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(255,255,255,0.06),inset_0_0_24px_rgba(255,255,255,0.025),0_10px_35px_rgba(0,0,0,0.32)]

          transition-[transform,background-color,border-color,box-shadow]
          duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]

          before:pointer-events-none
          before:absolute
          before:inset-x-10
          before:top-0
          before:h-px
          before:bg-gradient-to-r
          before:from-transparent
          before:via-white/75
          before:to-transparent

          after:pointer-events-none
          after:absolute
          after:inset-x-14
          after:bottom-0
          after:h-px
          after:bg-gradient-to-r
          after:from-transparent
          after:via-white/15
          after:to-transparent

          sm:px-9

          ${
            scrolled
              ? `
                scale-[0.985]
                border-white/25
                bg-black/20

                shadow-[inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(255,255,255,0.05),inset_0_0_22px_rgba(255,255,255,0.02),0_14px_40px_rgba(0,0,0,0.4)]
              `
              : ""
          }
        `}
      >
        {/* AO logo */}
        <a
          href="#top"
          aria-label="Back to top"
          className="
            relative z-10 shrink-0

            font-heading text-[23px]
            font-black italic
            tracking-[-0.08em]
            text-white

            transition-[transform,color,text-shadow]
            duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]

            hover:-rotate-3
            hover:scale-110
            hover:text-purple-200
            hover:[text-shadow:0_0_18px_rgba(176,145,255,0.8)]
          "
        >
          AO
        </a>

        {/* Desktop navigation */}
        <ul className="relative z-10 hidden items-center gap-6 md:flex lg:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  group relative block
                  rounded-full px-2 py-3

                  font-heading text-[18px]
                  font-semibold tracking-[-0.03em]
                  text-white/85

                  transition-[color,transform]
                  duration-300

                  hover:-translate-y-0.5
                  hover:text-white
                "
              >
                {link.label}

                <span
                  aria-hidden="true"
                  className="
                    absolute inset-x-2 bottom-1
                    h-px origin-center scale-x-0

                    bg-gradient-to-r
                    from-transparent
                    via-white/70
                    to-transparent

                    transition-transform duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    group-hover:scale-x-100
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="relative z-10 flex items-center gap-2">
          <a
            href="#contact"
            className="
              hidden min-h-12
              items-center justify-center
              rounded-full

              border border-white/25
              bg-white/[0.08]
              px-8 py-3

              font-heading text-[17px]
              font-bold tracking-[-0.03em]
              text-white

              shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(255,255,255,0.05),0_8px_24px_rgba(0,0,0,0.25)]
              backdrop-blur-xl

              transition-all duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]

              hover:-translate-y-0.5
              hover:scale-[1.03]
              hover:border-white/40
              hover:bg-white/[0.14]
              hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_12px_30px_rgba(0,0,0,0.32)]

              md:inline-flex
            "
          >
            Get in touch
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="
              grid h-12 w-12
              place-items-center
              rounded-full

              border border-white/25
              bg-white/[0.08]
              text-white
              backdrop-blur-xl

              shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.24)]

              transition-all duration-300

              hover:scale-105
              hover:border-white/40
              hover:bg-white/[0.14]

              md:hidden
            "
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed left-4 right-4 top-[100px]
              z-40 overflow-hidden
              rounded-[30px]

              border border-white/20
              bg-white/[0.05]
              p-4

              shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.42)]

              backdrop-blur-2xl
              backdrop-saturate-150

              md:hidden
            "
          >
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute
                inset-x-8 top-0 h-px
                bg-gradient-to-r
                from-transparent via-white/70 to-transparent
              "
            />

            <ul className="relative z-10 flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      block rounded-2xl
                      px-5 py-4

                      font-heading text-xl
                      font-semibold tracking-[-0.035em]
                      text-white/90

                      transition-colors duration-300

                      hover:bg-white/[0.08]
                      hover:text-white
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                relative z-10 mt-3
                flex min-h-14
                items-center justify-center
                rounded-full

                border border-white/25
                bg-white/[0.1]
                px-6 py-3

                font-heading text-lg
                font-bold text-white

                shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_10px_24px_rgba(0,0,0,0.28)]
                backdrop-blur-xl

                transition-all duration-300

                hover:border-white/40
                hover:bg-white/[0.16]
              "
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}