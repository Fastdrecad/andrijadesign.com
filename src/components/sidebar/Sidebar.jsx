import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import { useSidebar } from "../../context/useSidebar";
import useModalVisibility from "../../hooks/useModalVisibility";
import { lockScroll, unlockScroll } from "../../utils/scrollLock";
import Links from "./Links/Links";
import Navigation from "./Navigation/Navigation";
import ToggleButton from "./ToggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1400px at 60px 60px)",
    transition: {
      type: "spring",
      stiffness: 30
    }
  },
  closed: {
    clipPath: "circle(35px at 60px 60px)",
    transition: {
      delay: 0.15,
      type: "spring",
      stiffness: 500,
      damping: 50
    }
  }
};

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const isModalVisible = useModalVisibility();
  const [portalContainer, setPortalContainer] = React.useState(null);

  const containerVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  React.useEffect(() => {
    const container = document.createElement("div");
    container.className = "modal-container";
    document.body.appendChild(container);
    setPortalContainer(container);

    return () => {
      if (container && container.parentElement) {
        container.parentElement.removeChild(container);
      }
    };
  }, []);

  React.useEffect(() => {
    if (isSidebarOpen) {
      lockScroll();
      return () => unlockScroll();
    }
  }, [isSidebarOpen]);

  if (!portalContainer) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isModalVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="header-button-container"
        >
          {isSidebarOpen && (
            <div className="background" onClick={toggleSidebar}></div>
          )}
          <motion.div
            className="bg"
            variants={variants}
            animate={isSidebarOpen ? "open" : "closed"}
          >
            <div className="nav-inner">
              <div className="nav-row">
                <Navigation />
              </div>
              <Links />
            </div>
          </motion.div>
          <AnimatePresence mode="wait">
            <ToggleButton key="toggle-button" />
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    portalContainer
  );
};

export default Sidebar;
