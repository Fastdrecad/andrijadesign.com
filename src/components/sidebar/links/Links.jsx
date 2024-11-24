import { motion } from "framer-motion";

import { FaFile, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

import Magnetic from "../../Magnetic/Magnetic";

const socialLinks = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/andrija-Mićunović/",
    ariaLabel: "Visit Andrija’s LinkedIn profile",
    rel: "noopener noreferrer",
    icon: <FaLinkedinIn />,
    target: "_blank"
  },
  {
    id: 2,
    href: "https://github.com/Fastdrecad",
    ariaLabel: "Visit Andrija’s GitHub",
    rel: "noopener noreferrer",
    icon: <FaGithub />,
    target: "_blank"
  },
  {
    id: 3,
    href: "https://www.youtube.com/channel/UCAz40UjYzoUVc_MZurNI0yg",
    ariaLabel: "Visit Andrija’s YouTube channel",
    rel: "noopener noreferrer",
    icon: <FaYoutube />,
    target: "_blank"
  },
  {
    id: 4,
    href: "resume.pdf",
    ariaLabel: "Download Andrija’s resume",
    rel: "noopener noreferrer",
    icon: <FaFile />,
    target: "_blank"
  }
];

const itemVariants = {
  open: {
    x: 0,
    opacity: 1
  },
  closed: {
    x: -150,
    opacity: 0
  }
};

const Links = () => {
  return (
    <motion.div className="socialRow" variants={itemVariants}>
      <div className="socials">
        <p>Links</p>
        <div className="stripe"></div>
        <ul>
          {socialLinks.map((item) => (
            <Magnetic key={item.id}>
              <li>
                <a
                  href={item.href}
                  rel={item.rel}
                  target={item.target}
                  aria-label={item.ariaLabel}
                >
                  {item.icon}
                </a>
              </li>
            </Magnetic>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Links;
