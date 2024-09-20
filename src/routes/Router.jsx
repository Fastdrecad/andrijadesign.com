import { useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";
import Archive from "../pages/Archive/Archive";
import Home from "../pages/Home/Home";

const RoutesConfig = ({ loaded, setLoaded }) => {
  const location = useLocation();

  useEffect(() => {
    // Handle smooth scrolling on initial load
    if (location.state && location.state.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setLoaded(true);

    const timer = setTimeout(() => {
      setLoaded(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [location, setLoaded, location.state]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home preloaderActive={loaded} />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesConfig;
