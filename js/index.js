// Navegación móvil
const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');
if (burger) {
  burger.addEventListener('click', () => navList.classList.toggle('open'));
}