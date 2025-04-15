import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-gray-900 dark:bg-gray-800 z-50">
      <div className="flex items-center sm:gap-x-4 gap-x-2">
        <a href="#" className="md:text-2xl sm:text-xl text-lg text-yellow-500 dark:text-yellow-400">
          Caio Vilas
        </a>
        <i 
          className={`bx ${darkMode ? 'bx-moon' : 'bx-sun'} md:text-3xl sm:text-2xl text-xl text-gray-200 dark:text-gray-300 sm:ml-4 ms-2 cursor-pointer`}
          onClick={toggleDarkMode}
        ></i>
      </div>
      <div>
        <a
          href="#"
          className="group lg:text-lg md:text-base text-sm font-light text-yellow-500 dark:text-yellow-400 lg:mr-12 mr-8 tracking-wide relative"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-yellow-500 dark:bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300"></span>
        </a>
        <a
          href="#"
          className="group lg:text-lg md:text-base text-sm font-light text-white dark:text-gray-300 lg:mr-12 mr-8 tracking-wide relative"
        >
          Services
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white dark:bg-gray-300 transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300"></span>
        </a>
        <a
          href="#"
          className="group lg:text-lg md:text-base text-sm font-light text-white dark:text-gray-300 lg:mr-12 mr-8 tracking-wide relative"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white dark:bg-gray-300 transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300"></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
