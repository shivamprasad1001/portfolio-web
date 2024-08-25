// scripts.js

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Downscroll
        header.classList.add('hidden');
    } else {
        // Upscroll
        header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

const hexValues = () => {
    const hexColorValue = '0123456789abcdef';
    let hexColor = '#';
    for(let i=0; i<6; i++){
     let randomIndex = Math.floor(Math.random() * hexColorValue.length);
     hexColor = hexColor+hexColorValue[randomIndex];
     
    }
    return hexColor;
 }
 const BGcolor = () => {
    let hex = hexValues();
    color1 = hex;
    color2 = hexValues();
    document.body.style.backgroundImage = `linear-gradient(to right top,${color1}, ${color2} )`;

}
setInterval(()=>{
    BGcolor();
}, 30000);
let changeColorHero = document.getElementById("ch-icon-Box");
let hero =  document.getElementsByTagName('body');
changeColorHero.addEventListener('click', () =>{
    BGcolor();
});


let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let dots1 = document.getElementsByClassName("dot1");
let slides1 = document.getElementsByClassName("slide1");
let slideIndex = 1;
showSlides(slideIndex);
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 4000);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}

