import React from 'react';
import { MessageCircle, Phone, Zap } from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Revolucionar sua Comunicação?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Junte-se a centenas de empresas em Sinop que já confiam na GVN Telecom 
            para suas soluções de telefonia SIP. Atendimento personalizado e 
            implementação rápida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-purple-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Implementação Rápida</h3>
            <p className="text-purple-200">
              Setup completo em até 24 horas com suporte técnico especializado
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Suporte Local</h3>
            <p className="text-purple-200">
              Atendimento presencial em Sinop - MT com equipe local especializada
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">WhatsApp Direto</h3>
            <p className="text-purple-200">
              Suporte direto via WhatsApp, sem fila de espera ou burocracia
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={openWhatsAppGeneral}
            className="bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center group"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Falar com Especialista
          </button>
        </div>

        <div className="mt-8 text-purple-200">
          <p className="text-sm">
            📍 R Tancredo Neves 211, Jd Itália, Sinop - MT | 📞 (66) 8 4222-2224
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
