import { useCallback, useRef } from "react";

import { laptopImg } from "../../assets";
import { ExternalIcon, GitHubIcon } from "../../assets/icons";

const PortfolioItem = ({ item, setModal, index }) => {
  const container = useRef(null);
  const playPromiseRef = useRef(null);

  const handleVideoPlay = useCallback((videoElement) => {
    if (videoElement) {
      playPromiseRef.current = videoElement.play();
      if (playPromiseRef.current !== undefined) {
        playPromiseRef.current
          .then(() => {
            // Video started playing
          })
          .catch((error) => {
            console.log("Playback error:", error);
          });
      }
    }
  }, []);

  const handleVideoPause = useCallback((videoElement) => {
    if (videoElement) {
      if (playPromiseRef.current !== undefined) {
        playPromiseRef.current
          .then(() => {
            videoElement.pause();
          })
          .catch((error) => {
            console.log("Pause error:", error);
          });
      } else {
        videoElement.pause();
      }
    }
  }, []);

  return (
    <li className="project-item">
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
        <a target="_blank" rel="noreferrer" href={item.url}>
          <div className="flex-col-device">
            <div
              className="device"
              onMouseEnter={() => {
                setModal({ active: true, index: index });
                if (item.video) {
                  const videoElement = document.getElementById(
                    `video-${index}`
                  );
                  handleVideoPlay(videoElement);
                }
              }}
              onMouseLeave={() => {
                setModal({ active: false, index: index });
                if (item.video) {
                  const videoElement = document.getElementById(
                    `video-${index}`
                  );
                  handleVideoPause(videoElement);
                }
              }}
            >
              <div className="single-video">
                <div className="overlay">
                  {item.video ? (
                    <video
                      className="overlay"
                      id={`video-${index}`}
                      playsInline
                      preload="auto"
                      muted
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      className="overlay"
                      src={item.image}
                      alt={item.title}
                    />
                  )}
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
