import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Lenis from "lenis";
import { useSidebar } from "./context/useSidebar";
import RoutesConfig from "./routes/routes";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Preloader from "./components/preloader/preloader";
import "./app.scss";

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
      <Router>
        <AnimatePresence mode="wait">
          {loaded && <Preloader active={loaded} setActive={setLoaded} />}
        </AnimatePresence>
        <Navbar loaded={loaded} setLoaded={setLoaded} />
        <RoutesConfig loaded={loaded} setLoaded={setLoaded} />
        <Footer />
      </Router>
    </main>
  );
};

export default App;
