"use client";

import { useEffect, useState } from "react";

// Returns true only after the component has mounted on the client.
// Use to gate client-only branches (e.g. prefers-reduced-motion) so the
// initial client render matches server HTML and avoids hydration mismatches.
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
