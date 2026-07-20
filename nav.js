// Shared nav & footer — included by every page.
// To update navigation, edit this file in one place.

(function () {
  // Google Analytics 4
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-BBBY3CQ0W5';
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BBBY3CQ0W5');

  const faLink = document.createElement('link');
  faLink.rel = 'stylesheet';
  faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
  document.head.appendChild(faLink);

  const NAV_HTML = `
<a href="#main-content" class="skip-link">Skip to main content</a>
<header>
  <div class="container nav-inner">
    <a class="nav-logo" href="https://troynydems.com/">
      <img src="images/logo.png" alt="City of Troy Democratic Committee Logo">
      <div class="nav-logo-text">
        City of Troy
        <span>Democratic Committee</span>
      </div>
    </a>

    <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="main-nav" onclick="toggleNav()">
      <span></span><span></span><span></span>
    </button>

    <nav id="main-nav" aria-label="Primary navigation">
      <ul>
        <li><a href="https://troynydems.com/">Home</a></li>
        <li><a href="https://troynydems.com/endorsements.html">Endorsements</a></li>
        <li class="has-dropdown">
          <button onclick="toggleDropdown(this)" aria-expanded="false">About</button>
          <ul class="dropdown">
            <li><a href="https://troynydems.com/about.html">About Us</a></li>
            <li><a href="https://troynydems.com/priorities.html">Goals &amp; Priorities</a></li>
            <li><a href="https://troynydems.com/office-holders.html">Office Holders</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <button onclick="toggleDropdown(this)" aria-expanded="false">City Council</button>
          <ul class="dropdown">
            <li><a href="https://troynydems.com/council-meetings.html">Legislative Sessions</a></li>
            <li><a href="https://troynydems.com/CCNews.html">Council Newsletters</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <button onclick="toggleDropdown(this)" aria-expanded="false">Take Action</button>
          <ul class="dropdown">
            <li><a href="https://troynydems.com/take-action.html">Take Action</a></li>
            <li><a href="https://troynydems.com/vote.html">Vote</a></li>
            <li><a href="https://troynydems.com/run-for-office.html">Run for Office</a></li>
          </ul>
        </li>
        <li><a href="https://secure.actblue.com/donate/troy-dems" target="_blank" class="btn-donate-nav">Donate</a></li>
      </ul>
    </nav>
  </div>
</header>`;

  const FOOTER_HTML = `
<div class="cta-band">
  <div class="container">
    <h2>Join Us</h2>
    <p>Get involved and help shape the future of Troy, New York.</p>
    <div class="cta-buttons">
      <a href="https://www.rensco.com/454/Voter-Registration" target="_blank" class="btn btn-outline">Get Registered</a>
      <a href="take-action.html" class="btn btn-primary">Volunteer</a>
      <a href="https://secure.actblue.com/donate/troy-dems" target="_blank" class="btn btn-outline">Donate on ActBlue</a>
    </div>
  </div>
</div>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <img src="images/logo.png" alt="City of Troy Democratic Committee Logo">
          <div>
            <h3 style="margin:0;">City of Troy Democratic Committee</h3>
            <p style="margin:0.25rem 0 0;">Fighting for Troy's future, one election at a time.</p>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:1.5rem; margin-top:0.75rem;">
          <address style="font-style:normal; font-size:0.875rem; line-height:1.6; color:inherit;">
            Troy Democratic Committee<br>
            P.O. Box 846<br>
            Troy, NY 12181
          </address>
          <div class="social-links" style="margin-top:0;">
            <a href="https://www.facebook.com/troynydems" target="_blank" class="social-icon-link" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/troynydems/" target="_blank" class="social-icon-link" aria-label="Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div>
        <h4>Pages</h4>
        <ul>
          <li><a href="https://troynydems.com/">Home</a></li>
          <li><a href="https://troynydems.com/endorsements.html">Endorsements</a></li>
          <li><a href="https://troynydems.com/about.html">About Us</a></li>
          <li><a href="https://troynydems.com/priorities.html">Goals &amp; Priorities</a></li>
          <li><a href="https://troynydems.com/office-holders.html">Office Holders</a></li>
          <li><a href="https://troynydems.com/council-meetings.html">Legislative Sessions</a></li>
          <li><a href="https://troynydems.com/CCNews.html">Council Newsletters</a></li>
        </ul>
      </div>
      <div>
        <h4>Get Involved</h4>
        <ul>
          <li><a href="https://troynydems.com/take-action.html">Take Action</a></li>
          <li><a href="https://troynydems.com/vote.html">Vote</a></li>
          <li><a href="https://troynydems.com/run-for-office.html">Run for Office</a></li>
          <li><a href="https://secure.actblue.com/donate/troy-dems" target="_blank">Donate</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span id="year"></span> City of Troy Democratic Committee. All rights reserved.</span>
      <span>Troy, New York</span>
    </div>
  </div>
</footer>`;

  // Inject header + skip link immediately (script is at top of body, so this lands first)
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Defer footer until the full page is parsed so it lands after all sections
  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

    // Set year
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();

    // Highlight active nav link
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('header nav a').forEach(a => {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });

    // Wrap page content in <main> landmark for skip-link target and screen reader navigation
    if (!document.querySelector('main')) {
      const main = document.createElement('main');
      main.id = 'main-content';
      main.setAttribute('tabindex', '-1');
      const header = document.querySelector('header');
      const ctaBand = document.querySelector('.cta-band');
      const footer = document.querySelector('footer');
      const stopNode = ctaBand || footer;
      if (header && stopNode) {
        const nodes = [];
        let node = header.nextSibling;
        while (node && node !== stopNode) {
          nodes.push(node);
          node = node.nextSibling;
        }
        header.insertAdjacentElement('afterend', main);
        nodes.forEach(n => main.appendChild(n));
      }
    }

    // Add "(opens in new window)" for screen readers on all external links
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
      // social-icon-link already has aria-label; skip adding sr text to avoid duplication
      if (!link.classList.contains('social-icon-link') && !link.querySelector('.sr-new-window')) {
        const srSpan = document.createElement('span');
        srSpan.className = 'sr-only sr-new-window';
        srSpan.textContent = ' (opens in new window)';
        link.appendChild(srSpan);
      }
    });
  });
}());

function toggleNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.querySelector('.nav-toggle');
  const isOpen = nav.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

function toggleDropdown(btn) {
  const dropdown = btn.nextElementSibling;
  const isOpen = dropdown.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}
