"use client";

import { useEffect, useCallback, useRef } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface FollowPointerOptions {
  /**
   * Spring stiffness
   */
  stiffness?: number;
  /**
   * Spring damping
   */
  damping?: number;
  /**
   * Offset from pointer
   */
  offset?: { x: number; y: number };
  /**
   * Delay factor (0-1, lower = more delay)
   */
  delay?: number;
}

interface FollowPointerReturn {
  x: MotionValue<number>;
  y: MotionValue<number>;
  isActive: boolean;
}

/**
 * Element follows pointer with spring physics
 *
 * @example
 * const { x, y } = useFollowPointer({ stiffness: 100 });
 * return <motion.div style={{ x, y }} />;
 */
export function useFollowPointer({
  stiffness = 300,
  damping = 30,
  offset = { x: 0, y: 0 },
  delay = 0,
}: FollowPointerOptions = {}): FollowPointerReturn {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness, damping });
  const y = useSpring(rawY, { stiffness, damping });

  const isActiveRef = useRef(false);
  const frameRef = useRef<number | undefined>(undefined);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: e.clientX + offset.x,
        y: e.clientY + offset.y,
      };

      if (!isActiveRef.current) {
        isActiveRef.current = true;
      }
    };

    const animate = () => {
      if (delay > 0) {
        const currentX = rawX.get();
        const currentY = rawY.get();
        rawX.set(currentX + (targetRef.current.x - currentX) * (1 - delay));
        rawY.set(currentY + (targetRef.current.y - currentY) * (1 - delay));
      } else {
        rawX.set(targetRef.current.x);
        rawY.set(targetRef.current.y);
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [delay, offset.x, offset.y, rawX, rawY]);

  return {
    x,
    y,
    isActive: isActiveRef.current,
  };
}

/**
 * Multiple elements following pointer with trail effect
 */
export function useFollowPointerTrail(
  count: number,
  options: FollowPointerOptions = {}
): FollowPointerReturn[] {
  const { stiffness = 300, damping = 30 } = options;

  const trail: FollowPointerReturn[] = [];

  for (let i = 0; i < count; i++) {
    const delayFactor = i * 0.1;
    const result = useFollowPointer({
      stiffness: stiffness - i * 20,
      damping: damping + i * 5,
      delay: delayFactor,
    });
    trail.push(result);
  }

  return trail;
}
