import type { Variants } from "framer-motion";

/**
 * 3D flip animation variants
 */
export const flipHorizontal: Variants = {
  initial: {
    rotateY: 0,
  },
  flip: {
    rotateY: 180,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const flipVertical: Variants = {
  initial: {
    rotateX: 0,
  },
  flip: {
    rotateX: 180,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const flipCard: Variants = {
  front: {
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  back: {
    rotateY: 180,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const flipReveal: Variants = {
  hidden: {
    rotateX: -90,
    opacity: 0,
    transformOrigin: "top",
  },
  visible: {
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const flipExit: Variants = {
  initial: {
    rotateX: 0,
    opacity: 1,
  },
  exit: {
    rotateX: 90,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

/**
 * Continuous rotation
 */
export const spin: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const spinSlow: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const flip3D: Variants = {
  initial: {
    rotateX: 0,
    rotateY: 0,
  },
  animate: (direction: "x" | "y" | "both" = "both") => ({
    rotateX: direction === "x" || direction === "both" ? 360 : 0,
    rotateY: direction === "y" || direction === "both" ? 360 : 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  }),
};
