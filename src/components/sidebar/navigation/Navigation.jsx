import { motion } from "framer-motion";
import { navLinks } from "../../../config";
import { useSidebar } from "../../../context/useSidebar";
import { useNavigate } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

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

const Navigation = () => {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleLinkClick = (e, url) => {
    const id = url.split("#")[1];
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(url, { state: { scrollToId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        window.history.pushState({}, "", url);
      }
    }
    toggleSidebar();
  };
  return (
    <motion.div className="links" variants={variants}>
      <motion.h5 variants={itemVariants}>Navigation</motion.h5>
      <motion.div className="stripe" variants={itemVariants}></motion.div>
      {navLinks.map((link) => (
        <motion.a
          className="no-css-transition"
          href={link.url}
          key={link.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
          onClick={(e) => handleLinkClick(e, link.url)}
        >
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Navigation;
