/**
 * CSS Keyframe definitions for cyberpunk effects
 * Use with Framer Motion's keyframes or CSS animations
 */

/** Glitch effect keyframes */
export const glitchKeyframes = {
  x: [0, -2, 2, -2, 0],
  y: [0, 2, -2, 2, 0],
};

/** Pulse glow keyframes */
export const pulseKeyframes = {
  opacity: [0.5, 1, 0.5],
  scale: [1, 1.02, 1],
};

/** Scanline sweep keyframes */
export const scanlineKeyframes = {
  backgroundPositionY: ["0%", "100%"],
};

/** Matrix rain keyframes */
export const matrixKeyframes = {
  y: ["-100%", "100%"],
  opacity: [0, 1, 1, 0],
};

/** Flicker keyframes */
export const flickerKeyframes = {
  opacity: [1, 0.8, 1, 0.9, 1, 0.85, 1],
};

/** Shake keyframes */
export const shakeKeyframes = {
  x: [0, -10, 10, -10, 10, 0],
};

/** Bounce keyframes */
export const bounceKeyframes = {
  y: [0, -20, 0, -10, 0],
};

/** Spin keyframes */
export const spinKeyframes = {
  rotate: [0, 360],
};

/** Blink cursor keyframes */
export const blinkKeyframes = {
  opacity: [1, 0, 1],
};

/** Data stream keyframes */
export const dataStreamKeyframes = {
  y: [-20, 20],
  opacity: [0, 1, 1, 0],
};

/** RGB shift keyframes */
export const rgbShiftKeyframes = {
  textShadow: [
    "-2px 0 #ff0000, 2px 0 #00ffff",
    "2px 0 #ff0000, -2px 0 #00ffff",
    "-2px 0 #ff0000, 2px 0 #00ffff",
  ],
};

/** Holographic shimmer */
export const hologramKeyframes = {
  filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
  opacity: [0.8, 1, 0.8],
};
