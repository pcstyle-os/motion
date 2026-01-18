import type { Transition, Variants } from "framer-motion";

/**
 * Card animation presets
 */
export const cardPresets = {
  /**
   * Default hover effect
   */
  default: {
    whileHover: { scale: 1.02, y: -5 },
    transition: { type: "spring", stiffness: 300, damping: 25 } as Transition,
  },

  /**
   * Subtle lift
   */
  lift: {
    whileHover: { y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" },
    transition: { type: "spring", stiffness: 400, damping: 25 } as Transition,
  },

  /**
   * Glow effect
   */
  glow: {
    whileHover: {
      boxShadow: "0 0 30px rgba(255, 0, 255, 0.3)",
      borderColor: "rgba(255, 0, 255, 0.5)",
    },
    transition: { duration: 0.3 } as Transition,
  },

  /**
   * Scale and rotate
   */
  tilt: {
    whileHover: { scale: 1.02, rotateY: 5, rotateX: -5 },
    transition: { type: "spring", stiffness: 300, damping: 25 } as Transition,
  },

  /**
   * Border highlight
   */
  highlight: {
    whileHover: {
      borderColor: "#ff00ff",
      transition: { duration: 0.2 },
    },
    transition: { duration: 0.2 } as Transition,
  },
} as const;

/**
 * Card entrance variants
 */
export const cardVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  },

  slideIn: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },

  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  },
};

export function getCardMotion(preset: keyof typeof cardPresets = "default") {
  return cardPresets[preset];
}

export function getCardVariants(variant: keyof typeof cardVariants = "fadeUp") {
  return cardVariants[variant];
}
