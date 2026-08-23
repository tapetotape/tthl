document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;
  var toggle = nav.querySelector('.nav-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function() {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Close menu when clicking outside or on a nav link
  document.addEventListener('click', function(e) {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(e.target)) return; // click inside nav
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      // collapse menu after selecting a link on mobile
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
