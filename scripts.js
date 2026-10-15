import testimonials from "./data.js";

const openNavBtn = document.getElementById("open-nav");
const closeNavBtn = document.getElementById("close-nav");
const NavBar = document.getElementById("mobile-nav");
const mobBlur = document.getElementById("filter");

openNavBtn.addEventListener("click", () => {
  NavBar.classList.add("show");
  mobBlur.classList.add("mobile-blur");
});

closeNavBtn.addEventListener("click", closeNav);
NavBar.addEventListener("click", closeNav);
mobBlur.addEventListener("click", closeNav);

function closeNav() {
  NavBar.classList.remove("show");
  mobBlur.classList.remove("mobile-blur");
}

const quoteElement = document.getElementById("quote");
const guestName = document.getElementById("guest-name");
const guestRole = document.getElementById("guest-role");
const guestImage = document.getElementById("guest-img");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const nextBt = document.getElementById("next-bt");
const prevBt = document.getElementById("prev-bt");
const guest = document.querySelector(".guest");
const guestShot = document.getElementById("guest-shot");
let index = 0;

// OnLoad
renderHtml();

nextBtn.addEventListener("click", (event) => {
  index = (index + 1) % testimonials.length;
  renderHtml();
});

prevBtn.addEventListener("click", (event) => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  console.log(index);
  renderHtml();
});

nextBt.addEventListener("click", (event) => {
  index = (index + 1) % testimonials.length;
  renderHtml();
});

prevBt.addEventListener("click", (event) => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  console.log(index);
  renderHtml();
});

function renderHtml() {
  const currentElement = testimonials[index];
  quoteElement.innerHTML = `<span>“</span> ${currentElement.testimonial}`;
  guestName.innerHTML = currentElement.guest;
  guestRole.innerHTML = currentElement.role;
  guestImage.setAttribute("src", `./assets/guest/${currentElement.imgProfile}`);
  guestShot.setAttribute("src", `./assets/shot/${currentElement.imgCafe}`);

  // Restart the animation
  quoteElement.classList.remove("animate");
  void quoteElement.offsetWidth;
  quoteElement.classList.add("animate");

  guest.classList.remove("animate");
  void guest.offsetWidth;
  guest.classList.add("animate");

  guestShot.classList.remove("animate");
  void guestShot.offsetWidth;
  guestShot.classList.add("animate");
}

//Scroll Animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

revealElements.forEach((element) => {
  observer.observe(element);
});

// Navlink Active tracking
const navLinks = document.querySelectorAll(".primary-nav .nav-link");

const sections = document.querySelectorAll("#home, #menu, #about, #contact");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "-30% 0px -60% 0px",
  },
);

sections.forEach((section) => {
  navObserver.observe(section);
});
