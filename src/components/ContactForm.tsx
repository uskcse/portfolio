import React, { useState } from 'react';
import { sendEmail } from '../utils/email';
import toast, { Toaster } from 'react-hot-toast';
// import { useContact } from '../context/ContactContext';
import { emailConfig } from '../config/email.config';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  // const { setPhoneVisible } = useContact();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      // setPhoneVisible(true);
      toast.success(
        emailConfig.isDevelopment
          ? 'Message sent successfully (Development Mode)'
          : 'Message sent successfully!'
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>
      </div>
      {emailConfig.isDevelopment && (
        <div className="text-sm text-yellow-600 bg-yellow-50 p-2 rounded">
          ℹ️ Running in development mode - emails will be simulated
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      <Toaster position="bottom-right" />
    </form>
  );
}