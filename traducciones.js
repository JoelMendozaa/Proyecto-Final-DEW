document.addEventListener("DOMContentLoaded", () => {
    const idiomaBtn = document.getElementById("idioma-btn");
    const idiomas = {
        "es": "Español",
        "en": "English",
        "fr": "Français",
        "de": "Deutsch",
        "gl": "Galego",
        "ca": "Català",
        "zh-cn": "中文",
        "ko": "한국어",
        "ja": "日本語"
    };

    const dropdown = document.createElement("ul");
    dropdown.classList.add("dropdown-menu");
    dropdown.style.display = "none";
    idiomaBtn.parentNode.appendChild(dropdown);

    for (const [codigo, nombre] of Object.entries(idiomas)) {
        const item = document.createElement("li");
        item.textContent = nombre;
        item.dataset.lang = codigo;
        item.addEventListener("click", () => cambiarIdioma(codigo));
        dropdown.appendChild(item);
    }

    idiomaBtn.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    });

    document.addEventListener("click", (event) => {
        if (!idiomaBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });

    function cambiarIdioma(idioma) {
        console.log("Cambiando idioma a:", idioma);
        // Aquí se podría integrar una API de traducción o un diccionario de traducciones.
    }
});
