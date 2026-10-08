import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    role: 'Senior AI/ML Engineer',
    org: 'Best Buy',
    period: 'Feb 2025 – Present',
    detail: 'Production ML pipelines, GenAI content moderation, personalization and multi-agent product discovery on GCP.'
  },
  {
    type: 'work',
    role: 'Machine Learning Engineer',
    org: 'AB-InBev',
    period: 'Jul 2022 – Feb 2025',
    detail: 'Category management, planogram ML with genetic algorithms, computer vision and GenAI on Azure and Databricks.'
  },
  {
    type: 'work',
    role: 'Machine Learning Engineer',
    org: 'Fractal Analytics',
    period: 'Oct 2021 – Jul 2022',
    detail: 'Recommendation systems, predictive modeling and NLP pipelines with model deployment and monitoring.'
  },
  {
    type: 'work',
    role: 'Junior Machine Learning Engineer',
    org: 'Cognizant',
    period: 'Jul 2019 – Sep 2021',
    detail: 'BERT-based topic modeling, sentiment analysis and Azure ETL pipelines for unstructured data.'
  },
  {
    type: 'education',
    role: 'B.E. Computer Science & Engineering',
    org: 'Anna University',
    period: '2015 – 2019',
    detail: 'Bachelor of Engineering in Computer Science and Engineering.'
  }
];

export function Timeline() {
  return (
    <section className="py-20 bg-white" id="timeline">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Career & Education</h2>
        <div className="relative border-l-2 border-gray-200 ml-3">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 ring-4 ring-white">
                {item.type === 'education' ? (
                  <GraduationCap size={11} className="text-white" />
                ) : (
                  <Briefcase size={11} className="text-white" />
                )}
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.role}</h3>
                <span className="text-sm text-gray-400">{item.period}</span>
              </div>
              <p className="text-blue-600 font-medium text-sm mb-1">{item.org}</p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
