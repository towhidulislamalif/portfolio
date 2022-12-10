import React from 'react';
import resume from '../assets/resume/my-resume.pdf';

const Resume = () => {
  return (
    <a
      className="text-base font-bold text-highlighter border border-primary px-6 py-4 transition-colors duration-500 transform  hover:text-grayish-blue"
      href={resume}
      download
    >
      Resume
    </a>
  );
};

export default Resume;
