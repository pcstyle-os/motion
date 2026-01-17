import type { TargetAndTransition } from "framer-motion";

/**
 * Hover gesture animations
 */

/** Subtle scale on hover */
export const whileHoverScale: TargetAndTransition = {
  scale: 1.05,
};

/** Lift effect */
export const whileHoverLift: TargetAndTransition = {
  y: -4,
  transition: { duration: 0.2 },
};

/** Glow effect */
export const whileHoverGlow: TargetAndTransition = {
  boxShadow: "0 0 30px rgba(255, 0, 255, 0.3)",
};

/** Border highlight */
export const whileHoverBorder: TargetAndTransition = {
  borderColor: "rgba(255, 0, 255, 0.8)",
};

/** Combined scale and glow */
export const whileHoverPremium: TargetAndTransition = {
  scale: 1.02,
  boxShadow: "0 0 20px rgba(255, 0, 255, 0.2)",
  borderColor: "rgba(255, 0, 255, 0.5)",
};

/** Brightness boost */
export const whileHoverBright: TargetAndTransition = {
  filter: "brightness(1.1)",
};

/** Rotate on hover */
export const whileHoverRotate: TargetAndTransition = {
  rotate: 5,
};

/** Cyan glow for secondary elements */
export const whileHoverCyan: TargetAndTransition = {
  boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
};
