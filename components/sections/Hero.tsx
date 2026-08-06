"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import Hls from "hls.js";
import { profile } from "@/lib/content";

const HLS_SRC =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    }
  }, []);

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-28 pb-20 text-center"
    >
      {/* Liquid video backdrop behind the hero content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[2.75rem] border border-white/10 shadow-[4px_4px_24px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.15)]"
      >
        {/* Animated liquid HLS video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Top-light glass sheen along the edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 22%, transparent 78%, rgba(255,255,255,0.06) 100%)",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-3xl flex-col items-center"
      >
        {/* Availability pill */}
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-base-700/60 px-4 py-1.5 text-xs font-medium text-ink-muted backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to AI &amp; Data Engineering roles
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 flex items-center gap-2 font-mono text-sm font-medium tracking-wide text-purple-400"
        >
          <Sparkles size={14} /> Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-outline-black text-balance font-heading text-7xl font-bold tracking-tight text-white sm:text-8xl md:text-9xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-5 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          <span className="text-outline-black">{profile.role}</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-outline-black mt-7 max-w-2xl text-pretty font-body text-xl font-medium leading-relaxed text-white sm:text-2xl md:text-3xl"
        >
          Building practical AI-powered and data-driven products
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex items-center gap-2 font-body text-base font-medium text-white/85"
        >
          <MapPin size={16} /> {profile.location}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-lg transition-all hover:bg-white/90 hover:shadow-glow sm:w-auto"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/Aliberk_Olukkaya_CV.pdf"
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-purple-400/40 bg-gradient-to-r from-purple-600/80 to-magenta-600/70 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all hover:from-purple-500/90 hover:to-magenta-500/80 hover:shadow-glow sm:w-auto"
          >
            Download CV <Download size={16} />
          </a>
        </motion.div>

        {/* Social buttons */}
        <motion.div
          variants={item}
          className="mt-4 flex items-center justify-center gap-3"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-base-700/50 px-5 py-2.5 text-sm font-semibold text-ink backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-purple-500/10"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-base-700/50 px-5 py-2.5 text-sm font-semibold text-ink backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-purple-500/10"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="grid h-10 w-6 place-items-start justify-center rounded-full border border-line pt-2"
          >
            <span className="h-2 w-1 rounded-full bg-purple-400" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
