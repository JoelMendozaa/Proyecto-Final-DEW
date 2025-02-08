let slideIndex = 0;
let cartCount = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll(".carrusel-slide");
  const totalSlides = slides.length;

  slideIndex += n;

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

// Manejo del pop-up
function showPopup(title, imgSrc, desc) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-img").src = imgSrc;
  document.getElementById("popup-desc").textContent = desc;
  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-counter").textContent = cartCount;
  document.getElementById("cart-counter").classList.remove("d-none");
}