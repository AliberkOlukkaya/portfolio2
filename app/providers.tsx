"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Wraps the app so Framer Motion automatically honors the user's
// prefers-reduced-motion setting for all transform/layout animations.
// This removes the need for per-component useReducedMotion branching,
// which otherwise causes SSR/client hydration mismatches.
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
