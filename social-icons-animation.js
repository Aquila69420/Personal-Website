window.addEventListener('load', function () {
    const socialIcons = document.querySelectorAll('.social-icons a');
  
    socialIcons.forEach(icon => {
      icon.style.opacity = 0;
      icon.classList.add("icon-color");
    });
  
    setTimeout(() => {
      socialIcons.forEach(icon => {
        icon.style.transition = "opacity 1s ease-in-out";
        icon.style.opacity = 1;
      });
    }, 2000);
  });
  