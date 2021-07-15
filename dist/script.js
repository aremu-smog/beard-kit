const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    window.location.href = navLink.getAttribute("href");
  });
});