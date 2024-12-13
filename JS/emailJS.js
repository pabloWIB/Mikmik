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
            alert('תודה על המידע! ניצור קשר בקרוב. צוות מיקמיק');
        }, (err) => {
            btn.value = 'שלח';
            alert(JSON.stringify(err));
        });
});


const btn2 = document.getElementById('button2');

document.getElementById('form2').addEventListener('submit', function(event) {
   event.preventDefault();

   btn2.value = 'שולח...';

   const serviceID = 'default_service';
   const templateID = 'template_vqfykbp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn2.value = 'שלח';
      alert('תודה על המידע! ניצור קשר בקרוב. צוות מיקמיק');
    }, (err) => {
      btn2.value = 'שלח';
      alert(JSON.stringify(err));
    });
});