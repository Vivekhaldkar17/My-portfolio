// Mobile Navigation


menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// Automatic copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// =====================================
// 1. Mobile Menu Toggle
// =====================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// =====================================
// 2. Close Menu After Clicking Link
// =====================================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
    });
});

// =====================================
// 3. Current Year in Footer
// =====================================

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// =====================================
// 4. Back to Top Button
// =====================================

const topBtn = document.querySelector("#backToTop");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// =====================================
// 5. Search Articles
// =====================================

const searchInput = document.querySelector("#searchInput");
const articleCards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();

        articleCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();

            card.style.display = cardText.includes(searchText)
                ? "block"
                : "none";
        });
    });
}

// =====================================
// 6. Read More / Read Less
// =====================================

document.querySelectorAll(".read-more-btn").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.previousElementSibling;

        if (!content) return;

        content.classList.toggle("expanded");

        button.textContent = content.classList.contains("expanded")
            ? "Read Less"
            : "Read More";
    });
});

// =====================================
// 7. Contact Form Validation
// =====================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name")?.value.trim();
        const email = document.querySelector("#email")?.value.trim();
        const message = document.querySelector("#message")?.value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields!");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        alert("Thank you! Your form is valid.");

        contactForm.reset();
    });
}

// =====================================
// 8. Smooth Scrolling
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =====================================
// 9. Dark Mode
// =====================================

const themeBtn = document.querySelector("#themeToggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        themeBtn.textContent =
            document.body.classList.contains("dark-mode")
                ? "Light Mode"
                : "Dark Mode";
    });
}

// =====================================
// 10. Welcome Message
// =====================================

console.log("Welcome to My Portfolio Website!");
console.log("JavaScript Successfully Loaded!");
