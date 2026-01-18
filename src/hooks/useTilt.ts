"use client";

import { useRef, useState } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltOptions {
  /**
   * Maximum tilt angle in degrees
   */
  maxTilt?: number;
  /**
   * Perspective distance
   */
  perspective?: number;
  /**
   * Spring stiffness
   */
  stiffness?: number;
  /**
   * Spring damping
   */
  damping?: number;
  /**
   * Scale on hover
   */
  scale?: number;
}

interface TiltReturn<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  style: {
    perspective: number;
    rotateX: ReturnType<typeof useSpring>;
    rotateY: ReturnType<typeof useSpring>;
    scale: ReturnType<typeof useSpring>;
    transformStyle: "preserve-3d";
  };
  isHovered: boolean;
  handlers: {
    onMouseMove: (e: React.MouseEvent) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

/**
 * 3D tilt effect hook for cards and interactive elements
 *
 * @example
 * const { ref, style, handlers } = useTilt<HTMLDivElement>({ maxTilt: 15 });
 * return <motion.div ref={ref} style={style} {...handlers} />;
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>({
  maxTilt = 15,
  perspective = 1000,
  stiffness = 300,
  damping = 30,
  scale = 1.02,
}: TiltOptions = {}): TiltReturn<T> {
  const ref = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness, damping };

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]),
    springConfig
  );
  const scaleValue = useSpring(isHovered ? scale : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    style: {
      perspective,
      rotateX,
      rotateY,
      scale: scaleValue,
      transformStyle: "preserve-3d" as const,
    },
    isHovered,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
