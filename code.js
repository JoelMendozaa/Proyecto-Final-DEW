const apiKey = 'AIzaSyA4h--ogzJuyRLEhvHP18Uh3ZiIe6K8oko';




let index = 0;

function moverCarrusel(n) {
    const imagenes = document.querySelector('.imagenes');
    const totalImagenes = document.querySelectorAll('.imagenes img').length;

    index += n;

    if (index >= totalImagenes) {
        index = 0;
    } else if (index < 0) {
        index = totalImagenes - 1;
    }

    // Mover el carrusel a la posición correcta
    imagenes.style.transform = `translateX(${-index * 100}%)`;
}

// Iniciar el carrusel automáticamente
setInterval(() => {
    moverCarrusel(1);
}, 3000);