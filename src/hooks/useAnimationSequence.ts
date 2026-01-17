"use client";

import { useAnimate, stagger } from "framer-motion";
import { useCallback } from "react";
import type { DOMKeyframesDefinition, AnimationOptions } from "framer-motion";

interface AnimationStep {
  target: string;
  animation: DOMKeyframesDefinition;
  options?: {
    duration?: number;
    delay?: number;
    stagger?: number;
  };
}

/**
 * Execute a sequence of animations
 */
export function useAnimationSequence() {
  const [scope, animate] = useAnimate();

  const runSequence = useCallback(
    async (steps: AnimationStep[]) => {
      for (const step of steps) {
        const options: AnimationOptions = {
          duration: step.options?.duration ?? 0.3,
        };
        
        if (step.options?.stagger) {
          options.delay = stagger(step.options.stagger);
        } else if (step.options?.delay) {
          options.delay = step.options.delay;
        }

        await animate(step.target, step.animation, options);
      }
    },
    [animate]
  );

  return { scope, runSequence, animate };
}

/**
 * Simple animation trigger
 */
export function useAnimateTrigger() {
  const [scope, animate] = useAnimate();

  const trigger = useCallback(
    (target: string, animation: DOMKeyframesDefinition, duration = 0.3) => {
      return animate(target, animation, { duration });
    },
    [animate]
  );

  return { scope, trigger };
}
