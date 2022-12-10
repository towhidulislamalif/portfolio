import React from 'react';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'Bootstrap',
    'Tailwind CSS',
    'Git',
    'Github',
    'JavaScript',
    'APIs',
    'React Js',
    'Next JS',
    'Node JS',
    'Express JS',
    'MongoDB',
    'Terminal',
    'Responsive Design',
  ];
  return (
    <div className="lg:w-1/2 xl:w-3/5">
      <div className="flex flex-col items-start justify-start p-4 md:p-8 lg:p-12">
        <div className="space-y-4">
          <h2 className="font-DM font-bold text-2xl text-white">My Skills</h2>
          {skills.map((skill) => (
            <span className="inline-block font-DM font-bold mr-4 px-6 py-3 rounded shadow bg-gray-200 text-intro">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
