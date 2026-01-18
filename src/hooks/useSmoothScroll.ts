"use client";

import { useCallback } from "react";
import { animate, type AnimationPlaybackControls } from "framer-motion";

interface SmoothScrollOptions {
  /**
   * Animation duration in seconds
   */
  duration?: number;
  /**
   * Easing function (cubic bezier array)
   */
  ease?: [number, number, number, number];
  /**
   * Offset from target in pixels
   */
  offset?: number;
}

interface SmoothScrollReturn {
  scrollTo: (target: HTMLElement | string | number) => AnimationPlaybackControls | undefined;
  scrollToTop: () => AnimationPlaybackControls;
  scrollToBottom: () => AnimationPlaybackControls;
}

/**
 * Smooth scroll with spring physics
 *
 * @example
 * const { scrollTo, scrollToTop } = useSmoothScroll();
 *
 * return (
 *   <>
 *     <button onClick={() => scrollTo("#section-2")}>Go to Section 2</button>
 *     <button onClick={scrollToTop}>Back to Top</button>
 *   </>
 * );
 */
export function useSmoothScroll({
  duration = 0.8,
  ease = [0.25, 0.1, 0.25, 1],
  offset = 0,
}: SmoothScrollOptions = {}): SmoothScrollReturn {
  const scrollTo = useCallback(
    (target: HTMLElement | string | number) => {
      let targetY: number;

      if (typeof target === "number") {
        targetY = target;
      } else if (typeof target === "string") {
        const element = document.querySelector(target);
        if (!element) return;
        targetY = element.getBoundingClientRect().top + window.scrollY;
      } else {
        targetY = target.getBoundingClientRect().top + window.scrollY;
      }

      targetY -= offset;

      return animate(window.scrollY, targetY, {
        duration,
        ease,
        onUpdate: (value) => window.scrollTo(0, value),
      });
    },
    [duration, ease, offset]
  );

  const scrollToTop = useCallback(() => {
    return animate(window.scrollY, 0, {
      duration,
      ease,
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }, [duration, ease]);

  const scrollToBottom = useCallback(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    return animate(window.scrollY, maxScroll, {
      duration,
      ease,
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }, [duration, ease]);

  return {
    scrollTo,
    scrollToTop,
    scrollToBottom,
  };
}

/**
 * Scroll to element with reveal animation
 */
export function useScrollReveal({
  duration = 0.8,
  offset = 100,
}: {
  duration?: number;
  offset?: number;
} = {}) {
  const revealAndScroll = useCallback(
    (target: HTMLElement | string) => {
      const element =
        typeof target === "string" ? document.querySelector(target) : target;

      if (!element) return;

      const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
      const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

      return animate(window.scrollY, targetY, {
        duration,
        ease,
        onUpdate: (value) => window.scrollTo(0, value),
      });
    },
    [duration, offset]
  );

  return { revealAndScroll };
}
