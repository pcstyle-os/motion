import type { Variants } from "framer-motion";

/**
 * Scale animation variants
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const scaleOut: Variants = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 0, scale: 0.8 },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 15 }
  },
};

export const popOut: Variants = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 0, scale: 1.2 },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export const zoomOut: Variants = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 0, scale: 0 },
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 10 }
  },
};

export const pulse: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1],
    transition: { duration: 1, repeat: Infinity }
  },
};
