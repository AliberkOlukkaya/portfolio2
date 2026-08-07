"use client";

import type { ProjectScreenshot } from "@/lib/content";
import { ImageIcon } from "lucide-react";

export default function ProjectImageStack({
  projectTitle,
  screenshots,
}: {
  projectId: string;
  projectTitle: string;
  screenshots: ProjectScreenshot[];
  initialIndex?: number;
}) {
  const image = screenshots?.[0];

  if (!image) {
    return (
      <div
        className="
          flex
          aspect-[16/10]
          w-full

          flex-col
          items-center
          justify-center
          gap-4

          rounded-[28px]

          border
          border-dashed
          border-white/10

          bg-white/[0.025]

          p-8

          text-center
        "
      >
        <span
          className="
            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-white/[0.04]

            text-purple-300
          "
        >
          <ImageIcon
            size={22}
            aria-hidden="true"
          />
        </span>

        <p
          className="
            text-sm
            text-white/45
          "
        >
          Visual coming soon
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        relative
        w-full
      "
    >
      {/* Background glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -inset-4

          rounded-[34px]

          bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.18),rgba(79,70,229,0.06)_48%,transparent_72%)]

          blur-[38px]

          opacity-70
        "
      />

      {/* Image */}

      <div
        className="
          relative

          overflow-hidden

          rounded-[26px]

          border
          border-white/[0.12]

          bg-[#08080d]

          shadow-[
            0_28px_70px_-38px_rgba(0,0,0,0.95),
            0_0_42px_-28px_rgba(139,92,246,0.48)
          ]
        "
      >
        <img
          src={image.src}
          alt={image.alt ?? projectTitle}
          draggable={false}
          loading="lazy"
          decoding="async"
          className="
            block
            h-auto
            max-h-[540px]
            w-full

            object-contain
          "
        />
      </div>
    </div>
  );
}