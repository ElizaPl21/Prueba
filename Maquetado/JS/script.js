document.querySelector('.navbar-toggle').addEventListener('click', function() {
  var navbarMenu = document.querySelector('.navbar-menu');
  var navbarAuth = document.querySelector('.navbar-auth');
  if (navbarMenu.style.display === 'none') {
    navbarMenu.style.display = 'flex';
    navbarAuth.style.display = 'flex';
  } else {
    navbarMenu.style.display = 'none';
    navbarAuth.style.display = 'none';
  }
});