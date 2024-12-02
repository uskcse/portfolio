import React from 'react';
import { Brain, Code2, Database } from 'lucide-react';
import { calculateExperience } from '../utils/experience';

export function About() {
  const experience = calculateExperience();

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-gray-600 text-lg mb-12 text-center">
          <p>
            AI Engineer with {experience}+ years of experience in NLP, Computer Vision, and Recommendation Systems. 
            Specialized in transforming data science prototypes into production-grade solutions and optimizing real-time models.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-blue-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Expertise</h3>
            <p className="text-gray-600">Deep experience in ML, NLP, and Computer Vision with proven production deployments.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="text-blue-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">MLOps Specialist</h3>
            <p className="text-gray-600">Expert in ML pipelines, model deployment, and production optimization.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="text-blue-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
            <p className="text-gray-600">Proficient in ETL, data pipelines, and cloud infrastructure on Azure and GCP.</p>
          </div>
        </div>
      </div>
    </section>
  );
}