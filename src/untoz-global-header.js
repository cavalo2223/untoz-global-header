(() => {
  const DEFAULTS = {
    site: 'untoz',
    active: 'untoz',
    accountLabel: 'Conta',
    accountUrl: '#',
    links: {
      untoz: 'https://untoz.site',
      plus: 'https://untozplus.com',
      news: '#',
      sports: '#',
      gaming: '#',
      music: '#',
      movies: '#',
      kids: '#',
      classic: '#',
      archives: '#',
      space: '#',
      studio: '#',
      studioAI: '#',
      motionAI: '#',
      aura: '#',
      fast: '#',
      channels: '#',
      universe: 'https://universe.untoz.site'
    }
  };

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  const item = (href, title, description, icon = '') => `
    <a class="untoz-global-header__mega-item" href="${escapeHtml(href)}">
      <span class="untoz-global-header__mega-icon">${icon}</span>
      <span class="untoz-global-header__mega-copy"><strong>${title}</strong><small>${description}</small></span>
    </a>`;

  function render(target, options = {}) {
    const config = { ...DEFAULTS, ...options, links: { ...DEFAULTS.links, ...(options.links || {}) } };
    const link = (key, label) => `<a class="untoz-global-header__link ${config.active === key ? 'is-active' : ''}" href="${escapeHtml(config.links[key])}">${label}</a>`;

    target.innerHTML = `
      <header class="untoz-global-header" data-untoz-site="${escapeHtml(config.site)}">
        <div class="untoz-global-header__inner">
          <a class="untoz-global-header__brand" href="${escapeHtml(config.links.untoz)}" aria-label="Untoz">
            <span class="untoz-global-header__wordmark">UNTOZ</span>
          </a>

          <nav class="untoz-global-header__nav" aria-label="Untoz global navigation">
            ${link('untoz', 'UNTOZ')}
            ${link('plus', 'UNTOZ+')}
            ${link('news', 'NEWS')}
            ${link('sports', 'SPORTS')}
            ${link('gaming', 'GAMING')}
            <div class="untoz-global-header__menu">
              <button class="untoz-global-header__menu-button" type="button" aria-expanded="false" aria-haspopup="true">
                MORE <span class="untoz-global-header__chevron">⌄</span>
              </button>
              <div class="untoz-global-header__mega" role="menu" aria-label="More Untoz services">
                <div class="untoz-global-header__mega-top">
                  <div>
                    <p class="untoz-global-header__mega-eyebrow">THE UNTOZ ECOSYSTEM</p>
                    <h2>Everything Untoz.</h2>
                    <p>Explore all our services, products, channels and brands.</p>
                  </div>
                  <a class="untoz-global-header__universe-cta" href="${escapeHtml(config.links.universe)}">Explore Universe <span>↗</span></a>
                </div>

                <div class="untoz-global-header__mega-columns">
                  <section>
                    <h3>ENTERTAINMENT</h3>
                    ${item(config.links.plus, 'Untoz+', 'Streaming & live', '✦')}
                    ${item(config.links.music, 'Untoz Music', 'Music & artists', '♫')}
                    ${item(config.links.movies, 'Task Movies', 'Movies & cinema', '▣')}
                    ${item(config.links.kids, 'Untoz Kids', 'For younger audiences', '●')}
                    ${item(config.links.classic, 'Untoz Classic', 'Classic entertainment', '◆')}
                  </section>
                  <section>
                    <h3>MEDIA</h3>
                    ${item(config.links.news, 'Untoz News', 'News & current affairs', 'N')}
                    ${item(config.links.sports, 'Untoz Sports', 'Sports & live coverage', 'S')}
                    ${item(config.links.gaming, 'Untoz Gaming', 'Gaming & esports', 'G')}
                    ${item(config.links.space, 'Untoz Space', 'Space & science', '✧')}
                    ${item(config.links.archives, 'Untoz Archives', 'The Untoz archive', '▤')}
                  </section>
                  <section>
                    <h3>PRODUCTS</h3>
                    ${item(config.links.studio, 'Untoz Studio', 'Create with Untoz', '✎')}
                    ${item(config.links.studioAI, 'Untoz Studio AI', 'AI-powered creation', 'AI')}
                    ${item(config.links.motionAI, 'Untoz Motion AI', 'Motion & video tools', 'M')}
                    ${item(config.links.aura, 'AURA', 'Personal AI assistant', '✦')}
                  </section>
                  <section>
                    <h3>CHANNELS</h3>
                    ${item(config.links.fast, 'Untoz Fast', 'Always-on entertainment', '▶')}
                    ${item(config.links.channels, 'Untoz Channels', 'TV & live channels', '▮')}
                    ${item(config.links.music, 'Untoz Non-Stop Music', 'Music, 24/7', '♫')}
                    ${item(config.links.sports, 'Untoz Sports 1–5', 'Live sports channels', '⚡')}
                  </section>
                </div>

                <div class="untoz-global-header__mega-bottom">
                  <span>More products and services are coming.</span>
                  <a href="${escapeHtml(config.links.universe)}">Discover the Untoz Universe →</a>
                </div>
              </div>
            </div>
          </nav>

          <a class="untoz-global-header__account" href="${escapeHtml(config.accountUrl)}" aria-label="${escapeHtml(config.accountLabel)}">
            <span class="untoz-global-header__account-icon">👤</span>
            <span>${escapeHtml(config.accountLabel)}</span>
          </a>
          <button class="untoz-global-header__mobile-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
        </div>

        <div class="untoz-global-header__mobile-panel" aria-hidden="true">
          <div class="untoz-global-header__mobile-title">THE UNTOZ ECOSYSTEM</div>
          ${link('untoz', 'UNTOZ')}
          ${link('plus', 'UNTOZ+')}
          ${link('news', 'NEWS')}
          ${link('sports', 'SPORTS')}
          ${link('gaming', 'GAMING')}
          <div class="untoz-global-header__mobile-section">Entertainment</div>
          <a href="${escapeHtml(config.links.music)}">Untoz Music</a>
          <a href="${escapeHtml(config.links.movies)}">Task Movies</a>
          <a href="${escapeHtml(config.links.kids)}">Untoz Kids</a>
          <a href="${escapeHtml(config.links.classic)}">Untoz Classic</a>
          <div class="untoz-global-header__mobile-section">Media</div>
          <a href="${escapeHtml(config.links.space)}">Untoz Space</a>
          <a href="${escapeHtml(config.links.archives)}">Untoz Archives</a>
          <div class="untoz-global-header__mobile-section">Products</div>
          <a href="${escapeHtml(config.links.studio)}">Untoz Studio</a>
          <a href="${escapeHtml(config.links.studioAI)}">Untoz Studio AI</a>
          <a href="${escapeHtml(config.links.motionAI)}">Untoz Motion AI</a>
          <a href="${escapeHtml(config.links.aura)}">AURA</a>
          <div class="untoz-global-header__mobile-section">Account</div>
          <a href="${escapeHtml(config.accountUrl)}">👤 ${escapeHtml(config.accountLabel)}</a>
        </div>
      </header>`;

    const menu = target.querySelector('.untoz-global-header__menu');
    const menuButton = target.querySelector('.untoz-global-header__menu-button');
    const closeMenu = () => {
      menu.classList.remove('is-open');
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    };
    menuButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = menu.classList.toggle('is-open');
      menuButton.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (event) => { if (!menu.contains(event.target)) closeMenu(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

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
