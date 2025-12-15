document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const hamburgerIcon = document.querySelector(".hamburger .material-icons");

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Toggle between menu and close icons
    if (hamburger.classList.contains("active")) {
      hamburgerIcon.textContent = "close";
    } else {
      hamburgerIcon.textContent = "menu";
    }
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburgerIcon.textContent = "menu";
    });
  });

  // Mobile Dropdown Toggle
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", (e) => {
      // Only prevent default on mobile
      if (window.innerWidth <= 968) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  }

  // Handle window resize
  window.addEventListener("resize", () => {
    // Reset menu state on desktop
    if (window.innerWidth > 968) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      hamburgerIcon.textContent = "menu";

      // Close all dropdowns on desktop
      document.querySelectorAll(".dropdown").forEach((d) => {
        d.classList.remove("active");
      });
    }

    // Reset dropdowns on mobile if we're switching from desktop
    if (window.innerWidth <= 968) {
      // Close all dropdowns initially
      document.querySelectorAll(".dropdown").forEach((d) => {
        d.classList.remove("active");
      });
    }
  });

  // Initialize for mobile on page load
  if (window.innerWidth <= 968) {
    // Close all dropdowns initially
    document.querySelectorAll(".dropdown").forEach((d) => {
      d.classList.remove("active");
    });
  }

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".dropdown") &&
      !e.target.closest(".dropdown-toggle")
    ) {
      document.querySelectorAll(".dropdown").forEach((d) => {
        d.classList.remove("active");
      });
    }
  });
});
