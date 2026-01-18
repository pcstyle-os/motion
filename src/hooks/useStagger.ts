"use client";

import { useState, useMemo, useCallback } from "react";
import type { Variants } from "framer-motion";

interface StaggerOptions {
  /**
   * Delay between items
   */
  staggerDelay?: number;
  /**
   * Initial delay before first item
   */
  initialDelay?: number;
  /**
   * Animation direction
   */
  direction?: "forward" | "reverse" | "center";
}

interface StaggerReturn<T> {
  /**
   * Items with delay calculated
   */
  items: Array<{ item: T; delay: number; index: number }>;
  /**
   * Container variants for AnimatePresence
   */
  containerVariants: Variants;
  /**
   * Child variants with stagger
   */
  itemVariants: Variants;
  /**
   * Trigger animation
   */
  trigger: () => void;
  /**
   * Reset animation
   */
  reset: () => void;
  /**
   * Animation active state
   */
  isAnimating: boolean;
}

/**
 * Stagger animation helper hook
 *
 * @example
 * const { items, containerVariants, itemVariants } = useStagger(data, {
 *   staggerDelay: 0.1,
 * });
 * 
 * return (
 *   <motion.ul variants={containerVariants} initial="hidden" animate="visible">
 *     {items.map(({ item, delay }) => (
 *       <motion.li key={item.id} variants={itemVariants} custom={delay}>
 *         {item.name}
 *       </motion.li>
 *     ))}
 *   </motion.ul>
 * );
 */
export function useStagger<T>(
  data: T[],
  {
    staggerDelay = 0.05,
    initialDelay = 0.1,
    direction = "forward",
  }: StaggerOptions = {}
): StaggerReturn<T> {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const items = useMemo(() => {
    return data.map((item, index) => {
      let delay: number;

      switch (direction) {
        case "reverse":
          delay = initialDelay + (data.length - 1 - index) * staggerDelay;
          break;
        case "center":
          const center = (data.length - 1) / 2;
          delay = initialDelay + Math.abs(index - center) * staggerDelay;
          break;
        default:
          delay = initialDelay + index * staggerDelay;
      }

      return { item, delay, index };
    });
  }, [data, direction, initialDelay, staggerDelay]);

  const containerVariants: Variants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: initialDelay,
          staggerDirection: direction === "reverse" ? -1 : 1,
        },
      },
    }),
    [direction, initialDelay, staggerDelay]
  );

  const itemVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: custom,
          type: "spring",
          stiffness: 300,
          damping: 25,
        },
      }),
    }),
    []
  );

  const trigger = useCallback(() => {
    setIsAnimating(true);
    setAnimationKey((k) => k + 1);
  }, []);

  const reset = useCallback(() => {
    setIsAnimating(false);
    setAnimationKey((k) => k + 1);
  }, []);

  return {
    items,
    containerVariants,
    itemVariants,
    trigger,
    reset,
    isAnimating,
  };
}
