import { Building2 } from 'lucide-react';

const projects = [
  {
    title: 'AI Platform Engineering',
    company: 'Best Buy',
    period: 'Feb 2025 – Present',
    description: 'Scalable AI/ML platform for content moderation, personalization, and recommendation systems on GCP',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    technologies: ['Gemini Flash 2.0', 'Vertex AI', 'Kubeflow', 'GKE', 'BigQuery', 'GCS', 'LSTM', 'Vector DB'],
    achievements: [
      'Built AI content moderation platform using Gemini Flash 2.0 with Human-in-the-Loop evaluation',
      'Optimized personalization and recommendation systems using Vertex AI Search (Vector DB)',
      'Designed production ML pipelines with LSTM, Neural Networks, Random Forest, and Gemini models',
      'Implemented Kubeflow pipelines for CI/CD and reproducible ML workflows on GKE'
    ]
  },
  {
    title: 'Category Management Expert System',
    company: 'AB-InBev',
    period: 'Jul 2022 – Feb 2025',
    description: 'End-to-end category management solution using genetic algorithms and ML for data-driven insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['Genetic Algorithms', 'Azure', 'Computer Vision', 'GenAI', 'Kedro', 'Databricks'],
    achievements: [
      'Built planogram feature using genetic algorithms',
      'Implemented GenAI integration with ChatGPT APIs',
      'Developed planogram adherence model using computer vision',
      'Integrated Azure data pipelines and Databricks'
    ]
  },
  {
    title: 'Order Recommendation System',
    company: 'Fractal Analytics',
    period: '2021 - 2022',
    description: 'Advanced recommendation engine for optimizing order suggestions and inventory management',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80',
    technologies: ['Collaborative Filtering', 'Python', 'Machine Learning', 'Azure ML'],
    achievements: [
      'Developed collaborative filtering-based recommendation system',
      'Implemented real-time order suggestion pipeline',
      'Achieved 25% improvement in order accuracy',
      'Integrated system with existing inventory management'
    ]
  },
  {
    title: 'Predictive Analytics Platform',
    company: 'Fractal Analytics',
    period: '2021 - 2022',
    description: 'End-to-end data science platform for predictive modeling and analysis',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Machine Learning', 'Python', 'Scikit-Learn', 'NLP', 'NLTK'],
    achievements: [
      'Built recommendation system using collaborative filtering',
      'Implemented text preprocessing and NLP pipelines',
      'Developed automated model monitoring solutions',
      'Created customized prediction applications'
    ]
  },
  {
    title: 'Topic Modeling System',
    company: 'Cognizant',
    period: '2019 - 2021',
    description: 'BERT-based topic modeling system with Azure pipeline integration',
    image: 'https://images.unsplash.com/photo-1456953180671-730de08edaa7?auto=format&fit=crop&w=800&q=80',
    technologies: ['BERT', 'Azure DevOps', 'NLP', 'ETL', 'Machine Learning'],
    achievements: [
      'Developed BERT-based topic modeling architecture',
      'Built end-to-end Azure ETL pipelines',
      'Implemented sentiment analysis solutions',
      'Created complex data extraction procedures'
    ]
  },
  {
    title: 'Audio Digit Recognition',
    company: 'Personal Project',
    description: 'LSTM-based model for predicting digits from speech signals',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    technologies: ['LSTM', 'Signal Processing', 'Deep Learning', 'Python'],
    achievements: [
      'Implemented spectrogram feature extraction',
      'Applied audio data augmentation techniques',
      'Achieved high accuracy in digit recognition',
      'Optimized model for real-time processing'
    ]
  },
  {
    title: 'Document Classification System',
    company: 'Personal Project',
    description: 'Multi-class document classification system with 30 categories',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80',
    technologies: ['NLP', 'BERT', 'Python', 'Machine Learning'],
    achievements: [
      'Built multi-class classification pipeline',
      'Implemented document preprocessing workflow',
      'Achieved high classification accuracy',
      'Optimized for large document sets'
    ]
  },
  {
    title: 'WSDM KKBox Churn Prediction',
    company: 'Personal Project',
    description: 'Customer churn prediction system (Top 5% on Kaggle)',
    image: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=800&q=80',
    technologies: ['Machine Learning', 'Python', 'Feature Engineering', 'XGBoost'],
    achievements: [
      'Achieved top 5% ranking on Kaggle',
      'Implemented advanced feature engineering',
      'Built ensemble learning pipeline',
      'Optimized model performance'
    ]
  }
];

export function Projects() {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects & Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                {project.company && (
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Building2 size={16} />
                    <span>{project.company}</span>
                    {project.period && <span className="text-gray-400">• {project.period}</span>}
                  </div>
                )}
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
