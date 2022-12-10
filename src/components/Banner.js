import React from 'react';

const Banner = () => {
  return (
    <section className="text-grayish-blue">
      <div className="container mx-auto flex flex-col items-start px-4 py-16 md:py-32 md:px-16">
        <div>
          <div className="space-y-4">
            <span className="text-primary">Hi, my name is</span>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Touhidul Islam Alif
              <br />
              <span className="">Front End Web Developer</span>
            </h1>
          </div>

          <p className="mt-8 mb-12 text-lg">
            I like to craft solid and scalable front-end products with great
            user experiences.
          </p>
          <p>
            <a
              className="border px-8 py-3 rounded text-lg border-primary text-primary"
              href="mailto:towhidulislamalif@gmail.com"
            >
              Contact Me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
