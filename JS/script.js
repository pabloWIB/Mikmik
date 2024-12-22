$(document).ready(function () {
  var $swiper = $(".swiper-container");
  var $bottomSlide = null;
  var $bottomSlideContent = null;

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 10,
    slidesPerView: 4,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      // Para pantallas pequeñas (hasta 480px)
      480: {
        slidesPerView: 1,
        spaceBetween: 6,
      },
      // Para pantallas medianas (hasta 768px)
      768: {
        slidesPerView: 1.5,
        spaceBetween: 7,
      },
      // Para pantallas grandes (mayores a 768px)
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 8,
      },
      // Para pantallas extra grandes (mayores a 1200px)
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 3.5,
        spaceBetween: 12,
      }
    }
  });
});

const closeWindow = document.getElementById('closeWindow');
const thankContainer = document.getElementById('thankContainer');
let formSubmitted = false; // Variable para rastrear si un formulario fue enviado

function showThankYou() {
  thankContainer.classList.remove('Cerrar');
  thankContainer.classList.add('thank-you-container-show');
}

function hideThankYou() {
  thankContainer.classList.remove('thank-you-container-show');
  thankContainer.classList.add('Cerrar');
}

closeWindow.addEventListener('click', hideThankYou);

emailjs.init('xLEH9I00DLXELEvbs');

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'שולח...';

  const serviceID = 'default_service';
  const templateID = 'template_bl3gc3t';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'שלח';
      formSubmitted = true; // Marcar que un formulario fue enviado
      showThankYou();
    }, (err) => {
      btn.value = 'שלח';
      alert(JSON.stringify(err));
    });
});

const btn2 = document.getElementById('button2');

document.getElementById('form2').addEventListener('submit', function (event) {
  event.preventDefault();

  btn2.value = 'שולח...';

  const serviceID = 'default_service';
  const templateID = 'template_vqfykbp';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn2.value = 'שלח';
      formSubmitted = true; // Marcar que un formulario fue enviado
      showThankYou();
    }, (err) => {
      btn2.value = 'שלח';
      alert(JSON.stringify(err));
    });
});

let showModal = true;
const modal = document.getElementById('exitModal');
const closeBtn = document.querySelector('.close');

// Show modal when mouse leaves the viewport from the top
document.addEventListener('mouseleave', (e) => {
  // Solo mostrar el modal si no se ha enviado ningún formulario y showModal es true
  if (e.clientY <= 0 && showModal && !formSubmitted) {
    modal.style.display = 'block';
    showModal = false; // Only show once per session
  }
});

// Close modal when clicking the close button
closeBtn.onclick = () => {
  modal.style.display = 'none';
};

// Close modal when clicking outside
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

// VIEWPORT FUNCTION
function isElementInViewport(element) {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top <= windowHeight &&
    rect.bottom >= 0 &&
    rect.left <= windowWidth &&
    rect.right >= 0
  );
}

// Single function to handle all animations
function toggleAnimation(elementId) {
  const targetSection = document.getElementById(elementId);

  if (!targetSection) {
    console.error(`Element ${elementId} not found`);
    return;
  }

  if (isElementInViewport(targetSection)) {
    targetSection.classList.add('animationN1');
  } else {
    targetSection.classList.remove('animationN1');
  }
}

// Array of all animation elements
const animationElements = [
  'mainAnimation1',
  'mainAnimation2',
  'mainAnimation3',
  'mainAnimation4',
  'mainAnimation5',
  'mainAnimation6',
  'mainAnimation7',
  'mainAnimation8',
  'mainAnimation9'
];

function scrollHandler() {
  animationElements.forEach(elementId => toggleAnimation(elementId));
}

// Event listeners
window.addEventListener("scroll", scrollHandler);
window.addEventListener("resize", scrollHandler);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  animationElements.forEach(elementId => toggleAnimation(elementId));
});