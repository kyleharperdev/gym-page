const homeBtn = document.getElementById("home-btn");

homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
})

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalClose = document.getElementById("modal-close");
const modalBody = document.getElementById("modal-body");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll('.form-contents input, .form-contents textarea');
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        }
    });

    if (allFilled) {
        modal.classList.add('open');
    }
});

modalClose.addEventListener("click", () => modal.classList.remove('open'));
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove('open');
});
