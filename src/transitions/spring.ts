import type { Transition } from "framer-motion";

/**
 * Spring transition presets
 */

/** Quick, snappy spring for UI interactions */
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

/** Bouncy spring for playful elements */
export const springBouncy: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 10,
};

/** Smooth duration-based spring */
export const springSmooth: Transition = {
  type: "spring",
  duration: 0.5,
  bounce: 0.25,
};

/** Gentle spring for subtle animations */
export const springGentle: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

/** Stiff spring for responsive feedback */
export const springStiff: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 25,
};

/** Wobbly spring for attention-grabbing */
export const springWobbly: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 5,
};

/** Physics config for draggable elements */
export const springDrag: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};
