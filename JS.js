document.addEventListener("DOMContentLoaded", () => {
      // Mobile menu toggle
      const hamburger = document.getElementById("hamburger")
      const navlinks = document.getElementById("navlinks")

      if (hamburger && navlinks) {
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active")
          navLinks.classList.toggle("active")
        })
      }

      // Dropdown toggles
      document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
        toggle.addEventListener("click", function (e) {
          e.preventDefault()
          e.stopPropagation()

          const menu = this.nextElementSibling

          // Close other dropdowns
          document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
            if (dropdown !== menu) {
              dropdown.classList.remove("active")
            }
          })

          menu.classList.toggle("active")
        })
      })
    })
