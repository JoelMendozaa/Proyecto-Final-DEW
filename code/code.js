const BASE_URL = "http://localhost/Proyecto-Final-DEW/";

// Import jQuery
$(document).ready(() => {
  // Variables globales
  let slideIndex = 0;
  let cartCount = 0;

  // Funciones del carrusel
  function moveSlide(n) {
    const $slides = $(".carrusel-slide");
    const totalSlides = $slides.length;

    slideIndex += n;

    // Manejo del loop del carrusel
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }

    const offset = -slideIndex * 100;
    $(".carrusel-container").css("transform", `translateX(${offset}%)`);
  }

  // Auto-play del carrusel
  function autoPlay() {
    moveSlide(1);
  }
  setInterval(autoPlay, 5000);

  // Manejo de popups
  function showPopup(title, imgSrc, desc) {
    const $popup = $("#popup");
    const $popupImg = $("#popup-img");
    const $popupTitle = $("#popup-title");
    const $popupDesc = $("#popup-desc");

    // Establecer el contenido
    $popupTitle.text(title);
    $popupDesc.text(desc);

    // Asegurar que la imagen esté cargada antes de mostrar el popup
    $popupImg
      .on("load", () => {
        $popup.show();
      })
      .on("error", () => {
        console.error("Error al cargar la imagen:", imgSrc);
        $popup.show();
      })
      .attr("src", imgSrc);
  }

  function closePopup(type) {
    if (type === "login") {
      $("#popup-login").hide();
    } else if (type === "register") {
      $("#popup-register").hide();
    } else {
      $("#popup").hide();
    }
  }

  // Funciones del carrito
  function addToCart() {
    cartCount++;
    const $cartCounter = $("#cart-counter");
    $cartCounter.text(cartCount).removeClass("d-none");
  }

  // Funciones de login y registro
  function showPopupLogin() {
    $("#popup-login").show();
    $("#popup-register").hide(); // Cerrar registro si está abierto
  }

  function showPopupRegister() {
    $("#popup-register").show();
    $("#popup-login").hide(); // Cerrar login si está abierto
  }

  // Event Listeners
  // Cerrar popups al hacer clic fuera
  $(window).on("click", (event) => {
    if ($(event.target).hasClass("popup")) {
      closePopup(event.target.id.replace("popup-", ""));
    }
  });

  // Manejar envío de formulario de login
  $("#login-form").on("submit", function (e) {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el login
    const formData = new FormData(this);
    const email = formData.get("correo_electronico");
    const password = formData.get("contrasena");

    console.log("Intento de login:", { email, password });
    // Aquí irían las llamadas a tu backend

    closePopup("login");
  });

  // Manejar envío de formulario de registro
  $("#register-form").on("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtener los datos del formulario
    const formData = new FormData(this);
    const userData = {
      nombre: formData.get("nombre"),
      dni: formData.get("dni"),
      email: formData.get("correo_electronico"),
      telefono: formData.get("telefono"),
      tarjetaCredito: formData.get("tarjeta_credito"),
      password: formData.get("contrasena"),
    };

    console.log("Intento de registro:", userData);

    // Llamada AJAX para enviar los datos al archivo PHP
    $.ajax({
      url: `${BASE_URL}/php/post_registro.php`, // URL de tu archivo PHP
      method: "POST", // Método de la solicitud
      data: JSON.stringify(userData), // Convertimos el objeto a JSON
      contentType: "application/json", // Indicamos que estamos enviando JSON
      dataType: "json", // Esperamos una respuesta JSON
      success: function (data) {
        console.log("Registro exitoso", data);
        // Aquí puedes hacer algo con la respuesta, como mostrar un mensaje de éxito
        alert(data.message);
      },
      error: function (error) {
        console.error("Error registrando usuario:", error);
        alert("Hubo un error al registrar el usuario.");
      },
    });
  });

  function toggleCompanyInfo() {
    const $table = $("#company-info-table");
    $table.toggle();
  }

  function showPopup(title, imgSrc, description) {
    $("#popup").show();
    $("#popup-title").text(title);
    $("#popup-img").attr("src", imgSrc);
    $("#popup-desc").text(description);
  }

  function closePopup(popupType) {
    if (popupType === "general") {
      $("#popup").hide();
    } else if (popupType === "login") {
      $("#popup-login").hide();
    } else if (popupType === "register") {
      $("#popup-register").hide();
    }
  }

  function addToCart() {
    alert("Moto añadida al carrito");
  }

  // Manejo de traducciones (si lo necesitas)
  $("#idioma-select").on("change", function () {
    const selectedLanguage = $(this).val();
    // Aquí iría tu lógica de cambio de idioma
    console.log("Cambiando idioma a:", selectedLanguage);
  });

  // Función para validar formularios (opcional)
  function validateForm($form) {
    const email = $form.find('[name="correo_electronico"]').val();
    const password = $form.find('[name="contrasena"]').val();

    if (!email || !password) {
      alert("Por favor, rellena todos los campos");
      return false;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, introduce un email válido");
      return false;
    }

    // Validación básica de contraseña
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return false;
    }

    return true;
  }

  // Exponer funciones globalmente si es necesario
  window.moveSlide = moveSlide;
  window.showPopup = showPopup;
  window.closePopup = closePopup;
  window.addToCart = addToCart;
  window.showPopupLogin = showPopupLogin;
  window.showPopupRegister = showPopupRegister;
  window.toggleCompanyInfo = toggleCompanyInfo;
});
