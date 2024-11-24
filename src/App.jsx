import { useEffect, useState } from "react";

import Lenis from "lenis";
import { BrowserRouter } from "react-router-dom";

import { useSidebar } from "./context/useSidebar";

import Router from "./routes/Router";

import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  const { isSidebarOpen } = useSidebar();
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      direction: "vertical",
      smoothMobile: true,
      getViewport: () => document.documentElement
    });

    let rafId;

    function raf(time) {
      if (!isSidebarOpen) {
        lenis.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    setTimeout(() => {
      setLoaded(false);
    }, 2000);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [isSidebarOpen]);

  return (
    <main id="layout">
      <BrowserRouter>
        <AnimatePresence mode="wait">
          {loaded && <Preloader active={loaded} setActive={setLoaded} />}
        </AnimatePresence>
        <Navbar loaded={loaded} setLoaded={setLoaded} />
        <Router loaded={loaded} setLoaded={setLoaded} />
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
