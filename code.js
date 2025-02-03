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

document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("idioma-btn")
  languageButton.addEventListener("click", translatePage)
})




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