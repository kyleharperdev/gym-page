const form = document.getElementById("contact-form");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach(input => {
        // Clear previous error state
        input.classList.remove("input-error");

        if (input.value.trim() === "") {
            isValid = false;
            input.classList.add("input-error");
        } else if (input.type === "email" && !input.value.includes("@")) {
            isValid = false;
            input.classList.add("input-error");
        }
    });

    if (isValid) {
        modal.classList.add("open");
        form.reset();
    }
});

function closeModal() {
    modal.classList.remove("open");
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
