const cards = document.querySelectorAll(".hidden");

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => animationObserver.observe(card));

const sections = document.querySelectorAll(
    ".join-us-section, .about-us-section, .program-section, .pricing-section, .reviews-section"
);

const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        navLinks.forEach(link => link.classList.remove("active-link"));

        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (activeLink) {
            activeLink.classList.add("active-link");
        }
    });

}, {
    threshold: 0.6
});

sections.forEach(section => navObserver.observe(section));