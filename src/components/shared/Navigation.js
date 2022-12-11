import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// resume
import resume from '../../assets/resume/my-resume.pdf';

// * framer motion
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav x-data="{ isOpen: false }" className="relative">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ rotate: 22 }}>
            <Link
              className="font-bold text-2xl transition-colors transform duration-500  lg:text-3xl text-primary"
              to="/"
            >
              Towhidul
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={
            isOpen
              ? 'translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-500 ease-in-out bg-gray-800  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center '
              : 'opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-500 ease-in-out bg-gray-800  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center'
          }
        >
          <div className="flex flex-col md:flex-row">
            <Link
              className="my-3 py-3 text-grayish-blue transition-colors transform duration-500 hover:text-primary md:mx-4 md:my-0"
              to="/about-me"
            >
              About
            </Link>
            <Link
              className="my-3 py-3 text-grayish-blue transition-colors transform duration-500 hover:text-primary md:mx-4 md:my-0"
              to="/Blog"
            >
              Blog
            </Link>
            <Link
              className="my-3 py-3 text-grayish-blue transition-colors transform duration-500 hover:text-primary md:mx-4 md:my-0"
              to="/contact-me"
            >
              Contact
            </Link>
            <Link
              className="my-3 py-3 text-grayish-blue transition-colors transform duration-500 hover:text-primary md:mx-4 md:my-0"
              to="/projects"
            >
              Projects
            </Link>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ rotate: 22 }}
              className="my-3 md:px-4 py-3 text-center text-grayish-blue transition-colors transform duration-500 border border-primary hover:text-primary md:mx-4 md:my-0"
              href={resume}
              download
            >
              Resume
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
