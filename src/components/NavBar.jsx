import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const isDark = userTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md relative">
      <h2 className="text-2xl font-bold">Shahzaman</h2>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="#home" className="text-xl hover:text-blue-500 dark:hover:text-yellow-300 transition cursor-pointer">Home</a>
        <a href="#skills" className="text-xl hover:text-blue-500 dark:hover:text-yellow-300 transition cursor-pointer">Skills</a>
        <a href="#projects" className="text-xl hover:text-blue-500 dark:hover:text-yellow-300 transition cursor-pointer">Projects</a>
        <a  href="#about" className="text-xl hover:text-blue-500 dark:hover:text-yellow-300 transition cursor-pointer">About</a>
 <a href="#contact" className="text-xl hover:text-blue-500 dark:hover:text-yellow-300 transition cursor-pointer">Contact</a>

        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-300" />
          ) : (
            <MoonIcon className="h-6 w-6 text-blue-700" />
          )}
        </button>
      </div>

      {/* Mobile Icons */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-300" />
          ) : (
            <MoonIcon className="h-6 w-6 text-blue-700" />
          )}
        </button>
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-start gap-4 px-6 py-4 md:hidden shadow-md z-10">
          <a href="#home" className="text-xl w-full border-b pb-2 hover:text-blue-500 dark:hover:text-yellow-300 transition  hover:cursor-pointer">Home</a>
          <a className="text-xl w-full border-b pb-2 hover:text-blue-500 dark:hover:text-yellow-300 transition ">Skills</a>
          <a className="text-xl w-full border-b pb-2 hover:text-blue-500 dark:hover:text-yellow-300 transition">Projects</a>
          <a className="text-xl w-full border-b pb-2 hover:text-blue-500 dark:hover:text-yellow-300 transition">About</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
