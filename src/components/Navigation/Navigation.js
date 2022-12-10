import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
// logo
import logo from '../../assets/logo/logo.png';
import Resume from '../Resume';

const Navigation = () => {
  const [menuToggled, setMenuToggled] = useState(false);

  const handleToggled = () => {
    setMenuToggled(!menuToggled);
  };

  return (
    <nav className="fixed top-0 h-24 w-full flex items-center  justify-around bg-dark-blue text-grayish-blue">
      {/* logo */}
      <div>
        <a
          className="text-2xl font-bold text-highlighter transition-colors duration-500 transform  lg:text-3xl hover:text-grayish-blue"
          href="#"
        >
          Towhidul
        </a>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="px-4">
          <a
            className="text-base font-bold text-highlighter transition-colors duration-500 transform  hover:text-grayish-blue"
            href="#about"
          >
            About
          </a>
        </li>
        <li className="px-4">
          <a
            className="text-base font-bold text-highlighter transition-colors duration-500 transform  hover:text-grayish-blue"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className="px-4">
          <a
            className="text-base font-bold text-highlighter transition-colors duration-500 transform  hover:text-grayish-blue"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li className="px-4">
          <Resume />
        </li>
      </ul>
      <div onClick={handleToggled} className="md:hidden z-10">
        {!menuToggled ? <HiMenuAlt4 /> : <AiOutlineClose />}
      </div>
      <ul
        className={
          !menuToggled
            ? 'hidden'
            : 'absolute top-0 left-0 h-screen w-full  flex flex-col items-center justify-center bg-dark-blue '
        }
      >
        <li className="px-4">
          <a
            className="text-base font-bold text-highlighter transition-colors duration-500 transform  hover:text-grayish-blue"
            href="#about"
          >
            About
          </a>
        </li>
        <li className="px-4">
          <a
            className="text-base font-bold text-highlighter transition-colors duration-500 transform  hover:text-grayish-blue"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className="px-4">
          <a
            className="text-base font-bold text-highlighter transition-colors duration-500 transform  hover:text-grayish-blue"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
