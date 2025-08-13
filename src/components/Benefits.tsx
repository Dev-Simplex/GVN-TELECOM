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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios Exclusivos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os diferenciais que fazem da GVN Telecom a melhor escolha 
            para sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <benefit.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Garantia de Qualidade
            </h3>
            <p className="text-purple-100 text-lg mb-6">
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
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
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
