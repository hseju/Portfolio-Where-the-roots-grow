
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById('close-menu');
const toggleIcon = document.getElementById('toggle-icon');
const navMenu = document.getElementById("navmenu");

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show-menu');
    toggleIcon.classList.toggle('fa-xmark');
  })
