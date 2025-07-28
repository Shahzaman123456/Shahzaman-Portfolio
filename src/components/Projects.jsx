import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiMysql } from "react-icons/si";

// Placeholder images - replace with your actual project images
import CurrencyConverterImg from "../assets/curency.jpeg";
import AmazonCloneImg from "../assets/azmazon.jpeg";
import EcommerceImg from "../assets/econerce.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Currency Converter",
      description: "A responsive currency converter application that fetches real-time exchange rates using API integration.",
      technologies: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> }
      ],
      image: CurrencyConverterImg,
      links: {
        github: "#",
        live: "#"
      },
      future: "Adding historical data charts and cryptocurrency support"
    },
    {
      title: "Amazon Clone",
      description: "Frontend replica of Amazon's UI with product listings and shopping cart functionality.",
      technologies: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> }
      ],
      image: AmazonCloneImg,
      links: {
        github: "#",
        live: "#"
      },
      future: "Implementing user authentication and backend integration"
    },
    {
      title: "E-Commerce Website",
      description: "Full-featured online store with product catalog, cart system, and admin dashboard.",
      technologies: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "React", icon: <SiReact className="text-blue-600" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-700" /> }
      ],
      image: EcommerceImg,
      links: {
        github: "#",
        live: "#"
      },
      future: "Adding payment gateway and recommendation engine"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A selection of my recent work, showcasing my expertise in various technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200"
                      >
                        {tech.icon}
                        <span className="ml-1">{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Future Improvements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">FUTURE PLANS</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{project.future}</p>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.links.github} 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.links.live} 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
            View More Projects (Coming Soon)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;