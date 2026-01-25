document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const hamburger = document.getElementById("hamburger")
    const navLinks = document.getElementById("navLinks")

    if (hamburger && navLinks) {
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

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-item")) {
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.classList.remove("active")
            })
        }
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (navLinks && navLinks.classList.contains("active") && !e.target.closest(".navbar")) {
            hamburger.classList.remove("active")
            navLinks.classList.remove("active")
        }
    })
    const container = document.querySelector('.TestCard');
    const cards = document.querySelectorAll('.TestCard > div');
    const dots = document.querySelectorAll('.dot');
    let index = 0;

    function updateScroll() {
        container.scrollTo({
            left: cards[index].offsetLeft,
            behavior: 'smooth'
        });

        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    document.querySelector('.arrow.right').addEventListener('click', () => {
        index = (index + 1) % cards.length;
        updateScroll();
    });

    document.querySelector('.arrow.left').addEventListener('click', () => {
        index = (index - 1 + cards.length) % cards.length;
        updateScroll();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            updateScroll();
        });
    });

    // Newsletter form
    const newsletterForm = document.getElementById("newsletterForm")
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault()

            const email = document.getElementById("email").value

            fetch("http://127.0.0.1:5500/newsletter", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email
                    }),
                })
                .then((response) => response.json())
                .then((data) => {
                    alert(data.message || "Successfully subscribed!")
                    newsletterForm.reset()
                })
                .catch((error) => {
                    console.error("Error:", error)
                    alert("Failed to subscribe. Please try again.")
                })
        })
    }
})