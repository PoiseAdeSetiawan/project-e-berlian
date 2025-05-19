//hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');
    hamburger.addEventListener('click', function () {
        navigation.classList.toggle('open');
    });
});

// header button scroll to about section
function smoothScrollTo(element, duration) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Ease function for smoothness
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

//header button click
const headerButton = document.querySelector('.header-button');
const aboutSection = document.querySelector('.about');

headerButton.addEventListener('click', function () {
    smoothScrollTo(aboutSection, 400);
});

//services button
function redirectToRegistration() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfMO0cmpBuEsthhCUR_yFL7u_u-cFLhrWP8L4rUzM6dDtuvGg/viewform?usp=dialog';
}
function redirectToAnnouncement() {
    window.location.href = 'https://drive.google.com/drive/folders/1pvwAKxM6hdMdfYPtXdGCwo4iomabgS7I?usp=sharing';
}

//whatsapp buble
function redirectToWhatsApp() {
    window.location.href = 'https://wa.me/62895640966000';
}