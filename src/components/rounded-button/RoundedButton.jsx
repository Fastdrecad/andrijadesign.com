import gsap from "gsap";
import { useEffect, useRef } from "react";
import Magnetic from "../magnetic/Magnetic";
import "./roundedButton.scss";

export default function RoundedButton({
  children,
  backgroundColor = "rgb(0, 196, 250)",
  customStyle,
  ...attributes
}) {
  const circle = useRef(null);

  let timeline = useRef(null);

  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });

    timeline.current

      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )

      .to(
        circle.current,
        { top: "-155%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);

    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="roundedButton"
        style={{ overflow: "hidden", ...customStyle }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}

        <div ref={circle} style={{ backgroundColor }} className="circle"></div>
      </div>
    </Magnetic>
  );
}
