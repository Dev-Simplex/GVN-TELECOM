// Função para obter o próximo número da fila
const getNextPhoneNumber = () => {
  const phoneNumbers = ['5566997182800', '5566984222224']; // Viviane, Edgar
  const currentCount = parseInt(localStorage.getItem('whatsappCounter') || '0');
  const nextIndex = currentCount % phoneNumbers.length;
  localStorage.setItem('whatsappCounter', (currentCount + 1).toString());
  return phoneNumbers[nextIndex];
};

// Função para abrir WhatsApp com mensagem personalizada
export const openWhatsApp = (planName?: string, planPrice?: number, planLines?: number) => {
  const phoneNumber = getNextPhoneNumber();
  
  let message = 'Olá! Vi o site e gostaria de saber mais sobre os planos da GVN Telecom.\n\nO que preciso?';
  
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
    
    message = `- Olá! Vi o site e gostaria de contratar o plano de ${planLines} linhas da GVN Telecom.
- ${planLines} linhas SIP
- R$ ${planPrice}/mês
- Taxa de adesão: R$ ${adesao}

O que preciso?`;
  }
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const newWindow = window.open(whatsappUrl, '_blank');
  if (newWindow) {
    // proteção extra para abas externas
    newWindow.opener = null;
  } else {
    // Fallback se popup for bloqueado
    window.location.href = whatsappUrl;
  }
};

// Função para WhatsApp geral
export const openWhatsAppGeneral = () => {
  const phoneNumber = getNextPhoneNumber();
  
  const message = 'Olá! Vi o site e gostaria de saber mais sobre os planos da GVN Telecom.\n\nO que preciso?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const newWindow = window.open(whatsappUrl, '_blank');
  if (newWindow) {
    newWindow.opener = null;
  } else {
    window.location.href = whatsappUrl;
  }
};

// Função para obter o número atual (opcional, para debug)
export const getCurrentWhatsAppNumber = () => {
  const phoneNumbers = ['5566997182800', '5566984222224']; // Viviane, Edgar
  const currentCount = parseInt(localStorage.getItem('whatsappCounter') || '0');
  const currentIndex = currentCount % 2;
  return phoneNumbers[currentIndex];
};

// Função para resetar o contador (opcional, para debug)
export const resetWhatsAppCounter = () => {
  localStorage.setItem('whatsappCounter', '0');
};

// Função para WhatsApp de cobertura
export const openWhatsAppCoverage = () => {
  const phoneNumber = getNextPhoneNumber();
  
  const message = `Olá! Vi o site e gostaria de verificar a cobertura da GVN Telecom.\n\nO que preciso?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const newWindow = window.open(whatsappUrl, '_blank');
  if (newWindow) {
    newWindow.opener = null;
  } else {
    window.location.href = whatsappUrl;
  }
};
