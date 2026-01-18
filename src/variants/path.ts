import type { Variants } from "framer-motion";

/**
 * SVG path drawing animation variants
 */
export const pathDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 },
    },
  },
};

export const pathDrawFast: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.8, ease: "easeOut" },
      opacity: { duration: 0.2 },
    },
  },
};

export const pathDrawReverse: Variants = {
  visible: {
    pathLength: 1,
    opacity: 1,
  },
  hidden: {
    pathLength: 0,
    opacity: 0,
    transition: {
      pathLength: { duration: 1, ease: "easeIn" },
      opacity: { duration: 0.5, delay: 0.5 },
    },
  },
};

export const pathFill: Variants = {
  hidden: {
    fill: "rgba(0, 0, 0, 0)",
    pathLength: 0,
  },
  visible: {
    fill: "currentColor",
    pathLength: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      fill: { duration: 0.5, delay: 1.5 },
    },
  },
};

export const pathStroke: Variants = {
  hidden: {
    strokeDasharray: "0 1000",
    strokeDashoffset: 0,
  },
  visible: {
    strokeDasharray: "1000 0",
    strokeDashoffset: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

/**
 * Container for staggered path animations
 */
export const pathContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

/**
 * Looping path animation
 */
export const pathLoop: Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: [0, 1, 1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.4, 0.6, 1],
    },
  },
};

/**
 * Dash animation for paths
 */
export const pathDash: Variants = {
  initial: {
    strokeDashoffset: 0,
  },
  animate: {
    strokeDashoffset: -100,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
