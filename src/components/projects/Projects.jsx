import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { projects } from "../../config";
import PortfolioItem from "./PortfolioItem";
import Skills from "./Skills";
import "./projects.scss";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const borderColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["black", "#1d5bd7"]
  );

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Query for project elements
    const projectEl = ref.current.querySelectorAll(".project-item");
    const triggers = [];

    projectEl.forEach((elem, index) => {
      const animation = gsap.fromTo(
        elem,
        { x: index % 2 === 0 ? "-100%" : "100%", autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top bottom-=300",
            end: "top+=100 top",
            toggleActions: "play reverse play reverse"
            // markers: true
          }
        }
      );

      // Store each ScrollTrigger instance for later cleanup
      triggers.push(animation.scrollTrigger);
    });

    // Cleanup function
    return () => {
      // Kill each ScrollTrigger instance
      triggers.forEach((trigger) => trigger.kill());

      // Optionally, kill animations if necessary
      projectEl.forEach((elem) => {
        gsap.killTweensOf(elem);
      });
    };
  }, []);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="projects-progress">
        <motion.div
          style={{ scaleX, borderBottomColor: borderColor }}
          className="progress-bar"
        ></motion.div>
        <Skills />
      </div>

      <ul className="featured-projects" ref={ref}>
        {featuredProjects.map((item, index) => (
          <PortfolioItem
            item={item}
            key={index}
            index={index}
            setModal={setModal}
            modal={modal}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
