import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import whatsappGreen from '/assets/images/Digital_Glyph_Green.svg';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fale diretamente com nossa equipe especializada via WhatsApp
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp - Principal */}
            <button
              onClick={openWhatsAppGeneral}
              className="flex items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group w-full text-left border-2 border-green-100 hover:border-green-200"
              aria-label="Abrir conversa no WhatsApp"
            >
              <div className="bg-green-100 p-4 rounded-full mr-6">
                <img src={whatsappGreen} alt="WhatsApp" className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                  WhatsApp
                </h4>
                <p className="text-lg text-gray-600 mb-1">(66) 99718-2800 - Viviane</p>
                <p className="text-lg text-gray-600 mb-1">(66) 98422-2224 - Edgar</p>
                <p className="text-sm text-gray-500">Atendimento direto 24h</p>
                <p className="text-xs text-green-600 mt-2 font-medium">Clique para conversar →</p>
              </div>
            </button>

            {/* Telefone */}
            <div className="flex items-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full mr-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h4>
                <p className="text-lg text-gray-600 mb-1"><a href="tel:+5566997182800" className="hover:text-purple-600">(66) 99718-2800 - Viviane</a></p>
                <p className="text-lg text-gray-600 mb-1"><a href="tel:+5566984222224" className="hover:text-purple-600">(66) 98422-2224 - Edgar</a></p>
                <p className="text-sm text-gray-500">Seg a Sex, 8h às 18h</p>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-purple-100 p-4 rounded-full mr-6">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h4>
                <p className="text-lg text-gray-600 mb-1"><a href="mailto:gvntelecomsinop@gmail.com" className="hover:text-purple-600">gvntelecomsinop@gmail.com</a></p>
                <p className="text-sm text-gray-500">Resposta em até 24h</p>
              </div>
            </div>

            {/* Endereço */}
            <div className="flex items-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-red-100 p-4 rounded-full mr-6">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Endereço</h4>
                <p className="text-lg text-gray-600 mb-1">R Tancredo Neves 211</p>
                <p className="text-sm text-gray-500">Jd Itália, Sinop - MT</p>
                <p className="text-sm text-gray-500">CEP: 78555-322</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;