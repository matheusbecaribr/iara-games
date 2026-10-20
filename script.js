// ==========================================================================
// IARA GAMES — Dados Oficiais do Figma & Interatividades
// ==========================================================================

const GAMES_DATA = {
  dandy: {
    id: 'dandy',
    title: 'Dandy Ace',
    img: 'assets/game-dandy-hd.png',
    cutPrice: 'R$ 149,80',
    price: 'R$ 69,90',
    discount: '-45%',
    acquired: false
  },
  dandara: {
    id: 'dandara',
    title: 'Dandara',
    img: 'assets/game-dandara-hd.png',
    price: 'R$ 46,69',
    acquired: false
  },
  fobia: {
    id: 'fobia',
    title: 'Fobia: St. Dinfna Hotel',
    img: 'assets/game-fobia-hd.png',
    cutPrice: 'R$ 116,00',
    price: 'R$ 56,00',
    discount: '-52%',
    acquired: true
  },
  pocket: {
    id: 'pocket',
    title: 'Pocket Bravery',
    img: 'assets/game-pocket-hd.png',
    price: 'R$ 35,69',
    acquired: false
  }
};

const SHELF_ORDERS = {
  lancamentos: ['dandy', 'dandara', 'fobia', 'pocket', 'dandy', 'dandara'],
  nostalgia: ['pocket', 'dandara', 'dandy', 'fobia', 'pocket', 'dandara']
};

const PLATFORMS_SVG = `
  <svg viewBox="0 0 24 24" aria-label="PC"><path d="M3 5l8-1v8H3zM12 4l9-1v9h-9zM3 13h8v7l-8-1zM12 13h9v8l-9-1z"/></svg>
  <svg viewBox="0 0 24 24" aria-label="Xbox"><circle cx="12" cy="12" r="9"/><path d="M7 6c3 2 5 5 5 6 0-1 2-4 5-6M6 18c2-4 4-6 6-7 2 1 4 3 6 7" stroke="#000" stroke-width="2" fill="none"/></svg>
  <svg viewBox="0 0 24 24" aria-label="PlayStation"><path d="M9 3l5 1.6c2 .7 3 2 3 4 0 2.4-1.6 3.2-3.4 2.5V5.5c0-.6-.3-1-.8-1.1-.4-.1-.6.3-.6.8V20l-3.2-1zM3 17.4c-1.2-.8-.4-1.9 1.5-2.6L9 13.2v2.2l-3.4 1.2c-.6.2-.7.6-.2.7.5.2 1.4.1 2-.1l1.6-.6v2c-2.3.6-4.6.4-6-.2zM13 16.5l4.2-1.5c1.5-.5 3.5-.3 3.8.6.3.8-.6 1.6-2 2.1L13 19.8v-2.2l4.6-1.6c.6-.2.7-.6.2-.7-.5-.2-1.4-.1-2 .1l-2.8 1z"/></svg>
`;

function createGameCardHTML(game) {
  return `
    <article class="game-card">
      <div class="game-card-thumb-wrap">
        <img src="${game.img}" alt="${game.title}" class="game-card-thumb">
        ${game.acquired ? '<span class="badge-adquirido">Adquirido</span>' : ''}
      </div>
      <div class="game-card-header">
        <h3 class="game-card-title">${game.title}</h3>
        ${game.discount ? `<span class="badge-desconto">${game.discount}</span>` : ''}
      </div>
      <div class="game-card-footer">
        <div class="game-prices">
          ${game.cutPrice ? `<span class="price-cut">${game.cutPrice}</span>` : ''}
          <span class="price-current">${game.price}</span>
        </div>
        <div class="platform-icons-row">
          ${PLATFORMS_SVG}
        </div>
      </div>
    </article>
  `;
}

// Renderiza as prateleiras
document.querySelectorAll('[data-shelf]').forEach(track => {
  const shelfType = track.dataset.shelf;
  const gameKeys = SHELF_ORDERS[shelfType] || SHELF_ORDERS.lancamentos;
  track.innerHTML = gameKeys.map(key => createGameCardHTML(GAMES_DATA[key])).join('');
});

// ==========================================================================
// Carrosséis suaves (Descubra, Lançamentos, Nostalgia)
// ==========================================================================
function setupCarousel(track, nextBtn, cardWidth) {
  if (!track || !nextBtn) return;
  let currentOffset = 0;
  nextBtn.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    currentOffset += cardWidth;
    if (currentOffset > maxScroll + 50) {
      currentOffset = 0;
    }
    track.style.transform = `translateX(-${currentOffset}px)`;
  });
}

setupCarousel(document.getElementById('discover-track'), document.getElementById('discover-next-btn'), 336);
setupCarousel(document.getElementById('track-lancamentos'), document.getElementById('btn-next-lancamentos'), 328);
setupCarousel(document.getElementById('track-nostalgia'), document.getElementById('btn-next-nostalgia'), 328);

// ==========================================================================
// Simulação realista do download de Fobia
// ==========================================================================
const dlToggleBtn = document.getElementById('dl-toggle-btn');
const dlCancelBtn = document.getElementById('dl-cancel-btn');
const dlProgressLabel = document.getElementById('dl-progress-label');
const downloadCard = document.getElementById('download-card');

let isDownloading = true;
let downloadedMB = 256;
const totalMB = 4500;

if (dlToggleBtn) {
  dlToggleBtn.classList.add('is-playing');
  dlToggleBtn.addEventListener('click', () => {
    isDownloading = !isDownloading;
    dlToggleBtn.classList.toggle('is-playing', isDownloading);
  });
}

setInterval(() => {
  if (!isDownloading || downloadedMB >= totalMB || !dlProgressLabel) return;
  downloadedMB += 18;
  if (downloadedMB < 1000) {
    dlProgressLabel.textContent = `${downloadedMB} mb/4.5 gb`;
  } else {
    dlProgressLabel.textContent = `${(downloadedMB / 1000).toFixed(2)} gb/4.5 gb`;
  }
}, 500);

if (dlCancelBtn && downloadCard) {
  dlCancelBtn.addEventListener('click', () => {
    downloadCard.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    downloadCard.style.opacity = '0';
    downloadCard.style.transform = 'scale(0.96)';
    setTimeout(() => downloadCard.remove(), 300);
  });
}

// ==========================================================================
// Contador do carrinho ao clicar na sacola dos cards de Descubra
// ==========================================================================
const cartCountEl = document.getElementById('cart-count');
document.querySelectorAll('.fab-white-bag').forEach(bagBtn => {
  bagBtn.addEventListener('click', () => {
    if (cartCountEl) {
      cartCountEl.textContent = parseInt(cartCountEl.textContent || '0', 10) + 1;
      cartCountEl.style.transform = 'scale(1.3)';
      setTimeout(() => { cartCountEl.style.transform = 'scale(1)'; }, 200);
    }
  });
});

// ==========================================================================
// Estado ativo no Menu Lateral
// ==========================================================================
document.querySelectorAll('.dock-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ==========================================================================
// Saudação dinâmica por horário
// ==========================================================================
const currentHour = new Date().getHours();
const greetTimeEl = document.querySelector('.greet-time');
if (greetTimeEl) {
  greetTimeEl.textContent = currentHour < 12 ? 'Bom dia, ' : currentHour < 18 ? 'Boa tarde, ' : 'Boa noite, ';
}

// ==========================================================================
// Dropdown Menu do Usuário (Matheus Becari)
// ==========================================================================
(function initUserDropdownMenu() {
  const trigger = document.getElementById('user-profile-trigger');
  const dropdown = document.getElementById('user-dropdown-menu');

  if (!trigger || !dropdown) return;

  function toggleDropdown(e) {
    e.stopPropagation();
    dropdown.classList.toggle('show');
    const isExpanded = dropdown.classList.contains('show');
    trigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  }

  function closeDropdown() {
    dropdown.classList.remove('show');
    trigger.setAttribute('aria-expanded', 'false');
  }

  trigger.addEventListener('click', toggleDropdown);

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !trigger.contains(e.target)) {
      closeDropdown();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });
})();
