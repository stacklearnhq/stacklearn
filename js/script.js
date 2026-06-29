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
