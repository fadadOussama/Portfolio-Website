// Show menu
let navToggle = document.getElementById("nav-toggle");
let navMenu = document.getElementById("nav-menu");
let navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.replace("lg:bottom-[-60%]", "lg:bottom-8");
});

navClose.addEventListener("click", () => {
  navMenu.classList.replace("lg:bottom-8", "lg:bottom-[-60%]");
});

// Remove menu mobile
let navLink = document.querySelectorAll(".nav__link");
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navClose.click();
  });
});

// Swiper projects
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
  mousewheel: true,
  keyboard: true,
});

// Swiper testimonial
var swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Email JS
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (contactName.value === "" || contactEmail.value === "" || contactProject.value === "") {
    // Add or Remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    // Add Message
    contactMessage.textContent = "Write all the input fields 📩";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_xztx6wi", "template_b70dvhv", "#contact-form", "qxK7dvikn010IXcWu").then(
      () => {
        contactMessage.classList.add("color-blue");
        contactMessage.textContent = "Message sent ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      },
      (error) => {
        alert("OOPS! SOMETHING HAS FAILED...", error);
      }
    );

    // Clear all input after response
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
});

// Section Active Link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Scroll Up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// Theme Change
const theme = document.getElementById("theme");
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
  if (themeButton.classList.contains("ri-moon-line")) {
    themeButton.classList.replace("ri-moon-line", "ri-sun-line");
  } else {
    themeButton.classList.replace("ri-sun-line", "ri-moon-line");
  }

  if (theme.classList.contains("dark")) {
    theme.classList.remove("dark");
  } else {
    theme.classList.add("dark");
  }
});

// Add Box Shadow
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", scrollHeader);
