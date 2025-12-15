// -------------------- HAMBURGER MENU --------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerIcon = document.querySelector(".hamburger .material-icons");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  hamburgerIcon.textContent = hamburger.classList.contains("active")
    ? "close"
    : "menu";
});

// Close menu when clicking any nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburgerIcon.textContent = "menu";
  });
});

// -------------------- MOBILE DROPDOWN --------------------
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", (e) => {
  if (window.innerWidth <= 968) {
    e.preventDefault();
    dropdownMenu.classList.toggle("active");
  }
});

// Close dropdown when user selects a dropdown item
dropdownMenu.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", () => {
    dropdownMenu.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburgerIcon.textContent = "menu";
  });
});

// -------------------- WINDOW RESIZE --------------------
window.addEventListener("resize", () => {
  if (window.innerWidth > 968) {
    // Reset for desktop view
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    dropdownMenu.classList.remove("active");
    hamburgerIcon.textContent = "menu";
  }
});
