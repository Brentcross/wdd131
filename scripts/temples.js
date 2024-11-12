document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("last-modified");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});

const hamburgerButton = document.getElementById("hamburger-button");
const navMenu = document.querySelector("nav ul");

hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("visible");
    hamburgerButton.textContent = navMenu.classList.contains("visible") ? "X" : "☰";
});
