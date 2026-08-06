"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectScreenshot } from "@/lib/content";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Minus,
  Plus,
  RotateCcw,
} from "lucide-react";

const AUTOPLAY_MS = 4600;
const VISIBLE_BEHIND = 2;
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

function cardState(fd: number, reduce: boolean) {
  if (reduce) {
    return fd === 0
      ? {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          blur: 0,
          zIndex: 40,
        }
      : {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 0,
          blur: 0,
          zIndex: 10,
        };
  }

  switch (fd) {
    case 0:
      return {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        blur: 0,
        zIndex: 40,
      };

    case 1:
      return {
        x: 26,
        y: -18,
        scale: 0.94,
        rotate: 5,
        opacity: 0.82,
        blur: 1.5,
        zIndex: 30,
      };

    case 2:
      return {
        x: -22,
        y: -32,
        scale: 0.88,
        rotate: -6,
        opacity: 0.5,
        blur: 3,
        zIndex: 20,
      };

    default:
      return {
        x: 0,
        y: -40,
        scale: 0.84,
        rotate: 0,
        opacity: 0,
        blur: 5,
        zIndex: 10,
      };
  }
}

type PanPosition = {
  x: number;
  y: number;
};

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
  const reduceMotion = useReducedMotion() ?? false;
  const screenshotCount = screenshots?.length ?? 0;

  const [activeIndex, setActiveIndex] = React.useState(() =>
    screenshotCount > 0
      ? ((initialIndex % screenshotCount) + screenshotCount) %
        screenshotCount
      : 0,
  );

  const [isHovering, setIsHovering] = React.useState(false);
  const [isDraggingSlide, setIsDraggingSlide] = React.useState(false);
  const [isTabVisible, setIsTabVisible] = React.useState(true);

  const [zoom, setZoom] = React.useState(MIN_ZOOM);
  const [pan, setPan] = React.useState<PanPosition>({
    x: 0,
    y: 0,
  });
  const [isPanning, setIsPanning] = React.useState(false);

  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const panStartRef = React.useRef({
    pointerX: 0,
    pointerY: 0,
    panX: 0,
    panY: 0,
  });

  const wrap = React.useCallback(
    (index: number) =>
      screenshotCount > 0
        ? ((index % screenshotCount) + screenshotCount) %
          screenshotCount
        : 0,
    [screenshotCount],
  );

  const resetZoom = React.useCallback(() => {
    setZoom(MIN_ZOOM);
    setPan({
      x: 0,
      y: 0,
    });
    setIsPanning(false);
  }, []);

  const next = React.useCallback(() => {
    resetZoom();
    setActiveIndex((current) => wrap(current + 1));
  }, [resetZoom, wrap]);

  const previous = React.useCallback(() => {
    resetZoom();
    setActiveIndex((current) => wrap(current - 1));
  }, [resetZoom, wrap]);

  const selectScreenshot = React.useCallback(
    (index: number) => {
      resetZoom();
      setActiveIndex(index);
    },
    [resetZoom],
  );

  const clampPan = React.useCallback(
    (position: PanPosition, nextZoom = zoom): PanPosition => {
      const viewport = viewportRef.current;

      if (!viewport || nextZoom <= MIN_ZOOM) {
        return {
          x: 0,
          y: 0,
        };
      }

      const bounds = viewport.getBoundingClientRect();

      const maxX = (bounds.width * (nextZoom - 1)) / 2;
      const maxY = (bounds.height * (nextZoom - 1)) / 2;

      return {
        x: Math.max(-maxX, Math.min(maxX, position.x)),
        y: Math.max(-maxY, Math.min(maxY, position.y)),
      };
    },
    [zoom],
  );

  const changeZoom = React.useCallback(
    (amount: number) => {
      setZoom((currentZoom) => {
        const nextZoom = Math.max(
          MIN_ZOOM,
          Math.min(MAX_ZOOM, currentZoom + amount),
        );

        setPan((currentPan) => clampPan(currentPan, nextZoom));

        if (nextZoom === MIN_ZOOM) {
          setPan({
            x: 0,
            y: 0,
          });
        }

        return nextZoom;
      });
    },
    [clampPan],
  );

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (zoom <= MIN_ZOOM) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    event.currentTarget.setPointerCapture(event.pointerId);

    panStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };

    setIsPanning(true);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isPanning || zoom <= MIN_ZOOM) {
      return;
    }

    event.preventDefault();

    const nextPosition = {
      x:
        panStartRef.current.panX +
        event.clientX -
        panStartRef.current.pointerX,
      y:
        panStartRef.current.panY +
        event.clientY -
        panStartRef.current.pointerY,
    };

    setPan(clampPan(nextPosition));
  };

  const finishPanning = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isPanning) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsPanning(false);
  };

  const handleDoubleClick = () => {
    if (zoom === MIN_ZOOM) {
      setZoom(2);
    } else {
      resetZoom();
    }
  };

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, []);

  React.useEffect(() => {
    if (
      reduceMotion ||
      screenshotCount <= 1 ||
      isHovering ||
      isDraggingSlide ||
      isPanning ||
      zoom > MIN_ZOOM ||
      !isTabVisible
    ) {
      return;
    }

    const intervalId = window.setInterval(next, AUTOPLAY_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [
    reduceMotion,
    screenshotCount,
    isHovering,
    isDraggingSlide,
    isPanning,
    zoom,
    isTabVisible,
    next,
  ]);

  React.useEffect(() => {
    resetZoom();
  }, [projectId, activeIndex, resetZoom]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }

    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      changeZoom(ZOOM_STEP);
    }

    if (event.key === "-") {
      event.preventDefault();
      changeZoom(-ZOOM_STEP);
    }

    if (event.key === "0") {
      event.preventDefault();
      resetZoom();
    }
  };

  if (screenshotCount === 0) {
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
            Visuals for {projectTitle} will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="relative h-[380px] w-full overflow-hidden rounded-3xl outline-none sm:h-[440px] lg:h-[520px] xl:h-[560px]"
        style={{
          isolation: "isolate",
        }}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={`${projectTitle} screenshots`}
        onKeyDown={handleKeyDown}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-6 h-40 rounded-full bg-purple-600/10 blur-3xl"
        />

        <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-7">
          {screenshots.map((screenshot, index) => {
            const forwardDistance = wrap(index - activeIndex);
            const isVisible =
              forwardDistance === 0 ||
              forwardDistance <= VISIBLE_BEHIND;

            const state = cardState(
              forwardDistance,
              reduceMotion,
            );

            const isActive = forwardDistance === 0;

            return (
              <motion.div
                key={`${projectId}-${index}`}
                className="absolute inset-5 select-none sm:inset-7"
                style={{
                  zIndex: state.zIndex,
                  pointerEvents: isVisible ? "auto" : "none",
                  cursor:
                    isActive && zoom <= MIN_ZOOM
                      ? "grab"
                      : isActive
                        ? "default"
                        : "pointer",
                  touchAction:
                    isActive && zoom > MIN_ZOOM
                      ? "none"
                      : "pan-y",
                }}
                initial={false}
                animate={{
                  x: state.x,
                  y: state.y,
                  scale: state.scale,
                  rotate: state.rotate,
                  opacity: state.opacity,
                  filter: `blur(${state.blur}px)`,
                }}
                transition={
                  reduceMotion
                    ? {
                        duration: 0,
                      }
                    : {
                        type: "spring",
                        stiffness: 260,
                        damping: 30,
                        opacity: {
                          duration: 0.35,
                        },
                        filter: {
                          duration: 0.4,
                        },
                      }
                }
                onClick={
                  !isActive
                    ? () => selectScreenshot(index)
                    : undefined
                }
                drag={
                  isActive &&
                  zoom === MIN_ZOOM &&
                  !reduceMotion
                    ? "x"
                    : false
                }
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.16}
                dragSnapToOrigin
                onDragStart={() => setIsDraggingSlide(true)}
                onDragEnd={(_event, info) => {
                  setIsDraggingSlide(false);

                  const travel = info.offset.x;
                  const velocity = info.velocity.x;

                  if (travel > 90 || velocity > 600) {
                    previous();
                  } else if (
                    travel < -90 ||
                    velocity < -600
                  ) {
                    next();
                  }
                }}
                whileTap={
                  isActive &&
                  zoom === MIN_ZOOM &&
                  !reduceMotion
                    ? {
                        cursor: "grabbing",
                      }
                    : undefined
                }
              >
                <div
                  className={[
                    "group relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border bg-base-800",
                    isActive
                      ? "border-purple-500/40 shadow-[0_30px_80px_-24px_rgba(157,120,255,0.55),0_0_50px_-16px_rgba(99,102,241,0.4)] ring-1 ring-purple-400/20"
                      : "border-line/70 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] ring-1 ring-white/5",
                  ].join(" ")}
                >
                  <div
                    ref={isActive ? viewportRef : undefined}
                    className={[
                      "relative h-full w-full overflow-hidden",
                      isActive && zoom > MIN_ZOOM
                        ? isPanning
                          ? "cursor-grabbing"
                          : "cursor-grab"
                        : "",
                    ].join(" ")}
                    onPointerDown={
                      isActive ? handlePointerDown : undefined
                    }
                    onPointerMove={
                      isActive ? handlePointerMove : undefined
                    }
                    onPointerUp={
                      isActive ? finishPanning : undefined
                    }
                    onPointerCancel={
                      isActive ? finishPanning : undefined
                    }
                    onDoubleClick={
                      isActive ? handleDoubleClick : undefined
                    }
                  >
                    <img
                      src={screenshot.src}
                      alt={
                        screenshot.alt ??
                        screenshot.title ??
                        projectTitle
                      }
                      className="h-full w-full select-none object-contain"
                      style={{
                        transform: isActive
                          ? `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`
                          : "translate3d(0, 0, 0) scale(1)",
                        transformOrigin: "center center",
                        transition:
                          isActive && !isPanning
                            ? "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)"
                            : "none",
                        willChange:
                          isActive && zoom > MIN_ZOOM
                            ? "transform"
                            : "auto",
                      }}
                      draggable={false}
                      loading={
                        isActive ? "eager" : "lazy"
                      }
                      decoding="async"
                    />
                  </div>

                  {isActive && (
                    <div className="absolute right-4 top-4 z-40 flex items-center gap-1 rounded-xl border border-white/10 bg-[#090713]/80 p-1.5 text-white shadow-lg backdrop-blur-xl">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          changeZoom(-ZOOM_STEP);
                        }}
                        disabled={zoom <= MIN_ZOOM}
                        aria-label="Zoom out"
                        className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
                      >
                        <Minus size={17} aria-hidden="true" />
                      </button>

                      <span className="min-w-[52px] text-center font-mono text-[11px] font-bold">
                        {Math.round(zoom * 100)}%
                      </span>

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          changeZoom(ZOOM_STEP);
                        }}
                        disabled={zoom >= MAX_ZOOM}
                        aria-label="Zoom in"
                        className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
                      >
                        <Plus size={17} aria-hidden="true" />
                      </button>

                      <span
                        aria-hidden="true"
                        className="mx-1 h-5 w-px bg-white/15"
                      />

                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          resetZoom();
                        }}
                        disabled={zoom === MIN_ZOOM}
                        aria-label="Reset zoom"
                        className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
                      >
                        <RotateCcw
                          size={16}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  )}

                  {isActive && zoom > MIN_ZOOM && (
                    <div className="pointer-events-none absolute bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-black/65 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-md">
                      Drag to explore
                    </div>
                  )}

                  {(screenshot.title ||
                    screenshot.subtitle) && (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5">
                        {screenshot.title && (
                          <p className="truncate text-base font-semibold text-white">
                            {screenshot.title}
                          </p>
                        )}

                        {screenshot.subtitle && (
                          <p className="mt-0.5 line-clamp-2 text-sm text-white/75">
                            {screenshot.subtitle}
                          </p>
                        )}
                      </div>
                    </>
                  )}

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

        {screenshotCount > 1 && (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-base-800/80 text-ink-muted backdrop-blur-md transition-all hover:border-purple-500/50 hover:text-white"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-base-800/80 text-ink-muted backdrop-blur-md transition-all hover:border-purple-500/50 hover:text-white"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {screenshotCount > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {screenshots.map((screenshot, index) => {
            const isCurrent = index === activeIndex;

            return (
              <button
                key={`${projectId}-dot-${index}`}
                type="button"
                onClick={() => selectScreenshot(index)}
                className={[
                  "h-2 rounded-full transition-all",
                  isCurrent
                    ? "w-6 bg-purple-500"
                    : "w-2 bg-ink-dim/50 hover:bg-ink-dim",
                ].join(" ")}
                aria-label={`Show ${
                  screenshot.title ??
                  `screenshot ${index + 1}`
                }`}
                aria-current={isCurrent}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}