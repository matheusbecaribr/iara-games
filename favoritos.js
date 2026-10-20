/**
 * IARA GAMES — favoritos.js
 * Gerenciamento dinâmico da página de Favoritos
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos DOM
  const grid = document.getElementById('favorites-grid');
  const countLabel = document.getElementById('favorites-count-label');
  const searchInput = document.getElementById('favorites-filter-input');
  const clearSearchBtn = document.getElementById('favorites-clear-search');
  const statusTabs = document.querySelectorAll('.fav-tab-btn');
  const genreItems = document.querySelectorAll('.genre-filter-item');
  const viewGridBtn = document.getElementById('btn-grid-view');
  const viewListBtn = document.getElementById('btn-list-view');
  const sortSelectBtn = document.getElementById('sort-select-btn');
  const sortDropdownMenu = document.getElementById('sort-dropdown-menu');
  const currentSortLabel = document.getElementById('current-sort-label');
  const sortOptions = document.querySelectorAll('.sort-option-item');
  const toast = document.getElementById('favorites-toast');
  const toastMsg = document.getElementById('toast-message');

  // Estado dos filtros
  let currentStatus = 'all';
  let currentGenre = 'all';
  let currentSearch = '';
  let currentSort = 'recent';

  const cards = Array.from(document.querySelectorAll('.catalog-card'));

  // Função para exibir Toast
  function showToast(message) {
    if (!toast) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Atualização dos cards visíveis
  function filterGames() {
    let visibleCount = 0;

    cards.forEach(card => {
      const cardStatus = card.dataset.status; // 'owned', 'wishlist'
      const cardInstalled = card.dataset.installed === 'true';
      const cardGenre = card.dataset.genre || 'all';
      const cardTitle = (card.dataset.title || '').toLowerCase();

      // Filtro de Status Tab
      let matchStatus = true;
      if (currentStatus === 'owned') {
        matchStatus = cardStatus === 'owned';
      } else if (currentStatus === 'installed') {
        matchStatus = cardInstalled === true;
      } else if (currentStatus === 'wishlist') {
        matchStatus = cardStatus === 'wishlist';
      }

      // Filtro de Gênero
      let matchGenre = true;
      if (currentGenre !== 'all') {
        matchGenre = cardGenre.includes(currentGenre);
      }

      // Filtro de Busca
      let matchSearch = true;
      if (currentSearch.trim() !== '') {
        matchSearch = cardTitle.includes(currentSearch.trim().toLowerCase());
      }

      if (matchStatus && matchGenre && matchSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countLabel) {
      countLabel.textContent = visibleCount;
    }
  }

  // Alternar abas de status
  statusTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      statusTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentStatus = tab.dataset.status;
      filterGames();
    });
  });

  // Alternar gêneros na barra lateral
  genreItems.forEach(item => {
    item.addEventListener('click', () => {
      genreItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      currentGenre = item.dataset.genre;
      filterGames();
    });
  });

  // Campo de busca
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearch ? 'block' : 'none';
      }
      filterGames();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      clearSearchBtn.style.display = 'none';
      filterGames();
    });
  }

  // Alternador de Visualização Grade / Lista
  if (viewGridBtn && viewListBtn && grid) {
    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewListBtn.classList.remove('active');
      grid.classList.remove('list-mode');
    });

    viewListBtn.addEventListener('click', () => {
      viewListBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      grid.classList.add('list-mode');
    });
  }

  // Dropdown de Ordenação
  if (sortSelectBtn && sortDropdownMenu) {
    sortSelectBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = sortSelectBtn.getAttribute('aria-expanded') === 'true';
      sortSelectBtn.setAttribute('aria-expanded', !isExpanded);
      sortDropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      sortSelectBtn.setAttribute('aria-expanded', 'false');
      sortDropdownMenu.classList.remove('show');
    });

    sortOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        sortOptions.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        currentSort = opt.dataset.sort;
        if (currentSortLabel) currentSortLabel.textContent = opt.textContent;

        sortCards(currentSort);
      });
    });
  }

  function sortCards(type) {
    const sorted = [...cards].sort((a, b) => {
      if (type === 'az') {
        return (a.dataset.title || '').localeCompare(b.dataset.title || '');
      } else if (type === 'price-asc') {
        const pA = parseFloat(a.dataset.price) || 0;
        const pB = parseFloat(b.dataset.price) || 0;
        return pA - pB;
      } else if (type === 'price-desc') {
        const pA = parseFloat(a.dataset.price) || 0;
        const pB = parseFloat(b.dataset.price) || 0;
        return pB - pA;
      }
      return 0;
    });

    sorted.forEach(c => grid.appendChild(c));
    filterGames();
  }

  // Ação de Desfavoritar / Favoritar
  document.querySelectorAll('.fav-pin-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest('.catalog-card');
      const title = card ? card.dataset.title : 'Jogo';

      const isFav = btn.classList.contains('active');
      if (isFav) {
        btn.classList.remove('active');
        btn.querySelector('svg').style.fill = 'none';
        btn.querySelector('svg').style.stroke = '#888';
        showToast(`"${title}" removido dos favoritos.`);
      } else {
        btn.classList.add('active');
        btn.querySelector('svg').style.fill = '#C0FF00';
        btn.querySelector('svg').style.stroke = '#C0FF00';
        showToast(`"${title}" salvo nos favoritos!`);
      }
    });
  });

  // Ações nos botões de Comprar e Jogar
  document.querySelectorAll('.catalog-btn-play').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.catalog-card');
      const title = card ? card.dataset.title : 'Jogo';
      showToast(`Iniciando ${title}...`);
    });
  });

  document.querySelectorAll('.catalog-btn-install').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.catalog-card');
      const title = card ? card.dataset.title : 'Jogo';
      showToast(`Iniciando download de ${title}...`);
    });
  });

  document.querySelectorAll('.catalog-btn-buy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.catalog-card');
      const title = card ? card.dataset.title : 'Jogo';
      const cartCount = document.getElementById('cart-count');
      if (cartCount) {
        let current = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = current + 1;
      }
      showToast(`"${title}" adicionado ao carrinho!`);
    });
  });

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
