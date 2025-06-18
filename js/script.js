const hamburger = document.getElementById('interior-store-index-header-nav');
const overlay = document.getElementById('interior-store-index-overlay');

let isMenuOpen = false;

hamburger.addEventListener('click', toggleMenu);

overlay.addEventListener('click', closeMenu);

function toggleMenu() {
  if (isMenuOpen) {
      closeMenu();
  } else {
      openMenu();
  }
}

function openMenu() {
  hamburger.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  isMenuOpen = true;
}

function closeMenu() {
  hamburger.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  isMenuOpen = false;
}