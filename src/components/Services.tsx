import React from 'react';
import { Phone, Headphones, Building, PhoneCall, Voicemail, Mic, PhoneIncoming, Smartphone, Wifi } from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Móvel',
      description: 'Ligações e WhatsApp ilimitados para todo o Brasil com planos a partir de R$ 49,99/mês. Fazemos portabilidades, linhas novas e renovação de planos de todas as operadoras com o menor custo possível.'
    },
    {
      icon: Wifi,
      title: 'Internet',
      description: 'Soluções de internet corporativa com alta disponibilidade e suporte especializado'
    },
    {
      icon: Mic,
      title: 'Gravação de Chamadas',
      description: 'Sistema de gravação de chamadas para controle e qualidade'
    },
    {
      icon: Phone,
      title: 'Telefonia SIP – Fixo',
      description: 'Serviço Global Voz Negócio com ligações ilimitadas para sua empresa'
    },
    {
      icon: Headphones,
      title: 'ATA (Adaptador Telefônico Analógico)',
      description: 'Adaptadores para conectar telefones analógicos à rede IP'
    },
    {
      icon: PhoneCall,
      title: 'Ramais',
      description: 'Ramais virtuais e físicos para sua empresa'
    },
    {
      icon: Building,
      title: 'PABX IP',
      description: 'Sistemas de PABX baseados em IP para gestão de chamadas empresariais'
    },
    {
      icon: PhoneIncoming,
      title: '0800',
      description: 'Números 0800 para atendimento gratuito aos clientes'
    },
    {
      icon: Voicemail,
      title: 'URA (Unidade de Resposta Audível)',
      description: 'Sistemas de atendimento automatizado com menu de opções'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Venda de Aparelhos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Atendemos sua empresa com Telefonia Fixo, Móvel e Internet, além de PABX, Ramais, URA, 0800 e Gravação de Chamadas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            const centerOnLg = services.length % 3 === 1 && isLast; // 1 item sobrando na última linha (3 colunas)
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow group ${
                  centerOnLg ? 'lg:col-start-2' : ''
                }`}
              >
              <div className="bg-purple-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              
              {/* Imagem do produto quando disponível */}
              {service.title === 'ATA (Adaptador Telefônico Analógico)' && (
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <img 
                    src="/assets/images/ata.png" 
                    alt="Adaptador Telefônico Analógico Intelbras ATA 200" 
                    className="h-24 sm:h-32 w-auto object-contain"
                  />
                </div>
              )}
              
              {(service.title === 'Telefonia SIP – Fixo' || service.title === 'Telefonia IP') && (
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <img 
                    src="/assets/images/tip125i.png" 
                    alt="Telefone IP Intelbras TIP 125i" 
                    className="h-24 sm:h-32 w-auto object-contain"
                  />
                </div>
              )}
              
              {service.title === 'Ramais' && (
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <img 
                    src="/assets/images/tip1001d.png" 
                    alt="Telefone sem fio Intelbras TIP 1001D" 
                    className="h-24 sm:h-32 w-auto object-contain"
                  />
                </div>
              )}
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
              {service.title === 'Móvel' && (
                <div className="mt-4">
                  <button
                    onClick={openWhatsAppGeneral}
                    className="bg-purple-600 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base font-semibold"
                    aria-label="Falar sobre planos Móvel no WhatsApp"
                  >
                    Falar no WhatsApp
                  </button>
                </div>
              )}
            </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Soluções Completas para sua Empresa
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Oferecemos soluções integradas que se adaptam às necessidades 
              específicas do seu negócio, desde pequenas empresas até grandes corporações.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-purple-600 mb-3">Vantagens dos Nossos Serviços:</h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Redução de custos com telefonia</li>
                  <li>• Flexibilidade e escalabilidade</li>
                  <li>• Integração com sistemas existentes</li>
                  <li>• Suporte técnico especializado</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-purple-600 mb-3">Aplicações:</h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Call Centers</li>
                  <li>• Escritórios corporativos</li>
                  <li>• Lojas e comércios</li>
                  <li>• Clínicas e consultórios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
