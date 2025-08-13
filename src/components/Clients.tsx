import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    'catatau veiculos',
    'USINA RRP ENERGIA',
    'SUPERTEC',
    'Grupo Gás Lar',
    'GALEAO PNEUS',
    'INTERVIAS– Rodovia da Integração',
    'TRANSPORTES MARTINELLI',
    'PRIMUS MATERIAIS DE CONSTRUÇÃO',
    'TERRA WAY ARMAZENS GERAIS',
    'NUTRINORTE',
    'BRASIL PAPELARIA'
  ];

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Clientes Atendidos
          </h2>
          <p className="mt-3 text-gray-600">
            Algumas empresas que confiam na GVN Telecom
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((name) => (
            <div
              key={name}
              className="p-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-sm transition-colors"
            >
              <div className="text-gray-900 font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;


