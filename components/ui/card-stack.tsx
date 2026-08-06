"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  alt?: string;
  tag?: string;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];

  /** Selected index on mount */
  initialIndex?: number;

  /** How many cards are visible around the active (odd recommended) */
  maxVisible?: number;

  /** Card sizing */
  cardWidth?: number;
  cardHeight?: number;

  /** How much cards overlap each other (0..0.8). Higher = more overlap */
  overlap?: number;

  /** Total fan angle (deg). Higher = wider arc */
  spreadDeg?: number;

  /** 3D / depth feel */
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;

  /** Active emphasis */
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;

  /** Motion */
  springStiffness?: number;
  springDamping?: number;

  /** Behavior */
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;

  /** UI */
  showDots?: boolean;
  className?: string;

  /** Hooks */
  onChangeIndex?: (index: number, item: T) => void;

  /** Custom renderer (optional) */
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

/** Minimal signed offset from active index to i, with wrapping (for loop behavior). */
function signedOffset(i: number, active: number, len: number, loop: boolean) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;

  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}
export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 5,

  cardWidth = 640,
  cardHeight = 420,

  overlap = 0.48,
  spreadDeg = 36,

  perspectivePx = 1400,
  depthPx = 150,
  tiltXDeg = 8,

  activeLiftPx = 28,
  activeScale = 1.05,
  inactiveScale = 0.92,

  springStiffness = 320,
  springDamping = 32,

  loop = true,
  autoAdvance = false,
  intervalMs = 3600,
  pauseOnHover = true,

  showDots = true,
  className,

  onChangeIndex,
  renderCard,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const len = items.length;

  const [active, setActive] = React.useState(() =>
    wrapIndex(initialIndex, len),
  );
  const [hovering, setHovering] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const [isTabVisible, setIsTabVisible] = React.useState(true);

  // keep active in bounds if items change
  React.useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  // pause autoplay when tab hidden
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // cleanup on unmount: cancel drag state and hovering
  React.useEffect(() => {
    return () => {
      setDragging(false);
      setHovering(false);
    };
  }, []);

  React.useEffect(() => {
    if (!len) return;
    onChangeIndex?.(active, items[active]!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)));
  // Clamp rotation to ±8 degrees to keep cards readable
  const stepDeg = maxOffset > 0 ? Math.min(8, spreadDeg / maxOffset) : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = React.useCallback(() => {
    if (!len || !canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = React.useCallback(() => {
    if (!len || !canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  // autoplay
  React.useEffect(() => {
    if (!autoAdvance || reduceMotion || !len) return;
    if (pauseOnHover && hovering) return;
    if (dragging) return;
    if (!isTabVisible) return;

    const id = window.setInterval(
      () => {
        if (loop || active < len - 1) next();
      },
      Math.max(700, intervalMs),
    );
    return () => window.clearInterval(id);
  }, [
    autoAdvance,
    intervalMs,
    hovering,
    pauseOnHover,
    dragging,
    isTabVisible,
    reduceMotion,
    len,
    loop,
    active,
    next,
  ]);

  if (!len) return null;
  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Stage */}
      <div
        className="relative w-full outline-none"
        style={{ height: Math.max(360, cardHeight + 80) }}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Project screenshots"
        onKeyDown={onKeyDown}
      >
        {/* background wash / spotlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-4 mx-auto h-48 w-[70%] rounded-full bg-purple-600/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-40 w-[76%] rounded-full bg-black/40 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{ perspective: `${perspectivePx}px` }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len, loop);
              const abs = Math.abs(off);
              if (abs > maxOffset) return null;

              // Clamp rotation to subtle range
              const rotateZ = Math.max(-8, Math.min(8, off * stepDeg));
              const x = off * cardSpacing;
              const y = abs * 10;
              const z = -abs * depthPx;

              const isActive = off === 0;
              const scale = isActive ? activeScale : inactiveScale;
              const lift = isActive ? -activeLiftPx : 0;
              const rotateX = isActive ? 0 : tiltXDeg;
              const zIndex = 100 - abs;

              const dragProps =
                isActive && !reduceMotion
                  ? {
                      drag: "x" as const,
                      dragConstraints: { left: 0, right: 0 },
                      dragElastic: 0.18,
                      onDragStart: () => setDragging(true),
                      onDragEnd: (
                        _e: unknown,
                        info: {
                          offset: { x: number };
                          velocity: { x: number };
                        },
                      ) => {
                        setDragging(false);
                        const travel = info.offset.x;
                        const v = info.velocity.x;
                        const threshold = Math.min(160, cardWidth * 0.22);
                        if (travel > threshold || v > 650) prev();
                        else if (travel < -threshold || v < -650) next();
                      },
                    }
                  : {};

              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute bottom-0 overflow-hidden rounded-[1.25rem] border",
                    "will-change-transform select-none",
                    isActive
                      ? "cursor-grab border-purple-500/40 shadow-[0_30px_80px_-24px_rgba(157,120,255,0.55),0_0_50px_-16px_rgba(99,102,241,0.4)] ring-1 ring-purple-400/20 active:cursor-grabbing"
                      : "cursor-pointer border-line/70 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] ring-1 ring-white/5",
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: y + 40,
                          x,
                          rotateZ,
                          rotateX,
                          scale,
                          filter: "blur(8px)",
                        }
                  }
                  animate={{
                    opacity: 1,
                    x,
                    y: y + lift,
                    rotateZ,
                    rotateX,
                    scale,
                    filter: isActive ? "blur(0px)" : `blur(${abs * 1.2}px)`,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, scale: 0.9, filter: "blur(8px)" }
                  }
                  transition={{
                    type: "spring",
                    stiffness: springStiffness,
                    damping: springDamping,
                    opacity: { duration: 0.35 },
                    filter: { duration: 0.4 },
                  }}
                  onClick={() => setActive(i)}
                  {...dragProps}
                >
                  <div
                    className="h-full w-full"
                    style={{
                      transform: `translateZ(${z}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {renderCard ? (
                      renderCard(item, { active: isActive })
                    ) : (
                      <DefaultFanCard item={item} />
                    )}
                    {/* Dim background cards to separate them from the active one */}
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
          </AnimatePresence>
        </div>
      </div>

      {/* Dots navigation */}
      {showDots ? (
        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((it, idx) => {
            const on = idx === active;
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => setActive(idx)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  on
                    ? "w-6 bg-purple-500"
                    : "w-2 bg-ink-dim/50 hover:bg-ink-dim",
                )}
                aria-label={`Show ${it.title}`}
                aria-current={on}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function DefaultFanCard({ item }: { item: CardStackItem }) {
  return (
    <div className="relative h-full w-full bg-base-700">
      {item.imageSrc ? (
        <img
          src={item.imageSrc}
          alt={item.alt ?? item.title}
          className="h-full w-full object-cover"
          draggable={false}
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-base-700 text-sm text-ink-dim">
          No image
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <div className="truncate text-lg font-semibold text-white">
          {item.title}
        </div>
        {item.description ? (
          <div className="mt-1 line-clamp-2 text-sm text-white/80">
            {item.description}
          </div>
        ) : null}
      </div>
    </div>
  );
}


