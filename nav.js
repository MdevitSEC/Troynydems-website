// Shared nav & footer — included by every page.
// To update navigation, edit this file in one place.

(function () {
  const NAV_HTML = `
<header>
  <div class="container nav-inner">
    <a class="nav-logo" href="index.html">
      <img src="images/logo.png" alt="Troy Dems Logo">
      <div class="nav-logo-text">
        City of Troy
        <span>Democratic Committee</span>
      </div>
    </a>

    <button class="nav-toggle" aria-label="Toggle menu" onclick="toggleNav()">
      <span></span><span></span><span></span>
    </button>

    <nav id="main-nav">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="endorsements.html">Endorsements</a></li>
        <li class="has-dropdown">
          <button onclick="toggleDropdown(this)">About</button>
          <ul class="dropdown">
            <li><a href="about.html">About Us</a></li>
            <li><a href="our-goals.html">Our Goals</a></li>
            <li><a href="priorities.html">Priorities</a></li>
            <li><a href="office-holders.html">Office Holders</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <button onclick="toggleDropdown(this)">Take Action</button>
          <ul class="dropdown">
            <li><a href="take-action.html">Take Action</a></li>
            <li><a href="vote.html">Vote</a></li>
            <li><a href="volunteer.html">Volunteer</a></li>
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
    <h2>Join Our Movement</h2>
    <p>Get involved and help shape the future of Troy, New York.</p>
    <div class="cta-buttons">
      <a href="https://www.rensco.com/454/Voter-Registration" target="_blank" class="btn btn-outline">Get Registered</a>
      <a href="volunteer.html" class="btn btn-primary">Volunteer</a>
      <a href="https://secure.actblue.com/donate/troy-dems" target="_blank" class="btn btn-outline">Donate on ActBlue</a>
    </div>
  </div>
</div>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <img src="images/logo.png" alt="Troy Dems Logo">
          <h3 style="margin:0;">City of Troy Democratic Committee</h3>
        </div>
        <p>Fighting for Troy's future, one election at a time.</p>
        <address style="font-style:normal; margin-top:0.75rem; font-size:0.875rem; line-height:1.6; color:inherit;">
          Troy Democratic Committee<br>
          P.O. Box 846<br>
          Troy, NY 12181
        </address>
        <div class="social-links">
          <a href="https://www.facebook.com/troynydems" target="_blank" title="Facebook">&#xfb;</a>
          <a href="https://www.instagram.com/troynydems/" target="_blank" title="Instagram">&#x1f4f8;</a>
        </div>
      </div>
      <div>
        <h4>Pages</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="endorsements.html">Endorsements</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="our-goals.html">Our Goals</a></li>
          <li><a href="priorities.html">Priorities</a></li>
          <li><a href="office-holders.html">Office Holders</a></li>
        </ul>
      </div>
      <div>
        <h4>Get Involved</h4>
        <ul>
          <li><a href="take-action.html">Take Action</a></li>
          <li><a href="vote.html">Vote</a></li>
          <li><a href="volunteer.html">Volunteer</a></li>
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

  // Inject header immediately (script is at top of body, so this lands first)
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
  });
}());

function toggleNav() {
  document.getElementById('main-nav').classList.toggle('open');
}

function toggleDropdown(btn) {
  const dropdown = btn.nextElementSibling;
  dropdown.classList.toggle('open');
}
