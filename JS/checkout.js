// ─── Populate order summary from URL params ───────────────────────────────────

const params = new URLSearchParams(window.location.search);
const plan = params.get('plan');

const plans = {
    personal:     { name: 'Personal',     price: '$49.99',  billing: 'Per Month' },
    enterprise:   { name: 'Enterprise',   price: '$69.99',  billing: 'Per Month' },
    professional: { name: 'Professional', price: '$129.99', billing: 'Per Month' },
    class:        { name: 'Class Pass',   price: '$19.99',  billing: 'Per Session' }
};

const selected = plans[plan] || plans.personal;

document.getElementById("plan-name").textContent = selected.name;
document.getElementById("plan-price").textContent = selected.price;
document.getElementById("plan-billing").textContent = selected.billing;

// ─── Step 1 → Step 2 ──────────────────────────────────────────────────────────

document.getElementById("proceed-btn").addEventListener("click", () => {
    document.getElementById("step-summary").classList.add("hidden-step");
    document.getElementById("step-payment").classList.remove("hidden-step");
});

// ─── Step 2 → Step 3 (with basic payment validation) ─────────────────────────

const paymentForm = document.getElementById("step-payment");

paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = paymentForm.querySelectorAll("input");
    let isValid = true;

    inputs.forEach(input => {
        input.classList.remove("input-error");
        if (input.value.trim() === "") {
            isValid = false;
            input.classList.add("input-error");
        }
    });

    if (!isValid) return;

    document.getElementById("step-payment").classList.add("hidden-step");
    document.getElementById("step-success").classList.remove("hidden-step");
});
