/* ===============================
   ANIMACIÓN DE SECCIONES
================================ */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


/* ===============================
   NAVBAR MOBILE
================================ */

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


