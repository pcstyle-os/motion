"use client";

import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

/**
 * Respects prefers-reduced-motion setting
 * Returns true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(query.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

/** Default reduced motion variants */
const defaultReducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Hook that returns non-animated variants when user prefers reduced motion
 */
export function useAccessibleMotion(
  variants: Variants,
  reducedVariants?: Variants
): Variants {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return reducedVariants ?? defaultReducedVariants;
  }

  return variants;
}
