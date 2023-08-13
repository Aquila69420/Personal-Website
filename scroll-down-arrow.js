const typedHeader = document.getElementById("typed-header");
const scrollDownArrow = document.getElementById("scroll-down-arrow");
const linkedinIcon = document.getElementById("fab fa-linkedin");
const githubIcon = document.getElementById("fab fa-github");
const emailIcon = document.getElementById("fa fa-envelope");

// setTimeout(() => {
//   scrollDownArrow.classList.add("show");
//   linkedinIcon.classList.add("show");
//   githubIcon.classList.add("show");
//   emailIcon.classList.add("show");
// }, 2000); // 2 seconds after the typing animation finishes

scrollDownArrow.addEventListener("click", () => {
  window.scroll({
    top: window.innerHeight,
    behavior: "smooth"
  });
});
