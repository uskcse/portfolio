import React from 'react';

const skills = [
  {
    category: 'Machine Learning',
    items: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Deep Learning',
      'Computer Vision',
      'NLP'
    ]
  },
  {
    category: 'MLOps',
    items: [
      'Azure ML',
      'MLflow',
      'Kubeflow',
      'DVC',
      'Model Monitoring',
      'CI/CD for ML'
    ]
  },
  {
    category: 'Azure Cloud',
    items: [
      'Azure Kubernetes Service',
      'Azure DevOps',
      'Azure Functions',
      'Azure Databricks',
      'Azure Cognitive Services',
      'Azure Container Registry'
    ]
  },
  {
    category: 'Data Engineering',
    items: [
      'Azure Synapse Analytics',
      'Azure Data Factory',
      'Python',
      'PySpark',
      'Docker',
      'Git'
    ]
  }
];

export function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized in implementing end-to-end ML solutions on Azure, from model development to production deployment,
            with a strong focus on scalable and maintainable MLOps practices.
          </p>
        </div>
      </div>
    </section>
  );
}