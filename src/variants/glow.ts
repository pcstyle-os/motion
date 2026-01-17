import type { Variants } from "framer-motion";

/**
 * Glow and shadow effect variants
 */
export const glowHover: Variants = {
  initial: { boxShadow: "0 0 0 rgba(255, 0, 255, 0)" },
  hover: { boxShadow: "0 0 30px rgba(255, 0, 255, 0.3)" },
};

export const glowPulse: Variants = {
  initial: { boxShadow: "0 0 10px rgba(255, 0, 255, 0.2)" },
  animate: {
    boxShadow: [
      "0 0 10px rgba(255, 0, 255, 0.2)",
      "0 0 25px rgba(255, 0, 255, 0.4)",
      "0 0 10px rgba(255, 0, 255, 0.2)",
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};

export const neonFlicker: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.8, 1, 0.9, 1, 0.85, 1],
    transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 },
  },
};

export const borderGlow: Variants = {
  initial: { borderColor: "rgba(255, 0, 255, 0.3)" },
  hover: { borderColor: "rgba(255, 0, 255, 0.8)" },
};

export const glowCyan: Variants = {
  initial: { boxShadow: "0 0 0 rgba(0, 255, 255, 0)" },
  hover: { boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)" },
};

export const glowWhite: Variants = {
  initial: { boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
  hover: { boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" },
};

export const shadowLift: Variants = {
  initial: { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", y: 0 },
  hover: { boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)", y: -5 },
};
