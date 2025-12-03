const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
    let currentId = "";
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        if (scrollY >= offsetTop - 120) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("nav-link-active");
        const href = link.getAttribute("href");
        if (href && href.slice(1) === currentId) {
            link.classList.add("nav-link-active");
        }
    });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);
const navToggle = document.querySelector(".nav-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (navToggle && navLinksContainer) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-open");
        navLinksContainer.classList.toggle("nav-open");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("is-open");
            navLinksContainer.classList.remove("nav-open");
        });
    });
}