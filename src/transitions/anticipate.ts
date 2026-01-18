import type { Transition } from "framer-motion";

/**
 * Disney-style anticipation easing curves
 * These create a slight "wind-up" before the main motion
 */
export const anticipateSmall: Transition = {
  type: "tween",
  duration: 0.4,
  ease: [0.36, 0, 0.66, -0.56],
};

export const anticipateMedium: Transition = {
  type: "tween",
  duration: 0.5,
  ease: [0.68, -0.6, 0.32, 1.6],
};

export const anticipateLarge: Transition = {
  type: "tween",
  duration: 0.6,
  ease: [0.68, -0.8, 0.32, 1.8],
};

/**
 * Bounce back anticipation (pull back then spring forward)
 */
export const anticipateBounce: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 10,
  velocity: -50,
};

/**
 * Snappy anticipation for UI elements
 */
export const anticipateSnap: Transition = {
  type: "tween",
  duration: 0.3,
  ease: [0.34, 1.56, 0.64, 1],
};

/**
 * Preset configurations
 */
export const anticipatePresets = {
  button: anticipateSmall,
  card: anticipateMedium,
  modal: anticipateLarge,
  menu: anticipateSnap,
  bounce: anticipateBounce,
} as const;
