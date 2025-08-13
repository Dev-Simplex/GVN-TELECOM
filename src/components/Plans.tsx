import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const Plans: React.FC = () => {
  const plans = [
    {
      id: 1,
      name: '1 Linha',
      price: 100,
      adesao: 200,
      lines: 1,
      features: [
        '1 Linha SIP',
        'Ligações ilimitadas para fixo e móvel',
        'Chamadas simultâneas com busca automática',
        'Portabilidade em 7-15 dias úteis',
        'Suporte direto WhatsApp',
        'Contrato 24 meses'
      ],
      popular: false
    },
    {
      id: 2,
      name: '2 Linhas',
      price: 200,
      adesao: 400,
      lines: 2,
      features: [
        '2 Linhas SIP',
        'Ligações ilimitadas para fixo e móvel',
        'Chamadas simultâneas com busca automática',
        'Portabilidade em 7-15 dias úteis',
        'Suporte direto WhatsApp',
        'Contrato 24 meses'
      ],
      popular: true
    },
    {
      id: 3,
      name: '3 Linhas',
      price: 240,
      adesao: 500,
      lines: 3,
      features: [
        '3 Linhas SIP',
        'Ligações ilimitadas para fixo e móvel',
        'Chamadas simultâneas com busca automática',
        'Portabilidade em 7-15 dias úteis',
        'Suporte direto WhatsApp',
        'Contrato 24 meses'
      ],
      popular: false
    },
    {
      id: 4,
      name: '4 Linhas',
      price: 320,
      adesao: 600,
      lines: 4,
      features: [
        '4 Linhas SIP',
        'Ligações ilimitadas para fixo e móvel',
        'Chamadas simultâneas com busca automática',
        'Portabilidade em 7-15 dias úteis',
        'Suporte direto WhatsApp',
        'Contrato 24 meses'
      ],
      popular: false
    },
    {
      id: 5,
      name: '6 Linhas',
      price: 420,
      adesao: 800,
      lines: 6,
      features: [
        '6 Linhas SIP',
        'Ligações ilimitadas para fixo e móvel',
        'Chamadas simultâneas com busca automática',
        'Portabilidade em 7-15 dias úteis',
        'Suporte direto WhatsApp',
        'Contrato 24 meses'
      ],
      popular: false
    },
    {
      id: 6,
      name: '10 Linhas',
      price: 500,
      adesao: 1000,
      lines: 10,
      features: [
        '10 Linhas SIP',
        'Ligações ilimitadas para fixo e móvel',
        'Chamadas simultâneas com busca automática',
        'Portabilidade em 7-15 dias úteis',
        'Suporte direto WhatsApp',
        'Contrato 24 meses'
      ],
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis para empresas de todos os tamanhos, 
            com a qualidade que você precisa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg p-8 transition-transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-purple-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-purple-600">
                    R$ {plan.price}
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-gray-600">
                    Adesão: R$ {plan.adesao}
                  </p>
                </div>
                <p className="text-gray-600">
                  {plan.lines} linha{plan.lines > 1 ? 's' : ''} SIP
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openWhatsApp(plan.name, plan.price, plan.lines)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}
              >
                Contratar Agora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Serviços PABX Adicionais
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">
                Ramal Adicional
              </h4>
              <p className="text-2xl font-bold text-purple-600 mb-2">
                R$ 25,00/mês
              </p>
              <p className="text-gray-600">
                Adicione ramais extras ao seu PABX
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">
                Gravação
              </h4>
              <p className="text-2xl font-bold text-purple-600 mb-2">
                R$ 30,00/linha
              </p>
              <p className="text-gray-600">
                Sistema de gravação por linha
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">
                URA de Atendimento
              </h4>
              <p className="text-2xl font-bold text-purple-600 mb-2">
                R$ 60,00/mês
              </p>
              <p className="text-gray-600">
                Menu de atendimento automatizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;