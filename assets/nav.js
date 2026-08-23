document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;
  var toggle = nav.querySelector('.nav-toggle');
  if (!toggle) return;

  var toggleHandler = function(e) {
    // Prevent double-firing for environments where pointer events and click both fire
    try { e.preventDefault(); } catch (err) {}
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  };

  if (window.PointerEvent) {
    toggle.addEventListener('pointerdown', toggleHandler);
  } else {
    // touchstart for older mobile browsers, and click as fallback
    toggle.addEventListener('touchstart', toggleHandler);
    toggle.addEventListener('click', toggleHandler);
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(e.target)) return; // click inside nav
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  // Collapse after selecting a link on mobile
  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
