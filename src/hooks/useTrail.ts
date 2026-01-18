"use client";

import { useMemo, useCallback, useRef, useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface TrailOptions {
  /**
   * Number of trail elements
   */
  length?: number;
  /**
   * Delay between trail items
   */
  delay?: number;
  /**
   * Fade out trail
   */
  fade?: boolean;
  /**
   * Scale down trail
   */
  shrink?: boolean;
}

interface TrailItem {
  x: MotionValue<number>;
  y: MotionValue<number>;
  opacity: number;
  scale: number;
}

interface TrailReturn {
  trail: TrailItem[];
  updatePosition: (x: number, y: number) => void;
}

/**
 * Create trailing elements effect
 *
 * @example
 * const { trail, updatePosition } = useTrail({ length: 5 });
 * 
 * const handleMouseMove = (e) => {
 *   updatePosition(e.clientX, e.clientY);
 * };
 * 
 * return (
 *   <>
 *     {trail.map((item, i) => (
 *       <motion.div
 *         key={i}
 *         style={{ x: item.x, y: item.y, opacity: item.opacity }}
 *       />
 *     ))}
 *   </>
 * );
 */
export function useTrail({
  length = 5,
  delay = 0.1,
  fade = true,
  shrink = true,
}: TrailOptions = {}): TrailReturn {
  const historyRef = useRef<{ x: number; y: number }[]>([]);
  const frameRef = useRef<number | undefined>(undefined);

  const trail = useMemo(() => {
    return Array.from({ length }, (_, i) => ({
      x: useMotionValue(0),
      y: useMotionValue(0),
      opacity: fade ? 1 - i / length : 1,
      scale: shrink ? 1 - i * 0.1 : 1,
    }));
  }, [length, fade, shrink]);

  const updatePosition = useCallback(
    (x: number, y: number) => {
      historyRef.current.unshift({ x, y });
      if (historyRef.current.length > length * 10) {
        historyRef.current.pop();
      }
    },
    [length]
  );

  useEffect(() => {
    const animate = () => {
      trail.forEach((item, i) => {
        const historyIndex = Math.floor(i * delay * 10);
        const pos = historyRef.current[historyIndex] || historyRef.current[0] || { x: 0, y: 0 };
        item.x.set(pos.x);
        item.y.set(pos.y);
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [delay, trail]);

  return {
    trail,
    updatePosition,
  };
}
