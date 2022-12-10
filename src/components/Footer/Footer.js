import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container px-4 py-16 mx-auto">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div>
            <div>
              <a
                className="text-2xl font-bold text-highlighter transition-colors duration-500 transform  lg:text-3xl hover:text-grayish-blue"
                href="#"
              >
                Towhidul
              </a>
            </div>
            <p className="font-bold text-base text-grayish-blue">
              Front End Web Developer
            </p>
          </div>

          <div className="flex -mx-2">
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

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="text-center">
          <p className="text-grayish-blue">
            © Copyright 2022.Made by Touhidul Islam Alif
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
