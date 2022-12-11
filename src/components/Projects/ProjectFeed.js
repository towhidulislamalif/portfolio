import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HiOutlineServer } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const ProjectFeed = ({ project }) => {
  // console.log('🚀 ~ file: ProjectFeed.js:5 ~ ProjectFeed ~ project', project);
  const {
    _id,
    description: { overview },
    github_client_site_repo,
    github_server_site_repo,
    live_site_link,
    title,
  } = project;

  return (
    <div className="w-full max-w-sm px-4 py-3 bg-card-background rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-light text-sm text-primary">
          <a
            href={live_site_link}
            title="live_site_link"
            className="text-sm transition duration-500"
          >
            <FaExternalLinkAlt className="h-6 w-6" />
          </a>
        </span>
        <div className="flex items-center gap-4 py-4 justify-between">
          <a
            href={github_client_site_repo}
            title="github_client_site_repo"
            className="text-sm transition duration-500 hover:text-primary text-highlighter"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          {github_server_site_repo && (
            <a
              href={github_server_site_repo}
              title="github_server_site_repo"
              className="text-sm transition duration-500 hover:text-primary text-highlighter"
            >
              <HiOutlineServer className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-highlighter">{title}</h1>
        <p className="mt-2 text-sm text-grayish-blue">{overview}</p>
        {/* {build.map((b, index) => (
          <span
            className="inline-block my-2 px-1 py-1 mr-2 text-sm text-grayish-blue transition-colors transform duration-500 border border-primary hover:text-primary "
            key={index}
          >
            {b}
          </span>
        ))} */}
        <div>
          <Link
            to={`/project-case-study/${_id}`}
            className="inline-block p-3 text-sm font-bold tracking-wide uppercase mt-4 bg-transparent transition duration-500 border border-primary hover:border-highlighter hover:text-primary text-highlighter"
          >
            Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeed;
