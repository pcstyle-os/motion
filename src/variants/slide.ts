import type { Variants } from "framer-motion";

/**
 * Slide animation variants
 */
export const slideIn: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

export const slideOut: Variants = {
  hidden: { x: 0 },
  visible: { x: "100%" },
};

export const slideUp: Variants = {
  hidden: { y: "100%" },
  visible: { y: 0 },
};

export const slideDown: Variants = {
  hidden: { y: "-100%" },
  visible: { y: 0 },
};

export const slideLeft: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

export const slideRight: Variants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

export const slideInFromTop: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const slideInFromBottom: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
