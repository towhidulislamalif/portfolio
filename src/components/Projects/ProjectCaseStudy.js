import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HiOutlineServer } from 'react-icons/hi';

const ProjectCaseStudy = () => {
  const projectData = useLoaderData();
  console.log(projectData);
  const {
    capturing,
    description,
    github_client_site_repo,
    github_server_site_repo,
    img,
    live_site_link,
    title,
  } = projectData;
  const { capturing_one, capturing_two } = capturing;
  const { build, features, overview } = description;

  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="container mx-auto lg:flex items-center justify-between">
        <div className="lg:w-1/3 text-grayish-blue">
          <h2 className="text-4xl font-semibold leading-9 text-highlighter">
            {title}
          </h2>
          <p className="text-base leading-6 mt-4">{overview}</p>
          <p className="text-base leading-6 mt-4">{features}</p>
          <p className="text-base leading-6 mt-4">
            {build.map((b, index) => (
              <span
                key={index}
                className="inline-block p-2 mr-2 text-sm font-bold tracking-wide uppercase mt-4 bg-transparent transition duration-500 border border-primary hover:border-highlighter hover:text-primary text-highlighter"
              >
                {b}
              </span>
            ))}
          </p>
          <div className="mt-4">
            <h4 className="text-2xl font-semibold leading-9 text-highlighter">
              Project Link
            </h4>
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
          </div>
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="w-full h-full bg-red-200">
            <img src={img} alt="" className="w-full sm:block hidden" />
            <img src={img} alt="" className="sm:hidden block w-full" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <img src={capturing_one} className="w-full" alt="kitchen" />
            <img
              src={capturing_two}
              className="w-full"
              alt="sitting room"
            />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
