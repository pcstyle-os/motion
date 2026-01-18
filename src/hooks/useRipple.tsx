"use client";

import { useState, useCallback, useRef } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface RippleOptions {
  /**
   * Ripple duration in ms
   */
  duration?: number;
  /**
   * Ripple color
   */
  color?: string;
}

interface RippleReturn {
  ripples: Ripple[];
  createRipple: (e: React.MouseEvent) => void;
  clearRipples: () => void;
  RippleContainer: React.FC<{ children?: React.ReactNode }>;
}

/**
 * Material design style ripple effect hook
 *
 * @example
 * const { ripples, createRipple, RippleContainer } = useRipple();
 * return (
 *   <button onClick={createRipple}>
 *     <RippleContainer>{ripples.map(r => ...)}</RippleContainer>
 *     Click me
 *   </button>
 * );
 */
export function useRipple({
  duration = 600,
  color = "rgba(255, 255, 255, 0.3)",
}: RippleOptions = {}): RippleReturn {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  const createRipple = useCallback(
    (e: React.MouseEvent) => {
      const element = e.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 2;

      const newRipple: Ripple = {
        id: Date.now(),
        x,
        y,
        size,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, duration);
    },
    [duration]
  );

  const clearRipples = useCallback(() => {
    setRipples([]);
  }, []);

  const RippleContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <span
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "absolute",
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            borderRadius: "50%",
            backgroundColor: color,
            transform: "scale(0)",
            animation: `ripple ${duration}ms ease-out forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes ripple {
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
      {children}
    </span>
  );

  return {
    ripples,
    createRipple,
    clearRipples,
    RippleContainer,
  };
}
