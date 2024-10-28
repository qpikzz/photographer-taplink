const images = [
    "../images/header/1.jpg",
    "../images/header/2.jpg",
    "../images/header/3.jpg",
    "../images/header/4.jpg",
    "../images/header/5.jpg",
    "../images/header/6.jpg",
    "../images/header/7.jpg",
    "../images/header/8.jpg",
    "../images/header/9.jpg",
    "../images/header/10.jpg"
];

let currentIndex = Math.floor(Math.random() * 11);;
let nextIndex = (currentIndex + 1) % images.length;;

function changeBackground() {
    const currentBackground = document.querySelector(`.background${(currentIndex % 2) + 1}`);
    const nextBackground = document.querySelector(`.background${(nextIndex % 2) + 1}`);
    
    nextBackground.style.backgroundImage = `url('${images[nextIndex]}')`;
    currentBackground.classList.add('hidden');
    nextBackground.classList.remove('hidden');

    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % images.length;
}

setInterval(changeBackground, 7000);

changeBackground();