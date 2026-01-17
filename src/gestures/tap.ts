import type { TargetAndTransition } from "framer-motion";

/**
 * Tap/press gesture animations
 */

/** Scale down on tap */
export const whileTapScale: TargetAndTransition = {
  scale: 0.95,
};

/** Deeper press */
export const whileTapDeep: TargetAndTransition = {
  scale: 0.9,
};

/** Subtle tap feedback */
export const whileTapSubtle: TargetAndTransition = {
  scale: 0.98,
};

/** Opacity change */
export const whileTapDim: TargetAndTransition = {
  opacity: 0.8,
};

/** Combined scale and opacity */
export const whileTapFeedback: TargetAndTransition = {
  scale: 0.95,
  opacity: 0.9,
};

/** Invert colors effect */
export const whileTapInvert: TargetAndTransition = {
  filter: "invert(1)",
};

/** Glow pulse on tap */
export const whileTapGlow: TargetAndTransition = {
  boxShadow: "0 0 40px rgba(255, 0, 255, 0.5)",
};
