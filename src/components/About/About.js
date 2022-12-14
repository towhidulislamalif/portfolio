import React from 'react';

const About = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind CSS',
    'JavaScript',
    'APIs',
    'React JS',
    'Next JS',
    'Node JS',
    'Express JS',
    'MongoDB',
    'Git',
    'Front-end frameworks',
    'Responsive design',
  ];

  return (
    <section className="text-grayish-blue">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-highlighter">
            About Me
          </h2>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mt-3 text-lg text-grayish-blue">
              Hello! My name is Touhidul Islam Alif and I enjoy creating things
              that live on the internet. My interest in web development. I am a
              Passionate Web Developer, fast learner, and team player also have
              strong desire to develop professionally and constantly enhance my
              skills.
            </p>
            <p className="mt-3 text-lg text-grayish-blue">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <p className="my-3 text-2xl text-grayish-blue">Skills</p>
            {skills.map((skill, index) => (
              <p
                className="inline-block my-2 px-2 py-2 mr-2 text-grayish-blue transition-colors transform duration-500 border border-primary hover:text-primary "
                key={index}
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
