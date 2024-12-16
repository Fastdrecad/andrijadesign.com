import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa6";

import RoundedButton from "../RoundedButton/RoundedButton";

import { ExternalIcon, FolderIcon, GitHubIcon } from "../../assets/icons";

import { projects } from "../../data/projects";

const OtherProjects = () => {
  const buttonStyle = {
    backgroundColor: "#1d5bd7",
    width: "clamp(9em, 12vw, 11em)",
    height: "clamp(4.5em, 6vw, 5.5em)",
    borderRadius: "50px"
  };

  return (
    <div className="other-projects-container">
      <h2>Other Projects</h2>
      <Link className="inline-link archive-link" to="/archive">
        <span>view the archive</span>
        <FaArrowRight />
      </Link>
      <ul className="projects-grid">
        {projects &&
          projects.map((project, i) => (
            <li key={i} className="project-style">
              <div className="project-inner">
                <div className="project-header">
                  <div className="project-top">
                    <div className="folder">
                      <FolderIcon />
                    </div>
                    <div className="project-links">
                      <a
                        href={`${project.gitHubUrl}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHubIcon />
                      </a>
                      <a
                        href={`${project.url}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalIcon />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <div className="project-description">
                    <p>{project.desc}</p>
                  </div>
                </div>
                <div className="project-footer">
                  <ul className="project-tech-list">
                    {project.tech.map((t, i) => (
                      <li key={i}>
                        <div className="project-tech-item">{t}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
      </ul>

      {projects.length > 6 && (
        <RoundedButton customStyle={buttonStyle}>
          <span
            style={{
              padding: "0",
              minWidth: "10em",
              textAlign: "center",
              fontSize: "1em",
              display: "inline-block",
              color: "white"
            }}
          >
            Show More
            {/* {showMore ? 'Less' : 'More'} */}
          </span>
        </RoundedButton>
      )}
    </div>
  );
};

export default OtherProjects;
