const scrollDownArrow = document.getElementById("scroll-down-arrow");

// Use querySelectorAll to get elements by class name
const linkedinIcon = document.querySelector(".fab.fa-linkedin");
const githubIcon = document.querySelector(".fab.fa-github");
const emailIcon = document.querySelector(".fa.fa-envelope");

setTimeout(() => {
  scrollDownArrow.classList.add("show");
  linkedinIcon.classList.add("show");
  githubIcon.classList.add("show");
  emailIcon.classList.add("show");
}, 2000); // 2 seconds after the typing animation finishes

scrollDownArrow.addEventListener("click", () => {
  window.scroll({
    top: window.innerHeight,
    behavior: "smooth"
  });
});