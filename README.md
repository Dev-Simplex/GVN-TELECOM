# GVN Telecom - Site Institucional

Site institucional da GVN Telecom (Serviço Global Voz Negócio) desenvolvido em React + TypeScript.

## 🚀 Funcionalidades

- **Página Principal** com apresentação dos serviços
- **Planos de Telefonia SIP** com 6 opções de linhas
- **Benefícios Exclusivos** da empresa
- **Formas de Pagamento** disponíveis
- **Contato Direto** via WhatsApp
- **Página Sobre Nós** com informações institucionais

## 📱 Fluxo de Contratação

O site não possui sistema de pagamento integrado. Todos os botões "Contratar Agora" redirecionam diretamente para o WhatsApp da empresa, onde o atendente fará o processo de contratação.

### Planos Disponíveis:
- **1 Linha:** R$ 100/mês + Adesão R$ 200
- **2 Linhas:** R$ 200/mês + Adesão R$ 400
- **3 Linhas:** R$ 240/mês + Adesão R$ 500
- **4 Linhas:** R$ 320/mês + Adesão R$ 600
- **6 Linhas:** R$ 420/mês + Adesão R$ 800
- **10 Linhas:** R$ 500/mês + Adesão R$ 1.000

### Serviços PABX Adicionais:
- **Ramal Adicional:** R$ 35/mês
- **Gravação:** R$ 30/linha
- **URA de Atendimento:** R$ 60/mês

## ⚙️ Configuração

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Número do WhatsApp
Edite o arquivo `src/utils/whatsapp.ts` e altere o número do WhatsApp:

```typescript
const phoneNumber = '556684222224'; // Número da GVN Telecom em Sinop - MT
```

### 3. Executar em Desenvolvimento
```bash
npm run dev
```

### 4. Build para Produção
```bash
npm run build
```

## 🛠️ Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- **ESLint** para linting

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── Benefits.tsx    # Benefícios da empresa
│   ├── Plans.tsx       # Planos de telefonia
│   ├── PaymentMethods.tsx # Formas de pagamento
│   ├── Contact.tsx     # Formulário de contato
│   ├── Footer.tsx      # Rodapé
│   └── CTASection.tsx  # Seção de call-to-action
├── pages/              # Páginas da aplicação
│   └── AboutPage.tsx   # Página sobre nós
├── utils/              # Utilitários
│   └── whatsapp.ts     # Funções do WhatsApp
├── App.tsx             # Componente principal
└── main.tsx           # Ponto de entrada
```

## 🎨 Design System

- **Cor Principal:** Roxo (purple-600, purple-700)
- **Cores Secundárias:** Cinza (gray-50, gray-900)
- **Acentos:** Verde (green-500), Azul (blue-600)
- **Design Responsivo:** Mobile-first

## 📞 Contato

Para suporte técnico ou dúvidas sobre o projeto, entre em contato com a equipe de desenvolvimento.

---

**GVN Telecom** - Serviço Global Voz Negócio
*Transformando a comunicação empresarial com tecnologia de ponta*
