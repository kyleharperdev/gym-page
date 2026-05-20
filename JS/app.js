const cards = document.querySelectorAll(".hidden");

const sections = document.querySelectorAll(
    ".join-us-section, .about-us-section, .program-section, .pricing-section"
);
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });
}, {
    threshold: 0.2
})

cards.forEach((card) => {
    observer.observe(card);
});

window.addEventListener("scroll", () => {

    let top = window.scrollY;

    sections.forEach((section) => {

        let offset = section.offsetTop - 230;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach((link) => {
                link.classList.remove("active-link");
            });

            document
                .querySelector(`.nav-link[href="#${id}"]`)
                .classList.add("active-link");
        }

    });

});