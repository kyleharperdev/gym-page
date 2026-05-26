const params = new URLSearchParams(window.location.search);
const plan = params.get('plan');
 
const plans = {
    personal:     { name: 'Personal',     price: '$49.99',  billing: 'Per Month' },
    enterprise:   { name: 'Enterprise',   price: '$69.99',  billing: 'Per Month' },
    professional: { name: 'Professional', price: '$129.99', billing: 'Per Month' },
    class:        { name: 'Class Pass',   price: '$19.99',  billing: 'Per Session' }
};
 
const selected = plans[plan] || plans.personal;

const planName = document.getElementById("plan-name").textContent = selected.name;
const planPrice = document.getElementById("plan-price").textContent = selected.price;
const planBilling = document.getElementById("plan-billing").textContent = selected.billing;

document.getElementById("proceed-btn").addEventListener("click", () => {
    document.getElementById("step-summary").classList.add("hidden-step");
    document.getElementById("step-payment").classList.remove("hidden-step");
});

document.getElementById("pay-btn").addEventListener("click", () => {
    document.getElementById("step-payment").classList.add("hidden-step");
    document.getElementById("step-success").classList.remove("hidden-step");
});

document.getElementById("home-btn").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("nav-homebtn").addEventListener("click", () => {
    window.location.href = "index.html";
})