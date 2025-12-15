 let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const navigationContainer = document.getElementById('navigation');
        const progressBar = document.getElementById('progressBar');
        let autoSlideInterval;
        let progressInterval;

        // Create navigation dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('nav-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            navigationContainer.appendChild(dot);
        });

        const navDots = document.querySelectorAll('.nav-dot');

        function updateSlide() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                navDots[index].classList.remove('active');
            });
            
            slides[currentSlide].classList.add('active');
            navDots[currentSlide].classList.add('active');
        }

        function changeSlide(direction) {
            currentSlide += direction;
            
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            
            updateSlide();
            resetAutoSlide();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlide();
            resetAutoSlide();
        }

        function startProgressBar() {
            let width = 0;
            progressInterval = setInterval(() => {
                width += 0.5;
                progressBar.style.width = width + '%';
                if (width >= 100) {
                    changeSlide(1);
                }
            }, 30);
        }

        function resetProgressBar() {
            clearInterval(progressInterval);
            progressBar.style.width = '0%';
        }

        function resetAutoSlide() {
            resetProgressBar();
            startProgressBar();
        }

        // Start auto-slide
        startProgressBar();

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });

        // Pause on hover
        document.querySelector('.slider-container').addEventListener('mouseenter', () => {
            resetProgressBar();
        });

        document.querySelector('.slider-container').addEventListener('mouseleave', () => {
            startProgressBar();
        });

        // Add this script before the closing </body> tag or in a separate JS file


          const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      const hamburgerIcon = document.querySelector(
        ".hamburger .material-icons",
      );

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
      if (window.innerWidth <= 968) {
        const dropdownToggle = document.querySelector(".dropdown-toggle");
        const dropdown = document.querySelector(".dropdown");

        dropdownToggle.addEventListener("click", (e) => {
          e.preventDefault();
          dropdown.classList.toggle("active");
        });
      }

      // Handle window resize
      window.addEventListener("resize", () => {
        if (window.innerWidth > 968) {
          navMenu.classList.remove("active");
          hamburger.classList.remove("active");
        }
      });