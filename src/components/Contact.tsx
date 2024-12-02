import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';
// import { useContact } from '../context/ContactContext';

export function Contact() {
  // const { isPhoneVisible } = useContact();
  const isPhoneVisible = true;
  const phoneNumber = "+91-9677481090";
  const maskedNumber = "XX-XXXXXXXX90";

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />
                <span>uskcse@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" />
                <span className="font-mono">
                  {isPhoneVisible ? phoneNumber : maskedNumber}
                </span>
                {!isPhoneVisible && (
                  <span className="text-sm text-gray-500 italic">
                    (Submit email to view)
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}