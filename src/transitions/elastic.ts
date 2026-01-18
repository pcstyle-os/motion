import type { Transition } from "framer-motion";

/**
 * Elastic physics transitions with overshoot and bounce
 */
export const elasticSmall: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 10,
};

export const elasticMedium: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 8,
};

export const elasticLarge: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 6,
};

export const elasticBouncy: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 15,
  mass: 1,
};

export const elasticSoft: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 12,
  mass: 0.8,
};

/**
 * Preset configurations for common use cases
 */
export const elasticPresets = {
  button: elasticBouncy,
  card: elasticMedium,
  modal: elasticSoft,
  dropdown: elasticSmall,
  notification: elasticLarge,
} as const;
