const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function () {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
  mobileMenu.classList.toggle('hidden', expanded);
});

const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

mobileMenuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
  });
});





