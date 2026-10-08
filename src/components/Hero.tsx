import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { calculateExperience } from '../utils/experience';

export function Hero() {
  const experience = calculateExperience();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-slate-800 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-blue-400 font-medium tracking-widest uppercase mb-4 animate-fade-in">
          {experience}+ Years in AI / ML
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
            Surya Kumar Umapathi
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10">
          Senior AI/ML Engineer · ML Expert · MLOps Specialist
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a href="https://github.com/uskcse" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-blue-500 hover:scale-110 transition-all">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/surya-kumar-8a1bb2138/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-blue-500 hover:scale-110 transition-all">
            <Linkedin size={22} />
          </a>
          <a href="mailto:uskcse@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-blue-500 hover:scale-110 transition-all">
            <Mail size={22} />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 inline-block shadow-lg shadow-blue-500/30">
            View My Work
          </a>
          <a href="#contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all inline-block">
            Get In Touch
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white animate-float">
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
