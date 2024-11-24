import { useEffect, useRef } from "react";

import { gsap } from "gsap";

import iconsList from "../../assets/icons/iconsList";

const Skills = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    iconRefs.current.forEach((icon, index) => {
      // Apply rotation animation
      gsap.fromTo(
        icon,
        { rotation: 0 },
        {
          rotation: index % 2 === 0 ? 360 : -360,
          duration: 2,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center"
        }
      );

      // Apply magnetic effect
      const onMouseMove = (e) => {
        const rect = icon.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 100) {
          // Magnetic threshold
          gsap.to(icon, {
            x: x * 0.4,
            y: y * 0.4,
            scale: 1.1,
            ease: "power1.out"
          });
        }
      };

      const onMouseLeave = () => {
        gsap.to(icon, {
          x: 0,
          y: 0,
          scale: 1,
          ease: "power1.out"
        });
      };

      icon.addEventListener("mousemove", onMouseMove);
      icon.addEventListener("mouseleave", onMouseLeave);

      return () => {
        icon.removeEventListener("mousemove", onMouseMove);
        icon.removeEventListener("mouseleave", onMouseLeave);
      };
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  return (
    <div className="svg-container">
      {iconsList.map((icon) => (
        <div className="icon-wrapper" ref={addToRefs} key={icon.id}>
          {icon.component()}
        </div>
      ))}
    </div>
  );
};

export default Skills;
