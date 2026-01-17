import type { Transition } from "framer-motion";

/**
 * Inertia transitions for drag/scroll
 */

/** Standard scroll deceleration */
export const inertiaScroll: Transition = {
  type: "inertia",
  velocity: 50,
  power: 0.8,
  timeConstant: 700,
};

/** Quick stop inertia */
export const inertiaQuick: Transition = {
  type: "inertia",
  velocity: 50,
  power: 0.4,
  timeConstant: 300,
};

/** Smooth glide */
export const inertiaGlide: Transition = {
  type: "inertia",
  velocity: 50,
  power: 0.9,
  timeConstant: 1000,
};

/** Bouncy bounds */
export const inertiaBounce: Transition = {
  type: "inertia",
  velocity: 50,
  bounceStiffness: 300,
  bounceDamping: 10,
};
