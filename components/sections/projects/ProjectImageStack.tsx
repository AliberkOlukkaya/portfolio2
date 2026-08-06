"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectScreenshot } from "@/lib/content";
import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 4600;
const VISIBLE_BEHIND = 2;

/**
 * Deterministic depth state for a card at forward-distance `fd` from the
 * active card. Every position is fixed and self-contained — cards never
 * translate far enough to leave the stack's own (clipped) container.
 */
function cardState(fd: number, reduce: boolean) {
  if (reduce) {
    return fd === 0
      ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, blur: 0, zIndex: 40 }
      : { x: 0, y: 0, scale: 1, rotate: 0, opacity: 0, blur: 0, zIndex: 10 };
  }
  switch (fd) {
    case 0:
      return { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, blur: 0, zIndex: 40 };
    case 1:
      return { x: 26, y: -18, scale: 0.94, rotate: 5, opacity: 0.82, blur: 1.5, zIndex: 30 };
    case 2:
      return { x: -22, y: -32, scale: 0.88, rotate: -6, opacity: 0.5, blur: 3, zIndex: 20 };
    default:
      // Parked behind the deck, fully faded — the exiting/incoming slot.
      return { x: 0, y: -40, scale: 0.84, rotate: 0, opacity: 0, blur: 5, zIndex: 10 };
  }
}

export default function ProjectImageStack({
  projectId,
  projectTitle,
  screenshots,
  initialIndex = 0,
}: {
  projectId: string;
  projectTitle: string;
  screenshots: ProjectScreenshot[];
  initialIndex?: number;
}) {
  const reduce = useReducedMotion() ?? false;
  const len = screenshots?.length ?? 0;

  // State resets automatically because the component is keyed by project id
  // at the call site — index starts at 0 for every new project.
  const [active, setActive] = React.useState(() =>
    len > 0 ? ((initialIndex % len) + len) % len : 0,
  );
  const [hovering, setHovering] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const [tabVisible, setTabVisible] = React.useState(true);

  const wrap = React.useCallback(
    (n: number) => (len > 0 ? ((n % len) + len) % len : 0),
    [len],
  );
  const next = React.useCallback(() => setActive((a) => wrap(a + 1)), [wrap]);
  const prev = React.useCallback(() => setActive((a) => wrap(a - 1)), [wrap]);

  // Pause autoplay when the browser tab is hidden.
  React.useEffect(() => {
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Single autoplay timer — paused while hovering, dragging, tab hidden, or
  // when reduced motion is requested. Cleaned up on every dependency change so
  // two transitions can never run at once.
  React.useEffect(() => {
    if (reduce || len <= 1) return;
    if (hovering || dragging || !tabVisible) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduce, len, hovering, dragging, tabVisible, next]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  // Polished empty state until real screenshots land in public/projects/<id>/
  if (len === 0) {
    return (
      <div className="flex h-[380px] w-full flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-line bg-base-700/30 p-8 text-center backdrop-blur-sm sm:h-[440px] lg:h-[520px] xl:h-[560px]">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-base-700/60 text-purple-400">
          <ImageIcon size={22} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-medium text-ink-muted">
            Screenshots coming soon
          </p>
          <p className="mt-1 max-w-xs text-xs leading-relaxed text-ink-dim">
            Visuals for {projectTitle} will appear here as an interactive stack.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Stage — its own isolated, clipped stacking context. No card can
          escape this box, so nothing ever reaches the text column. */}
      <div
        className="relative h-[380px] w-full overflow-hidden rounded-3xl outline-none sm:h-[440px] lg:h-[520px] xl:h-[560px]"
        style={{ isolation: "isolate" }}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={`${projectTitle} screenshots`}
        onKeyDown={onKeyDown}
      >
        {/* Ambient depth wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-6 h-40 rounded-full bg-purple-600/10 blur-3xl"
        />

        {/* Card layer */}
        <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-7">
          {screenshots.map((shot, i) => {
            const fd = wrap(i - active);
            const visible = fd === 0 || fd <= VISIBLE_BEHIND;
            const s = cardState(fd, reduce);
            const isActive = fd === 0;

            return (
              <motion.div
                key={`${projectId}-${i}`}
                className="absolute inset-5 select-none sm:inset-7"
                style={{
                  zIndex: s.zIndex,
                  pointerEvents: visible ? "auto" : "none",
                  cursor: isActive ? "grab" : "pointer",
                  touchAction: "pan-y",
                }}
                initial={false}
                animate={{
                  x: s.x,
                  y: s.y,
                  scale: s.scale,
                  rotate: s.rotate,
                  opacity: s.opacity,
                  filter: `blur(${s.blur}px)`,
                }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        stiffness: 260,
                        damping: 30,
                        opacity: { duration: 0.35 },
                        filter: { duration: 0.4 },
                      }
                }
                onClick={!isActive ? () => setActive(i) : undefined}
                drag={isActive && !reduce ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                dragSnapToOrigin
                onDragStart={() => setDragging(true)}
                onDragEnd={(_e, info) => {
                  setDragging(false);
                  const travel = info.offset.x;
                  const v = info.velocity.x;
                  if (travel > 90 || v > 600) prev();
                  else if (travel < -90 || v < -600) next();
                }}
                whileTap={isActive && !reduce ? { cursor: "grabbing" } : undefined}
              >
                <div
                  className={[
                    "group relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border bg-gradient-to-br from-base-800 via-base-700 to-base-800",
                    isActive
                      ? "border-purple-500/40 shadow-[0_30px_80px_-24px_rgba(157,120,255,0.55),0_0_50px_-16px_rgba(99,102,241,0.4)] ring-1 ring-purple-400/20"
                      : "border-line/70 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] ring-1 ring-white/5",
                  ].join(" ")}
                >
                  {/* Full screenshot, never cropped or stretched. The active
                      card gently zooms on hover — clipped by the rounded,
                      overflow-hidden frame. Disabled for reduced motion. */}
                  <img
                    src={shot.src}
                    alt={shot.alt ?? shot.title ?? projectTitle}
                    className={[
                      "h-full w-full object-contain",
                      isActive && !reduce
                        ? "transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.07]"
                        : "",
                    ].join(" ")}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                  />

                  {(shot.title || shot.subtitle) && (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-5">
                        {shot.title && (
                          <p className="truncate text-base font-semibold text-white">
                            {shot.title}
                          </p>
                        )}
                        {shot.subtitle && (
                          <p className="mt-0.5 line-clamp-2 text-sm text-white/75">
                            {shot.subtitle}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  {/* Dim non-active cards to separate them from the front */}
                  {!isActive && (
                    <div
                      className="pointer-events-none absolute inset-0 bg-base/50"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Arrow controls */}
        {len > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-base-800/70 text-ink-muted backdrop-blur-md transition-all hover:border-purple-500/50 hover:text-ink"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-base-800/70 text-ink-muted backdrop-blur-md transition-all hover:border-purple-500/50 hover:text-ink"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {len > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {screenshots.map((shot, i) => {
            const on = i === active;
            return (
              <button
                key={`${projectId}-dot-${i}`}
                type="button"
                onClick={() => setActive(i)}
                className={[
                  "h-2 rounded-full transition-all",
                  on ? "w-6 bg-purple-500" : "w-2 bg-ink-dim/50 hover:bg-ink-dim",
                ].join(" ")}
                aria-label={`Show ${shot.title ?? `screenshot ${i + 1}`}`}
                aria-current={on}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
