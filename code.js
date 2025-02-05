const apiKey = 'AIzaSyA4h--ogzJuyRLEhvHP18Uh3ZiIe6K8oko';
const API_URL = "https://translation.googleapis.com/v3/projects/PROYECTO_DEW:translateText"


let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carrusel-slide');
    const totalSlides = slides.length;

    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.carrusel-container').style.transform = `translateX(${offset}%)`;
}

// Opcional: Auto-play del carrusel
function autoPlay() {
    moveSlide(1);
}

setInterval(autoPlay, 5000); // Cambia de slide cada 5 segundos
