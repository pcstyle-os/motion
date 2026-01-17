import type { Transition } from "framer-motion";

/**
 * Tween (easing) transition presets
 */

/** Standard ease-out for most exits */
export const easeOut: Transition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1],
};

/** Ease-in for entrances */
export const easeIn: Transition = {
  duration: 0.3,
  ease: [0.4, 0, 1, 1],
};

/** Ease-in-out for smooth transitions */
export const easeInOut: Transition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1],
};

/** Elastic/overshoot effect */
export const easeElastic: Transition = {
  duration: 0.6,
  ease: [0.68, -0.55, 0.27, 1.55],
};

/** Quick snap */
export const easeFast: Transition = {
  duration: 0.15,
  ease: "easeOut",
};

/** Slow reveal */
export const easeSlow: Transition = {
  duration: 0.6,
  ease: "easeInOut",
};

/** Linear for continuous animations */
export const linear: Transition = {
  duration: 1,
  ease: "linear",
};

/** Anticipation - slight pullback before action */
export const easeAnticipate: Transition = {
  duration: 0.5,
  ease: [0.36, 0, 0.66, -0.56],
};

/** Cyber-style sharp movement */
export const easeCyber: Transition = {
  duration: 0.2,
  ease: [0.9, 0, 0.1, 1],
};
