(() => {
  const DEFAULTS = {
    site: 'untoz',
    active: 'universe',
    accountLabel: 'Conta',
    accountUrl: '#',
    links: {
      universe: 'https://universe.untoz.site',
      plus: 'https://untozplus.com',
      news: '#',
      sports: '#',
      gaming: '#',
      music: '#'
    }
  };

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  function render(target, options = {}) {
    const config = { ...DEFAULTS, ...options, links: { ...DEFAULTS.links, ...(options.links || {}) } };
    const link = (key, label) => `<a class="untoz-global-header__link ${config.active === key ? 'is-active' : ''}" href="${escapeHtml(config.links[key])}">${label}</a>`;

    target.innerHTML = `
      <header class="untoz-global-header" data-untoz-site="${escapeHtml(config.site)}">
        <div class="untoz-global-header__inner">
          <a class="untoz-global-header__brand" href="${escapeHtml(config.links.universe)}" aria-label="Untoz Universe">
            <span class="untoz-global-header__mark">U</span><span class="untoz-global-header__wordmark">UNTOZ</span>
          </a>
          <nav class="untoz-global-header__nav" aria-label="Untoz global navigation">
            ${link('universe', 'Universe')}
            <div class="untoz-global-header__menu">
              <button class="untoz-global-header__menu-button" type="button" aria-expanded="false">Entertainment <span class="untoz-global-header__chevron">⌄</span></button>
              <div class="untoz-global-header__dropdown" role="menu">
                <div class="untoz-global-header__dropdown-heading">
                  <p class="untoz-global-header__dropdown-title">Entertainment</p>
                  <p class="untoz-global-header__dropdown-subtitle">Discover the Untoz entertainment universe.</p>
                </div>
                <div class="untoz-global-header__dropdown-grid">
                  <a class="untoz-global-header__dropdown-link" href="${escapeHtml(config.links.plus)}">Untoz+<span>Streaming & live</span></a>
                  <a class="untoz-global-header__dropdown-link" href="${escapeHtml(config.links.music)}">Untoz Music<span>Music & artists</span></a>
                  <a class="untoz-global-header__dropdown-link" href="#">Untoz Kids<span>For younger audiences</span></a>
                  <a class="untoz-global-header__dropdown-link" href="#">Task Movies<span>Movies & cinema</span></a>
                </div>
              </div>
            </div>
            ${link('news', 'News')}${link('sports', 'Sports')}${link('gaming', 'Gaming')}
          </nav>
          <a class="untoz-global-header__account" href="${escapeHtml(config.accountUrl)}"><span class="untoz-global-header__account-icon">👤</span><span>${escapeHtml(config.accountLabel)}</span></a>
          <button class="untoz-global-header__mobile-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
        </div>
        <div class="untoz-global-header__mobile-panel" aria-hidden="true">
          <a class="untoz-global-header__mobile-link" href="${escapeHtml(config.links.universe)}">🌌 Universe</a>
          <div class="untoz-global-header__mobile-section">Entertainment</div>
          <a class="untoz-global-header__mobile-link" href="${escapeHtml(config.links.plus)}">🎬 Untoz+</a>
          <a class="untoz-global-header__mobile-link" href="${escapeHtml(config.links.music)}">🎵 Untoz Music</a>
          <a class="untoz-global-header__mobile-link" href="#">👶 Untoz Kids</a>
          <a class="untoz-global-header__mobile-link" href="#">🎞️ Task Movies</a>
          <div class="untoz-global-header__mobile-section">News & Sports</div>
          <a class="untoz-global-header__mobile-link" href="${escapeHtml(config.links.news)}">📰 Untoz News</a>
          <a class="untoz-global-header__mobile-link" href="${escapeHtml(config.links.sports)}">⚽ Untoz Sports</a>
          <a class="untoz-global-header__mobile-link" href="${escapeHtml(config.links.gaming)}">🎮 Untoz Gaming</a>
          <div class="untoz-global-header__mobile-section">Account</div>
          <a class="untoz-global-header__mobile-link" href="${escapeHtml(config.accountUrl)}">👤 ${escapeHtml(config.accountLabel)}</a>
        </div>
      </header>`;

    const menu = target.querySelector('.untoz-global-header__menu');
    const menuButton = target.querySelector('.untoz-global-header__menu-button');
    const closeMenu = () => { menu.classList.remove('is-open'); menuButton.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); };
    menuButton.addEventListener('click', (event) => { event.stopPropagation(); const open = menu.classList.toggle('is-open'); menuButton.classList.toggle('is-open', open); menuButton.setAttribute('aria-expanded', String(open)); });
    document.addEventListener('click', (event) => { if (!menu.contains(event.target)) closeMenu(); });

    const mobileButton = target.querySelector('.untoz-global-header__mobile-toggle');
    const mobilePanel = target.querySelector('.untoz-global-header__mobile-panel');
    mobileButton.addEventListener('click', () => {
      const open = mobilePanel.classList.toggle('is-open');
      mobileButton.setAttribute('aria-expanded', String(open));
      mobilePanel.setAttribute('aria-hidden', String(!open));
      mobileButton.textContent = open ? '✕' : '☰';
    });
  }

  window.UntozGlobalHeader = { render };
})();
