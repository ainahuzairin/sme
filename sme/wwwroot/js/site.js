// Please see documentation at https://learn.microsoft.com/aspnet/core/
// for details on configuring this project.
(function () {
  var navbar = document.getElementById('smNavbar');
  var toggle = document.getElementById('smNavToggle');
  var menu = document.getElementById('smNavMenu');
  var dropdown = document.querySelector('.sm-navbar__dropdown');
  var dropdownBtn = dropdown ? dropdown.querySelector('.sm-navlink--dropdown') : null;

  // shrink / shadow navbar after scrolling past hero
  var onScroll = function () {
    if (window.scrollY > 12) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // tap-to-open dropdown on touch / small screens
  if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 900px)').matches) {
        e.preventDefault();
        var open = dropdown.classList.toggle('is-open');
        dropdownBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
  }

  // ---------------------------------------------------------------
  // Scroll-reveal engine — shared across every page.
  // Add class="reveal reveal-up|reveal-left|reveal-right|reveal-zoom"
  // or class="reveal-stagger" (children animate in one by one).
  // ---------------------------------------------------------------
  var revealTargets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (revealTargets.length) {
    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

      revealTargets.forEach(function (el) { revealObserver.observe(el); });
    } else {
      // fallback: no IO support, just show everything
      revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }
})();
