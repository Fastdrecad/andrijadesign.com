import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useScrollReset = (preloaderActive) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!preloaderActive && location.state?.scrollTo && !isScrolled) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setIsScrolled(true);
        // Reset the location state after scrolling
        setTimeout(() => {
          navigate(location.pathname, { replace: true, state: {} });
        }, 500); // Adjust timeout duration as needed
      }
    }
  }, [preloaderActive, location, navigate, isScrolled]);

  return { resetScrollState: () => setIsScrolled(false) };
};

export default useScrollReset;
