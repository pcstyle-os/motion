import type { Variants } from "framer-motion";

/**
 * Drag gesture animation variants
 */
export const dragVariants: Record<string, Variants> = {
  /**
   * Draggable item with spring return
   */
  spring: {
    idle: { scale: 1 },
    dragging: { scale: 1.05 },
  },

  /**
   * Draggable card
   */
  card: {
    idle: { scale: 1, boxShadow: "0 5px 20px rgba(0,0,0,0.2)" },
    dragging: { scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" },
  },

  /**
   * Sortable list item
   */
  sortable: {
    idle: { zIndex: 0 },
    dragging: { zIndex: 100, scale: 1.02 },
  },
};

/**
 * Drag constraint generators
 */
export const dragConstraints = {
  /**
   * No constraints (free drag)
   */
  none: undefined,

  /**
   * Contained within parent
   */
  parent: { top: 0, left: 0, right: 0, bottom: 0 },

  /**
   * Horizontal only
   */
  horizontal: { top: 0, bottom: 0 },

  /**
   * Vertical only
   */
  vertical: { left: 0, right: 0 },
};

/**
 * Drag elastic settings
 */
export const dragElastic = {
  none: 0,
  subtle: 0.1,
  normal: 0.2,
  bouncy: 0.5,
  extreme: 1,
};

/**
 * Swipe away variants
 */
export const swipeAwayVariants: Variants = {
  initial: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction * 300,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

/**
 * Tinder-style card stack
 */
export const cardStackVariants: Variants = {
  current: { scale: 1, y: 0, opacity: 1 },
  next: { scale: 0.95, y: 20, opacity: 0.8 },
  hidden: { scale: 0.9, y: 40, opacity: 0 },
  exit: (direction: number) => ({
    x: direction * 500,
    rotate: direction * 20,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};
