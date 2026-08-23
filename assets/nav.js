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
    toggle.addEventListener('touchstart', toggleHandler, {passive:false});
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

// Delegated capture listener: robust fallback that catches pointer/touch events
(function() {
  function delegatedToggle(e) {
    try {
      var btn = e.target && e.target.closest ? e.target.closest('.nav-toggle') : null;
      if (!btn) return;
      // If the primary handler already ran on this button, avoid double-toggle
      // We'll check a short-lived flag on the event target
      if (e._navHandled) return;
      e._navHandled = true;
      try { e.preventDefault(); } catch (err) {}
      var nav = btn.closest('.site-nav');
      if (!nav) return;
      var isOpen = nav.classList.toggle('open');
      try { btn.setAttribute('aria-expanded', String(isOpen)); } catch (err) {}
    } catch (err) {
      // ignore
      console && console.error && console.error('delegatedToggle error', err);
    }
  }

  if (window.PointerEvent) {
    document.addEventListener('pointerdown', delegatedToggle, true);
  } else {
    document.addEventListener('touchstart', delegatedToggle, true);
    document.addEventListener('click', delegatedToggle, true);
  }
})();
