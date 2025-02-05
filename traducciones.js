document.addEventListener("DOMContentLoaded", () => {
    const idiomaSelect = document.getElementById("idioma-select");
    
    // Objeto con las traducciones
    const traducciones = {
        "es": {
            "inicio": "Inicio",
            "productos": "Productos",
            "acercaDe": "Acerca de",
            "carrito": "Carrito",
            "login": "Login",
            "bienvenido": "Bienvenido a nuestra tienda de motos",
            "explora": "Explora nuestra colección de motocicletas de alta gama.",
            "derechos": "Todos los derechos reservados. Hecho por Joel Mendoza Domínguez"
        },
        "en": {
            "inicio": "Home",
            "productos": "Products",
            "acercaDe": "About",
            "carrito": "Cart",
            "login": "Login",
            "bienvenido": "Welcome to our motorcycle store",
            "explora": "Explore our collection of high-end motorcycles.",
            "derechos": "All rights reserved. Made by Joel Mendoza Domínguez"
        },
        "fr": {
            "inicio": "Accueil",
            "productos": "Produits",
            "acercaDe": "À propos",
            "carrito": "Panier",
            "login": "Connexion",
            "bienvenido": "Bienvenue dans notre magasin de motos",
            "explora": "Explorez notre collection de motos haut de gamme.",
            "derechos": "Tous droits réservés. Réalisé par Joel Mendoza Domínguez"
        },
        "de": {
            "inicio": "Startseite",
            "productos": "Produkte",
            "acercaDe": "Über uns",
            "carrito": "Warenkorb",
            "login": "Anmelden",
            "bienvenido": "Willkommen in unserem Motorradgeschäft",
            "explora": "Entdecken Sie unsere Kollektion hochwertiger Motorräder.",
            "derechos": "Alle Rechte vorbehalten. Erstellt von Joel Mendoza Domínguez"
        },
        "gl": {
            "inicio": "Inicio",
            "productos": "Produtos",
            "acercaDe": "Sobre nós",
            "carrito": "Carro",
            "login": "Acceder",
            "bienvenido": "Benvido á nosa tenda de motos",
            "explora": "Explora a nosa colección de motos de alta gama.",
            "derechos": "Todos os dereitos reservados. Feito por Joel Mendoza Domínguez"
        },
        "ca": {
            "inicio": "Inici",
            "productos": "Productes",
            "acercaDe": "Sobre nosaltres",
            "carrito": "Carret",
            "login": "Iniciar sessió",
            "bienvenido": "Benvingut a la nostra botiga de motos",
            "explora": "Explora la nostra col·lecció de motocicletes d'alta gamma.",
            "derechos": "Tots els drets reservats. Fet per Joel Mendoza Domínguez"
        },
        "zh-cn": {
            "inicio": "首页",
            "productos": "产品",
            "acercaDe": "关于我们",
            "carrito": "购物车",
            "login": "登录",
            "bienvenido": "欢迎来到我们的摩托车商店",
            "explora": "探索我们的高端摩托车系列。",
            "derechos": "版权所有。由Joel Mendoza Domínguez制作"
        },
        "ko": {
            "inicio": "홈",
            "productos": "제품",
            "acercaDe": "회사 소개",
            "carrito": "장바구니",
            "login": "로그인",
            "bienvenido": "저희 오토바이 매장에 오신 것을 환영합니다",
            "explora": "고급 오토바이 컬렉션을 탐험해보세요.",
            "derechos": "모든 권리 보유. Joel Mendoza Domínguez 제작"
        },
        "ja": {
            "inicio": "ホーム",
            "productos": "製品",
            "acercaDe": "会社概要",
            "carrito": "カート",
            "login": "ログイン",
            "bienvenido": "バイクショップへようこそ",
            "explora": "高級バイクコレクションをご覧ください。",
            "derechos": "全著作権所有。Joel Mendoza Domínguez 制作"
        }
    };

    idiomaSelect.addEventListener("change", () => cambiarIdioma(idiomaSelect.value));

    function cambiarIdioma(idioma) {
        console.log("Cambiando idioma a:", idioma);
        
        if (traducciones[idioma]) {
            // Actualizar los elementos de navegación
            document.querySelectorAll('.nav-link').forEach(link => {
                const key = link.textContent.toLowerCase().replace(/\s+/g, '');
                if (traducciones[idioma][key]) {
                    link.textContent = traducciones[idioma][key];
                }
            });

            // Actualizar el título y texto del hero
            document.querySelector('.hero-title').textContent = traducciones[idioma]["bienvenido"];
            document.querySelector('.hero-text').textContent = traducciones[idioma]["explora"];

            // Actualizar el footer
            const footerText = document.querySelector('.footer-text');
            footerText.textContent = footerText.textContent.replace(/Todos los derechos reservados.*$/, traducciones[idioma]["derechos"]);
        }
    }

    // Inicializar el idioma basado en la selección actual
    cambiarIdioma(idiomaSelect.value);
});