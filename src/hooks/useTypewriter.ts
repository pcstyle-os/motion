"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface TypewriterOptions {
  /**
   * Typing speed in ms per character
   */
  speed?: number;
  /**
   * Delay before starting in ms
   */
  delay?: number;
  /**
   * Delete speed in ms per character
   */
  deleteSpeed?: number;
  /**
   * Pause between phrases in ms
   */
  pauseDuration?: number;
  /**
   * Loop through phrases
   */
  loop?: boolean;
  /**
   * Callback when complete
   */
  onComplete?: () => void;
}

interface TypewriterReturn {
  displayText: string;
  isTyping: boolean;
  isDeleting: boolean;
  isComplete: boolean;
  currentIndex: number;
  reset: () => void;
}

/**
 * Typewriter animation hook for text
 *
 * @example
 * const { displayText } = useTypewriter({
 *   phrases: ["Hello World", "Welcome"],
 *   loop: true,
 * });
 * return <span>{displayText}</span>;
 */
export function useTypewriter(
  phrases: string[],
  {
    speed = 50,
    delay = 0,
    deleteSpeed = 30,
    pauseDuration = 2000,
    loop = false,
    onComplete,
  }: TypewriterOptions = {}
): TypewriterReturn {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const currentPhrase = phrases[currentIndex] || "";

  const reset = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDisplayText("");
    setCurrentIndex(0);
    setIsTyping(false);
    setIsDeleting(false);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (isComplete) return;

    const handleTyping = () => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false);
          const nextIndex = currentIndex + 1;

          if (nextIndex >= phrases.length) {
            if (loop) {
              setCurrentIndex(0);
            } else {
              setIsComplete(true);
              onComplete?.();
              return;
            }
          } else {
            setCurrentIndex(nextIndex);
          }
        } else {
          setDisplayText((prev) => prev.slice(0, -1));
        }
        timeoutRef.current = setTimeout(handleTyping, deleteSpeed);
      } else {
        if (displayText.length === currentPhrase.length) {
          if (currentIndex === phrases.length - 1 && !loop) {
            setIsComplete(true);
            setIsTyping(false);
            onComplete?.();
            return;
          }
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            handleTyping();
          }, pauseDuration);
        } else {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(handleTyping, speed);
        }
      }
    };

    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      handleTyping();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    currentPhrase,
    currentIndex,
    deleteSpeed,
    delay,
    displayText,
    isComplete,
    isDeleting,
    loop,
    onComplete,
    pauseDuration,
    phrases.length,
    speed,
  ]);

  return {
    displayText,
    isTyping,
    isDeleting,
    isComplete,
    currentIndex,
    reset,
  };
}

/**
 * Simple single-phrase typewriter
 */
export function useTypewriterOnce(
  text: string,
  options: Omit<TypewriterOptions, "loop"> = {}
): TypewriterReturn {
  return useTypewriter([text], { ...options, loop: false });
}
