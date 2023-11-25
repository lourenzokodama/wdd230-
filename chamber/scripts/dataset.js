document.addEventListener('DOMContentLoaded', function() {
    const mainArea = document.querySelector('.main-area');
    const lastVisitDate = localStorage.getItem('lastVisitDate');

    if (lastVisitDate) {
        const timeDifference = Date.now() - new Date(lastVisitDate).getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            document.querySelector('.sidebar').innerHTML = 'Back so soon! Awesome!';
        } else {
            document.querySelector('.sidebar').innerHTML = `You last visited ${daysDifference} ${daysDifference ===1 ? 'day' : 'days'} ago.`;
        }
    } else {
        document.querySelector('.sidebar').innerHTML = 'Welcome! Let us know if you have any questions.';
    }

    localStorage.setItem('lastVisitDate', Date.now());

    const lazyLoadImages = document.querySelectorAll('img[data-src]');

    function lazyLoad() {
        for (let image of lazyLoadImages) {
            if (image.getBoundingClientRect().top <= window.innerHeight) {
                image.src = image.getAttribute('data-src');
                image.onload = () => image.removeAttribute('data-src');
            }
        }
    }

    lazyLoad();
    window.addEventListener('scroll', lazyLoad);
});
