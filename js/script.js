const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const isExpanded = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isExpanded);
        menuToggle.textContent = isExpanded ? "✕" : "☰";
    });
}

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

const sections = document.querySelectorAll("main section");
const navItems = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((item) => {

        item.classList.remove("active");

        if (item.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }

    });

});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
   Statistics Counter
========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        const suffix = counter.dataset.suffix || "";

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 60));

        const updateCounter = () => {

            current += increment;

            if(current >= target){

                counter.textContent = target + suffix;

                return;

            }

            counter.textContent = current + suffix;

            requestAnimationFrame(updateCounter);

        };

        requestAnimationFrame(updateCounter);

        observer.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
