import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GlobeIcon } from "../common/Icon";
import RoundedButton from "../rounded-button/RoundedButton";
import "./about.scss";

gsap.registerPlugin(ScrollTrigger);

const phrase1 = `Hi there! I'm Andrija, a full stack developer with a keen eye for detail and a passion for creating seamless, user-friendly experiences.`;

const phrase2 = `Transforming design concepts into responsive, interactive web applications, focusing on robust solutions and complex problem-solving.`;

const slideUp = {
  initial: {
    y: "100%"
  },

  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.02 * i }
  }),

  closed: {
    y: "100%",
    transition: { duration: 0.5 }
  }
};

const About = () => {
  const description = useRef(null);
  const isInView = useInView(description);
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["center center", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const circleStyle = {
    // backgroundColor: '#1d5bd7',
    backgroundColor: "rgb(0, 217, 255)",
    width: "clamp(9em, 12vw, 11em)",
    height: "clamp(9em, 12vw, 11em)",
    borderRadius: "50%"
  };

  const textRef = useRef(null);

  useEffect(() => {
    const words = gsap.utils.toArray(".animated-word", textRef.current);

    words.forEach((word) => {
      const hoverIn = () => {
        gsap.to(word, {
          color: `hsl(${Math.random() * 255}, 100%, 50%)`, // Random color
          scale: 1.5, // Increase size
          rotate: 5, // Rotate degrees
          textShadow: "0px 0px 8px rgba(255,255,255,0.8)", // Add shadow
          duration: 0.3,
          ease: "power1.out"
        });
      };

      const hoverOut = () => {
        gsap.to(word, {
          color: "", // Reset color
          scale: 1, // Reset scale
          rotate: 0, // Reset rotation
          textShadow: "none", // Remove shadow
          duration: 0.3,
          ease: "power1.in"
        });
      };

      word.addEventListener("mouseenter", hoverIn);
      word.addEventListener("mouseleave", hoverOut);
    });
  }, []);

  return (
    <div className="about-section">
      <div className="about-wrapper">
        <h2 className="about-title">About Me</h2>
        <div className="about">
          <div className="row-content">
            <div className="flex-col">
              <h4 ref={description} className="span-lines">
                {phrase1.split(" ").map((word, i) => {
                  return (
                    <span className="span-line" key={i}>
                      <motion.span
                        variants={slideUp}
                        custom={i}
                        animate={isInView ? "open" : "closed"}
                        key={i}
                        className="span-line-inner"
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </h4>
            </div>
            <div className="flex-col">
              <p ref={textRef}>
                {phrase2.split(" ").map((word, i) => (
                  <span key={i} className="animated-word">
                    {word + (i < phrase2.split(" ").length - 1 ? "\u00A0" : "")}
                  </span>
                ))}
              </p>
            </div>
          </div>
          {/* About Globe  */}
          <div className="button-earth-stripe">
            <div className="button-earth">
              <div className="overlay"></div>
              <div className="digital-ball">
                <div className="globe">
                  <GlobeIcon />
                </div>
              </div>
            </div>
            <div className="stripe"></div>
          </div>
        </div>
        <div className="about-image" ref={imageRef}>
          <div className="about-container">
            <div className="row-content">
              <div className="card">
                <div className="flex-col-left">
                  <p>
                    After spending two decades as a furniture design engineer,
                    in 2020, I decided to channel my passion for design and
                    precision into a new venture —{" "}
                    <a
                      href="https://github.com/Fastdrecad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      web development and app creation
                    </a>
                    . My journey into coding began with the development of my{" "}
                    <a
                      href="https://portfolio.andrijadesign.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      personal website
                    </a>
                    . This initial project set the stage for what has now become
                    a full-fledged profession.
                    <br />
                    <br />
                    Over the last 2.5 years, I&apos;ve developed a robust skill
                    set in JavaScript, HTML, CSS, jQuery, EJS, React, Next.js,
                    Node.js, Express, MongoDB, and other modern frameworks and
                    libraries, allowing me to craft engaging, efficient, and
                    accessible digital experiences.
                    <br />
                    <br />
                    When I’m not at the computer, I’m usually exploring the
                    latest tech trends, indulging in my passion for photography,
                    reading, playing basketball, traveling, or cooking.
                  </p>
                  <br></br>

                  <p>
                    Here are a few technologies I&apos;ve been working with
                    recently:
                  </p>
                  <ul className="skills-list">
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>PostgreSQL</li>
                    <li>AWS</li>
                    <li>Three.js</li>
                    <li>Gsap</li>
                  </ul>
                  <br></br>
                  <p>Let&apos;s build something amazing together!</p>

                  <span style={{ display: "block" }}>
                    Always exploring
                    <span className="animate-dot">.</span>
                    <span className="animate-dot">.</span>
                    <span className="animate-dot">.</span>
                  </span>
                  <div
                    className="btn-resume"
                    style={{
                      width: "fit-content"
                    }}
                  >
                    <a
                      style={{
                        boxShadow:
                          "inset 0px 0px 0px 1px rgba(28, 29, 32, 0.175)",
                        width: "fit-content"
                      }}
                      href="resume.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <RoundedButton customStyle={circleStyle}>
                        <span
                          style={{
                            padding: "0",
                            minWidth: "10em",
                            textAlign: "center",
                            fontSize: "1em",
                            display: "inline-block",
                            color: "white"
                          }}
                        >
                          Résumé
                        </span>
                      </RoundedButton>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-col2">
                <div className="single-about-image">
                  <motion.div
                    className="overlay-image"
                    style={{ y: backgroundY }}
                  ></motion.div>
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div style={{ height }} className="circle-container">
        <div className="circle"></div>
      </motion.div>
    </div>
  );
};

export default About;
