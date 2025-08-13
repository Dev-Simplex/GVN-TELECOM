// Função para abrir WhatsApp com mensagem personalizada
export const openWhatsApp = (planName?: string, planPrice?: number, planLines?: number) => {
  const phoneNumber = '5566984222224'; // Número da GVN Telecom
  
  let message = 'Olá! Gostaria de saber mais sobre os planos da GVN Telecom.';
  
  if (planName && planPrice && planLines) {
    // Calcular taxa de adesão baseada no número de linhas
    let adesao = 0;
    switch (planLines) {
      case 1: adesao = 200; break;
      case 2: adesao = 400; break;
      case 3: adesao = 500; break;
      case 4: adesao = 600; break;
      case 6: adesao = 800; break;
      case 10: adesao = 1000; break;
      default: adesao = planPrice * 2;
    }
    
    message = `Olá! Gostaria de contratar o ${planName} da GVN Telecom.

📋 **Detalhes do Plano:**
• ${planName}
• ${planLines} linha${planLines > 1 ? 's' : ''} SIP
• R$ ${planPrice}/mês
• Taxa de adesão: R$ ${adesao}

Por favor, me envie mais informações sobre o processo de contratação.`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

// Função para WhatsApp geral
export const openWhatsAppGeneral = () => {
  const phoneNumber = '5566984222224'; // Número da GVN Telecom
  const message = 'Olá! Gostaria de saber mais sobre os planos da GVN Telecom.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};
