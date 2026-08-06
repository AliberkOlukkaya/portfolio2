"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Hls from "hls.js";
import { profile } from "@/lib/content";

const HLS_SRC =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const year = 2026; // build-time constant

export default function CtaFooter() {
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

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-32 text-center"
    >
      {/* Background HLS video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        <h2 className="mx-auto mb-4 max-w-3xl font-heading text-5xl italic leading-[0.85] tracking-tight text-white md:text-6xl lg:text-7xl">
          Let&apos;s build something great.
        </h2>
        <p className="mx-auto mb-8 max-w-xl font-body text-sm font-light text-white/60 md:text-base">
          Open to AI &amp; data engineering roles and interesting problems.
          Reach out for a chat&#8209;&#8209;no commitment, no pressure. Just
          possibilities.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="liquid-glass-strong flex items-center gap-2 rounded-xl px-6 py-3 font-body text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Get in Touch
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a
            href="/Aliberk_Olukkaya_CV.pdf"
            download
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-body text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Download CV
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-32 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-body text-xs font-light text-white/40">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-light text-white/40 transition-colors hover:text-white/70"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-light text-white/40 transition-colors hover:text-white/70"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="font-body text-xs font-light text-white/40 transition-colors hover:text-white/70"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
