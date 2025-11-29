'use client';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase mb-12 text-center tracking-wide" style={{letterSpacing: '0.04em'}}>Experiencia</h2>
        <div className="flex flex-col gap-8">
          {/* Experiencia 1 */}
          <div className="bg-white/80 dark:bg-gray-900/70 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-purple-600 dark:hover:ring-offset-gray-900">
            <div className="flex-shrink-0 flex flex-col items-center md:items-start w-40 mb-4 md:mb-0">
              <span className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">03/2024 - 06/2024</span>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">Desarrollador Web</span>
              <span className="text-sm font-bold uppercase text-blue-900 dark:text-blue-200">Agencia Aurea</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm sm:text-base space-y-1 pl-2 flex-1">
              <li>Desarrollo y mantenimiento de aplicaciones web con React (TypeScript y JavaScript) y Django REST</li>
              <li>Implementación de diseños responsive y UI/UX optimizado con TailwindCSS y Bootstrap</li>
              <li>Integración de APIs para mejorar la interactividad y dinamismo de las aplicaciones</li>
            </ul>
          </div>
          {/* Experiencia 2 */}
          <div className="bg-white/80 dark:bg-gray-900/70 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-purple-600 dark:hover:ring-offset-gray-900" >
            <div className="flex-shrink-0 flex flex-col items-center md:items-start w-40 mb-4 md:mb-0">
              <span className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">03/2022 - 06/2022</span>
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 break-words whitespace-normal text-base sm:text-lg">Instalador de Telecomunicaciones</span>
              <span className="text-sm font-bold uppercase text-blue-900 dark:text-blue-200">Servicomtel Telecomunicaciones</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm sm:text-base space-y-1 pl-2 flex-1">
              <li>Instalación y configuración de equipos de telecomunicaciones</li>
              <li>Diagnóstico y resolución eficiente de incidencias técnicas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 