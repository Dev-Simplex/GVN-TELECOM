import React from 'react';
import { Phone, Zap } from 'lucide-react';
import whatsappGreen from '/assets/images/whatsapp-svgrepo-branca.svg';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const CTASection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Pronto para Revolucionar sua Comunicação?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Junte-se a centenas de empresas que já confiam na GVN Telecom 
            para suas soluções de telefonia empresarial. Atendimento personalizado e 
            implementação rápida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center">
            <div className="bg-purple-800 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Implementação Rápida</h3>
            <p className="text-sm sm:text-base text-purple-200">
              Setup completo em até 24 horas com suporte técnico especializado
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-800 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Suporte Local</h3>
            <p className="text-sm sm:text-base text-purple-200">
              Atendimento presencial com equipe local especializada
            </p>
          </div>
          <div className="text-center sm:col-span-2 md:col-span-1">
            <div className="bg-purple-800 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
              <img src={whatsappGreen} alt="WhatsApp" className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">WhatsApp Direto</h3>
            <p className="text-sm sm:text-base text-purple-200">
              Suporte direto via WhatsApp, sem fila de espera ou burocracia
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={openWhatsAppGeneral}
            className="bg-white text-purple-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center group"
          >
            <img src={whatsappGreen} alt="WhatsApp" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Falar com Especialista
          </button>
        </div>

        <div className="mt-6 sm:mt-8 text-purple-200">
          <p className="text-xs sm:text-sm">
            📍 R Tancredo Neves 211, Jd Itália, Sinop - MT
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
