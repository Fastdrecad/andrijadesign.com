import { useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Archive from "../pages/Archive/Archive";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

const RoutesConfig = ({ loaded, setLoaded }) => {
  const location = useLocation();

  useEffect(() => {
    setLoaded(true);

    const timer = setTimeout(() => {
      setLoaded(false);
      if (location.state?.scrollToId) {
        const element = document.getElementById(location.state.scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        window.history.replaceState({}, "");
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [location, setLoaded]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home setLoaded={setLoaded} />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesConfig;
