# 🎮 IARA GAMES — Plataforma de Jogos Independentes Brasileiros

<div align="center">
  <img src="assets/logo-iara.png" alt="Iara Games Logo" width="180">
  <p><strong>A vitrine definitiva para a produção indie nacional. Conectando jogadores e desenvolvedores brasileiros em um ecossistema moderno, acessível e culturalmente vibrante.</strong></p>
</div>

---

## 📌 Sobre o Projeto

A **Iara Games** é uma plataforma e hub digital focada exclusivamente no ecossistema de jogos independentes desenvolvidos no Brasil. O projeto nasceu da percepção de que a indústria nacional de games cria títulos de altíssimo nível criativo e técnico, mas sofre com a falta de visibilidade em lojas globais consolidadas (onde lançamentos de pequenos estúdios acabam ofuscados por produções bilionárias estrangeiras).

Batizada com o nome de uma das figuras mais emblemáticas do nosso folclore, a **Iara Games** une a mitologia e identidade brasileira a uma estética futurista, proporcionando aos gamers uma experiência rica de descoberta, compra, gerenciamento de biblioteca e acompanhamento de favoritos.

Este projeto é desenvolvido como parte integrante das atividades práticas da **FIAP** (Faculdade de Informática e Administração Paulista).

---

## 🎯 Objetivos da Sprint 02

Na **Sprint 02**, a plataforma evoluiu de uma landing page conceitual para uma aplicação web multipágina completa, estruturada e centrada nas necessidades reais do usuário:

- [x] **Definição de Persona:** Construção e mapeamento aprofundado do perfil de usuário da plataforma.
- [x] **Arquitetura e Semântica:** Código 100% semântico em HTML5 e organização com CSS Grid e Flexbox.
- [x] **Expansão de Páginas:** Desenvolvimento de 6 telas integradas (Início, Catálogo, Biblioteca, Favoritos, Login e Cadastro).
- [x] **Formulários e Usabilidade:** Formulários acessíveis, padronizados, com validações no front-end e foco em acessibilidade (a11y).
- [x] **Design System e UI/UX:** Refinamento visual completo alinhado ao protótipo do Figma, incluindo Dock lateral ergonômico e menu translúcido de usuário.
- [x] **Conexão com ESG:** Aplicação prática dos pilares Ambiental, Social e de Governança.

---

## 👤 Persona Principal

### **Lucas "Kael" Oliveira** (23 anos)
> *"Quero jogar e apoiar jogos feitos aqui no Brasil, mas nas lojas de fora eles ficam completamente escondidos."*

- **Perfil:** Estudante de Tecnologia em Jogos Digitais, residente em Belo Horizonte - MG. Joga no PC nas horas livres e gosta de compartilhar achados com a comunidade.
- **Objetivos:**
  - Descobrir produções independentes brasileiras de forma rápida, com filtros claros por gênero, faixa de preço e promoções.
  - Apoiar financeiramente os desenvolvedores e pequenos estúdios do país.
  - Gerenciar sua biblioteca pessoal distinguindo jogos instalados localmente de jogos armazenados em nuvem.
  - Manter uma lista de desejos organizada para compras futuras.
- **Dores:**
  - Lojas tradicionais não destacam a procedência nacional dos jogos.
  - Falta de curadoria voltada ao cenário independente BR.
  - Interfaces pesadas e com excesso de poluição visual.

---

## 🌱 Relação com os Valores ESG

A Iara Games foi desenhada considerando os impactos de sustentabilidade, inclusão e ética:

- **🌿 Environmental (Ambiental):**
  - **Distribuição 100% digital:** Redução a zero do consumo de mídias plásticas (Blu-ray/DVD), embalagens e caixas, além de eliminar as emissões de carbono do transporte e logística de entregas físicas.
  - **Eficiência de código:** Uso de HTML, CSS e Vanilla JS puros, sem frameworks pesados de terceiros, garantindo páginas leves e menor consumo energético no hardware do usuário.

- **🤝 Social (Social):**
  - **Fomento à economia criativa nacional:** Visibilidade equitativa para desenvolvedores de todas as regiões brasileiras, permitindo que estúdios fora do eixo tradicional mostrem seu trabalho.
  - **Identidade cultural:** Valorização de lendas, cenários, histórias e referências do Brasil dentro dos jogos em destaque.
  - **Acessibilidade e usabilidade:** Contraste visual certificado (WCAG 2.1 AA), tags de acessibilidade (`aria-*`), foco navegável por teclado e navegação simplificada.

- **⚖️ Governance (Governança):**
  - **Privacidade e LGPD:** Acesso facilitado aos controles de "Privacidade" e "Segurança" no menu de perfil do usuário.
  - **Transparência comercial:** Clareza sobre preços, descontos reais, histórico de compras e condições de uso.

---

## 🖥️ Páginas Desenvolvidas

| Página | Arquivo | Descrição |
| :--- | :--- | :--- |
| **Início (Home)** | [`index.html`](index.html) | Vitrine principal com banner dinâmico do Horizon Chase Senna Forever, destaques da semana, prateleiras com carrosséis horizontais (Lançamentos e Nostalgia BR) e painel lateral flutuante. |
| **Catálogo de Jogos** | [`catalogo.html`](catalogo.html) | Loja completa com barra de busca em tempo real, filtros laterais sanfonados por gênero e faixa de preço, ordenação e cards com botões de compra rápida. |
| **Minha Biblioteca** | [`biblioteca.html`](biblioteca.html) | Gestão da coleção do usuário com controle de jogos instalados vs. nuvem, métricas de horas jogadas, progresso percentual e conquistas desbloqueadas. |
| **Meus Favoritos** | [`favoritos.html`](favoritos.html) | Hub unificado de jogos favoritados com abas de separação entre jogos da biblioteca e jogos da lista de desejos da loja, com suporte a visualização em Grade ou Lista. |
| **Entrar (Login)** | [`login.html`](login.html) | Tela de autenticação estilizada com background temático, campos com validação e recuperação de senha. |
| **Criar Conta (Cadastro)** | [`cadastro.html`](cadastro.html) | Formulário de criação de conta com confirmação de credenciais e aceite dos termos da plataforma. |

---

## 🎨 UI/UX e Design System

- **Paleta de Cores:**
  - Fundo principal: `#020202` (Deep Dark, proporciona imersão e descanso visual).
  - Acento neon: `#C0FF00` (Verde Neon vibrante, inspirado na bioenergia das florestas e na estética cyberpunk).
  - Superfícies de apoio: Glassmorphism com `backdrop-filter: blur()` e contornos sutis de 1px.
- **Tipografia:**
  - **Urbanist:** Tipografia sem serifa geométrica utilizada para toda a leitura contínua, botões, formulários e títulos.
  - **Silkscreen:** Tipografia estilo pixel art empregada em tags selecionadas para criar o clima nostálgico dos fliperamas.
- **Dock Lateral Flutuante:** Menu ergonômico fixo à direita para acesso veloz com 1 clique a qualquer seção do aplicativo.
- **Menu do Usuário:** Painel retrátil translúcido no canto superior direito que exibe dados de perfil, status de conexão, privacidade, segurança, histórico e logout.

---

## 📋 Formulários e Práticas de Front-End

Todos os formulários contam com cuidados de acessibilidade e usabilidade:
- **Labels associados** explicitamente aos seus respectivos campos.
- **Tipagem semântica** (`type="email"`, `type="password"`, `type="search"`).
- **Validação nativa** com atributo `required` e feedbacks visuais em hover/focus.
- **Simulação 100% client-side** (sem dependência de servidor ou banco de dados para rodar a demonstração).

---

## 🚀 Como Executar o Projeto Localmente

Como o projeto foi construído puramente com **HTML5, CSS3 e JavaScript nativo**, você não precisa instalar o Node.js nem gerenciar dependências:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/iara-games.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd iara-games/code
   ```

3. **Abra no navegador:**
   - Basta dar um duplo clique no arquivo `index.html`, ou
   - Utilizar a extensão **Live Server** no VS Code / IDE de sua preferência para ter atualização automática.

---

## 📁 Estrutura de Arquivos

```plaintext
iara-games/
├── assets/                  # Imagens, capas de jogos, banners e logos oficiais
├── index.html               # Página inicial (Home)
├── catalogo.html            # Loja e catálogo de jogos
├── biblioteca.html          # Biblioteca de jogos do usuário
├── favoritos.html           # Lista de favoritos e desejos
├── login.html               # Tela de login
├── cadastro.html            # Tela de cadastro
├── style.css                # Design system global e estilos compartilhados
├── catalogo.css             # Estilos específicos da loja e filtros
├── biblioteca.css           # Estilos da biblioteca de jogos
├── favoritos.css            # Estilos da área de favoritos
├── login.css                # Estilos da tela de login
├── cadastro.css             # Estilos da tela de cadastro
├── script.js                # Scripts da home e menu do usuário
├── catalogo.js              # Filtros dinâmicos e busca da loja
├── favoritos.js             # Gerenciamento de abas e remoção de favoritos
├── DOCUMENTACAO_SPRINT2.md  # Relatório detalhado para envio do PDF à FIAP
└── README.md                # Apresentação do repositório
```

---

## 👥 Integrantes do Grupo

- **Matheus Becari** — *RM: [INSERIR_RM]*
- *[Nome do Integrante]* — *RM: [INSERIR_RM]*
- *[Nome do Integrante]* — *RM: [INSERIR_RM]*

---

## 🎥 Vídeo de Apresentação (Pitch)

- **Link do Vídeo:** `[INSERIR_LINK_DO_SEU_VIDEO_PITCH]`  
*(Vídeo pitch demonstrando o que foi projetado, construído e os avanços da Sprint 01 para a Sprint 02).*
