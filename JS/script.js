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
const thankContainer = document.getElementById('thankContainer'); // Ensure this is correctly defined

closeWindow.addEventListener('click', function() {
    thankContainer.classList.add('Cerrar');
});
