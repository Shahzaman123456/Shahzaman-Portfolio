import React from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaPython, FaGitAlt, FaNode, FaPhp } from "react-icons/fa";
import { SiPostgresql, SiFlask, SiDjango, SiFigma, SiMysql, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", icon: <FaReact className="text-blue-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> }
      ],
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800"
    },
    {
      category: "Backend Development",
      items: [
        { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
        { name: "Python", icon: <FaPython className="text-blue-600" /> }
      ],
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800"
    },
    {
      category: "UI/UX Design",
      items: [
        { name: "Figma", icon: <SiFigma className="text-purple-600" /> }
      ],
      bgColor: "bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800"
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
      ],
      bgColor: "bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900 dark:to-green-800"
    },
    {
      category: "Other Technologies",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "CI/CD", icon: <FaGitAlt className="text-blue-500" /> }
      ],
      bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900 dark:to-yellow-800"
    }
  ];

  return (
    <section id="skills" className=" scroll-mt-20   py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <div 
              key={index}
              className={`${skillGroup.bgColor} rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 dark:shadow-gray-700`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <span className="mr-3 text-2xl">{skill.icon}</span>
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;