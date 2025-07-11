let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', function () {
  menu.classList.add('abrir-menu');
  overlay.style.display = 'block';
});

menu.addEventListener('click', function () {
  menu.classList.remove('abrir-menu');
  overlay.style.display = 'none';
});
