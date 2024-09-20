import { useEffect } from "react";

import { useLocation } from "react-router-dom";

// Custom hook to set the document title based on the current path
const useDocumentTitle = (defaultTitle) => {
  const location = useLocation();

  useEffect(() => {
    const setTitle = () => {
      switch (location.pathname) {
        case "/":
          document.title = "Andrija | Full Stack Developer";
          break;
        case "/archive":
          document.title = "Archive | Andrija Full Stack Developer";
          break;
        default:
          document.title =
            "Oops! 404 - Page Not Found | Andrija Full Stack Developer";
      }
    };

    setTitle();

    return () => {
      document.title = defaultTitle;
    };
  }, [location, defaultTitle]);
};

export default useDocumentTitle;
