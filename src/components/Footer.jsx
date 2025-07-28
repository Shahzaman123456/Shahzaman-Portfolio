import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shahzaman</h3>
            <p className="text-gray-400">
              Full Stack Developer building modern web applications with React, Node.js, and MongoDB.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Shahzaman123456" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shahzaman-ali-8970692a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/shahzamam_kk?igsh=MTRmaW5vMTlkNmVhdw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shahzaman. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span className="mr-2">Back to Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;