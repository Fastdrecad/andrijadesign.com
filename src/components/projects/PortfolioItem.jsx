import { useRef } from "react";
import { laptopImg } from "../../utils";
import { ExternalIcon, GitHubIcon } from "../common/Icon";

const PortfolioItem = ({ item, setModal, index }) => {
  const container = useRef(null);

  return (
    <li className="project-item">
      {/* image desc */}
      <div className="project-content">
        <>
          <p className="project-overline">Featured Project</p>
          <h3 className="project-title">
            <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </h3>
          <p className="project-description">{item.desc}</p>
          <ul className="project-list-tech">
            {item.tech.map((tech) => (
              <li key={tech}>
                <div className="project-tech-item">{tech}</div>
              </li>
            ))}
          </ul>
          <div className="project-links">
            <a href={`${item.gitHubUrl}`} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href={`${item.url}`} target="_blank" rel="noreferrer">
              <ExternalIcon />
            </a>
          </div>
        </>
      </div>

      <div className="project-video">
        <a target="_blank" rel="noreferrer" href={item.youtubeUrl}>
          <div className="flex-col-device">
            <div className="device">
              <div
                className="single-video"
                ref={container}
                onMouseEnter={() => {
                  setModal({ active: true, index: index });
                  const videoElement = document.getElementById(
                    `video-${index}`
                  );
                  if (videoElement) videoElement.play();
                }}
                onMouseLeave={() => {
                  setModal({ active: false, index: index });
                  const videoElement = document.getElementById(
                    `video-${index}`
                  );
                  if (videoElement) videoElement.pause();
                }}
              >
                <div className="overlay">
                  <video
                    className="overlay"
                    id={`video-${index}`}
                    playsInline
                    preload="auto"
                    muted
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="overlay-device-image">
                <div
                  className="overlay overlay-device"
                  style={{
                    background: `url(${laptopImg}) center no-repeat`,
                    backgroundSize: "cover"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};

export default PortfolioItem;
