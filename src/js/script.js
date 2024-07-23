// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    document.querySelector('#nav-menu').classList.toggle('hidden');
    document.querySelector('#nav-menu').classList.add('animate__animated');
    document.querySelector('#nav-menu').classList.add('animate__fadeInLeft');
});

function checkScreen() {
    if (window.innerWidth < 768) {
        document.querySelector('#nav-menu').classList.add('animate__animated');
        document.querySelector('#nav-menu').classList.add('animate__fadeInLeft');
    } else {
        document.querySelector('#nav-menu').classList.remove('animate__animated');
        document.querySelector('#nav-menu').classList.remove('animate__fadeInLeft');
    }
}

window.onresize = ('resize', checkScreen);

checkScreen();

// profile footer
const profilFooter = document.querySelector('#profilFooter');
const text = document.querySelector('#textFooter');
let isExpand = false;

profilFooter.addEventListener('click', function(){
    if (isExpand) {
        text.classList.remove('line-clamp-4');
        profilFooter.textContent = 'Lebih Sedikit';
    } else {
        text.classList.add('line-clamp-4');
        profilFooter.textContent = 'Selengkapnya';
    }
    isExpand = !isExpand;
});