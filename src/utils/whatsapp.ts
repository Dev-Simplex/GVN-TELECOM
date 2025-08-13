// Função para obter o próximo número da fila
const getNextPhoneNumber = () => {
  // Array com dois números de contato
  const phoneNumbers = ['5566997182800', '5566984222224']; // Viviane, Edgar
  
  // Pegar o contador atual do localStorage
  const currentCount = parseInt(localStorage.getItem('whatsappCounter') || '0');
  
  // Calcular o próximo índice (0 ou 1)
  const nextIndex = currentCount % 2;
  
  // Incrementar o contador para o próximo usuário
  localStorage.setItem('whatsappCounter', (currentCount + 1).toString());
  
  return phoneNumbers[nextIndex];
};

// Função para abrir WhatsApp com mensagem personalizada
export const openWhatsApp = (planName?: string, planPrice?: number, planLines?: number) => {
  const phoneNumber = getNextPhoneNumber();
  
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

📋 *DETALHES DO PLANO*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 ${planLines} linha${planLines > 1 ? 's' : ''} SIP
💰 R$ ${planPrice}/mês
💳 Taxa de adesão: R$ ${adesao}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Por favor, me informe sobre o processo de contratação.`;
  }
  
  // Usar uma abordagem mais simples para garantir compatibilidade
  const cleanMessage = message.replace(/\n/g, '%0A').replace(/\s+/g, ' ').trim();
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${cleanMessage}`;
  
  // Abrir em nova aba
  const newWindow = window.open(whatsappUrl, '_blank');
  
  // Fallback se popup for bloqueado
  if (!newWindow) {
    window.location.href = whatsappUrl;
  }
};

// Função para WhatsApp geral
export const openWhatsAppGeneral = () => {
  const phoneNumber = getNextPhoneNumber();
  
  const message = 'Olá! Gostaria de saber mais sobre os planos da GVN Telecom.';
  
  // Usar uma abordagem mais simples para garantir compatibilidade
  const cleanMessage = message.replace(/\n/g, '%0A').replace(/\s+/g, ' ').trim();
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${cleanMessage}`;
  
  // Abrir em nova aba
  const newWindow = window.open(whatsappUrl, '_blank');
  
  // Fallback se popup for bloqueado
  if (!newWindow) {
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
  
  const message = `Olá! Gostaria de verificar a disponibilidade da GVN Telecom em minha cidade.

🗺️ *CONSULTA DE COBERTURA*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Atendemos 26 estados + DF
🏢 Cobertura nacional (exceto Roraima)
🏙️ Mais de 5.000 municípios
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Por favor, me informe sobre a disponibilidade em minha região e como posso contratar o serviço.`;
  
  // Usar uma abordagem mais simples para garantir compatibilidade
  const cleanMessage = message.replace(/\n/g, '%0A').replace(/\s+/g, ' ').trim();
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${cleanMessage}`;
  
  // Abrir em nova aba
  const newWindow = window.open(whatsappUrl, '_blank');
  
  // Fallback se popup for bloqueado
  if (!newWindow) {
    window.location.href = whatsappUrl;
  }
};
