import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../../config";
import Magnetic from "../magnetic/Magnetic";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navClass, setNavClass] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLinkClick = (e, url) => {
    const id = url.split("#")[1];
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(url, { state: { scrollToId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        window.history.pushState({}, "", url);
      }
    }
  };

  useEffect(() => {
    const updateNavClass = () => {
      const currentScrollY = window.scrollY;
      const newNavClass =
        currentScrollY === 0
          ? "top"
          : currentScrollY > lastScrollY
          ? "hidden"
          : "scrolled-up";

      setNavClass(newNavClass);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", updateNavClass);
    return () => window.removeEventListener("scroll", updateNavClass);
  }, [lastScrollY]);

  return (
    <header className={`navbar ${navClass === "hidden" ? "hidden" : ""}`}>
      {location.pathname === "/" && <Sidebar />}
      <nav className={`nav-wrapper ${navClass}`}>
        <div className="creditsTop"></div>
        <ul className="linksWrap">
          {navLinks.map((link, i) => (
            <Magnetic key={i}>
              <li className="btn">
                <a
                  className="btnClick"
                  href={link.url}
                  onClick={(e) => handleLinkClick(e, link.url)}
                >
                  <span className="btnText">
                    <span className="btnTextInner">{link.name}</span>
                  </span>
                </a>
              </li>
            </Magnetic>
          ))}
          <div className="cv-container">
            <a
              className="cv-button"
              href="/resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              CV
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;