import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Archive from '../pages/archive/archive';
import NotFoundPage from '../pages/not-found-page/NotFoundPage';

const RoutesConfig = ({ loaded, setLoaded }) => {
  const location = useLocation();

  useEffect(() => {
    // Handle smooth scrolling on initial load
    if (location.state && location.state.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <AnimatePresence mode='wait' initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home preloaderActive={loaded} />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesConfig;

//  useEffect(() => {
//    if (!loaded && location.state?.scrollTo) {
//      const element = document.getElementById(location.state.scrollTo);
//      if (element) {
//        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//      }

//    }

//    // Setup a timer to simulate loading time
//    const timer = setTimeout(() => {
//      setLoaded(false);
//    }, 2000); // You might adjust time based on your needs

//    return () => {
//      clearTimeout(timer);
//    };
//  }, [location]);
