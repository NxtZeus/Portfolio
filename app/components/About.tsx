'use client';

import { FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";
import Link from 'next/link';
export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Foto */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-40 h-56 sm:w-52 sm:h-72 md:w-64 md:h-80 rounded-lg overflow-hidden bg-white shadow-md">
              <Image
                src="/images/foto_mia.jpg"
                alt="Foto de perfil"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 256px"
                priority
              />
            </div>
          </div>
          {/* Info principal */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-none text-center md:text-left">
              <span className="block">RUBEN</span>
              <span className="block">SANCHEZ</span>
              <span className="block">MARTINEZ</span>
            </h1>
            <div className="mt-6 space-y-2 text-gray-800 text-base text-center md:text-left w-full">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaEnvelope className="text-blue-700" />
                <span>rsanchezm110@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaLinkedin className="text-blue-700" />
                <Link 
                  href="https://www.linkedin.com/in/ruben-sanchez-martinez-b90000200/"
                  className="text-blue-700 hover:text-purple-600 hover:underline transition-colors duration-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-blue-700" />
                <span>Moratalaz, Madrid</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaBirthdayCake className="text-blue-700" />
                <span>08/02/2003</span>
              </div>
            </div>
          </div>
          {/* Resumen profesional */}
          <div className="mt-8 w-full border-t border-gray-300 pt-6 md:col-span-3">
            <h2 className="text-lg sm:text-xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase mb-2 text-center md:text-left" style={{letterSpacing: '0.04em'}}>RESUMEN PROFESIONAL</h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center md:text-left">
              Profesional en desarrollo web con mentalidad analítica y enfoque en la resolución de problemas. Disfruto enfrentando nuevos desafíos y encontrando soluciones eficientes, investigando y aprendiendo por mi cuenta. Me considero autodidacta, ya que cuando necesito aprender algo nuevo, me sumerjo en la búsqueda de información hasta dominarlo.<br />
              Me motiva seguir mejorando y mantenerme actualizado con las últimas tecnologías para crear soluciones cada vez más optimizadas y funcionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 