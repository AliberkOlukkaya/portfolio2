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
      {/* Hero sınırları içindeki ortam ışıkları */}
      <AmbientBackground />

      {/* Hareketli video */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-0 z-10
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

        {/* Videoyu okunabilir hâle getiren koyu katman */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.08)_38%,rgba(0,0,0,0.22)_72%,rgba(0,0,0,0.95)_100%)]
          "
        />

        {/* Kenar karartması */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.68)_100%)]
          "
        />

        {/* Üst cam parlaması */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,transparent_20%,transparent_78%,rgba(255,255,255,0.025)_100%)]
          "
        />

        {/* Siyah bölüme yumuşak geçiş */}
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

      {/* Hero içeriği */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="
          relative z-20
          flex w-full max-w-3xl
          flex-col items-center
        "
      >
        {/* Uygunluk durumu */}
        <motion.div
          variants={item}
          className="
            mb-6 inline-flex items-center gap-2
            rounded-full border border-white/15
            bg-black/45 px-4 py-1.5
            text-xs font-medium text-white/75
            shadow-lg backdrop-blur-md
          "
        >
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute inline-flex h-full w-full
                animate-ping rounded-full
                bg-emerald-400 opacity-75
              "
            />

            <span
              className="
                relative inline-flex h-2 w-2
                rounded-full bg-emerald-400
              "
            />
          </span>

          Open to AI &amp; Data Engineering roles
        </motion.div>

        <motion.p
          variants={item}
          className="
            mb-4 flex items-center gap-2
            font-mono text-sm font-medium
            tracking-wide text-purple-300
          "
        >
          <Sparkles size={14} aria-hidden="true" />
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="
            text-outline-black text-balance
            font-heading text-7xl font-bold
            tracking-tight text-white
            sm:text-8xl
            md:text-9xl
          "
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="
            mt-5 font-heading text-4xl
            font-semibold tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
          "
        >
          <span className="text-outline-black">
            {profile.role}
          </span>
        </motion.h2>

        <motion.p
          variants={item}
          className="
            text-outline-black mt-7
            max-w-2xl text-pretty
            font-body text-xl font-medium
            leading-relaxed text-white
            sm:text-2xl
            md:text-3xl
          "
        >
          Building practical AI-powered and data-driven products
        </motion.p>

        <motion.div
          variants={item}
          className="
            mt-6 flex items-center gap-2
            font-body text-base font-medium
            text-white/85
          "
        >
          <MapPin size={16} aria-hidden="true" />
          {profile.location}
        </motion.div>

        {/* Ana bağlantılar */}
        <motion.div
          variants={item}
          className="
            mt-8 flex flex-col
            items-center gap-3
            sm:flex-row
          "
        >
          <a
            href="#projects"
            className="
              group inline-flex w-full
              items-center justify-center gap-2
              rounded-xl bg-white
              px-6 py-3
              font-semibold text-black
              shadow-lg

              transition-all duration-300

              hover:-translate-y-0.5
              hover:bg-white/90
              hover:shadow-glow

              sm:w-auto
            "
          >
            View Projects

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </a>

          <a
            href="/Aliberk_Olukkaya_CV.pdf"
            download
            className="
              inline-flex w-full
              items-center justify-center gap-2
              rounded-xl border border-purple-300/40
              bg-gradient-to-r
              from-purple-600/85 to-indigo-600/85
              px-6 py-3
              font-semibold text-white
              shadow-lg backdrop-blur-md

              transition-all duration-300

              hover:-translate-y-0.5
              hover:from-purple-500
              hover:to-indigo-500
              hover:shadow-glow

              sm:w-auto
            "
          >
            Download CV
            <Download size={16} aria-hidden="true" />
          </a>
        </motion.div>

        {/* Sosyal bağlantılar */}
        <motion.div
          variants={item}
          className="
            mt-4 flex items-center
            justify-center gap-3
          "
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-xl border border-white/15
              bg-black/45 px-5 py-2.5
              text-sm font-semibold text-white
              shadow-lg backdrop-blur-md

              transition-all duration-300

              hover:-translate-y-0.5
              hover:border-purple-400/60
              hover:bg-purple-500/15
            "
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-xl border border-white/15
              bg-black/45 px-5 py-2.5
              text-sm font-semibold text-white
              shadow-lg backdrop-blur-md

              transition-all duration-300

              hover:-translate-y-0.5
              hover:border-purple-400/60
              hover:bg-purple-500/15
            "
          >
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Aşağı kaydırma işareti */}
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
              place-items-start justify-center
              rounded-full border border-white/25
              bg-black/20 pt-2
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