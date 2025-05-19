//hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');
    hamburger.addEventListener('click', function () {
        navigation.classList.toggle('open');
    });
});

//whatsapp buble
function redirectToWhatsApp() {
    window.location.href = 'https://wa.me/62895640966000';
}