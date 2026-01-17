import type { Variants } from "framer-motion";

/**
 * Cyberpunk-style animation variants
 */
export const glitch: Variants = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, -2, 2, -2, 0],
    y: [0, 2, -2, 2, 0],
    transition: { duration: 0.3, repeat: Infinity, repeatDelay: 3 },
  },
};

export const scanline: Variants = {
  initial: { backgroundPosition: "0 0" },
  animate: {
    backgroundPosition: ["0 0", "0 100%"],
    transition: { duration: 8, repeat: Infinity, ease: "linear" },
  },
};

export const dataStream: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: [0, 1, 1, 0],
    y: [-10, 0, 0, 10],
    transition: { duration: 1.5, repeat: Infinity },
  },
};

export const terminalType: Variants = {
  hidden: { opacity: 0, width: 0 },
  visible: (i: number = 1) => ({
    opacity: 1,
    width: "auto",
    transition: { delay: i * 0.05 },
  }),
};

export const matrixRain: Variants = {
  initial: { y: "-100%", opacity: 0 },
  animate: {
    y: "100%",
    opacity: [0, 1, 1, 0],
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  },
};

export const hologram: Variants = {
  initial: { opacity: 0.8, filter: "hue-rotate(0deg)" },
  animate: {
    opacity: [0.8, 1, 0.8],
    filter: ["hue-rotate(0deg)", "hue-rotate(10deg)", "hue-rotate(0deg)"],
    transition: { duration: 2, repeat: Infinity },
  },
};

export const cyberBlink: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1],
    transition: { duration: 0.1, repeat: 3, repeatDelay: 2 },
  },
};

export const gridPulse: Variants = {
  initial: { opacity: 0.3 },
  animate: {
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 3, repeat: Infinity },
  },
};

export const chromatic: Variants = {
  initial: { textShadow: "0 0 0 transparent" },
  hover: {
    textShadow: "-2px 0 #ff00ff, 2px 0 #00ffff",
  },
};
