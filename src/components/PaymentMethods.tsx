import React from 'react';
import { Smartphone, FileText, Shield } from 'lucide-react';

const PaymentMethods: React.FC = () => {
  const methods = [
    {
      icon: Smartphone,
      name: 'PIX',
      description: 'Pagamento instantâneo via PIX, disponível 24h',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FileText,
      name: 'Boleto Bancário',
      description: 'Vencimento em 30 dias, sem taxas adicionais',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Formas de Pagamento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aceitamos PIX e Boleto para sua comodidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {methods.map((method, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex p-4 rounded-full ${method.color} mb-6`}>
                <method.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {method.name}
              </h3>
              <p className="text-gray-600">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-purple-900">
                Pagamento Seguro
              </h3>
            </div>
            <p className="text-purple-700">
              Todos os pagamentos são processados diretamente pela GVN Telecom com 
              total segurança e transparência. Entre em contato via WhatsApp para 
              finalizar sua contratação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
