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

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            mobileMenu.classList.remove('open');
            setTimeout(() => {
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }, 300);
        } else {
            mobileMenu.classList.remove('open');
        }
    });
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalClose = document.getElementById("modal-close");
const modalBody = document.getElementById("modal-body");

const modalContent = {
    privacy: {
        title: 'Privacy Policy',
        body: `
            <p>Last updated: January 2025</p><br>
            <p>At Iron Peak Fitness, we are committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights.</p><br>
            <h3>What We Collect</h3><br>
            <p>We may collect your name, email address, phone number, billing information, and fitness preferences when you register or purchase a membership.</p><br>
            <h3>How We Use It</h3><br>
            <p>Your data is used to manage your membership, process payments, send relevant communications, and improve our services. We do not sell your data to third parties.</p><br>
            <h3>Data Storage</h3><br>
            <p>All personal data is stored securely and retained only for as long as necessary to fulfil the purposes outlined in this policy or as required by law.</p><br>
            <h3>Your Rights</h3><br>
            <p>You have the right to access, correct, or request deletion of your personal data at any time. Contact us at info@ironpeakfitness.co.uk to make a request.</p><br>
            <h3>Cookies</h3><br>
            <p>Our website uses cookies to improve your browsing experience. You can disable cookies in your browser settings, though some features may not function correctly as a result.</p><br>
            <p>If you have any questions about this policy, please contact us at info@ironpeakfitness.co.uk.</p>
        `
    },

    terms: {
        title: 'Terms & Conditions',
        body: `
            <p>Last updated: January 2025</p><br>
            <p>By using Iron Peak Fitness services, you agree to the following terms. Please read them carefully before purchasing a membership.</p><br>
            <h3>Membership</h3><br>
            <p>Memberships are personal and non-transferable. You are responsible for maintaining the confidentiality of your account credentials. Iron Peak Fitness reserves the right to suspend or terminate accounts found to be in breach of these terms.</p><br>
            <h3>Payments</h3><br>
            <p>All membership fees are billed monthly in advance. Payments are non-refundable except where required by law. Failed payments may result in temporary suspension of access.</p><br>
            <h3>Cancellation</h3><br>
            <p>You may cancel your membership at any time with 30 days written notice. Cancellations must be submitted via email to info@ironpeakfitness.co.uk or in person at reception.</p><br>
            <h3>Conduct</h3><br>
            <p>Members are expected to treat staff and fellow members with respect. Iron Peak Fitness reserves the right to terminate memberships without refund in cases of misconduct, harassment, or damage to property.</p><br>
            <h3>Liability</h3><br>
            <p>Iron Peak Fitness is not liable for personal injury, loss, or damage to property sustained on the premises, except where caused by our negligence. Members participate in all activities at their own risk.</p><br>
            <p>These terms are governed by the laws of England and Wales.</p>
        `
    },

    faq: {
        title: 'FAQs',
        body: `
            <h3>How do I cancel my membership?</h3><br>
            <p>You can cancel at any time by emailing info@ironpeakfitness.co.uk or speaking to a member of staff at reception. We require 30 days notice before your next billing date.</p><br>
            <h3>Can I freeze my membership?</h3><br>
            <p>Yes. Members can freeze their membership for up to 3 months per year. Contact reception or email us to request a freeze. Billing is paused for the duration.</p><br>
            <h3>What are your opening hours?</h3><br>
            <p>We are open Monday to Friday 6am–10pm, Saturday 7am–8pm, and Sunday 8am–6pm. Professional plan members have 24/7 key fob access.</p><br>
            <h3>Do I need to book classes in advance?</h3><br>
            <p>Enterprise and Professional members can book classes up to 7 days in advance through the member app. Personal plan members can book 48 hours in advance on a first-come, first-served basis.</p><br>
            <h3>Is there parking available?</h3><br>
            <p>Yes, we have a free car park with 40 spaces directly outside the gym on Forge Street. Additional street parking is available nearby.</p><br>
            <h3>Can I bring a guest?</h3><br>
            <p>Members on the Enterprise or Professional plan can bring one guest per month at no extra charge. Additional guest passes can be purchased at reception for £8 per visit.</p>
        `
    },

    membership: {
        title: 'Membership Agreement',
        body: `
            <p>This agreement is between you (the Member) and Iron Peak Fitness, 14 Forge Street, Wolverhampton, WV1 3DT.</p><br>
            <h3>Agreement Start</h3><br>
            <p>Your membership begins on the date your first payment is processed. You will receive a confirmation email with your account details and access instructions within 24 hours.</p><br>
            <h3>Minimum Term</h3><br>
            <p>There is no minimum contract period. All memberships are rolling monthly and can be cancelled at any time with 30 days notice.</p><br>
            <h3>Access</h3><br>
            <p>Upon joining you will be issued a key fob or QR code for gym access. Lost or damaged access cards may be replaced for a £5 fee. Access is granted to the Wolverhampton site only unless otherwise stated in your plan.</p><br>
            <h3>Health & Safety</h3><br>
            <p>Members must complete a health questionnaire before using the gym floor. If you have any pre-existing medical conditions, we recommend consulting your GP before beginning an exercise programme. Iron Peak Fitness staff are trained in first aid and a defibrillator is located at reception.</p><br>
            <h3>Amendments</h3><br>
            <p>Iron Peak Fitness reserves the right to amend membership fees or terms with 30 days written notice. Continued use of the gym after the notice period constitutes acceptance of the updated terms.</p><br>
            <h3>Governing Law</h3><br>
            <p>This agreement is governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        `
    }
}

function openModal(type) {
    modalTitle.textContent = modalContent[type].title;
    modalBody.innerHTML = modalContent[type].body;
    modal.classList.add('open');
}

modalClose.addEventListener("click", () => modal.classList.remove('open'));
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove('open');
});
