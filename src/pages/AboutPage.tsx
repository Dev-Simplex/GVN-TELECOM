import React from 'react';
import { ArrowLeft, Shield, Users, Clock, Award, Phone, Zap } from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  const features = [
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description: 'Protocolos de segurança de ponta com criptografia end-to-end para proteger suas comunicações.'
    },
    {
      icon: Users,
      title: 'Suporte Especializado',
      description: 'Equipe técnica qualificada disponível 24 horas por dia para resolver qualquer questão.'
    },
    {
      icon: Clock,
      title: 'Disponibilidade 99.9%',
      description: 'Infraestrutura robusta garante máxima disponibilidade para suas comunicações empresariais.'
    },
    {
      icon: Award,
      title: 'Qualidade Certificada',
      description: 'Certificações internacionais e conformidade com padrões de qualidade do setor.'
    },
    {
      icon: Phone,
      title: 'Tecnologia HD',
      description: 'Qualidade de áudio superior com tecnologia HD Voice para chamadas cristalinas.'
    },
    {
      icon: Zap,
      title: 'Implementação Rápida',
      description: 'Setup completo em até 24 horas com suporte técnico especializado.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Empresas Conectadas' },
    { number: '10k+', label: 'Chamadas por Dia' },
    { number: '99.9%', label: 'Uptime Garantido' },
    { number: '24/7', label: 'Suporte Técnico' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a GVN Telecom
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Especialistas em telefonia SIP para sua Empresa, oferecendo soluções 
            completas para empresas com tecnologia de ponta e suporte local.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Oferecer soluções de telefonia SIP de alta qualidade para empresas 
                em Sinop e região, com tecnologia avançada e suporte local especializado.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Acreditamos que a comunicação eficiente é fundamental para o sucesso 
                dos negócios, por isso desenvolvemos soluções personalizadas que 
                atendem às necessidades específicas de cada empresa.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">
                  Por que escolher a GVN Telecom?
                </h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• Especialistas em telefonia SIP</li>
                  <li>• Atendimento local em Sinop - MT</li>
                  <li>• Suporte técnico especializado</li>
                  <li>• Preços competitivos e transparentes</li>
                  <li>• Implementação rápida e sem complicações</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nossos Valores
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Confiabilidade</h4>
                    <p className="text-gray-600 text-sm">Comprometimento com a qualidade e disponibilidade dos serviços.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parceria</h4>
                    <p className="text-gray-600 text-sm">Relacionamento próximo e duradouro com nossos clientes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inovação</h4>
                    <p className="text-gray-600 text-sm">Sempre à frente com as melhores tecnologias do mercado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nos Diferencia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça os pilares que fazem da GVN Telecom a escolha ideal 
              para sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Transformar sua Comunicação?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            com soluções de telefonia SIP em Sinop - MT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsAppGeneral}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Falar com Especialista
            </button>
            <button
              onClick={onBack}
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Ver Planos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;