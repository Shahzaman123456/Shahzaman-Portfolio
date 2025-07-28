import React from "react";
import { FaCode, FaUniversity, FaLaptopCode, FaJava } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiCplusplus, SiAndroid } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From programming enthusiast to full-stack developer - my evolving path in tech
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Introduction */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer (MERN Stack) building modern web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in creating responsive, scalable applications with React, Node.js, and MongoDB. 
              Currently pursuing my B.E while working on real-world projects to enhance my skills.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Current Focus</h3>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <SiReact className="text-blue-600 dark:text-blue-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">React JS</span>
              </span>
              <span className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full">
                <SiNodedotjs className="text-green-600 dark:text-green-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">Node.js</span>
              </span>
              <span className="flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                <SiMongodb className="text-emerald-600 dark:text-emerald-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">MongoDB</span>
              </span>
              <span className="flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900 rounded-full">
                <SiMysql className="text-orange-600 dark:text-orange-300 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">MySQL</span>
              </span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 dark:bg-gray-600 transform -translate-x-1/2"></div>

          <div className="space-y-8">
            {/* Pre-University */}
            <div className="relative md:grid md:grid-cols-2 gap-8">
              <div className="md:text-right md:pr-8 pb-8 md:pb-0">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Before University</h4>
                <p className="text-gray-600 dark:text-gray-300">Started with programming fundamentals</p>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-800 flex items-center justify-center">
                  <FaCode className="text-white" />
                </div>
              </div>
              <div className="md:hidden bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 mr-3"></div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Before University</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Started with programming fundamentals</p>
              </div>
            </div>

            {/* University Journey */}
            {[
              {
                year: "1st-2nd Semester",
                title: "Java & OOP Concepts",
                icon: <FaJava className="text-white" />,
                color: "bg-green-500 dark:bg-green-400"
              },
              {
                year: "3rd Semester",
                title: "C++ & Data Structures",
                description: "Advanced algorithms and problem solving",
                icon: <SiCplusplus className="text-white" />,
                color: "bg-blue-500 dark:bg-blue-400"
              },
              {
                year: "2nd Year",
                title: "Android Development",
                description: "Mobile app development internship",
                icon: <SiAndroid className="text-white" />,
                color: "bg-red-500 dark:bg-red-400"
              },
              {
                year: "3rd Semester",
                title: "Web Development",
                description: "HTML, CSS, and JavaScript mastery",
                icon: <SiReact className="text-white" />,
                color: "bg-yellow-500 dark:bg-yellow-400"
              },
              {
                year: "4th Semester",
                title: "Full-Stack Development",
                description: "MERN stack specialization",
                icon: <FaLaptopCode className="text-white" />,
                color: "bg-purple-500 dark:bg-purple-400"
              }
            ].map((item, index) => (
              <div key={index} className={`relative md:grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="md:text-right md:pr-8 pb-8 md:pb-0">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.year}</h4>
                      <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.title}</h5>
                      {item.description && <p className="text-gray-600 dark:text-gray-300">{item.description}</p>}
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className={`w-8 h-8 rounded-full ${item.color} border-4 border-white dark:border-gray-800 flex items-center justify-center`}>
                        {item.icon}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex items-center justify-center">
                      <div className={`w-8 h-8 rounded-full ${item.color} border-4 border-white dark:border-gray-800 flex items-center justify-center`}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="md:text-left md:pl-8 pb-8 md:pb-0">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.year}</h4>
                      <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.title}</h5>
                      {item.description && <p className="text-gray-600 dark:text-gray-300">{item.description}</p>}
                    </div>
                  </>
                )}
                {/* Mobile view */}
                <div className="md:hidden bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-2">
                    <div className={`w-6 h-6 rounded-full ${item.color} mr-3`}></div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.year}</h4>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h5>
                    </div>
                  </div>
                  {item.description && <p className="text-gray-600 dark:text-gray-300 ml-9">{item.description}</p>}
                </div>
              </div>
            ))}

            {/* Future */}
            <div className="relative md:grid md:grid-cols-2 gap-8">
              <div className="hidden md:flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-indigo-500 dark:bg-indigo-400 border-4 border-white dark:border-gray-800 flex items-center justify-center">
                  <FaUniversity className="text-white" />
                </div>
              </div>
              <div className="md:text-left md:pl-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">2023-2027</h4>
                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">B.E Software Engineering</h5>
                <p className="text-gray-600 dark:text-gray-300">Quest University, Nawabshah (Expected graduation: 2027)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;