"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  {
    href: "#top",
    label: "Home",
    activeIds: ["top"],
  },
  {
    href: "#about",
    label: "About Me",
    activeIds: ["about"],
  },
  {
    href: "#projects",
    label: "Projects",
    activeIds: ["projects"],
  },
  {
    href: "#skills",
    label: "Skills / Experience",
    activeIds: ["skills", "experience"],
  },
  {
    href: "#contact",
    label: "Contact",
    activeIds: ["contact"],
  },
];

const observedSectionIds = [
  "top",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  /*
    Hero tamamen geçildikten sonra
    navbarın koyu / blur perdesini aç.
  */
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("top");

      if (!hero) {
        setScrolledPastHero(false);
        return;
      }

      const heroRect = hero.getBoundingClientRect();

      setScrolledPastHero(heroRect.bottom <= 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /*
    Ekranda hangi section varsa
    navbar'da onu aktif göster.
  */
  useEffect(() => {
    const sections = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        if (visibleEntries.length > 0) {
          setActiveSection(
            visibleEntries[0].target.id,
          );
        }
      },
      {
        root: null,
        rootMargin: "-16% 0px -58% 0px",
        threshold: [
          0.05,
          0.1,
          0.2,
          0.3,
          0.5,
          0.7,
        ],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
    Mobil menü açıkken arka planın
    scroll olmasını engelle.
  */
  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{
          y: -70,
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
        "
      >
        {/* Hero bittikten sonra gelen perde */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute inset-0

            transition-[background-color,border-color,box-shadow,backdrop-filter]
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              scrolledPastHero
                ? `
                  border-b border-white/[0.08]
                  bg-[#05050a]/76

                  shadow-[0_12px_40px_-24px_rgba(0,0,0,0.95)]

                  backdrop-blur-xl
                  backdrop-saturate-150
                `
                : `
                  border-b border-transparent
                  bg-transparent
                  shadow-none
                  backdrop-blur-0
                `
            }
          `}
        />

        <nav
          className="
            relative z-10
            flex w-full max-w-[1500px]
            items-center justify-between

            px-8 py-5

            sm:px-10
            lg:px-14
          "
        >
          {/* AO */}
          <a
            href="#top"
            aria-label="Back to top"
            className="
              shrink-0

              font-heading
              text-[29px]
              font-black italic
              tracking-[-0.08em]
              text-white

              transition-[transform,color,text-shadow]
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]

              hover:-rotate-3
              hover:scale-110
              hover:text-purple-200

              hover:[text-shadow:0_0_18px_rgba(176,145,255,0.9)]
            "
          >
            AO
          </a>

          {/* Desktop Navigation */}
          <ul
            className="
              hidden items-center
              gap-9

              md:flex
              lg:gap-14
            "
          >
            {links.map((link) => {
              const isActive =
                link.activeIds.includes(activeSection);

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`
                      group relative block
                      py-3

                      font-heading
                      text-[20px]
                      font-bold
                      tracking-[-0.035em]

                      transition-[color,transform,text-shadow]
                      duration-500
                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      hover:-translate-y-0.5
                      hover:text-white

                      ${
                        isActive
                          ? `
                            text-white
                            [text-shadow:0_0_18px_rgba(178,145,255,0.9)]
                          `
                          : `
                            text-white/85
                          `
                      }
                    `}
                  >
                    {link.label}

                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        -bottom-1 left-0

                        h-[2px]
                        rounded-full

                        bg-gradient-to-r
                        from-purple-400
                        via-violet-400
                        to-indigo-400

                        shadow-[0_0_12px_rgba(139,92,246,0.95)]

                        transition-[width,opacity]
                        duration-700
                        ease-[cubic-bezier(0.16,1,0.3,1)]

                        ${
                          isActive
                            ? `
                              w-full
                              opacity-100
                            `
                            : `
                              w-0
                              opacity-0

                              group-hover:w-full
                              group-hover:opacity-70
                            `
                        }
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Get in touch */}
          <div className="flex items-center">
            <a
              href="#contact"
              className="
                hidden min-h-12
                items-center justify-center

                rounded-full

                border border-white/25
                bg-white/[0.08]

                px-8 py-3

                font-heading
                text-[17px]
                font-bold
                tracking-[-0.025em]
                text-white

                backdrop-blur-md

                transition-all duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]

                hover:-translate-y-0.5
                hover:scale-[1.03]

                hover:border-white/40
                hover:bg-white/[0.14]

                hover:shadow-[0_0_22px_rgba(139,92,246,0.3)]

                md:inline-flex
              "
            >
              Get in touch
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() =>
                setOpen((current) => !current)
              }
              aria-label={
                open ? "Close menu" : "Open menu"
              }
              aria-expanded={open}
              className="
                grid h-11 w-11
                place-items-center

                rounded-full

                border border-white/20
                bg-black/25

                text-white

                backdrop-blur-md

                transition-all duration-300

                hover:bg-white/10

                md:hidden
              "
            >
              {open ? (
                <X
                  size={21}
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  size={21}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed inset-x-4 top-[82px]
              z-50

              overflow-hidden
              rounded-[24px]

              border border-white/10
              bg-[#07070c]/92

              p-4

              shadow-[0_30px_70px_-28px_rgba(0,0,0,0.95)]

              backdrop-blur-2xl

              md:hidden
            "
          >
            <ul className="flex flex-col">
              {links.map((link) => {
                const isActive =
                  link.activeIds.includes(
                    activeSection,
                  );

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() =>
                        setOpen(false)
                      }
                      className={`
                        relative block
                        rounded-2xl
                        px-5 py-4

                        font-heading
                        text-xl
                        font-bold
                        tracking-[-0.035em]

                        transition-all duration-300

                        ${
                          isActive
                            ? `
                              bg-white/[0.07]
                              text-white

                              [text-shadow:0_0_15px_rgba(178,145,255,0.75)]
                            `
                            : `
                              text-white/85

                              hover:bg-white/[0.05]
                              hover:text-white
                            `
                        }
                      `}
                    >
                      {link.label}

                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            bottom-2 left-5

                            h-[2px] w-12
                            rounded-full

                            bg-gradient-to-r
                            from-purple-400
                            to-indigo-400

                            shadow-[0_0_10px_rgba(139,92,246,0.9)]
                          "
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                mt-3 flex min-h-14
                items-center justify-center

                rounded-full

                border border-white/15
                bg-white/[0.08]

                px-6 py-3

                font-heading
                text-lg
                font-bold
                text-white

                transition-colors duration-300

                hover:bg-white/[0.14]
              "
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}