# 🏥 ClinicAgenda

**ClinicAgenda** é um sistema web completo e moderno para **agendamento de consultas médicas**, desenvolvido com as mais recentes tecnologias do ecossistema React/Next.js. O objetivo do projeto é oferecer uma plataforma intuitiva e robusta onde clínicas médicas tenham controle total sobre seus agendamentos, pacientes, profissionais de saúde e assinaturas.

---

## ✨ Funcionalidades Principais

### 📅 **Gestão de Agendamentos**

- Criação, edição e cancelamento de consultas
- Visualização em calendário interativo
- Controle de disponibilidade por médico
- Notificações e lembretes automáticos

### 🧑‍⚕️ **Gestão de Profissionais**

- Cadastro completo de médicos e especialidades
- Gerenciamento de horários de trabalho
- Perfis detalhados com informações profissionais

### 👥 **Gestão de Pacientes**

- Cadastro completo de pacientes
- Histórico de consultas
- Informações de contato e médicas

### 🏢 **Administração da Clínica**

- Painel administrativo com métricas
- Configurações gerais da clínica
- Relatórios e análises

### 💳 **Sistema de Assinaturas**

- Integração completa com Stripe
- Planos de assinatura flexíveis
- Portal do cliente para gerenciar assinaturas
- Webhooks automáticos para sincronização

### 🎨 **Interface Moderna**

- Design responsivo e acessível
- Tema escuro/claro com persistência
- Componentes interativos e animados
- Experiência de usuário otimizada

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**

- **[React 19](https://react.dev)** - Biblioteca para interfaces de usuário
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem tipada
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário

### **Componentes UI**

- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos acessíveis
- **[shadcn/ui](https://ui.shadcn.com/)** - Biblioteca de componentes
- **[Lucide React](https://lucide.dev/)** - Ícones SVG
- **[Class Variance Authority](https://cva.style/)** - Utilitário para variantes CSS

### **Formulários e Validação**

- **[React Hook Form](https://react-hook-form.com/)** - Biblioteca para formulários performáticos
- **[Zod](https://zod.dev/)** - Schema de validação TypeScript-first
- **[@hookform/resolvers](https://react-hook-form.com/get-started#SchemaValidation)** - Integrações de validação

### **Banco de Dados e ORM**

- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first
- **[Drizzle Kit](https://orm.drizzle.team/docs/cli)** - CLI para migrações

### **Autenticação e Segurança**

- **[Better Auth](https://www.npmjs.com/package/better-auth)** - Sistema de autenticação
- **[Next Safe Action](https://github.com/theodo/next-safe-action)** - Server Actions seguros

### **Pagamentos**

- **[Stripe](https://stripe.com/)** - Processamento de pagamentos
- **[@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js)** - SDK JavaScript do Stripe

### **Gerenciamento de Estado e Dados**

- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado de servidor
- **[TanStack Table](https://tanstack.com/table)** - Tabelas poderosas e flexíveis
- **[Nuqs](https://nuqs.47ng.com/)** - State management para URL search params

### **Utilitários**

- **[Day.js](https://day.js.org/)** - Manipulação de datas
- **[Date-fns](https://date-fns.org/)** - Utilitários para datas
- **[React Day Picker](https://react-day-picker.js.org/)** - Seletor de datas
- **[React Number Format](https://s-yadav.github.io/react-number-format/)** - Formatação de números
- **[Recharts](https://recharts.org/)** - Gráficos para React
- **[Sonner](https://sonner.emilkowal.ski/)** - Notificações toast elegantes
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas

### **Ferramentas de Desenvolvimento**

- **[ESLint](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formatador de código
- **[Prettier Plugin TailwindCSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** - Formatação de classes Tailwind

---

## 🚀 Instalação e Execução

### **Pré-requisitos**

- **Node.js** ≥ 18.x
- **PostgreSQL** ≥ 14.x
- **npm** ou **yarn**
- **Stripe CLI** (para desenvolvimento com webhooks)

### **1. Clone o Repositório**

```bash
git clone https://github.com/Kadockh/projeto-clinica-agendamentos
cd projeto-clinica-agendamentos
```

### **2. Instale as Dependências**

```bash
npm install
# ou
yarn install
```

### **3. Configure o Banco de Dados**

Certifique-se de que o PostgreSQL está rodando e crie um banco de dados:

```sql
CREATE DATABASE clinicagenda;
```

### **4. Configure as Variáveis de Ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Banco de Dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/clinicagenda"

# Better Auth
BETTER_AUTH_SECRET="seu-secret-key-super-seguro-aqui"
BETTER_AUTH_URL="http://localhost:3000"

# Stripe (Desenvolvimento)
STRIPE_SECRET_KEY="sk_test_sua_chave_secreta_stripe"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_sua_chave_publica_stripe"
STRIPE_WEBHOOK_SECRET="whsec_sua_chave_webhook_stripe"
STRIPE_ESSENTIAL_PLAN_PRICE_ID="price_id_do_plano_essencial"
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL="https://billing.stripe.com/p/login/test_sua_url"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### **5. Execute as Migrações do Banco**

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

### **6. Inicie o Servidor de Desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:3000`

---

## 🔧 Configuração do Stripe e Webhooks

### **1. Configurar Conta Stripe**

1. Crie uma conta no [Stripe Dashboard](https://dashboard.stripe.com/)
2. Acesse **Developers > API Keys**
3. Copie suas chaves de teste (começam com `pk_test_` e `sk_test_`)

### **2. Criar Produtos e Preços**

1. No Stripe Dashboard, vá em **Products**
2. Crie um produto (ex: "Plano Essencial")
3. Adicione um preço recorrente
4. Copie o Price ID (começar com `price_`)

### **3. Configurar Portal do Cliente**

1. Acesse **Settings > Billing > Customer Portal**
2. Ative o portal e configure as opções desejadas
3. Copie a URL do portal

### **4. Instalar e Configurar Stripe CLI**

```bash
# Instalar Stripe CLI
# No Windows (usando Chocolatey)
choco install stripe-cli

# No macOS (usando Homebrew)
brew install stripe/stripe-cli/stripe

# No Linux
wget -O - https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
sudo apt update
sudo apt install stripe
```

### **5. Configurar Webhooks Localmente**

```bash
# Login no Stripe CLI
stripe login

# Encaminhar eventos para sua aplicação local
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Este comando irá:

- Mostrar seu webhook signing secret (começa com `whsec_`)
- Encaminhar todos os eventos Stripe para seu endpoint local

Copie o `webhook signing secret` e adicione ao seu `.env.local`.

### **6. Testar Webhooks**

Em outro terminal, você pode simular eventos:

```bash
# Simular um pagamento bem-sucedido
stripe trigger payment_intent.succeeded

# Simular uma assinatura criada
stripe trigger customer.subscription.created

# Simular cancelamento de assinatura
stripe trigger customer.subscription.deleted
```

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build e Produção
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Linting e Formatação
npm run lint         # Executa ESLint

# Banco de Dados
npx drizzle-kit generate    # Gera migrações
npx drizzle-kit migrate     # Executa migrações
npx drizzle-kit studio      # Interface visual do banco
```

---

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # Rotas Next.js (App Router)
│   ├── (protected)/       # Rotas protegidas por autenticação
│   │   ├── appointments/  # Gestão de agendamentos
│   │   ├── doctors/       # Gestão de médicos
│   │   ├── patients/      # Gestão de pacientes
│   │   ├── dashboard/     # Painel principal
│   │   └── subscription/  # Gestão de assinaturas
│   ├── api/              # API Routes
│   │   └── stripe/       # Webhooks e integrações Stripe
│   └── auth/             # Páginas de autenticação
├── actions/              # Server Actions
├── components/           # Componentes reutilizáveis
├── db/                   # Schema e configuração do banco
├── lib/                  # Utilitários e configurações
├── hooks/                # Custom hooks
├── providers/            # Context providers
└── helpers/              # Funções auxiliares
```

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique se todas as variáveis de ambiente estão configuradas
2. Certifique-se de que o PostgreSQL está rodando
3. Verifique se o Stripe CLI está funcionando corretamente
4. Consulte os logs de erro no terminal

Para mais ajuda, abra uma issue no repositório do projeto.

---

**Desenvolvido com ❤️ usando as melhores práticas de desenvolvimento web moderno**
