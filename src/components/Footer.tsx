import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import whatsappWhite from '/assets/images/whatsapp-svgrepo-branca.svg';
import Logo from './Logo';

// Função para abrir WhatsApp para número específico
const openWhatsAppForNumber = (phoneNumber: string, name: string) => {
  const message = `Olá ${name}! Vi o site e gostaria de saber mais sobre os planos da GVN Telecom.\n\nO que preciso?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const newWindow = window.open(whatsappUrl, '_blank');
  if (newWindow) {
    newWindow.opener = null;
  } else {
    window.location.href = whatsappUrl;
  }
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4 sm:mb-6">
              <Logo size="md" variant="white" />
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Soluções completas em telefonia IP para empresas de todos os tamanhos. 
              Qualidade, confiabilidade e suporte especializado.
            </p>
            <p className="text-xs sm:text-sm text-gray-400">CNPJ: 47.761.233/0001-70</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Serviços</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li><a href="#plans" className="hover:text-purple-400 transition-colors">Planos Móvel</a></li>
              <li><a href="#plans" className="hover:text-purple-400 transition-colors">Internet Fibra</a></li>
              <li><a href="#plans" className="hover:text-purple-400 transition-colors">Telefonia SIP – Fixo</a></li>
              <li><a href="#plans" className="hover:text-purple-400 transition-colors">PABX IP</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-sm sm:text-base text-gray-400">
                <span className="mr-2">📞</span>
                (66) 3566-2423
              </div>
              
              <button 
                onClick={() => openWhatsAppForNumber('5566997182800', 'Viviane')}
                className="flex items-center text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Falar no WhatsApp com Viviane"
              >
                <span
                  className="mr-2 inline-block h-3 w-3 sm:h-4 sm:w-4 bg-current"
                  style={{
                    WebkitMaskImage: `url(${whatsappWhite})`,
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskImage: `url(${whatsappWhite})`,
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    maskSize: 'contain'
                  }}
                  aria-hidden="true"
                />
                WhatsApp - Viviane
              </button>
              
              <button 
                onClick={() => openWhatsAppForNumber('5566984222224', 'Edgar')}
                className="flex items-center text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Falar no WhatsApp com Edgar"
              >
                <span
                  className="mr-2 inline-block h-3 w-3 sm:h-4 sm:w-4 bg-current"
                  style={{
                    WebkitMaskImage: `url(${whatsappWhite})`,
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskImage: `url(${whatsappWhite})`,
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    maskSize: 'contain'
                  }}
                  aria-hidden="true"
                />
                WhatsApp - Edgar
              </button>
              
              <a href="mailto:gvntelecomsinop@gmail.com" className="flex items-center text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                gvntelecomsinop@gmail.com
              </a>
              
              <div className="flex items-center text-sm sm:text-base text-gray-400">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Sinop - MT
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} GVN Telecom. Todos os direitos reservados.
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
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