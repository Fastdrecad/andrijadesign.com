import { Link } from "react-router-dom";

import useDocumentTitle from "../../hooks/useDocumentTitle";

import { FaArrowLeft } from "react-icons/fa6";

import { ExternalIcon, GitHubIcon } from "../../assets/icons";
import JsonLd from "../../components/common/SEO/JsonLd";
import SEO from "../../components/common/SEO/SEO";

import { projects } from "../../data/projects";
import useNavigation from "../../hooks/useNavigation";

const Archive = () => {
  useDocumentTitle();

  const { handleLinkClick } = useNavigation();

  return (
    <>
      <SEO
        title="Projects Archive | Andrija Mićunović - Full Stack Developer"
        description="Browse through Andrija Mićunović's project archive, showcasing a variety of full-stack development projects and solutions."
        url="https://www.andrijadesign.com/archive"
        siteName="Andrija Mićunović Full Stack Developer Portfolio"
        canonicalUrl="https://www.andrijadesign.com/archive"
      />

      {/* JSON-LD for Archive Page */}
      <JsonLd pageType="archive" pageData={projects} />

      <div className="archive container">
        <div className="wrapper">
          <Link
            to="/"
            className="inline-link archive-link"
            onClick={(e) => handleLinkClick(e, "/")}
          >
            <FaArrowLeft />
            Andrija Mićunović
          </Link>
          <h1>All Projects</h1>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map((project, i) => {
                  const { year, url, title, tech, gitHubUrl } = project;

                  return (
                    <tr key={i}>
                      <td className="year">{year}</td>

                      <td className="title">{title}</td>

                      <td className="tech hide-on-mobile">
                        <ul>
                          {tech?.length > 0 &&
                            tech.map((t, i) => (
                              <li key={i}>
                                <div>{t}</div>
                              </li>
                            ))}
                        </ul>
                      </td>

                      <td className="links">
                        <div>
                          <a
                            href={`${gitHubUrl}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GitHubIcon />
                          </a>
                          <a href={`${url}`} target="_blank" rel="noreferrer">
                            <ExternalIcon />
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {/* <TableProjects projects={projects} /> */}
        </div>
      </div>
    </>
  );
};

export default Archive;
