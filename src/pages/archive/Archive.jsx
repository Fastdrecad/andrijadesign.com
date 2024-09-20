import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { ExternalIcon, GitHubIcon } from '../../components/common/Icon';
import { projects } from '../../config';
import './archive.scss';

const Archive = () => {
  return (
    <div className='archive container'>
      <div className='wrapper'>
        <Link to='/' className='inline-link archive-link'>
          <FaArrowLeft />
          Andrija Micunovic
        </Link>
        <h1>All Projects</h1>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th className='hide-on-mobile'>Built with</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 &&
              projects.map((project, i) => {
                const { year, url, title, tech, gitHubUrl } = project;

                return (
                  <tr key={i}>
                    <td className='year'>{year}</td>

                    <td className='title'>{title}</td>

                    <td className='tech hide-on-mobile'>
                      <ul>
                        {tech?.length > 0 &&
                          tech.map((t, i) => (
                            <li key={i}>
                              <div>{t}</div>
                            </li>
                          ))}
                      </ul>
                    </td>

                    <td className='links'>
                      <div>
                        <a
                          href={`${gitHubUrl}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <GitHubIcon />
                        </a>
                        <a href={`${url}`} target='_blank' rel='noreferrer'>
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
  );
};

export default Archive;
