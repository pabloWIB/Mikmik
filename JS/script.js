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

const thankContainer =document.getElementById('thankContainer');

const closeWindow = document.getElementById('closeWindow').addEventListener('click', function() {
    alert("Gracias");
    thankContainer.addClassList('Cerrar');
});


function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// VIEWPORT FUNCTION ---

// VIEWPORT ANIMATIONS

function toggleAnimationN1() {
    var targetSection = document.getElementById("mainID1");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    }
}

window.addEventListener("scroll", toggleAnimationN1);
window.addEventListener("resize", toggleAnimationN1);

toggleAnimationN1();

// VIEWPORT ANIMATIONS ---

// VIEWPORT ANIMATIONS

function toggleAnimationN2() {
    var targetSection = document.getElementById("mainID2");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    }
}

window.addEventListener("scroll", toggleAnimationN2);
window.addEventListener("resize", toggleAnimationN2);

toggleAnimationN2();

// VIEWPORT ANIMATIONS ---

// VIEWPORT ANIMATIONS

function toggleAnimationN3() {
    var targetSection = document.getElementById("mainID3");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    }
}

window.addEventListener("scroll", toggleAnimationN3);
window.addEventListener("resize", toggleAnimationN3);

toggleAnimationN3();

// VIEWPORT ANIMATIONS ---

// VIEWPORT ANIMATIONS

function toggleAnimationN4() {
    var targetSection = document.getElementById("mainID4");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    }
}

window.addEventListener("scroll", toggleAnimationN4);
window.addEventListener("resize", toggleAnimationN4);

toggleAnimationN4();

// VIEWPORT ANIMATIONS ---

// VIEWPORT ANIMATIONS

function toggleAnimationN5() {
    var targetSection = document.getElementById("mainID5");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    }
}

window.addEventListener("scroll", toggleAnimationN5);
window.addEventListener("resize", toggleAnimationN5);

toggleAnimationN5();

// VIEWPORT ANIMATIONS ---

// VIEWPORT ANIMATIONS

function toggleAnimationN6() {
    var targetSection = document.getElementById("mainID6");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN2');
    }
}

window.addEventListener("scroll", toggleAnimationN6);
window.addEventListener("resize", toggleAnimationN6);

toggleAnimationN6();

// VIEWPORT ANIMATIONS ---

// VIEWPORT ANIMATIONS

function toggleAnimationN7() {
    var targetSection = document.getElementById("mainID7");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN3');
    }
}

window.addEventListener("scroll", toggleAnimationN7);
window.addEventListener("resize", toggleAnimationN7);

toggleAnimationN7();

// VIEWPORT ANIMATIONS ---

// VIEWPORT ANIMATIONS

function toggleAnimationN8() {
    var targetSection = document.getElementById("mainID8");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN4');
    }
}

window.addEventListener("scroll", toggleAnimationN8);
window.addEventListener("resize", toggleAnimationN8);

toggleAnimationN8();

// VIEWPORT ANIMATIONS ---

// VIEWPORT ANIMATIONS

function toggleAnimationN9() {
    var targetSection = document.getElementById("mainID9");
    var targetSectionSee = document.getElementById("mainID9See");
    if (isElementInViewport(targetSectionSee)) {
        targetSection.classList.add('animationN5');
    }
}

window.addEventListener("scroll", toggleAnimationN9);
window.addEventListener("resize", toggleAnimationN9);

toggleAnimationN9();

// VIEWPORT ANIMATIONS ---

// RESET VIEWPORT ANIMATIONS

const mainID1 = document.getElementById('mainID1');
const mainID2 = document.getElementById('mainID2');
const mainID3 = document.getElementById('mainID3');
const mainID4 = document.getElementById('mainID4');
const mainID5 = document.getElementById('mainID5');
const mainID6 = document.getElementById('mainID6');
const mainID7 = document.getElementById('mainID7');
const mainID8 = document.getElementById('mainID8');
const mainID9 = document.getElementById('mainID9');

function scrollValue() {
    var scroll = window.scrollY;
    if (scroll < 10) {
        mainID1.classList.remove('animationN1');
        mainID2.classList.remove('animationN1');
        mainID3.classList.remove('animationN1');
        mainID4.classList.remove('animationN1');
        mainID5.classList.remove('animationN1');
        mainID6.classList.remove('animationN2');
        mainID7.classList.remove('animationN3');
        mainID8.classList.remove('animationN4');
        mainID9.classList.remove('animationN5');
    }
}

window.addEventListener('scroll', scrollValue);

// RESET VIEWPORT ANIMATIONS ---