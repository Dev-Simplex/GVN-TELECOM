// Função para abrir WhatsApp com mensagem personalizada
export const openWhatsApp = (planName?: string, planPrice?: number, planLines?: number) => {
  const phoneNumber = '556684222224'; // Número da GVN Telecom
  
  let message = 'Olá! Gostaria de saber mais sobre os planos de telefonia SIP da GVN Telecom.';
  
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
    
    message = `Olá! Gostaria de contratar o plano ${planName} da GVN Telecom.

📋 *DETALHES DO PLANO:*
• Plano: ${planName}
• ${planLines} linha${planLines > 1 ? 's' : ''} SIP
• Valor mensal: R$ ${planPrice}
• Taxa de adesão: R$ ${adesao}

🏢 *BENEFÍCIOS INCLUSOS:*
• Ligações ilimitadas para fixo e móvel
• Chamadas simultâneas com busca automática
• Portabilidade em 7-15 dias úteis
• Suporte direto WhatsApp
• Contrato 24 meses

📍 *ATENDIMENTO LOCAL EM SINOP - MT*

Por favor, me informe sobre o processo de contratação e documentação necessária.`;
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
  const phoneNumber = '556684222224'; // Número da GVN Telecom
  const message = `Olá! Gostaria de saber mais sobre os planos de telefonia SIP da GVN Telecom.

🏢 *SERVIÇO GLOBAL VOZ NEGÓCIO*
• Telefonia SIP para empresas
• Ligações ilimitadas para todo Brasil
• Melhor qualidade do mercado
• Suporte direto WhatsApp

📍 *ATENDIMENTO LOCAL EM SINOP - MT*

Por favor, me informe sobre os planos disponíveis e valores.`;
  
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
