"use client";

import { useRef, useCallback, useState } from "react";
import { useMotionValue, useSpring, type PanInfo, type MotionValue } from "framer-motion";

type GestureType = "tap" | "pan" | "drag" | "hover";

interface GestureState {
  isTapping: boolean;
  isPanning: boolean;
  isDragging: boolean;
  isHovering: boolean;
  velocity: { x: number; y: number };
  offset: { x: number; y: number };
  movement: { x: number; y: number };
}

interface GestureHandlers {
  onTap?: () => void;
  onDoubleTap?: () => void;
  onLongPress?: () => void;
  onPanStart?: (info: PanInfo) => void;
  onPan?: (info: PanInfo) => void;
  onPanEnd?: (info: PanInfo) => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

interface UseGestureReturn {
  state: GestureState;
  handlers: {
    onTap: () => void;
    onPanStart: (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
    onPan: (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
    onPanEnd: (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
    onHoverStart: () => void;
    onHoverEnd: () => void;
  };
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/**
 * Unified gesture handler hook
 *
 * @example
 * const { handlers, state, x, y } = useGesture({
 *   onTap: () => console.log("tapped"),
 *   onPan: (info) => console.log(info.offset),
 * });
 * return <motion.div {...handlers} style={{ x, y }} />;
 */
export function useGesture(callbacks: GestureHandlers = {}): UseGestureReturn {
  const [state, setState] = useState<GestureState>({
    isTapping: false,
    isPanning: false,
    isDragging: false,
    isHovering: false,
    velocity: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
    movement: { x: 0, y: 0 },
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const lastTapRef = useRef<number>(0);
  const longPressRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const onTap = useCallback(() => {
    const now = Date.now();
    const timeSinceLastTap = now - lastTapRef.current;

    if (timeSinceLastTap < 300) {
      callbacks.onDoubleTap?.();
    } else {
      callbacks.onTap?.();
    }

    lastTapRef.current = now;
  }, [callbacks]);

  const onPanStart = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setState((s) => ({
        ...s,
        isPanning: true,
        offset: info.offset,
        velocity: info.velocity,
      }));
      callbacks.onPanStart?.(info);

      longPressRef.current = setTimeout(() => {
        callbacks.onLongPress?.();
      }, 500);
    },
    [callbacks]
  );

  const onPan = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setState((s) => ({
        ...s,
        offset: info.offset,
        velocity: info.velocity,
        movement: { x: info.delta.x, y: info.delta.y },
      }));

      x.set(info.offset.x);
      y.set(info.offset.y);

      callbacks.onPan?.(info);

      if (longPressRef.current) {
        clearTimeout(longPressRef.current);
      }
    },
    [callbacks, x, y]
  );

  const onPanEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setState((s) => ({
        ...s,
        isPanning: false,
        velocity: info.velocity,
      }));
      callbacks.onPanEnd?.(info);

      if (longPressRef.current) {
        clearTimeout(longPressRef.current);
      }
    },
    [callbacks]
  );

  const onHoverStart = useCallback(() => {
    setState((s) => ({ ...s, isHovering: true }));
    callbacks.onHoverStart?.();
  }, [callbacks]);

  const onHoverEnd = useCallback(() => {
    setState((s) => ({ ...s, isHovering: false }));
    callbacks.onHoverEnd?.();
  }, [callbacks]);

  return {
    state,
    handlers: {
      onTap,
      onPanStart,
      onPan,
      onPanEnd,
      onHoverStart,
      onHoverEnd,
    },
    x,
    y,
  };
}
