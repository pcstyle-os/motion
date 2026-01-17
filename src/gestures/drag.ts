import type { TargetAndTransition } from "framer-motion";

/**
 * Drag gesture configurations
 */

/** Free drag in all directions */
export const dragFree = {
  drag: true as const,
  dragElastic: 0.2,
  dragMomentum: true,
};

/** Horizontal only drag */
export const dragX = {
  drag: "x" as const,
  dragElastic: 0.2,
  dragMomentum: true,
};

/** Vertical only drag */
export const dragY = {
  drag: "y" as const,
  dragElastic: 0.2,
  dragMomentum: true,
};

/** Constrained drag with bounds */
export const dragConstrained = {
  drag: true as const,
  dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
  dragElastic: 0.1,
};

/** Snappy drag with no momentum */
export const dragSnap = {
  drag: true as const,
  dragElastic: 0,
  dragMomentum: false,
};

/** Slider-style horizontal drag */
export const dragSlider = {
  drag: "x" as const,
  dragElastic: 0.05,
  dragMomentum: true,
  dragTransition: { bounceStiffness: 300, bounceDamping: 20 },
};

/**
 * While dragging animations
 */
export const whileDragScale: TargetAndTransition = {
  scale: 1.05,
  cursor: "grabbing",
};

export const whileDragShadow: TargetAndTransition = {
  scale: 1.02,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
};
