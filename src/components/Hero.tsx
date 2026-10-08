import { Github, Linkedin, Mail } from 'lucide-react';
import { calculateExperience } from '../utils/experience';

export function Hero() {
  const experience = calculateExperience();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-blue-400 font-medium tracking-wide mb-4 animate-fade-in">
          {experience}+ Years in AI / ML
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-blue-400">Surya Kumar Umapathi</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10">
          Senior AI/ML Engineer · ML Expert · MLOps Specialist
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/uskcse" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/surya-kumar-8a1bb2138/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:uskcse@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block">
            View My Work
          </a>
          <a href="#contact" className="border border-gray-500 hover:border-blue-400 hover:text-blue-400 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
