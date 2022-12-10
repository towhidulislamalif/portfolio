import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
const ProjectFeed = ({ project }) => {
  console.log(project);
  return (
    <div className="w-full max-w-sm px-4 py-3 bg-intro rounded-md shadow-md dark:bg-gray-800">
      <img src={project.image} alt="" />
      <div className="flex items-center justify-between">
        {/* <span className="font-light text-sm text-primary">
          <FaRegFolder className="h-12 w-12" />
        </span> */}
        <div className="flex items-center gap-4 py-4 justify-between">
          <a
            href={project.client_side_repo}
            title="Client side repository"
            className="font-light text-sm transition duration-500 hover:text-primary"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href={project.live_site_link}
            title="Live Link"
            className="font-light text-sm transition duration-500 hover:text-primary"
          >
            <FaExternalLinkAlt className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold">{project.project_name}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {/* {project.project_description} */}
        </p>
        {project.technology.map((tech, index) => (
          <p
            className="inline-block border px-2 py-1 mr-1 my-1 rounded text-sm border-grayish-blue text-highlighter"
            key={index}
          >
            {tech}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectFeed;
