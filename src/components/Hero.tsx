import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { calculateExperience } from '../utils/experience';

export function Hero() {
  const experience = calculateExperience();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-blue-400">Surya Kumar U</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Machine Learning Engineer | AI Specialist | MLOps Expert
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/surya-kumar-8a1bb2138/" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:uskcse@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <a 
          href="#contact" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}