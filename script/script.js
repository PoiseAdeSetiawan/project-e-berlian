document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');
    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('open');
    });
});