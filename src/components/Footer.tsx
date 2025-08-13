import React from 'react';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <Logo size="md" variant="white" />
            </div>
            <p className="text-gray-400 mb-6">
              Soluções completas em telefonia IP para empresas de todos os tamanhos. 
              Qualidade, confiabilidade e suporte especializado.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#plans" className="hover:text-purple-400 transition-colors">Planos SIP</a></li>
              <li><a href="#plans" className="hover:text-purple-400 transition-colors">Linhas Adicionais</a></li>
              <li><a href="#plans" className="hover:text-purple-400 transition-colors">Ramais Extras</a></li>
              <li><a href="#plans" className="hover:text-purple-400 transition-colors">PABX Adicional</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-3">
              <button 
                onClick={openWhatsAppGeneral}
                className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                (66) 8 4222-2224
              </button>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                contato@gvntelecom.com.br
              </div>
              <a 
                href="tel:66842222224"
                className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (66) 8 4222-2224
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Sinop - MT
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 GVN Telecom. Todos os direitos reservados.
            </p>
            <p className="text-gray-400">
              Desenvolvido por{' '}
              <a 
                href="https://simplexsolucoes.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Simplex Soluções
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;