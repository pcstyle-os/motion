"use client";

import { useMotionValue, useSpring, type MotionValue, type SpringOptions } from "framer-motion";
import { useEffect } from "react";

interface SpringValueOptions extends SpringOptions {
  /**
   * Initial value
   */
  initialValue?: number;
}

interface SpringValueReturn {
  value: MotionValue<number>;
  set: (newValue: number) => void;
  get: () => number;
  reset: () => void;
}

/**
 * Create spring-animated motion values
 *
 * @example
 * const { value, set } = useSpringValue({ stiffness: 300 });
 *
 * return (
 *   <motion.div
 *     style={{ scale: value }}
 *     onHoverStart={() => set(1.1)}
 *     onHoverEnd={() => set(1)}
 *   />
 * );
 */
export function useSpringValue({
  initialValue = 0,
  stiffness = 300,
  damping = 30,
  mass = 1,
  ...rest
}: SpringValueOptions = {}): SpringValueReturn {
  const rawValue = useMotionValue(initialValue);
  const springValue = useSpring(rawValue, { stiffness, damping, mass, ...rest });

  const set = (newValue: number) => {
    rawValue.set(newValue);
  };

  const get = () => springValue.get();

  const reset = () => {
    rawValue.set(initialValue);
  };

  return {
    value: springValue,
    set,
    get,
    reset,
  };
}

/**
 * Multiple spring values with coordinated timing
 */
interface SpringValuesReturn {
  values: {
    x: MotionValue<number>;
    y: MotionValue<number>;
    scale: MotionValue<number>;
    rotate: MotionValue<number>;
  };
  setAll: (vals: { x?: number; y?: number; scale?: number; rotate?: number }) => void;
  reset: () => void;
}

export function useSpringValues({
  stiffness = 300,
  damping = 30,
}: SpringOptions = {}): SpringValuesReturn {
  const config = { stiffness, damping };

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawScale = useMotionValue(1);
  const rawRotate = useMotionValue(0);

  const x = useSpring(rawX, config);
  const y = useSpring(rawY, config);
  const scale = useSpring(rawScale, config);
  const rotate = useSpring(rawRotate, config);

  const setAll = (vals: { x?: number; y?: number; scale?: number; rotate?: number }) => {
    if (vals.x !== undefined) rawX.set(vals.x);
    if (vals.y !== undefined) rawY.set(vals.y);
    if (vals.scale !== undefined) rawScale.set(vals.scale);
    if (vals.rotate !== undefined) rawRotate.set(vals.rotate);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
    rawScale.set(1);
    rawRotate.set(0);
  };

  return {
    values: { x, y, scale, rotate },
    setAll,
    reset,
  };
}

/**
 * Animated counter using spring
 */
export function useSpringCounter(
  target: number,
  options: SpringOptions = {}
): MotionValue<number> {
  const value = useMotionValue(0);
  const springValue = useSpring(value, {
    stiffness: 100,
    damping: 30,
    ...options,
  });

  useEffect(() => {
    value.set(target);
  }, [target, value]);

  return springValue;
}
