import { useCallback, useEffect } from "react";

const MouseGlow = () => {
  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  };

  const handleMouseMove = useCallback((e) => {
    const glowEffect = document.querySelector(".mouse-glow");
    if (glowEffect) {
      glowEffect.style.background = `radial-gradient(
        800px circle at ${e.clientX}px ${e.clientY}px,
        rgba(29, 78, 216, 0.18),
        transparent 40%
      )`;
    }
  }, []);

  useEffect(() => {
    // Throttle the mouse move handler to execute at most once every 16ms (roughly 60fps)
    const throttledHandleMouseMove = throttle(handleMouseMove, 16);

    window.addEventListener("mousemove", throttledHandleMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledHandleMouseMove);
    };
  }, [handleMouseMove]);

  return <div className="mouse-glow" />;
};

export default MouseGlow;
