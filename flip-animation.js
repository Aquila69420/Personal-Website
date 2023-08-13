// Add an event listener for each flip card
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(flipCard => {
  flipCard.addEventListener('click', function () {
    this.classList.toggle('flip-card:hover');
  });
});
