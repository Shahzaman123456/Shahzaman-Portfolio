// src/components/Hero.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/Profile.jpg";

const Hero = () => {
  return (
    <section id="home" className=" scroll-mt-24 min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 px-4">
      {/* Profile Image */}
      <img
        src={profilePic}// 🖼️ Replace with your image path
        alt="Profile"
        className="w-40 h-40 md:w-40 md:h-40 rounded-full border-4 border-black dark:border-white shadow-lg mb-6 cursor-pointer transform transition duration-500 hover:scale-110 hover:rotate-1"
      />

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Shahzaman
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
        Full Stack Web Developer building powerful frontend & backend solutions
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mt-8">
        <a href="https://github.com/Shahzaman123456" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-black dark:text-white hover:text-purple-500 transition" />
        </a>
        <a href="https://www.linkedin.com/in/shahzaman-ali-8970692a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-black dark:text-white hover:text-blue-500 transition" />
        </a>
        <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=alishahzaman960@gmail.com&su=Contact%20Me&body=Hello%20Ali!"
  target="_blank"
  rel="noopener noreferrer">
          <FaEnvelope className="text-2xl text-black dark:text-white hover:text-red-400 transition" />
        </a>
      </div>

      {/* Down Arrow */}
      <div className="mt-12 animate-bounce text-gray-500 dark:text-gray-300">
        <span className="text-3xl">↓</span>
      </div>
    </section>
  );
};

export default Hero;
