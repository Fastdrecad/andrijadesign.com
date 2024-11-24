import { useEffect, useState } from "react";

const useModalVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header");

    const handleScroll = () => {
      if (!header) return;

      const headerBottom = header.offsetTop + header.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > headerBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};

export default useModalVisibility;
