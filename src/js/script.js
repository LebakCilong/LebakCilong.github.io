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

// button Expand
const btnFooter = document.querySelector('#profilFooter');
const textFooter = document.querySelector('#textFooter');

const btnBerita1 = document.querySelector('#btnBerita1');
const textBerita1 = document.querySelector('#textBerita1');

const btnBerita2 = document.querySelector('#btnBerita2');
const textBerita2 = document.querySelector('#textBerita2');

let isExpandFooter = false;
let isExpandBerita1 = false;
let isExpandBerita2 = false;

btnFooter.addEventListener('click', function(){
    if (isExpandFooter) {
        textFooter.classList.remove('line-clamp-4');
        btnFooter.textContent = 'Lebih Sedikit';
    } else {
        textFooter.classList.add('line-clamp-4');
        btnFooter.textContent = 'Selengkapnya';
    }
    isExpandFooter = !isExpandFooter;
});

btnBerita1.addEventListener('click', function(){
    if (isExpandBerita1) {
        textBerita1.classList.remove('line-clamp-2');
        btnBerita1.textContent = 'Lebih Sedikit';
    } else {
        textBerita1.classList.add('line-clamp-2');
        btnBerita1.textContent = 'Baca Selengkapnya';
    }
    isExpandBerita1 = !isExpandBerita1;
});

btnBerita2.addEventListener('click', function(){
    if (isExpandBerita2) {
        textBerita2.classList.remove('line-clamp-2');
        btnBerita2.textContent = 'Lebih Sedikit';
    } else {
        textBerita2.classList.add('line-clamp-2');
        btnBerita2.textContent = 'Baca Selengkapnya';
    }
    isExpandBerita2 = !isExpandBerita2;
});
