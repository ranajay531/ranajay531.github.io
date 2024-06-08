
/* Hamburger Menu */
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

/* Tabbed Content */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function toggleTab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/* Scroll Reveal */
ScrollReveal({
  reset: true,
  duration: 1000,
  distance: '80px',
  delay: 100
});

ScrollReveal().reveal('.section_text, .contact-text', { origin: 'left' });
ScrollReveal().reveal('.about-text, .tab-links, .tab-contents,', { origin: 'right' });
ScrollReveal().reveal('.about-subtitle, .about-title, .contact-subtitle, .contact-title', { origin: 'top' });
ScrollReveal().reveal('.about-col-1, .swiper', { origin: 'bottom' });

/* Contact Form */

/* Swiper */
const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    950: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});
