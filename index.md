---
layout: home
title: "Tapetotape"
---

<style>
/* Show the full banner image (no vertical cropping). Uses Jekyll relative_url to handle baseurl. */
.site-banner-picture,
.site-banner-picture img,
.site-banner-img {
  width: 100% !important;
  display: block !important;
  height: auto !important;           /* preserve natural aspect ratio */
  max-height: none !important;
  object-fit: contain !important;    /* show whole image, no cropping */
  object-position: center !important;
  overflow: visible !important;
  background-color: #000 !important;
  margin: 0 auto;
}

/* Use relative_url to handle GitHub Pages baseurl */
.site-banner-picture img {
  content: url('{{ '/assets/banner.png' | relative_url }}');
}

/* Simple navigation styles (appears under the banner) */
.site-nav {
  display: flex;
  justify-content: center;
  background: transparent;
  padding: 0.5rem 0;
  margin: 0;
}
.site-nav ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 1rem; }
.site-nav a { color: #e6eef8; text-decoration: none; padding: 0.4rem 0.75rem; border-radius: 4px; }
.site-nav a:hover { background: rgba(255,255,255,0.04); }
.site-nav .active { font-weight: 700; border-bottom: 2px solid #e6eef8; }

</style>

<picture class="site-banner-picture">
  <img src="{{ '/assets/banner.png' | relative_url }}" alt="Tape-to-Tape Hockey League banner" class="site-banner-img">
</picture>

<nav class="site-nav" aria-label="Primary">
  <ul>
    <li><a href="{{ '/' | relative_url }}" class="active">Home</a></li>
    <li><a href="{{ '/standings/' | relative_url }}">Standings</a></li>
    <li><a href="{{ '/player-stats/' | relative_url }}">Player Stats</a></li>
    <li><a href="{{ '/goalie-stats/' | relative_url }}">Goalie Stats</a></li>
    <li><a href="{{ '/schedule/' | relative_url }}">Schedule</a></li>
    <li><a href="{{ '/recent-games/' | relative_url }}">Recent Games</a></li>
  </ul>
</nav>

# Coming Soon

We're launching soon. Stay tuned.
