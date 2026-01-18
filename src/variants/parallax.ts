import type { Variants } from "framer-motion";

/**
 * Parallax scroll effect variants
 */
export const parallaxSlow: Variants = {
  initial: {
    y: 0,
  },
  animate: (scrollProgress: number = 0) => ({
    y: scrollProgress * 50,
    transition: { type: "tween", ease: "linear" },
  }),
};

export const parallaxMedium: Variants = {
  initial: {
    y: 0,
  },
  animate: (scrollProgress: number = 0) => ({
    y: scrollProgress * 100,
    transition: { type: "tween", ease: "linear" },
  }),
};

export const parallaxFast: Variants = {
  initial: {
    y: 0,
  },
  animate: (scrollProgress: number = 0) => ({
    y: scrollProgress * 200,
    transition: { type: "tween", ease: "linear" },
  }),
};

export const parallaxReverse: Variants = {
  initial: {
    y: 0,
  },
  animate: (scrollProgress: number = 0) => ({
    y: scrollProgress * -100,
    transition: { type: "tween", ease: "linear" },
  }),
};

export const parallaxScale: Variants = {
  initial: {
    scale: 1,
  },
  animate: (scrollProgress: number = 0) => ({
    scale: 1 + scrollProgress * 0.2,
    transition: { type: "tween", ease: "linear" },
  }),
};

export const parallaxRotate: Variants = {
  initial: {
    rotate: 0,
  },
  animate: (scrollProgress: number = 0) => ({
    rotate: scrollProgress * 45,
    transition: { type: "tween", ease: "linear" },
  }),
};

export const parallaxFade: Variants = {
  initial: {
    opacity: 1,
  },
  animate: (scrollProgress: number = 0) => ({
    opacity: 1 - scrollProgress * 0.8,
    transition: { type: "tween", ease: "linear" },
  }),
};

/**
 * 3D parallax tilt
 */
export const parallax3D: Variants = {
  initial: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  },
  animate: ({ x = 0, y = 0 }: { x?: number; y?: number } = {}) => ({
    rotateX: y * 10,
    rotateY: x * -10,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  }),
};
