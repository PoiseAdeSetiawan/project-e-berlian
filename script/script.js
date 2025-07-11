//hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.querySelector('.navigation');
    const navItems = document.querySelectorAll('.navigation_item-right .navigation_item');

    hamburger.addEventListener('click', function () {
        navigation.classList.toggle('open');
    });

    // Close nav menu on item click (for mobile)
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            if (window.innerWidth <= 970) {
                navigation.classList.remove('open');
            }
        });
    });

    // Scroll registration/announcement to center of viewport
    document.querySelectorAll('.navigation_item[href="#registration"], .navigation_item[href="#announcement"]').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('#', '');
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            // Optionally close nav on mobile
            if (window.innerWidth <= 970) {
                navigation.classList.remove('open');
            }
        });
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
    window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSfMO0cmpBuEsthhCUR_yFL7u_u-cFLhrWP8L4rUzM6dDtuvGg/viewform?usp=dialog',
        '_blank'
    );
}
function redirectToAnnouncement() {
window.open(
        'http://192.168.10.89/file-updown/login.php',
        '_blank'
    );
}

//whatsapp buble
function redirectToWhatsApp() {
    window.location.href = 'https://wa.me/62895640966000';
}