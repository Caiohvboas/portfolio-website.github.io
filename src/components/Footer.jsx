import React from "react";
import { socialIcons } from "../data/index";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Contact:</p>
          <p>E-mail: <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-500">caio.boas@hotmail.com</a></p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white dark:text-gray-900 hover:text-yellow-500 transition-colors duration-300"
              aria-label={`Link para ${social.link}`}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <div>
          <p className="text-lg">&copy; {currentYear} Caio Vilas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
