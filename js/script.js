let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

// Initialize EmailJS with the public key (User ID)
(function(){
    emailjs.init("--0oZCKHxLh1dlFX9"); // Replace 'YOUR_PUBLIC_KEY' with your actual public key from EmailJS
})();

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".team-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const appointmentDate = document.getElementById('appointment-date').value;

    const templateParams = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        number: number,
        appointment_date: appointmentDate
    };

    emailjs.send('service_p53k26w', 'template_u6kfffp', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Appointment request sent successfully!');
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send appointment request.');
        });
});
