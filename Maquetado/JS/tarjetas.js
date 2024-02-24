const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.hover-info').style.display = 'block';
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('.hover-info').style.display = 'none';
  });
});