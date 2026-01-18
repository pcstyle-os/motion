"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

interface MousePositionOptions {
  /**
   * Track relative to element or viewport
   */
  type?: "element" | "viewport";
  /**
   * Smoothing factor (0-1, higher = smoother)
   */
  smoothing?: number;
}

interface MousePositionReturn {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  motionX: MotionValue<number>;
  motionY: MotionValue<number>;
  bind: {
    onMouseMove: (e: React.MouseEvent) => void;
    onMouseLeave: () => void;
  };
}

/**
 * Track mouse position relative to element or viewport
 *
 * @example
 * const { normalizedX, normalizedY, bind } = useMousePosition();
 * return (
 *   <div {...bind} style={{ transform: `rotateX(${normalizedY * 10}deg)` }}>
 *     Tilting card
 *   </div>
 * );
 */
export function useMousePosition({
  type = "viewport",
  smoothing = 0,
}: MousePositionOptions = {}): MousePositionReturn {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | undefined>(undefined);

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const updatePosition = useCallback(
    (x: number, y: number, width: number, height: number) => {
      const normalizedX = (x / width) * 2 - 1;
      const normalizedY = (y / height) * 2 - 1;

      if (smoothing > 0) {
        targetRef.current = { x: normalizedX, y: normalizedY };

        const animate = () => {
          const currentX = motionX.get();
          const currentY = motionY.get();
          const smoothFactor = 1 - smoothing;

          const newX = lerp(currentX, targetRef.current.x, smoothFactor);
          const newY = lerp(currentY, targetRef.current.y, smoothFactor);

          motionX.set(newX);
          motionY.set(newY);

          setPosition({
            x,
            y,
            normalizedX: newX,
            normalizedY: newY,
          });

          if (
            Math.abs(newX - targetRef.current.x) > 0.001 ||
            Math.abs(newY - targetRef.current.y) > 0.001
          ) {
            frameRef.current = requestAnimationFrame(animate);
          }
        };

        if (frameRef.current !== undefined) {
          cancelAnimationFrame(frameRef.current);
        }
        frameRef.current = requestAnimationFrame(animate);
      } else {
        motionX.set(normalizedX);
        motionY.set(normalizedY);
        setPosition({ x, y, normalizedX, normalizedY });
      }
    },
    [smoothing, motionX, motionY]
  );

  useEffect(() => {
    if (type !== "viewport") return;

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY, window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [type, updatePosition]);

  const bind = {
    onMouseMove: (e: React.MouseEvent) => {
      if (type !== "element") return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      updatePosition(x, y, rect.width, rect.height);
    },
    onMouseLeave: () => {
      if (type !== "element") return;
      updatePosition(0, 0, 1, 1);
    },
  };

  return {
    ...position,
    motionX,
    motionY,
    bind,
  };
}
