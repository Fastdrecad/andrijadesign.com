import { useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaArrowRight } from "react-icons/fa6";

import GlobeIcon from "../../assets/icons/GlobeIcon";
import { heroImg } from "../../assets";
import { LocationIcon } from "../../assets/icons";

const Header = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const firstP = useRef(null);
  const secondP = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!slider.current) {
      console.warn("Slider element not found!");
      return;
    }

    const animationId = requestAnimationFrame(animation);

    const scrollTriggerInstance = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.05,
        onUpdate: (e) => (direction = e.direction * -1)
      },
      x: "-=300px"
    });

    function animation() {
      if (!firstP.current || !secondP.current) {
        return;
      }
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstP.current, { xPercent: xPercent });
      gsap.set(secondP.current, { xPercent: xPercent });
      xPercent += 0.05 * direction;
      requestAnimationFrame(animation);
    }

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      scrollTriggerInstance.scrollTrigger.kill();
      gsap.killTweensOf([slider.current, firstP.current, secondP.current]);
    };
  }, []);

  return (
    <div className="hero-section" ref={ref}>
      {/* Personal Image */}
      <motion.div
        className="overlay hero-section__personal-image no-select once-in"
        style={{ y: backgroundY }}
      >
        <img src={heroImg} alt="Andrija Mićunović Personal Image" />
      </motion.div>

      {/* Location Information */}
      <div className="overlay get-height once-in once-in-secondary">
        {/* <div className="hanger"> */}
        <div className="hero-section__location-info">
          <p>
            <span>Located</span>
            <span>in</span>
            <span>Serbia</span>
          </p>
          <LocationIcon />
          <div className="hero-section__globe-container">
            <div className="hero-section__globe-overlay"></div>
            <div className="hero-section__globe">
              <GlobeIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="hero-section__content-wrapper">
        <div className="hero-section__text-container">
          <div className="hero-section__text-row">
            <div className="hero-section__intro-text">
              <div className="headerAboveH4">
                <div className="hero-section__arrow">
                  <FaArrowRight />
                </div>
              </div>
              <h1>Andrija Mićunović</h1>
              <p className="hero-section__job-title">Full Stack Developer</p>
              <p className="hero-section__tagline">
                I build things for the web.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Big Name Animation */}
      <div className="hero-section__big-name-animation">
        <div className="hero-section__big-name-slider" ref={slider}>
          <p ref={firstP}>Andrija Mićunović — Andrija Mićunović —</p>
          <p ref={secondP}>Andrija Mićunović — Andrija Mićunović —</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
