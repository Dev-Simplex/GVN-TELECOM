# GVN Telecom - Site Institucional

Site institucional da GVN Telecom, empresa especializada em soluções de telefonia empresarial.

## Funcionalidades

- **Página Inicial** com seção hero e apresentação dos serviços
- **Planos de Telefonia Empresarial** com 6 opções de linhas
- **Seção de Serviços** com venda de aparelhos
- **Página Sobre Nós** com informações institucionais
- **Seção de Contato** com WhatsApp direto
- **Mapa de Cobertura** nacional
- **Design Responsivo** para todos os dispositivos

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (ícones)
- React Icons

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── Services.tsx    # Seção de serviços
│   ├── Plans.tsx       # Seção de planos
│   ├── Contact.tsx     # Seção de contato
│   ├── Footer.tsx      # Rodapé
│   └── ...
├── pages/              # Páginas completas
│   └── AboutPage.tsx   # Página Sobre Nós
├── utils/              # Utilitários
│   └── whatsapp.ts     # Funções do WhatsApp
└── main.tsx           # Ponto de entrada
```

## Configuração do WhatsApp

O site utiliza números de WhatsApp configurados em `src/utils/whatsapp.ts`:

```typescript
const phoneNumber = '556684222224'; // Número da GVN Telecom em Sinop - MT
```

## Instalação e Execução

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute em desenvolvimento: `npm run dev`
4. Build para produção: `npm run build`

## Deploy

O projeto está configurado para deploy em qualquer plataforma que suporte aplicações React estáticas.

## Contato

Para suporte técnico ou dúvidas sobre o projeto, entre em contato com a equipe de desenvolvimento.
