import { useLocation, useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (event, url) => {
    const id = url.split("#")[1]; // Extracts the anchor id from the URL
    event.preventDefault();

    // Perform navigation
    if (location.pathname !== "/" || !id) {
      navigate(url, { state: { scrollToId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState({}, "", url); // Manually push the state to update URL
      }
    }
  };

  return { handleLinkClick };
};

export default useNavigation;
