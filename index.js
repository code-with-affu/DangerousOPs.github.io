const menubar = document.querySelector(".menubar");
const nav_header = document.querySelector(".header");
const AboutUs = document.querySelector(".AboutUs");

const toggleNavbar = () => {
    nav_header.classList.toggle("active")
};

menubar.addEventListener("click", () => toggleNavbar());

// Sticky Navbar

const hero_Section = document.querySelector(".hero-Section");

const observer = new IntersectionObserver((entries) => {
    const ent = entries [0];
    ent.isIntersecting === false 
    ? document.body.classList.add("sticky")  
    : document.body.classList.remove("sticky")  
}, {
    root: null,
    rootMargin: "-30%",
    threshold: 0,
});

observer.observe(hero_Section);

