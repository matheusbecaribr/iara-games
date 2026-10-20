# Iara Games — Documentação Oficial | Sprint 02
**Curso:** Análise e Desenvolvimento de Sistemas / Tecnologia — FIAP  
**Projeto:** Iara Games — Plataforma e Hub de Jogos Independentes Brasileiros  
**Fase:** Sprint 02  

---

## 1. Visão Geral e Evolução do Projeto (Sprint 01 para Sprint 02)

Na Sprint 01, o projeto da **Iara Games** foi iniciado com uma proposta conceitual: ser uma plataforma digital voltada a dar visibilidade e centralizar o ecossistema de games independentes desenvolvidos no Brasil. Naquela primeira entrega, tínhamos uma estrutura introdutória, focada nas primeiras telas e na definição da identidade visual básica.

Para a **Sprint 02**, o projeto deu um salto significativo de maturidade em todas as frentes:
- **Foco centrado no usuário:** Mapeamos uma persona sólida, entendendo a fundo quem consome jogos nacionais e quais são seus hábitos e dificuldades.
- **Expansão e arquitetura das páginas:** Saímos de uma landing page inicial para um ecossistema completo e navegável com 6 telas interligadas:
  1. `index.html` (Home reformulada com carrossel dinâmico, destaques da semana, seções de lançamentos, nostalgia e dock lateral);
  2. `catalogo.html` (Loja/Catálogo com filtros laterais por gênero e faixa de preço, ordenação e busca em tempo real);
  3. `biblioteca.html` (Área do jogador com jogos instalados e em nuvem, métricas de horas jogadas e progresso de conquistas);
  4. `favoritos.html` (Área dedicada com divisão por abas entre jogos salvos da loja/lista de desejos e jogos favoritados da biblioteca pessoal);
  5. `login.html` (Autenticação com visual imersivo e feedback visual);
  6. `cadastro.html` (Formulário completo de criação de conta com validação e termos).
- **Refinamento de UI/UX:** Alinhamento milimétrico com o design do Figma, refinando o tema dark (`#020202`), acentos em verde neon (`#C0FF00`), tipografia balanceada (*Urbanist* e *Silkscreen*), menu lateral ergonômico (Dock) e o dropdown translúcido de perfil de usuário.
- **Boas práticas de código:** Código 100% semântico em HTML5, uso consistente de CSS Grid e Flexbox, modularidade nos arquivos de estilo e scripts limpos em Vanilla JavaScript.

---

## 2. Usuário e Contexto (Persona & ESG)

### 2.1 Persona Principal: Lucas "Kael" Oliveira

- **Idade:** 23 anos
- **Ocupação:** Estudante universitário e streamer casual de jogos indie
- **Localização:** Belo Horizonte, MG
- **Dispositivos que utiliza:** PC Gamer intermediário e notebook para estudos

#### Perfil e Comportamento
Lucas joga videogame desde a infância e tem grande carinho pela cultura pop e pelos jogos nacionais. Ele acompanha criadores de conteúdo de jogos independentes, mas sente que as grandes lojas globais (como Steam e Epic Games) colocam os jogos brasileiros "escondidos" atrás de blockbusters internacionais. Ele quer descobrir produções brasileiras de qualidade, apoiar financeiramente estúdios independentes locais e compartilhar essas descobertas com seus amigos.

#### Objetivos na Plataforma
- Encontrar rapidamente jogos brasileiros categorizados por gênero, preço e promoções.
- Ter uma biblioteca organizada que diferencie o que já está instalado no computador do que está salvo na nuvem.
- Salvar títulos em uma lista de favoritos/desejos para comprar no momento certo ou acompanhar atualizações.
- Sentir que a plataforma é um espaço cultural vivo, e não apenas um carrinho de compras genérico.

#### Dores e Frustrações
- Dificuldade para saber quais jogos foram realmente feitos por estúdios ou desenvolvedores brasileiros nas lojas tradicionais.
- Falta de espaço dedicado a eventos, festivais e lançamentos da cena nacional.
- Lojas poluídas visualmente, com excesso de informação irrelevante e interfaces pesadas.

---

### 2.2 Relação do Projeto com os Princípios ESG

A sigla **ESG** (*Environmental, Social and Governance*) foi incorporada como pilar estratégico na concepção da Iara Games:

| Pilar | Como a Iara Games aplica |
| :--- | :--- |
| **Environmental (Ambiental)** | • Plataforma de distribuição **100% digital**, eliminando completamente o desperdício de materiais físicos (discos ópticos, caixas plásticas, encartes em papel e transporte rodoviário/aéreo).<br>• Arquitetura web limpa e otimizada (HTML/CSS nativos sem frameworks pesados), reduzindo o processamento desnecessário do dispositivo do usuário e economizando energia. |
| **Social (Social)** | • **Democratização e apoio a desenvolvedores locais:** Criação de vitrine justa para estúdios independentes de todas as regiões do Brasil (Norte, Nordeste, Centro-Oeste, Sudeste e Sul).<br>• **Preservação e celebração da cultura brasileira:** Jogos com temáticas folclóricas, históricas, urbanas e regionais ganham protagonismo na interface.<br>• **Acessibilidade e inclusão:** Design com contraste adequado (WCAG AA), suporte a navegação por teclado, leitor de tela (atributos `aria-*`) e preços acessíveis em moeda local. |
| **Governance (Governança)** | • **Transparência e privacidade do usuário:** Painel de perfil com abas dedicadas e transparentes de "Privacidade", "Segurança" e "Histórico de compras", respeitando as diretrizes da LGPD (Lei Geral de Proteção de Dados).<br>• Relação ética e justa de repasse financeiro aos criadores de conteúdo e desenvolvedores parceiros da plataforma. |

---

## 3. Estrutura e Layout (HTML Semântico e CSS Grid)

### 3.1 HTML5 Semântico
Toda a plataforma foi estruturada respeitando a hierarquia semântica recomendada pela W3C:
- `<header class="topbar">`: Contém a identidade da marca, busca global, navegação principal e perfil do usuário.
- `<nav>`: Utilizado para a navegação primária superior, abas de categorias e o menu lateral flutuante (`aside.sidebar-dock`).
- `<main>`: Abriga o conteúdo principal de cada página, isolando-o de elementos de suporte fixos.
- `<section>`: Segmentação temática das páginas (ex: banner principal, prateleiras de lançamentos, blocos informativos).
- `<article>`: Cada card de jogo (`catalog-card`, `library-card`, `game-card`) é um artigo autônomo, contendo thumbnail, título, badges de status, informações de preço/plataforma e ações contextuais.
- `<aside>`: Utilizado tanto para as barras de filtros laterais (gênero, preço, status) quanto para o menu lateral flutuante direito.
- `<footer>`: Rodapé padronizado em todas as telas com divisor ornamental do projeto, links institucionais, redes sociais e formulário de newsletter.

### 3.2 CSS Grid e Flexbox
O layout combina Grid e Flexbox estrategicamente:
- **CSS Grid:**
  - Na grade de jogos da Loja/Catálogo (`grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))`), garantindo fluidez e responsividade automática em diferentes resoluções.
  - No grid de 4 colunas do rodapé institucional (`.footer-grid`).
  - No grid da Biblioteca e dos Favoritos, adaptando cards dinamicamente entre os modos Grade (Grid) e Lista (List).
- **CSS Flexbox:**
  - Utilizado no alinhamento da barra superior (`topbar-inner`), nos carrosséis horizontais com rolagem suave (`shelf-track`), no menu lateral em cápsula (`sidebar-dock`) e nos agrupamentos de botões de ação rápida.

---

## 4. Formulários, Usabilidade e Acessibilidade

Na Sprint 02, foram desenvolvidos e refinados múltiplos formulários funcionais no front-end:

### 4.1 Formulários Desenvolvidos
1. **Formulário de Login (`login.html`):**
   - Campos: E-mail e Senha.
   - Recursos: Opção "Lembrar de mim", link de recuperação "Esqueci minha senha", botão primário de acesso e redirecionamento para novo cadastro.
2. **Formulário de Cadastro (`cadastro.html`):**
   - Campos: Nome completo, E-mail, Senha, Confirmação de senha e Checkbox de aceite dos Termos de Uso e Política de Privacidade.
   - Recursos: Validação de campos obrigatórios (`required`), tipos semânticos (`type="email"`, `type="password"`) e feedback em tela.
3. **Formulário de Newsletter (no Rodapé de todas as páginas):**
   - Campo para captação de e-mail de novidades e promoções com botão de inscrição e aviso de confirmação.
4. **Campos de Busca e Filtros:**
   - Barra de busca global no cabeçalho superior (`role="search"`).
   - Busca em tempo real e filtros de gênero/plataforma nas páginas de Catálogo, Biblioteca e Favoritos.

### 4.2 Cuidados de Usabilidade e Acessibilidade
- **Sem Dependência de Back-end:** Toda a experiência foi simulada no front-end com comportamentos em JavaScript nativo (validações, limpezas de input, notificações flutuantes *toast* e transições visuais).
- **Acessibilidade (a11y):**
  - Associação clara entre `label` e `input`.
  - Atributos `aria-label`, `aria-haspopup` e `aria-expanded` nos botões interativos e no dropdown de usuário.
  - Alto contraste entre textos claros (`#FFFFFF` e `#C0FF00`) e o fundo profundo (`#020202`), atendendo aos critérios da WCAG 2.1 nível AA.
  - Foco visível nos inputs e botões para navegação por teclado (`:focus-visible`).

---

## 5. UI, UX e Decisões de Design (Design Thinking)

### 5.1 Decisões Visuais (UI)
- **Dark Theme Futurista & Imersivo:** Fundo em `#020202` reduz o cansaço visual em sessões longas de uso e destaca a arte vibrante das capas dos jogos.
- **Verde Neon (`#C0FF00`):** Cor de destaque que une a tecnologia futurista (estilo cyberpunk) com a identidade da Iara e das matas brasileiras.
- **Tipografia:** 
  - *Urbanist:* Família sem serifa limpa, legível e moderna, usada em títulos, menus, descrições e botões.
  - *Silkscreen:* Fonte pixelada/arcade utilizada em detalhes seletos para evocar a nostalgia dos videogames clássicos.
- **Glassmorphism e Profundidade:** Menus flutuantes, cards e o dropdown de usuário utilizam `backdrop-filter: blur()`, bordas translúcidas e sombras suaves para criar camadas hierárquicas claras sem poluir a visão.

### 5.2 Decisões de Experiência do Usuário (UX)
- **Menu Lateral Flutuante (Dock):** Posicionado ergonomicamente à direita, permite navegar entre Início, Catálogo, Favoritos e Biblioteca com apenas um clique a partir de qualquer ponto da aplicação.
- **Alternador de Visualização (Grade / Lista):** Oferece flexibilidade tanto para usuários que preferem ver as capas em tamanho grande quanto para aqueles que preferem listas compactas com dados técnicos.
- **Dropdown do Menu do Usuário:** Inspirado nos melhores launchers modernos (Steam, Epic, Xbox), reúne perfil, status online, privacidade, segurança, histórico e logout em um único local intuitivo.

---

## 6. Links e Informações de Entrega

- **Repositório Público no GitHub:** `[INSERIR_LINK_DO_SEU_REPOSITORIO_GITHUB]`
- **Vídeo-Pitch no YouTube / Drive:** `[INSERIR_LINK_DO_SEU_VIDEO_PITCH]`
- **Integrantes do Grupo:**
  - Matheus Becari — RM: `[INSERIR_RM]`
  - `[Nome do Integrante]` — RM: `[INSERIR_RM]`
  - `[Nome do Integrante]` — RM: `[INSERIR_RM]`
