# Site institucional para cirurgião-dentista

Landing page profissional criada em React + TypeScript com foco em conversão para agendamento por WhatsApp, apresentação da formação e áreas de atuação, além de reforçar a confiança em um consultório odontológico.
## Prévia do projeto

![Site profissional do Dr. José Artur — versões clara e escura](./public/preview-site-dr-jose-artur.png)

## Visão geral

Este projeto é uma landing page moderna e responsiva para um profissional da odontologia. A estrutura foi pensada para:

- destacar a autoridade profissional e a abordagem humana;
- apresentar especialidades e diferenciais de atendimento;
- incluir depoimentos e conquistas;
- facilitar o contato direto com o paciente via WhatsApp;
- manter o conteúdo centralizado e fácil de personalizar.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS moderno
- Lucide React para ícones
- HTML semântico

## Requisitos

Antes de iniciar, verifique se o ambiente possui:

- Node.js 18+
- npm ou pnpm/yarn

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd website-cirurgiao-dentista
npm install
```

## Executando em desenvolvimento

Inicie o servidor local:

```bash
npm run dev
```

A aplicação será iniciada em modo de desenvolvimento, geralmente em:

```text
http://localhost:5173
```

## Build de produção

Para gerar a versão otimizada para publicação:

```bash
npm run build
```

O resultado será gerado na pasta `dist`.

## Estrutura do projeto

```text
website-cirurgiao-dentista/
├── index.html                 # Metadados HTML, título e configuração do documento
├── package.json               # Dependências e scripts do projeto
├── public/                    # Arquivos públicos estáticos
│   └── dente.svg              # Ícone do brand
├── src/
│   ├── App.tsx                # Estrutura principal da página e conteúdo configurável
│   ├── main.tsx               # Inicialização da aplicação React
│   ├── styles.css             # Estilos globais e responsividade
│   ├── types.ts               # Tipos de conteúdo usados no site
│   └── components/
│       ├── BotaoWhatsApp.tsx  # Botão flutuante do WhatsApp
│       ├── Cabecalho.tsx      # Header responsivo com navegação
│       ├── CarrosselConquistas.tsx  # Carrossel de conquistas
│       └── TituloSecao.tsx     # Componente reutilizável para títulos de seção
├── tsconfig.json              # Configuração principal do TypeScript
├── tsconfig.app.json          # Configuração do app
├── tsconfig.node.json         # Configuração do Vite/Node
├── vite.config.ts             # Configuração do Vite
├── README.md                  # Documentação do projeto
└── .gitignore                 # Arquivos ignorados pelo Git
```

## Como personalizar o conteúdo

A maior parte do conteúdo editável fica no início do arquivo `src/App.tsx`.

### 1. Dados do profissional

No objeto `siteConfig`, você pode ajustar:

- nome do profissional
- profissão e especialidade
- CRO/registro
- número do WhatsApp
- mensagem padrão do WhatsApp
- telefone
- e-mail
- Instagram
- endereço
- link do Google Maps
- horário de atendimento
- imagens de destaque

Exemplo:

```ts
const siteConfig = {
  professionalName: 'José Artur Cirurgião Dentista',
  shortName: 'José Artur Cirurgião Dentista',
  profession: 'Cirurgião-Dentista',
  specialty: 'Implantodontia e Estética',
  registration: 'CRO/UF 00000',
  whatsappNumber: '5581994633645',
  whatsappMessage: 'Olá, Dr. Artur! Gostaria de agendar uma consulta.',
  phone: '(81) 99999-9999',
  email: 'contato@drartur.com',
  instagram: '@drartur',
  address: 'Clínica Seu Dentista, Belo Jardim - PE',
  mapLink: 'https://www.google.com/maps/…',
  hours: 'Seg a Sex, 8h às 18h',
  heroImage: 'https://…',
  portraitImage: 'https://…',
};
```

### 2. Especialidades

O array `specialties` controla as áreas de atuação exibidas na seção de especialidades.

```ts
const specialties: Specialty[] = [
  { number: '01', title: 'Implantodontia', description: '...' },
  { number: '02', title: 'Estética Dental', description: '...' },
];
```

### 3. Conquistas e formações

O array `achievements` alimenta o carrossel de conquistas profissionais.

Cada item contém:

- `title`
- `institution`
- `year`
- `description`
- `image`

### 4. Depoimentos

O array `testimonials` é usado para exibir relatos de pacientes e pode ser atualizado com depoimentos reais.

### 5. Metadados e SEO

Os metadados do site, como título e descrição, ficam em `index.html`.

Você pode ajustar:

- title da página
- meta description
- Open Graph
- favicon e outras configurações do documento

## Personalização visual

A identidade visual principal da landing page está em `src/styles.css`.

Nessa área é possível alterar:

- paleta de cores
- tipografia
- espaçamentos
- layout em mobile/desktop
- estilos de botões, seções e cards

## Funcionalidades principais

- navegação interna por âncoras
- header responsivo com menu mobile
- botão flutuante de WhatsApp
- carrossel de conquistas com interação por teclado e navegação por setas
- CTAs para agendamento
- design pensado para conversão e confiança

## Deploy

A aplicação foi criada com Vite e pode ser publicada em qualquer serviço de hospedagem estática, como:

- Vercel
- Netlify
- GitHub Pages
- qualquer provedor que sirva arquivos da pasta `dist`

### Processo de publicação

1. Execute:

```bash
npm run build
```

2. Publique o conteúdo da pasta `dist` no serviço escolhido.

3. Configure domínio e HTTPS, se necessário.

## Observações importantes

- O número do WhatsApp deve estar no formato internacional, com apenas números e código do país + DDD.
- O link do WhatsApp é montado dinamicamente com `whatsappLink`.
- As imagens exibidas ficam em `public/`. Confirme que você tem autorização para publicar cada imagem antes do lançamento.
- O projeto foi desenvolvido como landing page institucional e pode ser ampliado com novas páginas, blog, formulário de contato e área administrativa.

## Próximos passos recomendados

Antes de publicar em produção, vale revisar:

- textos reais do profissional
- endereço e horários completos
- número de WhatsApp válido
- e-mail profissional
- imagens autorizadas
- SEO e Open Graph
- link do Google Maps correto

## Contribuição

Se você for colaborar com o projeto:

1. crie uma branch;
2. faça as alterações;
3. valide o build;
4. envie um pull request com descrição clara das mudanças.

## Licença

Sem licença definida no momento. Caso queira utilizar este projeto em produção, confirme a política de uso das imagens e textos antes de publicar.
