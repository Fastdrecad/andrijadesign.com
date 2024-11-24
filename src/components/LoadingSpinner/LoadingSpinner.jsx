import gsap from "gsap";
import { useEffect, useRef } from "react";

const LoadingSpinner = () => {
  const spinnerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stars = spinnerRef.current.querySelectorAll(".star");

      // Set initial positions and opacity
      stars.forEach((star, index) => {
        const angle = (index * 360) / stars.length;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * 30;
        const y = Math.sin(radian) * 30;

        gsap.set(star, {
          x,
          y,
          rotation: 0,
          opacity: 0.25,
          scale: 0.5
        });

        // Individual star rotation
        gsap.to(star, {
          rotation: 360,
          duration: 3,
          ease: "none",
          repeat: -1
        });

        // Combined opacity and scale animation for each star
        gsap.to(star, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.1
        });
      });

      // Whole spinner rotation
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 2.5,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="spinner-wrapper">
      <div ref={spinnerRef} className="spinner">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="star">
            ★
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
