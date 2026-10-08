import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
        <p className="text-gray-600 mb-10">
          Open to AI/ML engineering roles and collaborations. Feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Mail className="text-blue-500" size={20} />
            <span>uskcse@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Phone className="text-blue-500" size={20} />
            <span>+91-9677481090</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <MapPin className="text-blue-500" size={20} />
            <span>Bangalore, India</span>
          </div>
        </div>
        <a
          href="mailto:uskcse@gmail.com"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-semibold transition-colors"
        >
          <Mail size={18} />
          Email Me
        </a>
      </div>
    </section>
  );
}
