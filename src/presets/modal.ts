import type { Variants } from "framer-motion";

/**
 * Modal/dialog animation presets
 */
export const modalVariants: Record<string, Variants> = {
  /**
   * Scale fade (default)
   */
  scale: {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  },

  /**
   * Slide up from bottom
   */
  slideUp: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  },

  /**
   * Slide down from top
   */
  slideDown: {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.2,
      },
    },
  },

  /**
   * Zoom in dramatically
   */
  zoom: {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
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
      transition: {
        duration: 0.15,
      },
    },
  },

  /**
   * Blur reveal
   */
  blur: {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 1.05,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      transition: {
        duration: 0.2,
      },
    },
  },

  /**
   * Flip in
   */
  flip: {
    hidden: {
      opacity: 0,
      rotateX: -15,
      transformPerspective: 1000,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      rotateX: 15,
      transition: {
        duration: 0.2,
      },
    },
  },
};

/**
 * Overlay/backdrop variants
 */
export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export function getModalVariants(variant: keyof typeof modalVariants = "scale") {
  return modalVariants[variant];
}
