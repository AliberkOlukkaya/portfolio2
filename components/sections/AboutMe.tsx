"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const ABOUT_TEXT =
  "I’m a Computer Engineering graduate with practical experience in Python, machine learning, deep learning, backend systems, databases, and modern web interfaces. I’ve built AI-powered applications that connect intelligent workflows to software people can use. My current focus is AI engineering, data engineering, and Python development. I approach each project through continuous learning and product-focused problem solving.";

export default function AboutMe() {
  const reduce = useReducedMotion();

  const photo: Variants = {
    hidden: { opacity: 0, x: reduce ? 0 : -40, scale: reduce ? 1 : 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const text: Variants = {
    hidden: { opacity: 0, x: reduce ? 0 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about-me"
      className="relative -mt-16 overflow-hidden px-6 pb-24 pt-24 md:pb-32 md:pt-28"
    >
      {/* Soft top blend so the color shift from the hero feels seamless */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-base/90 via-base/40 to-transparent"
      />
      {/* Gentle themed glow anchoring the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/12 blur-[140px]"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16"
      >
        {/* Left — profile photo with premium gradient border + glow */}
        <motion.div variants={photo} className="flex justify-center md:justify-start">
          <div className="group relative">
            {/* Soft colored glow behind the frame */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-purple-600/30 via-magenta-500/25 to-indigo-500/30 opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-90" />
            {/* Gradient border ring */}
            <div className="relative rounded-[1.6rem] bg-gradient-to-br from-purple-400/80 via-magenta-500/70 to-indigo-500/80 p-[2px] shadow-[0_20px_60px_-20px_rgba(157,120,255,0.55)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-base-700">
                <Image
                  src="/profile.jpeg"
                  alt="Aliberk Olukkaya"
                  width={640}
                  height={800}
                  priority
                  className="aspect-[4/5] h-auto w-full max-w-sm object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — about text */}
        <motion.div variants={text} className="flex flex-col">
          <span className="mb-4 font-mono text-sm text-purple-400">
            About Me
          </span>
          <p className="font-body text-xl font-medium leading-relaxed text-white sm:text-2xl md:text-[1.65rem] md:leading-[1.65]">
            {ABOUT_TEXT}
          </p>
          <span className="mt-8 h-px w-24 bg-gradient-to-r from-purple-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
