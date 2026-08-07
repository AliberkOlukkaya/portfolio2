"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import Hls from "hls.js";

import AmbientBackground from "@/components/AmbientBackground";
import { profile } from "@/lib/content";

const HLS_SRC =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls();

      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
  }, []);

  const item = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="top"
      className="
        relative isolate flex min-h-dvh
        flex-col items-center justify-center
        overflow-hidden bg-black
        px-6 pb-24 pt-28
        text-center
      "
    >
      <AmbientBackground />

      {/* Background video */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-10
          overflow-hidden
        "
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="
            absolute inset-0
            h-full w-full
            object-cover
          "
        />

        {/* Video readability layer */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.22)_72%,rgba(0,0,0,0.95)_100%)]
          "
        />

        {/* Edge darkening */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.68)_100%)]
          "
        />

        {/* Top highlight */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,transparent_20%,transparent_78%,rgba(255,255,255,0.025)_100%)]
          "
        />

        {/* Bottom transition */}
        <div
          aria-hidden="true"
          className="
            absolute inset-x-0 bottom-0
            h-[320px]

            bg-gradient-to-b
            from-transparent
            via-black/65
            via-[62%]
            to-black
          "
        />
      </div>

      {/* Hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="
          relative z-20
          flex w-full max-w-4xl
          flex-col items-center
        "
      >
        {/* Intro */}
        <motion.p
          variants={item}
          className="
            mb-6 flex items-center gap-2.5

            font-mono
            text-[15px]
            font-semibold
            tracking-wide
            text-purple-300
          "
        >
          <Sparkles size={15} aria-hidden="true" />
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="
            text-outline-black
            text-balance

            font-heading
            text-7xl
            font-bold
            leading-[0.95]
            tracking-tight
            text-white

            sm:text-8xl
            md:text-9xl
          "
        >
          {profile.name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={item}
          className="
            mt-8

            font-heading
            text-[34px]
            font-semibold
            tracking-[-0.035em]
            text-white

            sm:text-[39px]
            md:text-[46px]
          "
        >
          <span className="text-outline-black">
            {profile.role}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="
            text-outline-black

            mt-6
            max-w-[720px]
            text-pretty

            font-body
            text-[19px]
            font-medium
            leading-[1.5]
            tracking-[-0.015em]
            text-white/90

            sm:text-[21px]
            md:text-[23px]
          "
        >
          Building practical AI-powered and data-driven products
        </motion.p>

        {/* Main buttons */}
        <motion.div
          variants={item}
          className="
            mt-11 flex
            flex-col items-center
            gap-5
            sm:flex-row
          "
        >
          <a
            href="#projects"
            className="
              group inline-flex
              w-full items-center
              justify-center gap-3

              rounded-2xl
              bg-white

              px-9 py-[18px]

              font-heading
              text-[18px]
              font-bold
              text-black

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-1
              hover:scale-[1.03]
              hover:bg-white/90
              hover:shadow-glow

              sm:w-auto
            "
          >
            View Projects

            <ArrowRight
              size={19}
              aria-hidden="true"
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </a>

          <a
            href="/Aliberk_Olukkaya_CV.pdf"
            download
            className="
              inline-flex
              w-full items-center
              justify-center gap-3

              rounded-2xl
              border border-purple-300/40

              bg-gradient-to-r
              from-purple-600/90
              to-indigo-600/90

              px-9 py-[18px]

              font-heading
              text-[18px]
              font-bold
              text-white

              shadow-lg
              backdrop-blur-md

              transition-all
              duration-300

              hover:-translate-y-1
              hover:scale-[1.03]
              hover:from-purple-500
              hover:to-indigo-500
              hover:shadow-glow

              sm:w-auto
            "
          >
            Download CV

            <Download size={19} aria-hidden="true" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="
            mt-6 flex
            items-center justify-center
            gap-4
          "
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center gap-2.5

              rounded-xl
              border border-white/15

              bg-black/45
              px-7 py-3.5

              text-[16px]
              font-semibold
              text-white

              shadow-lg
              backdrop-blur-md

              transition-all
              duration-300

              hover:-translate-y-1
              hover:scale-[1.03]
              hover:border-purple-400/60
              hover:bg-purple-500/15
            "
          >
            <Github size={19} aria-hidden="true" />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center gap-2.5

              rounded-xl
              border border-white/15

              bg-black/45
              px-7 py-3.5

              text-[16px]
              font-semibold
              text-white

              shadow-lg
              backdrop-blur-md

              transition-all
              duration-300

              hover:-translate-y-1
              hover:scale-[1.03]
              hover:border-purple-400/60
              hover:bg-purple-500/15
            "
          >
            <Linkedin size={19} aria-hidden="true" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
          }}
          className="
            absolute bottom-8 left-1/2 z-20
            -translate-x-1/2
          "
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              grid h-10 w-6
              place-items-start
              justify-center

              rounded-full
              border border-white/25

              bg-black/20
              pt-2

              backdrop-blur-sm
            "
          >
            <span className="h-2 w-1 rounded-full bg-purple-300" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}