import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Magnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(x * x + y * y);
      const threshold = 100; // Distance in pixels from the center of the element

      if (distance < threshold) {
        gsap.to(element, {
          duration: 0.3,
          x: x * 0.4,
          y: y * 0.4,
          scale: 1.1,
          ease: "power2.out"
        });
      } else {
        gsap.to(element, {
          duration: 0.3,
          x: 0,
          y: 0,
          scale: 1,
          ease: "power2.out"
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(element, {
        duration: 0.3,
        x: 0,
        y: 0,
        scale: 1,
        ease: "power2.out"
      });
    };

    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("mouseleave", onMouseLeave);

    return () => {
      element.removeEventListener("mousemove", onMouseMove);
      element.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref });
};

export default Magnetic;
