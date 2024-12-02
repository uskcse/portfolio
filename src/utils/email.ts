import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email.config';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const mockEmailResponse = () => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        status: 200, 
        text: 'OK',
        data: {
          message: 'Email simulated in development mode',
          timestamp: new Date().toISOString(),
        }
      });
    }, 1000);
  });

export const sendEmail = async (formData: EmailData) => {
  if (emailConfig.isDevelopment) {
    console.log('Development mode: Simulating email send', formData);
    return mockEmailResponse();
  }

  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      emailConfig.publicKey
    );
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email. Please check the configuration.');
  }
};