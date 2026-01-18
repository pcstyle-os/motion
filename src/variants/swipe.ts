import type { Variants } from "framer-motion";

/**
 * Swipe gesture animation variants
 */
export const swipeVariants: Record<string, Variants> = {
  /**
   * Horizontal swipe transition
   */
  horizontal: {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  },

  /**
   * Vertical swipe transition
   */
  vertical: {
    enter: (direction: number) => ({
      y: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  },

  /**
   * Swipe with scale
   */
  scale: {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      scale: 0.8,
      opacity: 0,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      scale: 0.8,
      opacity: 0,
    }),
  },

  /**
   * Swipe with rotation
   */
  rotate: {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      rotate: direction > 0 ? 15 : -15,
      opacity: 0,
    }),
    center: {
      x: 0,
      rotate: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      rotate: direction > 0 ? -15 : 15,
      opacity: 0,
    }),
  },
};

/**
 * Swipe action reveal (like iOS delete)
 */
export const swipeActionVariants: Variants = {
  closed: { x: 0 },
  open: { x: -100 },
};

/**
 * Pull to refresh variants
 */
export const pullRefreshVariants: Variants = {
  idle: { y: -50, opacity: 0 },
  pulling: { y: 0, opacity: 1 },
  refreshing: {
    y: 0,
    opacity: 1,
    rotate: 360,
    transition: { rotate: { duration: 1, repeat: Infinity, ease: "linear" } },
  },
  done: { y: -50, opacity: 0 },
};
