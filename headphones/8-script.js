// Toggle navigation menu visibility on mobile
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // animate hamburger icon (optional)
    hamburger.classList.toggle("open");
  });
});
