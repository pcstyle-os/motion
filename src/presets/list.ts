import type { Variants } from "framer-motion";

/**
 * List and stagger animation presets
 */
export const listContainerVariants: Record<string, Variants> = {
  /**
   * Default stagger
   */
  stagger: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  },

  /**
   * Fast stagger
   */
  staggerFast: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  },

  /**
   * Slow stagger
   */
  staggerSlow: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  /**
   * Stagger with reverse on exit
   */
  staggerReverse: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  },
};

export const listItemVariants: Record<string, Variants> = {
  /**
   * Fade up item
   */
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  },

  /**
   * Fade in item
   */
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  },

  /**
   * Scale in item
   */
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  },

  /**
   * Slide from left
   */
  slideLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: { duration: 0.2 },
    },
  },

  /**
   * Slide from right
   */
  slideRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.2 },
    },
  },

  /**
   * Blur reveal
   */
  blur: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.2 },
    },
  },
};

export function getListContainerVariants(
  variant: keyof typeof listContainerVariants = "stagger"
) {
  return listContainerVariants[variant];
}

export function getListItemVariants(
  variant: keyof typeof listItemVariants = "fadeUp"
) {
  return listItemVariants[variant];
}
