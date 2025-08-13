import React from 'react';
import { ArrowRight, Phone, Users, Shield } from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Telefonia <span className="text-purple-300">SIP</span>
            <br />para sua Empresa
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Serviço Global Voz Negócio - Telefonia SIP com ligações ilimitadas, 
            suporte direto WhatsApp e melhor qualidade de Atendimento
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => {
                const plansSection = document.getElementById('plans');
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-purple-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center group"
            >
              Ver Planos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openWhatsAppGeneral}
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Falar com Especialista
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ligações Ilimitadas</h3>
              <p className="text-purple-200">
                Chamadas ilimitadas para fixo e móvel em todo Brasil com valor fixo mensal
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Suporte Direto</h3>
              <p className="text-purple-200">
                Suporte direto via WhatsApp, sem fila de espera e sem burocracia
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Melhor Qualidade</h3>
              <p className="text-purple-200">
                Garantia de melhor qualidade de ligação e funcionamento do mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;