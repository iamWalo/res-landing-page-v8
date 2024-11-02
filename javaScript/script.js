
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});
// side bar

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const navLinks = document.querySelector('div.nav-links');
menuOpen.addEventListener('click', () => {
    navLinks.style.display = 'flex';
    navLinks.style.transform = 'translateY(0%)';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'flex';

})
menuClose.addEventListener('click', () => {
    navLinks.style.display = 'none';
    menuOpen.style.display = 'flex';
    menuClose.style.display = 'none';
    navLinks.style.transform = 'translateY(-215%)';
})
// document.addEventListener('click', function (event) {
//     const isClickInside = navLinks.contains(event.target) || menuOpen.contains(event.target);
//     if (!isClickInside) {
//         nav - links.classList.remove('show-nav-links');
//     }
// })
// vedios animations
const videos = document.querySelectorAll('.myVideo');
videos.forEach(video => {

    video.currentTime = 1.58;
    video.addEventListener('mouseover', () => {
        video.currentTime = 0;

        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.currentTime = 1.58;
        video.pause();
    });
});
// nav bar  animation
const buttons = document.querySelectorAll('nav-links nav ul li a');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.classList.remove('clicked');
        button.classList.add('clicked');
    })
})
// about Us slider 
