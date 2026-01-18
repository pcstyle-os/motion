"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface InViewOptions {
  /**
   * Threshold for intersection (0-1)
   */
  threshold?: number | number[];
  /**
   * Root margin
   */
  rootMargin?: string;
  /**
   * Only trigger once
   */
  triggerOnce?: boolean;
  /**
   * Callback when in view changes
   */
  onChange?: (inView: boolean) => void;
}

interface InViewReturn<T extends Element> {
  ref: React.RefObject<T | null>;
  inView: boolean;
  entry: IntersectionObserverEntry | undefined;
}

/**
 * Intersection observer hook for scroll-triggered animations
 *
 * @example
 * const { ref, inView } = useInView({ threshold: 0.5 });
 * return (
 *   <motion.div
 *     ref={ref}
 *     animate={inView ? "visible" : "hidden"}
 *     variants={fadeIn}
 *   >
 *     Content
 *   </motion.div>
 * );
 */
export function useInView<T extends Element = HTMLDivElement>({
  threshold = 0,
  rootMargin = "0px",
  triggerOnce = false,
  onChange,
}: InViewOptions = {}): InViewReturn<T> {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const hasTriggered = useRef(false);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (triggerOnce && hasTriggered.current) return;

      const isInView = entry.isIntersecting;

      if (isInView && triggerOnce) {
        hasTriggered.current = true;
      }

      setInView(isInView);
      setEntry(entry);
      onChange?.(isInView);
    },
    [triggerOnce, onChange]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, handleIntersection]);

  return { ref, inView, entry };
}

/**
 * Multiple elements in view tracking
 */
export function useInViewMultiple<T extends Element = HTMLDivElement>(
  count: number,
  options: InViewOptions = {}
): Array<InViewReturn<T>> {
  // Create refs for each element
  const results = Array.from({ length: count }, () => useInView<T>(options));
  return results;
}
