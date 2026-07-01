
const skills = [
  {
    category: 'Machine Learning',
    items: [
      'Linear & Logistic Regression',
      'Random Forest & SVM',
      'Gradient Boosting (XGBoost)',
      'Clustering & Dimensionality Reduction',
      'Recommendation Systems',
      'Topic Modeling'
    ]
  },
  {
    category: 'Deep Learning',
    items: [
      'Neural Networks (NN, CNN, RNN)',
      'LSTM & Transformers',
      'BERT & GPT',
      'Vision Transformers',
      'Transfer Learning',
      'TensorFlow & PyTorch'
    ]
  },
  {
    category: 'Cloud & MLOps',
    items: [
      'GCP Vertex AI & GKE',
      'Kubeflow Pipelines',
      'Azure ML & DevOps',
      'MLflow & Kedro',
      'Docker & Kubernetes',
      'CI/CD for ML'
    ]
  },
  {
    category: 'Tools & Data',
    items: [
      'Python, SQL, PySpark',
      'FastAPI & Pytest',
      'Databricks & Airflow',
      'Redis & Celery',
      'Pandas, NumPy, Scikit-learn',
      'NLTK, TF-IDF, Word2Vec'
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
            Specialized in end-to-end ML solutions across Azure and GCP — from NLP and Computer Vision to production-grade MLOps with Kubeflow, Vertex AI, and real-time model serving.
          </p>
        </div>
      </div>
    </section>
  );
}
