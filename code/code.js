// Variables globales
let slideIndex = 0;
let cartCount = 0;

// Funciones del carrusel
function moveSlide(n) {
    const slides = document.querySelectorAll(".carrusel-slide");
    const totalSlides = slides.length;

    slideIndex += n;

    // Manejo del loop del carrusel
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector(".carrusel-container").style.transform = `translateX(${offset}%)`;
}

// Auto-play del carrusel
function autoPlay() {
    moveSlide(1);
}
setInterval(autoPlay, 5000);

// Manejo de popups
function showPopup(title, imgSrc, desc) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");
    const popupDesc = document.getElementById("popup-desc");
    
    // Establecer el contenido
    popupTitle.textContent = title;
    popupDesc.textContent = desc;
    
    // Asegurar que la imagen esté cargada antes de mostrar el popup
    popupImg.onload = function() {
        popup.style.display = 'block';
    };
    
    // Establecer la fuente de la imagen
    popupImg.src = imgSrc;
    
    // Mostrar popup incluso si la imagen falla al cargar
    popupImg.onerror = function() {
        console.error('Error al cargar la imagen:', imgSrc);
        popup.style.display = 'block';
    };
}

function closePopup(type) {
    if (type === 'login') {
        document.getElementById('popup-login').style.display = 'none';
    } else if (type === 'register') {
        document.getElementById('popup-register').style.display = 'none';
    } else {
        document.getElementById('popup').style.display = 'none';
    }
}

// Funciones del carrito
function addToCart() {
    cartCount++;
    const cartCounter = document.getElementById("cart-counter");
    cartCounter.textContent = cartCount;
    cartCounter.classList.remove("d-none");
}

// Funciones de login y registro
function showPopupLogin() {
    document.getElementById('popup-login').style.display = 'block';
    document.getElementById('popup-register').style.display = 'none'; // Cerrar registro si está abierto
}

function showPopupRegister() {
    document.getElementById('popup-register').style.display = 'block';
    document.getElementById('popup-login').style.display = 'none'; // Cerrar login si está abierto
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Cerrar popups al hacer clic fuera
    window.onclick = function(event) {
        if (event.target.classList.contains('popup')) {
            closePopup(event.target.id.replace('popup-', ''));
        }
    };

    // Manejar envío de formulario de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí puedes agregar la lógica para procesar el login
            const formData = new FormData(loginForm);
            const email = formData.get('correo_electronico');
            const password = formData.get('contrasena');
            
            console.log('Intento de login:', { email, password });
            // Aquí irían las llamadas a tu backend
            
            closePopup('login');
        });
    }

    // Manejar envío de formulario de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí puedes agregar la lógica para procesar el registro
            const formData = new FormData(registerForm);
            const userData = {
                nombre: formData.get('nombre'),
                dni: formData.get('dni'),
                email: formData.get('correo_electronico'),
                cuenta: formData.get('cuenta_bancaria'),
                telefono: formData.get('telefono'),
                password: formData.get('contrasena')
            };
            
            console.log('Intento de registro:', userData);
            // Aquí irían las llamadas a tu backend
            
            closePopup('register');
        });
    }
});

// Manejo de traducciones (si lo necesitas)
document.getElementById('idioma-select')?.addEventListener('change', function(e) {
    const selectedLanguage = e.target.value;
    // Aquí iría tu lógica de cambio de idioma
    console.log('Cambiando idioma a:', selectedLanguage);
});

// Función para validar formularios (opcional)
function validateForm(formData) {
    const email = formData.get('correo_electronico');
    const password = formData.get('contrasena');

    if (!email || !password) {
        alert('Por favor, rellena todos los campos');
        return false;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un email válido');
        return false;
    }

    // Validación básica de contraseña
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return false;
    }

    return true;
}