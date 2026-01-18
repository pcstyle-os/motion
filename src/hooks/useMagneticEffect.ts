"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface MagneticEffectOptions {
  /**
   * Magnetic strength (0-100)
   */
  strength?: number;
  /**
   * Distance at which magnetic effect starts (px)
   */
  radius?: number;
  /**
   * Spring stiffness
   */
  stiffness?: number;
  /**
   * Spring damping
   */
  damping?: number;
}

interface MagneticEffectReturn<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  isActive: boolean;
}

/**
 * Hook for magnetic cursor-following effect
 *
 * @example
 * const { ref, x, y } = useMagneticEffect<HTMLButtonElement>({ strength: 40 });
 * return (
 *   <motion.button ref={ref} style={{ x, y }}>
 *     Hover me
 *   </motion.button>
 * );
 */
export function useMagneticEffect<T extends HTMLElement = HTMLDivElement>({
  strength = 40,
  radius = 150,
  stiffness = 150,
  damping = 15,
}: MagneticEffectOptions = {}): MagneticEffectReturn<T> {
  const ref = useRef<T>(null);
  const [isActive, setIsActive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness, damping });
  const springY = useSpring(y, { stiffness, damping });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < radius) {
        const factor = (strength / 100) * (1 - distance / radius);
        x.set(distanceX * factor);
        y.set(distanceY * factor);
        setIsActive(true);
      } else {
        x.set(0);
        y.set(0);
        setIsActive(false);
      }
    },
    [radius, strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsActive(false);
  }, [x, y]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return {
    ref,
    x: springX,
    y: springY,
    isActive,
  };
}
