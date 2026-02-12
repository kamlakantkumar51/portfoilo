const anchors = document.querySelectorAll('.navbar a');
anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector('.navbar a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
};

const text = "MERN Stack Developer";
const element = document.querySelector(".home-content span");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch("https://formspree.io/f/xreaeolz", {
        method: "POST",
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
    .then(response => {
        if (response.ok) {
            status.innerHTML = "Message sent successfully!!";
            form.reset();
        } else {
            status.innerHTML = "Try again";
        }
    })
    .catch(() => {
        status.innerHTML = "Network error. Try again.";
    });
});

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.skills h2, .projects h2, #dsa h2, .contact h2', { origin: 'top' });
ScrollReveal().reveal('.skill, .project-card, .dsa-card, .contact form', { origin: 'bottom', interval: 150 });
