"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none absolute inset-0 z-0
        overflow-hidden bg-black
      "
    >
      {/* Hero için koyu temel yüzey */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07060f] via-[#080714] to-black" />

      {/* Hafif grid dokusu */}
      <div className="absolute inset-0 bg-grid opacity-25" />

      {/* Mor ışık */}
      <div
        className="
          absolute -left-40 -top-48
          h-[40rem] w-[40rem]
          rounded-full bg-purple-700/25
          blur-[140px]
          animate-float-slow
        "
      />

      {/* Mavi/indigo ışık */}
      <div
        className="
          absolute -right-44 top-1/4
          h-[35rem] w-[35rem]
          rounded-full bg-indigo-600/20
          blur-[140px]
          animate-float-slower
        "
      />

      {/* Alt mor ışık */}
      <div
        className="
          absolute -bottom-36 left-1/3
          h-[30rem] w-[30rem]
          rounded-full bg-magenta-600/15
          blur-[130px]
          animate-float-slow
        "
      />

      {/* Merkez derinlik efekti */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.78)_100%)]
        "
      />

      {/* Üstte yavaşça nefes alan ışık */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute left-1/2 top-0
          h-72 w-[52rem]
          -translate-x-1/2
          rounded-full bg-purple-600/20
          blur-[110px]
        "
      />

      {/* Hero altından siyaha yumuşak geçiş */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-10
          h-48
          bg-gradient-to-b
          from-transparent via-black/70 to-black
        "
      />
    </div>
  );
}