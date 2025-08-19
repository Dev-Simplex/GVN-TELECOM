import React from 'react';
import { Check, Clock, Zap, Shield, Phone, Users, Wifi, MessageCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Check,
      title: 'Ligações Ilimitadas',
      description: 'Ligações ilimitadas para fixo e móvel para todo Brasil'
    },
    {
      icon: Shield,
      title: 'Valor Fixo Mensal',
      description: 'Valor fixo mensal, sem surpresas na fatura'
    },
    {
      icon: Clock,
      title: 'Contrato 24 Meses',
      description: 'Prazo de contrato 24 meses com 1ª mensalidade no ato da adesão'
    },
    {
      icon: Zap,
      title: 'Chamadas Simultâneas',
      description: 'Chamadas simultâneas com busca automática'
    },
    {
      icon: Phone,
      title: 'Portabilidade Rápida',
      description: 'Portabilidade em média 7 a 15 dias úteis'
    },
    {
      icon: Users,
      title: 'Linhas Novas 24h',
      description: 'Linhas novas 24 horas de acordo com a cidade'
    },
    {
      icon: Wifi,
      title: 'Compatibilidade Total',
      description: 'Conexão via COMPUTADOR/TELEFONE IP/ATA/PABX/PLACA ICIP'
    },
    {
      icon: MessageCircle,
      title: 'Suporte Direto WhatsApp',
      description: 'Suporte direto em nosso WhatsApp, sem fila de espera, sem burocracia'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios Exclusivos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Conheça os diferenciais que fazem da GVN Telecom a melhor escolha 
            para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-purple-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Telefonia SIP - FIXO
            </h3>
            <p className="text-sm sm:text-lg text-purple-100 mb-4 sm:mb-6">
              Garantia de melhor qualidade de ligação e funcionamento do mercado. 
              Proposta válida para o mês vigente.
            </p>
            <button
              onClick={() => {
                const plansSection = document.getElementById('plans');
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-purple-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-purple-50 transition-colors"
            >
              Ver Planos e Preços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
