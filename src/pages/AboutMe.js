import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const AboutMe = () => {
  const technicalskills = [
    'Git',
    'Front-end frameworks',
    'Responsive design',
    'User experience',
    'User interface',
    'APIs',
  ];
  const programminglanguages = [
    'HTML5',
    'CSS',
    'JavaScript',
    'Mongodb',
    'Express Js',
    'React Js',
    'Next Js',
    'Node Js',
  ];
  const softskills = [
    'Communication',
    'Problem-solving',
    'Time management',
    'Team work',
  ];
  return (
    <div className="container px-6 py-16 mx-auto space-y-12">
      <article className="space-y-4 text-grayish-blue">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold md:tracking-tight md:text-4xl hover:underline text-highlighter">
            Hi There! I'm Touhidul Islam Alif
          </h1>
        </div>
        <p className="text-sm">• A Frontend Developer •</p>
        <div className="space-y-4">
          <p className="mt-3 text-grayish-blue">
            Hello! My name is Touhidul Islam Alif and I enjoy creating things
            that live on the internet. My interest in web development. I am a
            Passionate Web Developer, fast learner, and team player also have
            strong desire to develop professionally and constantly enhance my
            skills.
          </p>
          <p className="mt-3 text-grayish-blue">
            I have extensive knowledge of HTML, JavaScript, React Js, Testing,
            debugging, Front-end frameworks, Responsive design, APIs, and
            knowledge of backend technology. I also completed a full web
            development course from Programming Hero and I successfully earned a
            certificate. During my learning experience with Programming Hero, I
            gained hands-on experience coding websites and applications. During
            the period of the learning process with programming hero, I built
            more than 24 projects and gained valuable teamwork and communication
            skills.
          </p>
          <p className="mt-3 text-highlighter">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>

        <div className="space-y-4">
          <p className="mt-3 text-lg text-primary">CONNECT WITH ME</p>
          <div className="flex -mx-2">
            <a
              href="mailto:towhidulislamalif@gmail.com"
              className="mx-2 text-grayish-blue transition-colors duration-500 hover:text-primary"
              aria-label="Email"
            >
              <MdOutlineEmail className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/towhidul.islam2543/"
              className="mx-2 text-grayish-blue transition-colors duration-500 hover:text-primary"
              aria-label="Facebook"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/towhidulislamalif"
              className="mx-2 text-grayish-blue transition-colors duration-500 hover:text-primary"
              aria-label="Github"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="mx-2 text-grayish-blue transition-colors duration-500 hover:text-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>
      </article>

      <div>
        <div className="space-y-2 py-6 border-double border-t border-gray-600 text-grayish-blue">
          <h4 className="text-lg font-semibold">Skills</h4>
          <div className="flex flex-wrap items-start justify-between w-full text-grayish-blue">
            <div>
              <p className="text-highlighter">Technical Skills</p>
              <ul className="ml-4 space-y-1 list-disc">
                {technicalskills.map((technical, index) => (
                  <li key={index}>{technical}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-highlighter">
                Programming Languages and Frameworks
              </p>
              <ul className="ml-4 space-y-1 list-disc">
                {programminglanguages.map((programming, index) => (
                  <li key={index}>{programming}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-highlighter">Soft Skills</p>
              <ul className="ml-4 space-y-1 list-disc">
                {softskills.map((soft, index) => (
                  <li key={index}>{soft}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
