import { Building2 } from 'lucide-react';

const projects = [
  {
    title: 'AI Content Moderation Platform',
    company: 'Best Buy',
    period: 'Feb 2025 – Present',
    description: 'Scalable AI content moderation platform with Human-in-the-Loop evaluation on GCP',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    technologies: ['Gemini Flash 2.0', 'Cloud Run', 'Pub/Sub', 'BigQuery', 'GCS', 'HITL'],
    achievements: [
      'Built scalable AI content moderation platform using Gemini Flash 2.0',
      'Integrated Human-in-the-Loop evaluation to improve moderation accuracy',
      'Architected event-driven pipeline with Cloud Run and Pub/Sub',
      'Reduced manual review effort while improving decision quality'
    ]
  },
  {
    title: 'Personalization & Recommendation Engine',
    company: 'Best Buy',
    period: 'Feb 2025 – Present',
    description: 'Personalization and recommendation systems for deals and membership using vector retrieval',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vertex AI Search', 'Vector DB', 'Embeddings', 'Python', 'Recommendation Systems'],
    achievements: [
      'Optimized embedding generation and vector retrieval with Vertex AI Search',
      'Improved recommendation relevance for deals and membership use cases',
      'Increased retrieval efficiency across personalization systems',
      'Built feature engineering pipelines for recommendation models'
    ]
  },
  {
    title: 'Production ML Pipelines & MLOps',
    company: 'Best Buy',
    period: 'Feb 2025 – Present',
    description: 'Production ML pipelines and reproducible MLOps workflows on GKE with Kubeflow',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
    technologies: ['Kubeflow', 'GKE', 'Vertex AI', 'LSTM', 'Neural Networks', 'CI/CD'],
    achievements: [
      'Designed production ML pipelines with LSTM, Neural Networks, and Random Forest',
      'Implemented Vertex AI Kubeflow pipelines for experimentation and CI/CD',
      'Enabled reliable training, deployment, and monitoring at scale',
      'Built robust data ingestion and preprocessing pipelines'
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
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Projects &amp; Experience
          </span>
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          A selection of production AI/ML systems I&apos;ve designed and shipped across my career.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {project.company && (
                  <span className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-gray-800 shadow">
                    <Building2 size={13} />
                    {project.company}
                  </span>
                )}
                {project.period && (
                  <span className="absolute bottom-3 left-3 text-xs font-medium text-white/90">
                    {project.period}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-100 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2 text-sm text-gray-900">Key Achievements</h4>
                  <ul className="space-y-1.5">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-gray-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
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
