# Iron Peak Fitness

A fully responsive, multi-page gym website built with HTML, CSS and vanilla JavaScript. It was my first proper portfolio project, and I used it to get hands-on with responsive layouts, DOM manipulation, accessibility, and multi-page navigation.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Live Demo

[View the live site](https://kyleharperdev.github.io/gym-page/)

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Main landing page with all sections |
| `contact.html` | Contact form with validation |
| `checkout.html` | Plan-driven checkout flow |

---

## Features

**Navigation**
- Sticky navbar with active link highlighting via IntersectionObserver
- Hamburger menu for mobile with smooth slide animation
- Closes automatically on link tap

**Home Page**
- Hero section with gradient overlay
- Scroll-triggered fade-in animations throughout
- Programs grid with background image cards
- Three-tier pricing section with differentiated plans
- Customer testimonials
- Full footer with quick links, useful links, and contact info

**Modals**
- Privacy Policy, Terms & Conditions, FAQs, Membership Agreement
- Opens via footer links, closes on button click, overlay click, or Escape key

**Contact Page**
- Form validation — highlights empty fields, checks email format
- Thank you modal on successful submission

**Checkout Page**
- Plan name and price dynamically populated from URL parameter (`?plan=personal`)
- Three-step flow: Order Summary → Payment Details → Success Screen
- Payment form validation before proceeding

**Code Quality**
- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<footer>`, `<form>`)
- Accessible forms with `<label>` tags and `autocomplete` attributes
- `aria-hidden` on decorative icons, `aria-label` on interactive elements
- `role="img"` and `aria-label` on star ratings
- CSS custom properties for colours and consistent theming
- Keyboard navigation support including Escape to close modals
- `<meta>` description tags on all pages

---

## Responsive Design

| Breakpoint | Layout changes |
|-----------|---------------|
| `1100px` | Hamburger menu, grids collapse, about section stacks |
| `768px` | Full-width hero, details stack, footer stacks to single column |
| `480px` | Font size adjustments |

---

## Project Structure

```
Iron-Peak/
├── index.html
├── contact.html
├── checkout.html
├── CSS/
│   └── style.css
├── JS/
│   ├── app.js
│   ├── contact.js
│   └── checkout.js
└── Images/
    ├── JoinUsBG.jpg
    ├── BG1.jpg
    ├── GRID1.jpg
    ├── GRID2.jpg
    ├── GRID3.jpg
    ├── GRID4.jpg
```

---

## What I Learned

- Responsive layout with CSS Flexbox and Grid
- IntersectionObserver API for scroll animations and active nav tracking
- URL parameters for passing data between pages
- Modal systems built with vanilla JS
- Form validation without libraries
- Semantic HTML and web accessibility basics
- CSS custom properties and media query structure
- Hamburger menu with smooth CSS transition animation
- Git version control workflow

---

## About

Built by me — a self-taught frontend developer, around three months into learning HTML, CSS and JavaScript. I wrote the project throughout and used AI only for a final review and polish pass at the end.

---

## Disclaimer

Iron Peak Fitness is a fictional brand. All business details, testimonials, pricing, and content are for demonstration purposes only. The checkout flow does not process real payments.
