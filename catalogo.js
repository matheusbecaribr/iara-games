// ==========================================================================
// IARA GAMES — Catálogo Completo de Jogos Brasileiros (catalogo.js)
// Dados oficiais, filtros dinâmicos, busca em tempo real e ordenação
// ==========================================================================

const CATALOG_GAMES = [
  {
    id: 'fobia',
    title: 'Fobia: St. Dinfna Hotel',
    dev: 'Pulsatrix Studios',
    genre: ['horror', 'rpg', 'adventure'],
    systems: ['windows'],
    launchers: ['steam', 'epic', 'ps', 'xbox'],
    price: 56.00,
    cutPrice: 116.00,
    priceFormatted: 'R$ 56,00',
    cutPriceFormatted: 'R$ 116,00',
    discount: '-52%',
    discountVal: 52,
    releaseYear: 2022,
    popularity: 98,
    img: 'assets/game-fobia-hd.png',
    platforms: ['windows', 'playstation', 'xbox']
  },
  {
    id: 'dandy',
    title: 'Dandy Ace',
    dev: 'Mad Mimic',
    genre: ['roguelike', 'rpg', 'action'],
    systems: ['windows', 'mac'],
    launchers: ['steam', 'switch', 'xbox'],
    price: 69.90,
    cutPrice: 149.80,
    priceFormatted: 'R$ 69,90',
    cutPriceFormatted: 'R$ 149,80',
    discount: '-45%',
    discountVal: 45,
    releaseYear: 2021,
    popularity: 95,
    img: 'assets/game-dandy-hd.png',
    platforms: ['windows', 'apple', 'xbox']
  },
  {
    id: 'dandara',
    title: 'Dandara: Trials of Fear',
    dev: 'Long Hat House',
    genre: ['adventure', 'platformer', 'action'],
    systems: ['windows', 'mac', 'linux'],
    launchers: ['steam', 'epic', 'switch', 'ps'],
    price: 46.69,
    cutPrice: null,
    priceFormatted: 'R$ 46,69',
    cutPriceFormatted: null,
    discount: null,
    discountVal: 0,
    releaseYear: 2018,
    popularity: 92,
    img: 'assets/game-dandara-hd.png',
    platforms: ['windows', 'apple', 'linux']
  },
  {
    id: 'pocket',
    title: 'Pocket Bravery',
    dev: 'Starlight Studios',
    genre: ['fighting', 'action'],
    systems: ['windows'],
    launchers: ['steam', 'ps', 'xbox'],
    price: 35.69,
    cutPrice: null,
    priceFormatted: 'R$ 35,69',
    cutPriceFormatted: null,
    discount: null,
    discountVal: 0,
    releaseYear: 2023,
    popularity: 89,
    img: 'assets/game-pocket-hd.png',
    platforms: ['windows', 'playstation', 'xbox']
  },
  {
    id: 'blazing',
    title: 'Blazing Chrome',
    dev: 'JoyMasher',
    genre: ['action', 'shooter', 'indie'],
    systems: ['windows', 'mac', 'linux'],
    launchers: ['steam', 'gog', 'ps', 'switch', 'xbox'],
    price: 24.99,
    cutPrice: 37.99,
    priceFormatted: 'R$ 24,99',
    cutPriceFormatted: 'R$ 37,99',
    discount: '-35%',
    discountVal: 35,
    releaseYear: 2019,
    popularity: 94,
    img: 'assets/game-blazing-hd.png',
    platforms: ['windows', 'apple', 'linux']
  },
  {
    id: 'dolmen',
    title: 'Dolmen',
    dev: 'Massive Work Studio',
    genre: ['rpg', 'action', 'sci-fi'],
    systems: ['windows'],
    launchers: ['steam', 'ps', 'xbox'],
    price: 79.90,
    cutPrice: 139.90,
    priceFormatted: 'R$ 79,90',
    cutPriceFormatted: 'R$ 139,90',
    discount: '-40%',
    discountVal: 40,
    releaseYear: 2022,
    popularity: 88,
    img: 'assets/card-dolmen-hd.png',
    platforms: ['windows', 'playstation', 'xbox']
  },
  {
    id: '99vidas',
    title: '99Vidas: O Jogo',
    dev: 'QUByte Interactive',
    genre: ['fighting', 'action', 'casual'],
    systems: ['windows', 'mac', 'linux'],
    launchers: ['steam', 'ps', 'xbox', 'switch'],
    price: 19.99,
    cutPrice: 39.99,
    priceFormatted: 'R$ 19,99',
    cutPriceFormatted: 'R$ 39,99',
    discount: '-50%',
    discountVal: 50,
    releaseYear: 2016,
    popularity: 87,
    img: 'assets/card-99vidas-hd.png',
    platforms: ['windows', 'apple', 'linux']
  },
  {
    id: 'hazel',
    title: 'Hazel Sky',
    dev: 'Coffee Addict Studio',
    genre: ['adventure', 'indie'],
    systems: ['windows'],
    launchers: ['steam', 'epic', 'ps', 'xbox', 'switch'],
    price: 39.90,
    cutPrice: null,
    priceFormatted: 'R$ 39,90',
    cutPriceFormatted: null,
    discount: null,
    discountVal: 0,
    releaseYear: 2022,
    popularity: 82,
    img: 'assets/card-hazel-hd.png',
    platforms: ['windows', 'playstation', 'xbox']
  },
  {
    id: 'chroma',
    title: 'Chroma Squad',
    dev: 'Behold Studios',
    genre: ['strategy', 'rpg', 'indie'],
    systems: ['windows', 'mac', 'linux'],
    launchers: ['steam', 'gog', 'ps', 'xbox', 'switch'],
    price: 27.99,
    cutPrice: 39.99,
    priceFormatted: 'R$ 27,99',
    cutPriceFormatted: 'R$ 39,99',
    discount: '-30%',
    discountVal: 30,
    releaseYear: 2015,
    popularity: 96,
    img: 'assets/cover-chroma.jpg',
    platforms: ['windows', 'apple', 'linux']
  },
  {
    id: 'unsighted',
    title: 'Unsighted',
    dev: 'Studio Pixel Punk',
    genre: ['rpg', 'action', 'adventure'],
    systems: ['windows'],
    launchers: ['steam', 'xbox', 'ps', 'switch'],
    price: 44.99,
    cutPrice: 56.99,
    priceFormatted: 'R$ 44,99',
    cutPriceFormatted: 'R$ 56,99',
    discount: '-20%',
    discountVal: 20,
    releaseYear: 2021,
    popularity: 97,
    img: 'assets/cover-unsighted.jpg',
    platforms: ['windows', 'playstation', 'xbox']
  },
  {
    id: 'kaze',
    title: 'Kaze and the Wild Masks',
    dev: 'PixelHive',
    genre: ['platformer', 'adventure', 'casual'],
    systems: ['windows', 'mac'],
    launchers: ['steam', 'xbox', 'ps', 'switch'],
    price: 32.50,
    cutPrice: 50.00,
    priceFormatted: 'R$ 32,50',
    cutPriceFormatted: 'R$ 50,00',
    discount: '-35%',
    discountVal: 35,
    releaseYear: 2021,
    popularity: 91,
    img: 'assets/cover-kaze.jpg',
    platforms: ['windows', 'apple', 'xbox']
  },
  {
    id: 'dodgeball',
    title: 'Dodgeball Academia',
    dev: 'Pocket Trap',
    genre: ['sports', 'rpg', 'casual'],
    systems: ['windows'],
    launchers: ['steam', 'xbox', 'ps', 'switch'],
    price: 59.90,
    cutPrice: 79.90,
    priceFormatted: 'R$ 59,90',
    cutPriceFormatted: 'R$ 79,90',
    discount: '-25%',
    discountVal: 25,
    releaseYear: 2021,
    popularity: 93,
    img: 'assets/cover-dodgeball.jpg',
    platforms: ['windows', 'playstation', 'xbox']
  }
];

// SVGs para ícones de plataforma nos cards
const SVGS = {
  windows: `<svg viewBox="0 0 24 24" title="Windows"><path d="M3 5l8-1v8H3zM12 4l9-1v9h-9zM3 13h8v7l-8-1zM12 13h9v8l-9-1z"/></svg>`,
  apple: `<svg viewBox="0 0 24 24" title="macOS"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.87.94-2.96-1 .04-2.13.67-2.79 1.45-.58.67-1.09 1.77-.95 2.84 1.12.09 2.18-.55 2.8-1.33z"/></svg>`,
  linux: `<svg viewBox="0 0 24 24" title="Linux"><path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.2.5 2.2 1.3 3-.3.8-.8 2.3-.8 4.5 0 2.8 1.5 5 4 5s4-2.2 4-5c0-2.2-.5-3.7-.8-4.5.8-.8 1.3-1.8 1.3-3C16.5 4 14.5 2 12 2z"/></svg>`,
  playstation: `<svg viewBox="0 0 24 24" title="PlayStation"><path d="M9 3l5 1.6c2 .7 3 2 3 4 0 2.4-1.6 3.2-3.4 2.5V5.5c0-.6-.3-1-.8-1.1-.4-.1-.6.3-.6.8V20l-3.2-1zM3 17.4c-1.2-.8-.4-1.9 1.5-2.6L9 13.2v2.2l-3.4 1.2c-.6.2-.7.6-.2.7.5.2 1.4.1 2-.1l1.6-.6v2c-2.3.6-4.6.4-6-.2zM13 16.5l4.2-1.5c1.5-.5 3.5-.3 3.8.6.3.8-.6 1.6-2 2.1L13 19.8v-2.2l4.6-1.6c.6-.2.7-.6.2-.7-.5-.2-1.4-.1-2 .1l-2.8 1z"/></svg>`,
  xbox: `<svg viewBox="0 0 24 24" title="Xbox"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 6c3 2 5 5 5 6 0-1 2-4 5-6M6 18c2-4 4-6 6-7 2 1 4 3 6 7" stroke="currentColor" stroke-width="2" fill="none"/></svg>`
};

// Estado da Aplicação
const state = {
  searchQuery: '',
  activeGenre: 'all',
  activeSystem: 'any',
  activeLauncher: 'all',
  maxPrice: 150,
  sortBy: 'popularity',
  viewMode: 'grid'
};

// Elementos DOM
const catalogGrid = document.getElementById('catalog-games-grid');
const countBadge = document.getElementById('catalog-count-badge');
const searchInput = document.getElementById('catalog-search-input');
const clearSearchBtn = document.getElementById('catalog-clear-search');
const priceSlider = document.getElementById('price-slider');
const priceMaxLabel = document.getElementById('price-max-label');
const emptyState = document.getElementById('catalog-empty-state');
const resetFiltersBtn = document.getElementById('catalog-reset-filters');
const btnGridView = document.getElementById('btn-grid-view');
const btnListView = document.getElementById('btn-list-view');
const sortTrigger = document.getElementById('sort-dropdown-trigger');
const sortWrap = document.getElementById('sort-dropdown-wrap');
const sortLabel = document.getElementById('current-sort-label');
const chipSystemAny = document.getElementById('chip-system-any');

// Renderiza os Cards de Jogos
function renderGames() {
  let filtered = CATALOG_GAMES.filter(game => {
    // 1. Busca por texto
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = game.title.toLowerCase().includes(q);
      const matchDev = game.dev.toLowerCase().includes(q);
      if (!matchTitle && !matchDev) return false;
    }

    // 2. Filtro por Gênero
    if (state.activeGenre !== 'all') {
      if (!game.genre.includes(state.activeGenre)) return false;
    }

    // 3. Filtro por Sistema Operacional
    if (state.activeSystem !== 'any') {
      if (!game.systems.includes(state.activeSystem)) return false;
    }

    // 4. Filtro por Launcher / Plataforma
    if (state.activeLauncher !== 'all') {
      if (!game.launchers.includes(state.activeLauncher)) return false;
    }

    // 5. Filtro de Preço
    if (game.price > state.maxPrice) {
      return false;
    }

    return true;
  });

  // Ordenação
  filtered.sort((a, b) => {
    switch (state.sortBy) {
      case 'popularity':
        return b.popularity - a.popularity;
      case 'release':
        return b.releaseYear - a.releaseYear;
      case 'az':
        return a.title.localeCompare(b.title);
      case 'za':
        return b.title.localeCompare(a.title);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'discount':
        return b.discountVal - a.discountVal;
      default:
        return 0;
    }
  });

  // Atualiza Contador
  countBadge.textContent = filtered.length.toLocaleString('pt-BR');

  // Exibição vazia ou cards
  if (filtered.length === 0) {
    catalogGrid.innerHTML = '';
    emptyState.style.display = 'flex';
    return;
  }

  emptyState.style.display = 'none';

  catalogGrid.innerHTML = filtered.map(game => {
    const platformsHtml = game.platforms.map(p => SVGS[p] || '').join('');
    return `
      <article class="catalog-card" data-id="${game.id}">
        <div class="catalog-card-thumb-wrap">
          <img src="${game.img}" alt="${game.title}" class="catalog-card-thumb" loading="lazy">
          <div class="catalog-card-hover-overlay">
            <button type="button" class="catalog-quick-btn btn-ver-mais" onclick="verMaisJogo('${game.id}')" aria-label="Ver mais sobre ${game.title}">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Ver mais
            </button>
            <button type="button" class="catalog-quick-btn btn-comprar" onclick="addToCart('${game.id}')" aria-label="Comprar ${game.title}">
              <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
              Comprar
            </button>
          </div>
        </div>
        <div class="catalog-card-info">
          <h3 class="catalog-card-title" title="${game.title}">${game.title}</h3>
          <div class="catalog-card-bottom">
            <div class="catalog-price-wrap">
              ${game.discount ? `<span class="catalog-discount-badge">${game.discount}</span>` : ''}
              ${game.cutPriceFormatted ? `<span class="catalog-cut-price">${game.cutPriceFormatted}</span>` : ''}
              <span class="catalog-current-price">${game.priceFormatted}</span>
            </div>
            <div class="catalog-platforms-row">
              ${platformsHtml}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Interação com Carrinho
window.addToCart = function(id) {
  const game = CATALOG_GAMES.find(g => g.id === id);
  const cartBadge = document.getElementById('cart-count');
  if (cartBadge) {
    const cur = parseInt(cartBadge.textContent || '0', 10);
    cartBadge.textContent = cur + 1;
    cartBadge.style.transform = 'scale(1.35)';
    setTimeout(() => { cartBadge.style.transform = 'scale(1)'; }, 200);
  }
};

// Interação Ver mais (Modal de detalhes do jogo)
window.verMaisJogo = function(id) {
  const game = CATALOG_GAMES.find(g => g.id === id);
  if (!game) return;
  
  let modal = document.getElementById('game-details-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'game-details-modal';
    modal.className = 'game-details-modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="game-details-modal-box">
      <button type="button" class="modal-close-btn" onclick="closeGameModal()" aria-label="Fechar">✕</button>
      <div class="modal-cover-wrap">
        <img src="${game.img}" alt="${game.title}" class="modal-cover-img">
        ${game.discount ? `<span class="catalog-discount-badge modal-badge">${game.discount}</span>` : ''}
      </div>
      <div class="modal-body-content">
        <span class="modal-game-studio">${game.dev} • ${game.releaseYear}</span>
        <h2 class="modal-game-title">${game.title}</h2>
        <div class="modal-prices-row">
          ${game.cutPriceFormatted ? `<span class="catalog-cut-price" style="font-size: 15px;">${game.cutPriceFormatted}</span>` : ''}
          <span class="catalog-current-price" style="font-size: 22px; color: var(--color-green-neon); font-weight: 800;">${game.priceFormatted}</span>
        </div>
        <p class="modal-game-desc">Experiência completa desenvolvida pela talentosa cena de jogos independentes brasileiros. Disponível para download instantâneo no ecossistema IARA GAMES.</p>
        <div class="modal-actions-row">
          <button type="button" class="catalog-quick-btn btn-comprar" style="width: auto; height: 42px; padding: 0 24px; font-size: 15px;" onclick="addToCart('${game.id}'); closeGameModal();">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add('open');
};

window.closeGameModal = function() {
  const modal = document.getElementById('game-details-modal');
  if (modal) modal.classList.remove('open');
};

// Eventos de Busca
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
    renderGames();
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderGames();
  });
}

// Eventos de Gênero (Sidebar)
document.querySelectorAll('.genre-filter-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.genre-filter-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    state.activeGenre = item.dataset.genre || 'all';
    renderGames();
  });
});

// Eventos de Sistema (Toolbar)
if (chipSystemAny) {
  chipSystemAny.addEventListener('click', () => {
    document.querySelectorAll('.chip-icon-btn[data-system]').forEach(b => b.classList.remove('active'));
    chipSystemAny.classList.remove('inactive');
    state.activeSystem = 'any';
    renderGames();
  });
}

document.querySelectorAll('.chip-icon-btn[data-system]').forEach(btn => {
  btn.addEventListener('click', () => {
    const sys = btn.dataset.system;
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      chipSystemAny.classList.remove('inactive');
      state.activeSystem = 'any';
    } else {
      document.querySelectorAll('.chip-icon-btn[data-system]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      chipSystemAny.classList.add('inactive');
      state.activeSystem = sys;
    }
    renderGames();
  });
});

// Eventos de Launcher (Toolbar)
document.querySelectorAll('.chip-icon-btn[data-launcher]').forEach(btn => {
  btn.addEventListener('click', () => {
    const l = btn.dataset.launcher;
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      state.activeLauncher = 'all';
    } else {
      document.querySelectorAll('.chip-icon-btn[data-launcher]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeLauncher = l;
    }
    renderGames();
  });
});

// Slider de Preço
if (priceSlider) {
  priceSlider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    state.maxPrice = val;
    priceMaxLabel.textContent = `R$ ${val}`;
    renderGames();
  });
}

// Dropdown de Ordenação
if (sortTrigger && sortWrap) {
  sortTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    sortWrap.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    sortWrap.classList.remove('open');
  });

  document.querySelectorAll('.sort-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.sort-menu-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      state.sortBy = item.dataset.sort;
      sortLabel.textContent = item.textContent;
      sortWrap.classList.remove('open');
      renderGames();
    });
  });
}

// Alternador Grade / Lista
if (btnGridView && btnListView) {
  btnGridView.addEventListener('click', () => {
    btnGridView.classList.add('active');
    btnListView.classList.remove('active');
    catalogGrid.classList.remove('list-view');
    state.viewMode = 'grid';
  });

  btnListView.addEventListener('click', () => {
    btnListView.classList.add('active');
    btnGridView.classList.remove('active');
    catalogGrid.classList.add('list-view');
    state.viewMode = 'list';
  });
}

// Reset de Filtros
if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', () => {
    state.searchQuery = '';
    state.activeGenre = 'all';
    state.activeSystem = 'any';
    state.activeLauncher = 'all';
    state.maxPrice = 150;
    state.sortBy = 'popularity';

    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    if (priceSlider) priceSlider.value = 150;
    if (priceMaxLabel) priceMaxLabel.textContent = 'R$ 150';

    document.querySelectorAll('.genre-filter-item').forEach(i => {
      i.classList.toggle('active', i.dataset.genre === 'all');
    });

    document.querySelectorAll('.chip-icon-btn').forEach(b => b.classList.remove('active'));
    if (chipSystemAny) chipSystemAny.classList.remove('inactive');

    document.querySelectorAll('.sort-menu-item').forEach(i => {
      i.classList.toggle('active', i.dataset.sort === 'popularity');
    });
    if (sortLabel) sortLabel.textContent = 'Popularidade';

    renderGames();
  });
}

// Acordeão de Filtros na Sidebar (GENRE & PRICE)
document.querySelectorAll('.filter-group-header').forEach(header => {
  header.addEventListener('click', () => {
    header.parentElement.classList.toggle('collapsed');
  });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderGames();

  // Dropdown Menu do Usuário (Matheus Becari)
  const trigger = document.getElementById('user-profile-trigger');
  const dropdown = document.getElementById('user-dropdown-menu');
  if (trigger && dropdown) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
      const isExpanded = dropdown.classList.contains('show');
      trigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !trigger.contains(e.target)) {
        dropdown.classList.remove('show');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('show');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
