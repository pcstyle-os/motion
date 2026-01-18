"use client";

import { useRef, useEffect, useCallback } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface FloatingOptions {
  /**
   * Vertical range in pixels
   */
  yRange?: number;
  /**
   * Horizontal range in pixels
   */
  xRange?: number;
  /**
   * Rotation range in degrees
   */
  rotationRange?: number;
  /**
   * Animation duration in seconds
   */
  duration?: number;
  /**
   * Spring stiffness
   */
  stiffness?: number;
  /**
   * Spring damping
   */
  damping?: number;
}

interface FloatingReturn {
  y: MotionValue<number>;
  x: MotionValue<number>;
  rotate: MotionValue<number>;
  start: () => void;
  stop: () => void;
  isActive: boolean;
}

/**
 * Floating/levitating animation hook
 *
 * @example
 * const { y, rotate, start } = useFloating({ yRange: 10 });
 * useEffect(() => { start(); }, []);
 * return <motion.div style={{ y, rotate }}>Floating</motion.div>;
 */
export function useFloating({
  yRange = 10,
  xRange = 0,
  rotationRange = 5,
  duration = 3,
  stiffness = 50,
  damping = 10,
}: FloatingOptions = {}): FloatingReturn {
  const y = useMotionValue(0);
  const x = useMotionValue(0);
  const rotate = useMotionValue(0);

  const springY = useSpring(y, { stiffness, damping });
  const springX = useSpring(x, { stiffness, damping });
  const springRotate = useSpring(rotate, { stiffness, damping });

  const frameRef = useRef<number | undefined>(undefined);
  const isActiveRef = useRef(false);
  const startTimeRef = useRef(0);

  const animate = useCallback(
    (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = (time - startTimeRef.current) / 1000;
      const progress = (elapsed % duration) / duration;
      const wave = Math.sin(progress * Math.PI * 2);

      y.set(wave * yRange);
      if (xRange > 0) {
        x.set(Math.cos(progress * Math.PI * 2) * xRange);
      }
      if (rotationRange > 0) {
        rotate.set(wave * rotationRange);
      }

      if (isActiveRef.current) {
        frameRef.current = requestAnimationFrame(animate);
      }
    },
    [duration, rotate, rotationRange, x, xRange, y, yRange]
  );

  const start = useCallback(() => {
    if (!isActiveRef.current) {
      isActiveRef.current = true;
      startTimeRef.current = 0;
      frameRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  const stop = useCallback(() => {
    isActiveRef.current = false;
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    y.set(0);
    x.set(0);
    rotate.set(0);
  }, [x, y, rotate]);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return {
    y: springY,
    x: springX,
    rotate: springRotate,
    start,
    stop,
    isActive: isActiveRef.current,
  };
}

/**
 * Auto-starting floating effect
 */
export function useAutoFloat(options?: FloatingOptions): FloatingReturn {
  const floating = useFloating(options);

  useEffect(() => {
    floating.start();
    return () => floating.stop();
  }, [floating]);

  return floating;
}
