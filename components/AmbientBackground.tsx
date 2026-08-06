"use client";

import { motion } from "framer-motion";

// Ambient animated background: floating gradient blobs + grid overlay.
// Purely decorative — hidden from assistive tech. Reduced-motion is handled
// globally in globals.css (animations neutralized), so classes apply
// unconditionally here to keep server/client render identical (no hydration gap).
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-base via-[#0c0a1f] to-navy-900" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Floating blobs — liquid-glass tones (violet → magenta → indigo → rose) */}
      <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-purple-700/30 blur-[130px] animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-indigo-600/28 blur-[130px] animate-float-slower" />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-magenta-600/18 blur-[120px] animate-float-slow" />
      <div className="absolute top-2/3 right-1/4 h-[24rem] w-[24rem] rounded-full bg-rose-500/10 blur-[120px] animate-float-slower" />

      {/* Radial vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(7,6,15,0.85)_100%)]" />

      {/* Subtle top glow */}
      <motion.div
        initial={{ opacity: 0.35 }}
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[100px]"
      />
    </div>
  );
}
