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
</style>

<picture class="site-banner-picture">
  <img src="{{ '/assets/banner.png' | relative_url }}" alt="Tape-to-Tape Hockey League banner" class="site-banner-img">
</picture>

# Coming Soon

We're launching soon. Stay tuned.
