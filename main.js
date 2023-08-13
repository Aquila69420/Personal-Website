// Get the project cards section
const projectCards = document.querySelector(".project-card");

// Get the height of the section
const projectCardsHeight = projectCards.offsetHeight;

// Scroll to the height of the section
window.scrollTo({
  top: projectCardsHeight,
  behavior: "smooth"
});
