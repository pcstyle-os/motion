import type { Variants } from "framer-motion";

/**
 * Elastic bounce animation variants
 */
export const elasticBounceIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
  },
};

export const elasticBounceOut: Variants = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.3,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
  },
};

export const bounceY: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const bounceX: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: [0, 10, 0],
    transition: {
      duration: 0.4,
      ease: "easeOut",
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

/**
 * Squash and stretch
 */
export const squashStretch: Variants = {
  initial: {
    scaleX: 1,
    scaleY: 1,
  },
  animate: {
    scaleX: [1, 1.1, 0.9, 1],
    scaleY: [1, 0.9, 1.1, 1],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const squashOnPress: Variants = {
  initial: {
    scaleX: 1,
    scaleY: 1,
  },
  pressed: {
    scaleX: 1.05,
    scaleY: 0.95,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

export const jelly: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const rubberBand: Variants = {
  initial: {
    scaleX: 1,
    scaleY: 1,
  },
  animate: {
    scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
    scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export const pulseFade: Variants = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const heartbeat: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.15, 1, 1.15, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0.5,
      ease: "easeInOut",
    },
  },
};
