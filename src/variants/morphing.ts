import type { Variants } from "framer-motion";

/**
 * Shape morphing animation variants
 */
export const morphBlob: Variants = {
  initial: {
    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
  },
  animate: {
    borderRadius: [
      "60% 40% 30% 70% / 60% 30% 70% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 60%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const morphText: Variants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 },
    },
  },
};

export const morphContainer: Variants = {
  initial: {
    borderRadius: "50%",
    scale: 0.8,
  },
  animate: {
    borderRadius: ["50%", "20%", "50%"],
    scale: [0.8, 1, 0.8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const morphPath: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        type: "spring",
        duration: 1.5,
        bounce: 0,
      },
      opacity: { duration: 0.01 },
    },
  },
};

/**
 * Liquid morphing effect
 */
export const morphLiquid: Variants = {
  initial: {
    d: "M0,100 C150,200 350,0 500,100 L500,500 L0,500 Z",
  },
  animate: {
    d: [
      "M0,100 C150,200 350,0 500,100 L500,500 L0,500 Z",
      "M0,100 C150,0 350,200 500,100 L500,500 L0,500 Z",
      "M0,100 C150,200 350,0 500,100 L500,500 L0,500 Z",
    ],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
