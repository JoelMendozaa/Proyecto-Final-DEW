const apiKey = 'AIzaSyA4h--ogzJuyRLEhvHP18Uh3ZiIe6K8oko';
const API_URL = "https://translation.googleapis.com/v3/projects/PROYECTO_DEW:translateText"



let currentLanguage = "es" // Idioma inicial (español)

async function translatePage() {
  const targetLanguage = currentLanguage === "es" ? "en" : "es"
  const elementsToTranslate = document.querySelectorAll("[data-translate]")

  const textsToTranslate = Array.from(elementsToTranslate).map((el) => el.innerText)

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        sourceLanguageCode: currentLanguage,
        targetLanguageCode: targetLanguage,
        contents: textsToTranslate,
        mimeType: "text/plain",
      }),
    })

    const data = await response.json()

    if (data.translations) {
      elementsToTranslate.forEach((element, index) => {
        element.innerText = data.translations[index].translatedText
      })

      currentLanguage = targetLanguage
      updateLanguageButton()
    }
  } catch (error) {
    console.error("Error en la traducción:", error)
  }
}

function updateLanguageButton() {
  const languageButton = document.getElementById("idioma-btn")
  languageButton.textContent = currentLanguage === "es" ? "🌍 Language" : "🌍 Idioma"
}

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
