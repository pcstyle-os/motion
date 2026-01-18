import type { Variants } from "framer-motion";

/**
 * Page transition animation presets
 */
export const pageVariants: Record<string, Variants> = {
  /**
   * Default fade
   */
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  /**
   * Slide up
   */
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  },

  /**
   * Slide from right (push)
   */
  slideRight: {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.2 },
    },
  },

  /**
   * Slide from left (pop)
   */
  slideLeft: {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.2 },
    },
  },

  /**
   * Scale zoom
   */
  zoom: {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  },

  /**
   * Blur transition
   */
  blur: {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.3 },
    },
  },

  /**
   * 3D perspective
   */
  perspective: {
    initial: {
      opacity: 0,
      rotateY: -10,
      transformPerspective: 1000,
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      rotateY: 10,
      transition: { duration: 0.3 },
    },
  },

  /**
   * Curtain reveal
   */
  curtain: {
    initial: { clipPath: "inset(0 100% 0 0)" },
    animate: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    exit: {
      clipPath: "inset(0 0 0 100%)",
      transition: { duration: 0.4 },
    },
  },

  /**
   * Stagger children
   */
  stagger: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  },
};

/**
 * Page child variants for stagger effect
 */
export const pageChildVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

export function getPageVariants(variant: keyof typeof pageVariants = "fade") {
  return pageVariants[variant];
}
