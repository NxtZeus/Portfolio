'use client';

import { FaGithub, FaGlobe } from 'react-icons/fa';

interface Project {
  name: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  
  {
    name: 'Pcenter-Frontend',
    githubUrl: 'https://github.com/NxtZeus/Pcenter-front',
    liveUrl: 'https://pcenter.vercel.app',
    image: 'images/Pcenter-front.png',
  },
  {
    name: 'Pcenter-Backend',
    githubUrl: 'https://github.com/NxtZeus/Pcenter-back',
    image: 'images/Pcenter-back.png',
  },
  {
    name: 'Weather App',
    githubUrl: 'https://github.com/NxtZeus/weather-api-app',
    image: 'images/weather-app.png',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Proyectos
          </h2>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 mx-auto max-w-7xl">
            {projects.map((project) => {
              const imageUrl = project.image && project.image.trim() !== ''
                ? project.image
                : `https://placehold.co/400x300/1a1a1a/ffffff?text=${encodeURIComponent(project.name)}`;
              return (
                <div
                  key={project.name}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col items-center p-6 w-full sm:w-[48%] lg:w-[31%] max-w-[400px] box-border hover:scale-105 hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-purple-600 dark:hover:ring-offset-gray-900"
                >
                  <div className="w-full flex justify-center mb-6">
                    <img
                      src={imageUrl}
                      alt={project.name}
                      className="object-contain rounded-lg shadow-md max-h-40 w-auto bg-gray-100"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {project.name}
                  </h3>
                  <div className="flex justify-center gap-8 mt-2 mb-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors duration-300"
                      title="Ver en GitHub"
                    >
                      <FaGithub />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors duration-300"
                        title="Ver despliegue"
                      >
                        <FaGlobe />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 