// ================================
// MENU MOBILE
// ================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


// Fecha o menu ao clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuButton.textContent = "☰";
    });
});


// ================================
// DARK MODE
// ================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");

    if (darkModeEnabled) {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


// Recupera o tema salvo

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
}


// ================================
// ANO AUTOMÁTICO NO FOOTER
// ================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// ================================
// FORMULÁRIO DE CONTATO
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent =
            "Preencha todos os campos.";

        formMessage.style.color = "#d92d20";

        return;
    }

    formMessage.textContent =
        `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;

    formMessage.style.color = "#039855";

    contactForm.reset();
});


// ================================
// ANIMAÇÃO AO ENTRAR NA TELA
// ================================

const animatedElements = document.querySelectorAll(
    ".timeline-item, .skill-card, .education-card, .project-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


// ================================
// CLASSE VISIBLE
// ================================

const style = document.createElement("style");

style.textContent = `
    .timeline-item.visible,
    .skill-card.visible,
    .education-card.visible,
    .project-card.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);
