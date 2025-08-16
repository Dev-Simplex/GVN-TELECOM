import React from 'react';
import { Building, Truck, Car, Wrench, ShoppingBag, MapPin, Package, Hammer, Warehouse, Leaf, BookOpen } from 'lucide-react';

const Clients: React.FC = () => {
  const clients = [
    {
      name: 'Catatau Veículos',
      icon: Car,
      category: 'Comércio de Veículos'
    },
    {
      name: 'Usina RRP Energia',
      icon: Building,
      category: 'Produção de Etanol'
    },
    {
      name: 'Supertec',
      icon: Wrench,
      category: 'Equipamentos Industriais'
    },
    {
      name: 'Grupo Gás Lar',
      icon: ShoppingBag,
      category: 'Distribuição de Gás'
    },
    {
      name: 'Galeão Pneus',
      icon: Car,
      category: 'Revenda de Pneus'
    },
    {
      name: 'Intervias – Rodovia da Integração',
      icon: MapPin,
      category: 'Concessão Rodoviária'
    },
    {
      name: 'Transportes Martinelli',
      icon: Truck,
      category: 'Transporte de Cargas'
    },
    {
      name: 'Primus Materiais de Construção',
      icon: Hammer,
      category: 'Materiais de Construção'
    },
    {
      name: 'Terra Way Armazéns Gerais',
      icon: Warehouse,
      category: 'Armazenagem'
    },
    {
      name: 'Nutrinorte',
      icon: Leaf,
      category: 'Nutrição Animal'
    },
    {
      name: 'Brasil Papelaria',
      icon: BookOpen,
      category: 'Papelaria e Embalagens'
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clientes que Confiam na GVN Telecom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas de diversos segmentos que escolheram nossas soluções de telefonia IP
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors">
                  <client.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-purple-600 font-medium">
                    {client.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Diversos Segmentos Atendidos
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Nossa experiência abrange empresas de todos os tamanhos e setores, 
              desde pequenos comércios até grandes corporações.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
                             <div>
                 <h4 className="text-lg font-semibold text-purple-600 mb-4">Setores Principais:</h4>
                 <ul className="space-y-2 text-gray-600">
                   <li>• Automotivo e Comércio de Veículos</li>
                   <li>• Bioenergia e Produção de Etanol</li>
                   <li>• Transporte e Armazenagem</li>
                   <li>• Construção e Materiais</li>
                   <li>• Distribuição e Comércio</li>
                   <li>• Equipamentos Industriais</li>
                 </ul>
               </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 mb-4">Benefícios para os Clientes:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Redução de custos operacionais</li>
                  <li>• Melhoria na comunicação</li>
                  <li>• Suporte técnico especializado</li>
                  <li>• Soluções personalizadas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;


