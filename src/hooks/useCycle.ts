"use client";

import { useState, useCallback, useMemo } from "react";

/**
 * Cycle through states with animation support
 *
 * @example
 * const [state, cycle, set] = useCycle("open", "closed", "minimized");
 * 
 * return (
 *   <motion.div animate={state} onClick={cycle}>
 *     ...
 *   </motion.div>
 * );
 */
export function useCycle<T>(...items: T[]): [
  T,
  () => void,
  (index: number) => void,
  {
    index: number;
    next: () => void;
    prev: () => void;
    set: (value: T) => void;
    isFirst: boolean;
    isLast: boolean;
  }
] {
  const [index, setIndex] = useState(0);

  const current = useMemo(() => items[index], [index, items]);

  const cycle = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  const set = useCallback(
    (i: number) => {
      if (i >= 0 && i < items.length) {
        setIndex(i);
      }
    },
    [items.length]
  );

  const next = useCallback(() => {
    setIndex((i) => Math.min(i + 1, items.length - 1));
  }, [items.length]);

  const prev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const setValue = useCallback(
    (value: T) => {
      const i = items.indexOf(value);
      if (i !== -1) {
        setIndex(i);
      }
    },
    [items]
  );

  return [
    current,
    cycle,
    set,
    {
      index,
      next,
      prev,
      set: setValue,
      isFirst: index === 0,
      isLast: index === items.length - 1,
    },
  ];
}

/**
 * Cycle through animation variants
 *
 * @example
 * const { variant, cycle, variants } = useCycleVariants({
 *   open: { height: "auto", opacity: 1 },
 *   closed: { height: 0, opacity: 0 },
 * });
 * 
 * return <motion.div animate={variant} variants={variants} onClick={cycle} />;
 */
export function useCycleVariants<K extends string>(
  variants: Record<K, object>
): {
  variant: K;
  cycle: () => void;
  set: (key: K) => void;
  variants: Record<K, object>;
  keys: K[];
} {
  const keys = useMemo(() => Object.keys(variants) as K[], [variants]);
  const [index, setIndex] = useState(0);

  const variant = useMemo(() => keys[index], [index, keys]);

  const cycle = useCallback(() => {
    setIndex((i) => (i + 1) % keys.length);
  }, [keys.length]);

  const set = useCallback(
    (key: K) => {
      const i = keys.indexOf(key);
      if (i !== -1) {
        setIndex(i);
      }
    },
    [keys]
  );

  return {
    variant,
    cycle,
    set,
    variants,
    keys,
  };
}
