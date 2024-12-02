interface EmailConfig {
    serviceId: string;
    templateId: string;
    publicKey: string;
    isDevelopment: boolean;
  }
  
  const getEmailConfig = (): EmailConfig => {
    const isDevelopment = import.meta.env.DEV || import.meta.env.VITE_DEV_MODE === 'true';
  
    // Check for local environment variables first
    const localServiceId = import.meta.env.EMAILJS_SERVICE_ID;
    const localTemplateId = import.meta.env.EMAILJS_TEMPLATE_ID;
    const localPublicKey = import.meta.env.EMAILJS_PUBLIC_KEY;
  
    // If all local env vars are present, use them even in development
    if (localServiceId && localTemplateId && localPublicKey) {
      return {  
        serviceId: localServiceId,
        templateId: localTemplateId,
        publicKey: localPublicKey,
        isDevelopment,
      };
    }
  
    // In development without env vars, use mock values
    if (isDevelopment) {
      return {
        serviceId: 'mock_service_id',
        templateId: 'mock_template_id',
        publicKey: 'mock_public_key',
        isDevelopment: true,
      };
    }
  
    // In production, require actual values
    if (!localServiceId || !localTemplateId || !localPublicKey) {
      throw new Error('EmailJS configuration is missing. Please check environment variables or GitHub Secrets.');
    }
  
    return {
      serviceId: localServiceId,
      templateId: localTemplateId,
      publicKey: localPublicKey,
      isDevelopment: false,
    };
  };
  
  export const emailConfig = getEmailConfig();