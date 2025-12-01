"use client";

import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-6">
            Blog del Dr. Javier del Rosario
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Educación urológica moderna para pacientes informados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Condiciones Comunes - Blue */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">Condiciones Comunes</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">Información sobre las condiciones urológicas más frecuentes.</p>
              <Link href="/blog/condiciones-comunes" 
                    className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors duration-200">
                Leer más 
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Síntomas de Alerta - Red */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-400 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">Síntomas de Alerta</h2>
              <p className="text-red-100 mb-6 leading-relaxed">Cuándo consultar urgentemente al urólogo.</p>
              <Link href="/blog/sintomas-alerta" 
                    className="inline-flex items-center text-white font-semibold hover:text-red-200 transition-colors duration-200">
                Leer más 
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Prevención - Green */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">Prevención</h2>
              <p className="text-emerald-100 mb-6 leading-relaxed">Consejos para mantener una buena salud urológica.</p>
              <Link href="/blog/prevencion" 
                    className="inline-flex items-center text-white font-semibold hover:text-emerald-200 transition-colors duration-200">
                Leer más 
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Procedimientos - Purple */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">Procedimientos</h2>
              <p className="text-purple-100 mb-6 leading-relaxed">Guías detalladas sobre procedimientos urológicos.</p>
              <Link href="/blog/procedimientos" 
                    className="inline-flex items-center text-white font-semibold hover:text-purple-200 transition-colors duration-200">
                Leer más 
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Preguntas Frecuentes - Orange */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
              <p className="text-orange-100 mb-6 leading-relaxed">Respuestas a las dudas más comunes sobre urología.</p>
              <Link href="/blog/preguntas-frecuentes" 
                    className="inline-flex items-center text-white font-semibold hover:text-orange-200 transition-colors duration-200">
                Leer más 
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;