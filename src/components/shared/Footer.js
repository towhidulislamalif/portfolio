import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container px-4 py-16 mx-auto">
        <div className="flex flex-col sm:items-center  space-y-4 sm:flex-row sm:justify-between">
          <div className="space-y-2">
            <Link
              className="text-2xl font-bold text-primary transition-colors transform duration-500 lg:text-3xl hover:text-highlighter"
              to="/"
            >
              Towhidul
            </Link>
            <p className="font-bold text-base text-grayish-blue">
              Front End Web Developer
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold text-primary transition-colors transform duration-500 lg:text-2xl">
              Social
            </h4>
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
