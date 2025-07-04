const menuButton = document.getElementById('interior-store-index-header-nav');
const overlay = document.getElementById('interior-store-index-overlay');
const sideMenu = document.getElementById('interior-store-index-sideMenu');

let isMenuOpen = false;

menuButton.addEventListener('click', toggleMenu);

overlay.addEventListener('click', closeMenu);

function toggleMenu() {
  if (isMenuOpen) {
      closeMenu();
  } else {
      openMenu();
  }
}

function openMenu() {
  menuButton.classList.add('active');
  overlay.classList.add('active');
  sideMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
  isMenuOpen = true;
}

function closeMenu() {
  menuButton.classList.remove('active');
  overlay.classList.remove('active');
  sideMenu.classList.remove('active');
  document.body.style.overflow = '';
  isMenuOpen = false;
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
  }
});