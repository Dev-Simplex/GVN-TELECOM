import React from 'react';
import { ArrowRight, Phone, Users, Shield } from 'lucide-react';
import whatsappWhite from '/assets/images/whatsapp-svgrepo-branca.svg';
import whatsappPurple from '/assets/images/whatsapp-svgrepo-roxa.svg';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Telefonia <span className="text-purple-300">SIP</span>
            <br />para sua Empresa
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Serviço Global Voz Negócio - Telefonia SIP com ligações ilimitadas, 
            suporte direto WhatsApp e melhor qualidade de Atendimento
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
            <button
              onClick={() => {
                const plansSection = document.getElementById('plans');
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-purple-900 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center group"
              aria-label="Ver Planos"
            >
              Ver Planos
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={openWhatsAppGeneral}
              className="group border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors inline-flex items-center justify-center"
              aria-label="Falar com Especialista no WhatsApp"
            >
              <span className="relative mr-2 h-4 w-4 sm:h-5 sm:w-5">
                <img src={whatsappWhite} alt="WhatsApp" className="absolute inset-0 h-4 w-4 sm:h-5 sm:w-5 group-hover:hidden" />
                <img src={whatsappPurple} alt="WhatsApp" className="absolute inset-0 h-4 w-4 sm:h-5 sm:w-5 hidden group-hover:block" />
              </span>
              Falar com Especialista
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-purple-800 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Ligações Ilimitadas</h3>
              <p className="text-sm sm:text-base text-purple-200">
                Chamadas ilimitadas para fixo e móvel em todo Brasil com valor fixo mensal
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-800 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Suporte Direto</h3>
              <p className="text-sm sm:text-base text-purple-200">
                Suporte direto via WhatsApp, sem fila de espera e sem burocracia
              </p>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="bg-purple-800 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Melhor Qualidade</h3>
              <p className="text-sm sm:text-base text-purple-200">
                Garantia de melhor qualidade de ligação e funcionamento do mercado
              </p>
            </div>
          </div>

          {/* Seção de Cobertura Nacional */}
          <div className="mt-12 sm:mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Atendemos a Nível Brasil
              </h3>
              <p className="text-sm sm:text-base text-purple-100">
                Consulte a disponibilidade em sua cidade
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center space-x-2 text-purple-100">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">26 Estados + DF</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-100">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">5.000+ Municípios</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-100">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">Cobertura Nacional</span>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 text-center">
              <button
                onClick={() => {
                  const coverageSection = document.getElementById('coverage');
                  if (coverageSection) {
                    coverageSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-white/30 transition-colors border border-white/30"
              >
                Verificar Disponibilidade
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;