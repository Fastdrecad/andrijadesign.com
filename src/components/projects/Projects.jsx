import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import ProgressBar from "../ProgressBar/ProgressBar";
import PortfolioItem from "./PortfolioItem";
import Skills from "./Skills";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const projectsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const projectEl = projectsRef.current.querySelectorAll(".project-item");

      projectEl.forEach((elem, index) => {
        gsap.fromTo(
          elem,
          {
            x: index % 2 === 0 ? "-100%" : "100%",
            autoAlpha: 0
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top bottom-=300",
              end: "top+=100 top",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => ctx.revert(); // Čisti sve GSAP animacije
  }, []);

  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 4);

  return (
    <div className="container">
      <h2>Projects</h2>
      <Skills />

      <ProgressBar containerRef={projectsRef} />
      <ul className="featured-projects" ref={projectsRef}>
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
