const hamburger = document.getElementById('interior-store-index-header-nav');
const overlay = document.getElementById('interior-store-index-overlay');

let isMenuOpen = false;

hamburger.addEventListener('click', toggleMenu);

overlay.addEventListener('click', closeMenu);