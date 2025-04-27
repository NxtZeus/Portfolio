'use client';

import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiAngular, SiDjango, SiMysql, SiMariadb, SiPycharm, SiPostman, SiXampp, SiApachehadoop, SiApachespark, SiTensorflow, SiPandas, SiNumpy, SiJson, SiApacheairflow, SiNeo4J, SiAmazon } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { PiFileXFill } from 'react-icons/pi';
import { MdCloud } from 'react-icons/md';
import { BsFillBootstrapFill } from 'react-icons/bs';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'React', icon: <FaReact className="text-blue-500" /> },
      { name: 'Angular', icon: <SiAngular className="text-red-600" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: 'Bootstrap', icon: <BsFillBootstrapFill className="text-purple-700" /> },
      { name: 'WordPress', icon: <FaWordpress className="text-blue-700" /> },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Python', icon: <FaPython className="text-yellow-600" /> },
      { name: 'Django', icon: <SiDjango className="text-green-800" /> },
      { name: 'Django Rest Framework', icon: <SiDjango className="text-green-800" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <FaNodeJs className="text-green-400" /> },
      { name: 'PHP', icon: <FaPhp className="text-indigo-700" /> },
    ],
  },
  {
    name: 'Bases de Datos',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'MariaDB', icon: <SiMariadb className="text-blue-800" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Neo4j', icon: <SiNeo4J className="text-green-700" /> },
      { name: 'XML', icon: <PiFileXFill className="text-orange-400" /> },
      { name: 'JSON', icon: <SiJson className="text-yellow-500" /> },
    ],
  },
  {
    name: 'Herramientas',
    skills: [
      { name: 'VS Code', icon: <TbBrandVscode className="text-blue-500" /> },
      { name: 'PyCharm', icon: <SiPycharm className="text-green-700" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'XAMPP', icon: <SiXampp className="text-orange-600" /> },
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-800" /> },
    ],
  },
  {
    name: 'IA & Cloud',
    skills: [
      { name: 'AWS', icon: <SiAmazon className="text-yellow-500" /> },
      { name: 'Azure', icon: <MdCloud className="text-blue-700" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
      { name: 'LMStudio', icon: <MdCloud className="text-gray-500" /> },
      { name: 'Apache Hive', icon: <SiApachehadoop className="text-yellow-700" /> },
      { name: 'Hadoop', icon: <SiApachehadoop className="text-yellow-700" /> },
      { name: 'Spark', icon: <SiApachespark className="text-orange-500" /> },
      { name: 'Sqoop', icon: <SiApacheairflow className="text-blue-500" /> },
      { name: 'Flume', icon: <SiApacheairflow className="text-blue-500" /> },
      { name: 'Kafka', icon: <SiApacheairflow className="text-blue-500" /> },
      { name: 'TensorFlow', icon: <SiTensorflow className="text-yellow-500" /> },
      { name: 'Pandas', icon: <SiPandas className="text-blue-700" /> },
      { name: 'Numpy', icon: <SiNumpy className="text-blue-500" /> },
      { name: 'Matplotlib', icon: <SiPandas className="text-blue-700" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {skillCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-lg sm:text-xl">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight break-words max-w-[5.5rem] sm:max-w-[7.5rem]">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 