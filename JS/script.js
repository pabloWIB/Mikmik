$(document).ready(function(){$(".swiper-container"),new Swiper(".swiper-container",{spaceBetween:10,slidesPerView:4,centeredSlides:!0,roundLengths:!0,loop:!0,loopAdditionalSlides:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{480:{slidesPerView:1,spaceBetween:6},768:{slidesPerView:1.5,spaceBetween:7},1024:{slidesPerView:2.5,spaceBetween:8},1200:{slidesPerView:3,spaceBetween:10},1400:{slidesPerView:3.5,spaceBetween:12}}})});const closeWindow=document.getElementById("closeWindow"),thankContainer=document.getElementById("thankContainer");let formSubmitted=!1;function showThankYou(){thankContainer.classList.remove("Cerrar"),thankContainer.classList.add("thank-you-container-show")}function hideThankYou(){thankContainer.classList.remove("thank-you-container-show"),thankContainer.classList.add("Cerrar")}closeWindow.addEventListener("click",hideThankYou),emailjs.init("xLEH9I00DLXELEvbs");const btn=document.getElementById("button");document.getElementById("form").addEventListener("submit",function(e){e.preventDefault(),btn.value="שולח...",emailjs.sendForm("default_service","template_bl3gc3t",this).then(()=>{btn.value="שלח",formSubmitted=!0,showThankYou()},e=>{btn.value="שלח",alert(JSON.stringify(e))})});const btn2=document.getElementById("button2");document.getElementById("form2").addEventListener("submit",function(e){e.preventDefault(),btn2.value="שולח...",emailjs.sendForm("default_service","template_vqfykbp",this).then(()=>{btn2.value="שלח",formSubmitted=!0,showThankYou()},e=>{btn2.value="שלח",alert(JSON.stringify(e))})});let showModal=!0;const modal=document.getElementById("exitModal"),closeBtn=document.querySelector(".close");document.addEventListener("mouseleave",e=>{e.clientY<=0&&showModal&&!formSubmitted&&(modal.style.display="block",showModal=!1)}),closeBtn.onclick=()=>{modal.style.display="none"},window.onclick=e=>{e.target===modal&&(modal.style.display="none")};