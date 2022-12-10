import React, { useEffect, useState } from 'react';
import ProjectFeed from './ProjectFeed';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="text-grayish-blue">
      <div className="container max-w-6xl px-4 py-16 md:py-32 md:px-16 mx-auto space-y-6 sm:space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Some Things I’ve Built</h2>
        </div>

        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* lorem */}
          {projects.map((project) => (
            <ProjectFeed key={project.project_id} project={project} />
          ))}
          {/* lorem */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
