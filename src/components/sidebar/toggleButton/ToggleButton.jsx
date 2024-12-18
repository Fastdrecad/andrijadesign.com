import { motion } from "framer-motion";
import { useSidebar } from "../../../context/useSidebar";

const buttonVariants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const ToggleButton = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <motion.button
      className="custom-button"
      onClick={toggleSidebar}
      initial="visible"
      animate="visible"
      exit="hidden"
      variants={buttonVariants}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="2"
          stroke="white"
          strokeLinecap="round"
          d="M 2 2.5 L 20 2.5"
          animate={isSidebarOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <motion.path
          strokeWidth="2"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          animate={isSidebarOpen ? "open" : "closed"}
          variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
        />
        <motion.path
          strokeWidth="2"
          stroke="white"
          strokeLinecap="round"
          d="M 2 16.346 L 20 16.346"
          animate={isSidebarOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </motion.button>
  );
};

export default ToggleButton;
