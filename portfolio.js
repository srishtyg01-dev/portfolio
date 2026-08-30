document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector("#portfolioNav");

    function updateActiveLink() {
        let currentSection = "home";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 140;
            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${currentSection}`
            );
        });

        navbar.classList.toggle("scrolled", window.scrollY > 30);
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (menu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });

    const year = document.querySelector("footer p");
    if (year) {
        year.innerHTML = `© ${new Date().getFullYear()} Srishty Gupta. Crafted with curiosity.`;
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});