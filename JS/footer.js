(function () {
    emailjs.init("PbALyatrigVmO9r-r");
})();

// Evento de envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar la recarga de la página

    // Obtener el correo del usuario
    var userEmail = document.getElementById('user_email').value;

    // Parámetros para la plantilla de EmailJS
    var templateParams = {
      user_email: userEmail, // El correo del usuario
      to_name: "Usuario", // Puedes personalizar esto si quieres poner el nombre del usuario
    };

    // Enviar el correo utilizando EmailJS
    emailjs.send('service_s0dns3j', 'template_h4zeirb', templateParams);
  });

document.addEventListener("DOMContentLoaded", function () {
    const mailLove1 = document.getElementById('mailLove1');
    const mailLove2 = document.getElementById('mailLove2');
    const submitFooter = document.getElementById('submitFooter');

    const scaleNormal = 'scale(1)';
    const scaleHover = 'scale(1.1)';

    mailLove1.style.transition = 'transform 0.3s ease';
    mailLove2.style.transition = 'transform 0.3s ease';

    function scaleUp() {
        mailLove1.style.transform = scaleHover;
        mailLove2.style.transform = scaleHover;
    }

    function scaleDown() {
        mailLove1.style.transform = scaleNormal;
        mailLove2.style.transform = scaleNormal;
    }

    submitFooter.addEventListener('mouseenter', scaleUp);
    submitFooter.addEventListener('mouseleave', scaleDown);
});

var fecha = new Date();
var fechaAño = fecha.getFullYear();
const date = document.getElementById('date').textContent = fechaAño;