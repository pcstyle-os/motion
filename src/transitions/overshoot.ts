import type { Transition } from "framer-motion";

/**
 * Back-easing transitions that overshoot the target
 */
export const overshootSmall: Transition = {
  type: "tween",
  duration: 0.4,
  ease: [0.34, 1.56, 0.64, 1],
};

export const overshootMedium: Transition = {
  type: "tween",
  duration: 0.5,
  ease: [0.22, 1.2, 0.36, 1],
};

export const overshootLarge: Transition = {
  type: "tween",
  duration: 0.6,
  ease: [0.18, 1.4, 0.32, 1],
};

/**
 * Spring-based overshoot
 */
export const overshootSpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 20,
};

export const overshootBouncySpring: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 15,
  mass: 0.8,
};

/**
 * Overshoot with settle
 */
export const overshootSettle: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
  restDelta: 0.001,
};

/**
 * Preset configurations
 */
export const overshootPresets = {
  subtle: overshootSmall,
  normal: overshootMedium,
  dramatic: overshootLarge,
  spring: overshootSpring,
  bouncy: overshootBouncySpring,
  settle: overshootSettle,
} as const;

/**
 * easeOutBack cubic bezier for CSS
 */
export const easeOutBack = "cubic-bezier(0.34, 1.56, 0.64, 1)";

/**
 * easeInOutBack cubic bezier for CSS
 */
export const easeInOutBack = "cubic-bezier(0.68, -0.6, 0.32, 1.6)";
