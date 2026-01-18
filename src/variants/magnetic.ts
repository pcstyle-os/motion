import type { Variants } from "framer-motion";

/**
 * Magnetic attraction variants for cursor-aware effects
 */
export const magneticPull: Variants = {
  initial: {
    x: 0,
    y: 0,
  },
  hover: {
    x: "var(--magnetic-x, 0)",
    y: "var(--magnetic-y, 0)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

export const magneticScale: Variants = {
  initial: {
    scale: 1,
    x: 0,
    y: 0,
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export const magneticRotate: Variants = {
  initial: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  hover: {
    rotate: "var(--magnetic-rotate, 0deg)",
    x: "var(--magnetic-x, 0)",
    y: "var(--magnetic-y, 0)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

/**
 * Floating/levitating effect
 */
export const magneticFloat: Variants = {
  initial: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};
