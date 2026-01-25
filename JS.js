 document.addEventListener("DOMContentLoaded", () => {
          // Mobile menu toggle
          const hamburger = document.getElementById("hamburger")
          const navLinks = document.getElementById("navlinks")

          if (hamburger && navlinks) {
            hamburger.addEventListener("click", () => {
              hamburger.classList.toggle("active")
              navLinks.classList.toggle("active")
            })
          }
