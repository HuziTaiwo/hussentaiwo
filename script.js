const nav = document.querySelector('.links');
const burger = document.querySelector('.hamburger');
const logo = document.querySelector('.ht');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    if(nav.classList.contains('active')) {
        burger.src = './icons/close.svg';
        logo.src = './icons/logo-dark.svg';
    } else {
        burger.src = './icons/Hamburger.svg';
        logo.src = './icons/logo.svg';
    }
});

nav.addEventListener('click', () => {
    nav.classList.remove('active')
    burger.src = './icons/Hamburger.svg';
    logo.src = './icons/logo.svg';
});

