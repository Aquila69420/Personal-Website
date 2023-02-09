const typedHeader = document.getElementById("typed-header");
const scrollDownArrow = document.getElementById("scroll-down-arrow");

setTimeout(() => {
  scrollDownArrow.classList.add("show");
}, 2000); // 2 seconds after the typing animation finishes

scrollDownArrow.addEventListener("click", () => {
  window.scroll({
    top: window.innerHeight,
    behavior: "smooth"
  });
});
