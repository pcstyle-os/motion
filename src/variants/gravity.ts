import type { Variants } from "framer-motion";

/**
 * Gravity-based animation variants
 */
export const gravityVariants: Record<string, Variants> = {
  /**
   * Drop with bounce
   */
  drop: {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  },

  /**
   * Heavy drop (less bounce)
   */
  heavyDrop: {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  },

  /**
   * Light drop (more bounce)
   */
  lightDrop: {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  },

  /**
   * Fall and settle
   */
  fall: {
    hidden: { y: -100, rotate: -15, opacity: 0 },
    visible: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  },

  /**
   * Float up against gravity
   */
  floatUp: {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  },
};

/**
 * Stagger children with gravity effect
 */
export const gravityStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Physics-based throw animation
 */
export const throwVariants: Variants = {
  idle: { x: 0, y: 0 },
  thrown: (velocity: { x: number; y: number }) => ({
    x: velocity.x * 100,
    y: velocity.y * 100 + 200, // Add gravity
    rotate: velocity.x * 20,
    opacity: 0,
    transition: {
      x: { type: "tween", ease: "linear", duration: 0.5 },
      y: { type: "tween", ease: [0, 0.5, 0.5, 1], duration: 0.5 },
      rotate: { type: "tween", ease: "linear", duration: 0.5 },
      opacity: { delay: 0.3, duration: 0.2 },
    },
  }),
};
