"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { type RefObject } from "react";

type Edge = "start" | "end" | "center";
type ScrollOffsetValue = Edge | `${Edge} ${Edge}`;

interface ScrollProgressOptions {
  offset?: ScrollOffsetValue[];
}

/**
 * Track scroll progress of an element
 * Returns a MotionValue from 0 to 1
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  options?: ScrollProgressOptions
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: options?.offset ?? ["start end", "end start"],
  });

  return scrollYProgress;
}

/**
 * Track scroll progress with custom output range
 */
export function useScrollTransform<T>(
  ref: RefObject<HTMLElement | null>,
  outputRange: T[],
  options?: ScrollProgressOptions
): MotionValue<T> {
  const progress = useScrollProgress(ref, options);
  const inputRange = outputRange.map((_, i) => i / (outputRange.length - 1));
  return useTransform(progress, inputRange, outputRange);
}

/**
 * Track global scroll position
 */
export function useScrollPosition() {
  const { scrollY, scrollYProgress } = useScroll();
  return { scrollY, scrollYProgress };
}
