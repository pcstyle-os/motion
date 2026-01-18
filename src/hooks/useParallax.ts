"use client";

import { useRef } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";

interface ParallaxOptions {
  /**
   * Parallax speed multiplier (negative for reverse)
   */
  speed?: number;
  /**
   * Offset range (scroll progress)
   */
  offset?: ["start end" | "end start" | "center center", "start end" | "end start" | "center center"];
}

interface ParallaxReturn {
  ref: React.RefObject<HTMLElement | null>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

/**
 * Hook for parallax scroll effects
 *
 * @example
 * const { ref, y } = useParallax({ speed: 0.5 });
 * return (
 *   <motion.div ref={ref} style={{ y }}>
 *     Parallax content
 *   </motion.div>
 * );
 */
export function useParallax({
  speed = 0.5,
  offset = ["start end", "end start"],
}: ParallaxOptions = {}): ParallaxReturn {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return {
    ref,
    y,
    opacity,
    scale,
    scrollYProgress,
  };
}

/**
 * Multi-layer parallax for complex effects
 */
interface ParallaxLayerReturn {
  ref: React.RefObject<HTMLElement | null>;
  layers: {
    slow: MotionValue<number>;
    medium: MotionValue<number>;
    fast: MotionValue<number>;
  };
  scrollYProgress: MotionValue<number>;
}

export function useParallaxLayers(): ParallaxLayerReturn {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const slow = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const medium = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return {
    ref,
    layers: { slow, medium, fast },
    scrollYProgress,
  };
}
