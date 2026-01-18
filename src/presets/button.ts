import type { Transition, Variants } from "framer-motion";

/**
 * Button animation presets
 */
export const buttonPresets = {
  /**
   * Default hover/tap animations
   */
  default: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 25 } as Transition,
  },

  /**
   * Bouncy button
   */
  bouncy: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 500, damping: 15 } as Transition,
  },

  /**
   * Subtle button
   */
  subtle: {
    whileHover: { scale: 1.01 },
    whileTap: { scale: 0.99 },
    transition: { type: "spring", stiffness: 500, damping: 30 } as Transition,
  },

  /**
   * Glow button
   */
  glow: {
    whileHover: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(255, 0, 255, 0.5)",
    },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 25 } as Transition,
  },

  /**
   * 3D press effect
   */
  press: {
    whileHover: { y: -2 },
    whileTap: { y: 2, boxShadow: "none" },
    transition: { type: "spring", stiffness: 400, damping: 20 } as Transition,
  },
} as const;

/**
 * Get button motion props
 */
export function getButtonMotion(preset: keyof typeof buttonPresets = "default") {
  return buttonPresets[preset];
}
