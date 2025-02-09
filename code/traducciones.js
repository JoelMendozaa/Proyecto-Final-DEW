document.addEventListener("DOMContentLoaded", () => {
    const idiomaSelect = document.getElementById("idioma-select")
  
    // Objeto con las traducciones
    const traducciones = {
      es: {
        inicio: "Inicio",
        productos: "Productos",
        acercaDe: "Acerca de",
        carrito: "Carrito",
        login: "Login",
        bienvenido: "Bienvenido a nuestra tienda de motos",
        explora: "Explora nuestra colección de motocicletas de alta gama.",
        derechos: "Todos los derechos reservados.",
        anadirAlCarrito: "Añadir al carrito",
        "Honda CB650R": "Honda CB650R",
        "Una moto deportiva con gran potencia.": "Una moto deportiva con gran potencia.",
        "Kawasaki Ninja": "Kawasaki Ninja",
        "Alta velocidad y rendimiento para los amantes de la adrenalina.":
          "Alta velocidad y rendimiento para los amantes de la adrenalina.",
        "Yamaha R1": "Yamaha R1",
        "Diseño aerodinámico y potencia inigualable.": "Diseño aerodinámico y potencia inigualable.",
        "KTM Duke 990": "KTM Duke 990",
        "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad":
          "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad",
        "Kawasaki Z900": "Kawasaki Z900",
        "Diseño agresivo y con gran potencia": "Diseño agresivo y con gran potencia",
        "Honda CBR 600RR": "Honda CBR 600RR",
        "Gran potencia, aerodinámica y rapida, perfecta para rutas llenas de emoción":
          "Gran potencia, aerodinámica y rapida, perfecta para rutas llenas de emoción",
        "Suzuki GSX 1000R": "Suzuki GSX 1000R",
        "Extremadamente rápida, colores únicos, potencia abismal":
          "Extremadamente rápida, colores únicos, potencia abismal",
        "Honda CL500": "Honda CL500",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Comoda, baja, perfecta para ciudad y trayectos largos",
        "Suzuki GSX 800R": "Suzuki GSX 800R",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Comoda, baja, perfecta para ciudad y trayectos largos",
      },
      en: {
        inicio: "Home",
        productos: "Products",
        acercaDe: "About",
        carrito: "Cart",
        login: "Login",
        bienvenido: "Welcome to our motorcycle store",
        explora: "Explore our collection of high-end motorcycles.",
        derechos: "All rights reserved.",
        anadirAlCarrito: "Add to cart",
        "Honda CB650R": "Honda CB650R",
        "Una moto deportiva con gran potencia.": "A sports bike with great power.",
        "Kawasaki Ninja": "Kawasaki Ninja",
        "Alta velocidad y rendimiento para los amantes de la adrenalina.":
          "High speed and performance for adrenaline lovers.",
        "Yamaha R1": "Yamaha R1",
        "Diseño aerodinámico y potencia inigualable.": "Aerodynamic design and unmatched power.",
        "KTM Duke 990": "KTM Duke 990",
        "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad":
          "Aggressive design and absolute comfort, perfect for city riding",
        "Kawasaki Z900": "Kawasaki Z900",
        "Diseño agresivo y con gran potencia": "Aggressive design with great power",
        "Honda CBR 600RR": "Honda CBR 600RR",
        "Gran potencia, aerodinámica y rapida, perfecta para rutas llenas de emoción":
          "Great power, aerodynamic and fast, perfect for exciting routes",
        "Suzuki GSX 1000R": "Suzuki GSX 1000R",
        "Extremadamente rápida, colores únicos, potencia abismal": "Extremely fast, unique colors, abysmal power",
        "Honda CL500": "Honda CL500",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Comfortable, low, perfect for city and long journeys",
        "Suzuki GSX 800R": "Suzuki GSX 800R",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Comfortable, low, perfect for city and long journeys",
      },
      fr: {
        inicio: "Accueil",
        productos: "Produits",
        acercaDe: "À propos",
        carrito: "Panier",
        login: "Connexion",
        bienvenido: "Bienvenue dans notre magasin de motos",
        explora: "Explorez notre collection de motos haut de gamme.",
        derechos: "Tous droits réservés.",
        anadirAlCarrito: "Ajouter au panier",
        "Honda CB650R": "Honda CB650R",
        "Una moto deportiva con gran potencia.": "Une moto sportive avec une grande puissance.",
        "Kawasaki Ninja": "Kawasaki Ninja",
        "Alta velocidad y rendimiento para los amantes de la adrenalina.":
          "Haute vitesse et performance pour les amateurs d'adrénaline.",
        "Yamaha R1": "Yamaha R1",
        "Diseño aerodinámico y potencia inigualable.": "Design aérodynamique et puissance inégalée.",
        "KTM Duke 990": "KTM Duke 990",
        "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad":
          "Design agressif et confort absolu, parfait pour la ville",
        "Kawasaki Z900": "Kawasaki Z900",
        "Diseño agresivo y con gran potencia": "Design agressif avec une grande puissance",
        "Honda CBR 600RR": "Honda CBR 600RR",
        "Gran potencia, aerodinámica y rapida, perfecta para rutas llenas de emoción":
          "Grande puissance, aérodynamique et rapide, parfaite pour des routes pleines d'émotion",
        "Suzuki GSX 1000R": "Suzuki GSX 1000R",
        "Extremadamente rápida, colores únicos, potencia abismal":
          "Extrêmement rapide, couleurs uniques, puissance abyssale",
        "Honda CL500": "Honda CL500",
        "Comoda, baja, perfecta para ciudad y trayectos largos":
          "Confortable, basse, parfaite pour la ville et les longs trajets",
        "Suzuki GSX 800R": "Suzuki GSX 800R",
        "Comoda, baja, perfecta para ciudad y trayectos largos":
          "Confortable, basse, parfaite pour la ville et les longs trajets",
      },
      de: {
        inicio: "Startseite",
        productos: "Produkte",
        acercaDe: "Über uns",
        carrito: "Warenkorb",
        login: "Anmelden",
        bienvenido: "Willkommen in unserem Motorradgeschäft",
        explora: "Entdecken Sie unsere Kollektion von High-End-Motorrädern.",
        derechos: "Alle Rechte vorbehalten.",
        anadirAlCarrito: "In den Warenkorb legen",
        "Honda CB650R": "Honda CB650R",
        "Una moto deportiva con gran potencia.": "Ein sportliches Motorrad mit viel Leistung.",
        "Kawasaki Ninja": "Kawasaki Ninja",
        "Alta velocidad y rendimiento para los amantes de la adrenalina.": "Hohe Geschwindigkeit und Leistung für Adrenalin-Liebhaber.",
        "Yamaha R1": "Yamaha R1",
        "Diseño aerodinámico y potencia inigualable.": "Aerodynamisches Design und unvergleichliche Leistung.",
        "KTM Duke 990": "KTM Duke 990",
        "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad": "Aggressives Design und absoluter Komfort, perfekt für die Stadt.",
        "Kawasaki Z900": "Kawasaki Z900",
        "Diseño agresivo y con gran potencia": "Aggressives Design und große Leistung.",
        "Honda CBR 600RR": "Honda CBR 600RR",
        "Gran potencia, aerodinámica y rápida, perfecta para rutas llenas de emoción": "Große Leistung, Aerodynamik und Geschwindigkeit, perfekt für aufregende Routen.",
        "Suzuki GSX 1000R": "Suzuki GSX 1000R",
        "Extremadamente rápida, colores únicos, potencia abismal": "Extrem schnell, einzigartige Farben, abgrundtiefe Leistung.",
        "Honda CL500": "Honda CL500",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Bequem, niedrig, perfekt für die Stadt und lange Strecken.",
        "Suzuki GSX 800R": "Suzuki GSX 800R",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Bequem, niedrig, perfekt für die Stadt und lange Strecken."
      },
      zh: {
        inicio: "首页",
        productos: "产品",
        acercaDe: "关于我们",
        carrito: "购物车",
        login: "登录",
        bienvenido: "欢迎来到我们的摩托车商店",
        explora: "探索我们的高端摩托车系列。",
        derechos: "版权所有。",
        anadirAlCarrito: "加入购物车",
        "Honda CB650R": "本田CB650R",
        "Una moto deportiva con gran potencia.": "一款具有强大动力的运动摩托车。",
        "Kawasaki Ninja": "川崎忍者",
        "Alta velocidad y rendimiento para los amantes de la adrenalina.": "为喜欢肾上腺素的爱好者提供高速和出色的性能。",
        "Yamaha R1": "雅马哈R1",
        "Diseño aerodinámico y potencia inigualable.": "流线型设计和无与伦比的动力。",
        "KTM Duke 990": "KTM Duke 990",
        "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad": "具有攻击性的设计和极致的舒适性，适合城市骑行。",
        "Kawasaki Z900": "川崎Z900",
        "Diseño agresivo y con gran potencia": "激进的设计和强大的动力。",
        "Honda CBR 600RR": "本田CBR 600RR",
        "Gran potencia, aerodinámica y rápida, perfecta para rutas llenas de emoción": "强大的动力、流线型设计和快速，完美适合刺激的路线。",
        "Suzuki GSX 1000R": "铃木GSX 1000R",
        "Extremadamente rápida, colores únicos, potencia abismal": "极其快速，独特的颜色，深不可测的动力。",
        "Honda CL500": "本田CL500",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "舒适、低矮，适合城市和长途旅行。",
        "Suzuki GSX 800R": "铃木GSX 800R",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "舒适、低矮，适合城市和长途旅行。"
      },
      ja: {
        inicio: "ホーム",
        productos: "商品",
        acercaDe: "会社情報",
        carrito: "カート",
        login: "ログイン",
        bienvenido: "私たちのバイクショップへようこそ",
        explora: "私たちの高級バイクコレクションを探索してください。",
        derechos: "全著作権所有。",
        anadirAlCarrito: "カートに追加",
        "Honda CB650R": "ホンダ CB650R",
        "Una moto deportiva con gran potencia.": "大きなパワーを持つスポーツバイク。",
        "Kawasaki Ninja": "カワサキ ニンジャ",
        "Alta velocidad y rendimiento para los amantes de la adrenalina.": "アドレナリンを求める人々に最適な高速度とパフォーマンス。",
        "Yamaha R1": "ヤマハ R1",
        "Diseño aerodinámico y potencia inigualable.": "空力的なデザインと比類のないパワー。",
        "KTM Duke 990": "KTM デューク 990",
        "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad": "攻撃的なデザインと絶対的な快適さ、都市走行に最適。",
        "Kawasaki Z900": "カワサキ Z900",
        "Diseño agresivo y con gran potencia": "攻撃的なデザインと大きなパワー。",
        "Honda CBR 600RR": "ホンダ CBR 600RR",
        "Gran potencia, aerodinámica y rápida, perfecta para rutas llenas de emoción": "大きなパワー、空力的なデザインと高速走行、刺激的なルートに最適。",
        "Suzuki GSX 1000R": "スズキ GSX 1000R",
        "Extremadamente rápida, colores únicos, potencia abismal": "非常に速く、ユニークな色と深いパワー。",
        "Honda CL500": "ホンダ CL500",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "快適で低く、都市と長距離に最適。",
        "Suzuki GSX 800R": "スズキ GSX 800R",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "快適で低く、都市と長距離に最適。"
      },
      ko: {
        inicio: "홈",
        productos: "제품",
        acercaDe: "회사 소개",
        carrito: "장바구니",
        login: "로그인",
        bienvenido: "우리의 오토바이 상점에 오신 것을 환영합니다",
        explora: "우리의 고급 오토바이 컬렉션을 탐험해보세요.",
        derechos: "저작권 모든 권리 보유.",
        anadirAlCarrito: "장바구니에 담기",
        "Honda CB650R": "혼다 CB650R",
        "Una moto deportiva con gran potencia.": "강력한 파워를 가진 스포츠 오토바이.",
        "Kawasaki Ninja": "카와사키 닌자",
        "Alta velocidad y rendimiento para los amantes de la adrenalina.": "아드레날린을 사랑하는 사람들을 위한 고속과 뛰어난 성능.",
        "Yamaha R1": "야마하 R1",
        "Diseño aerodinámico y potencia inigualable.": "공기역학적 디자인과 비할 데 없는 파워.",
        "KTM Duke 990": "KTM 듀크 990",
        "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad": "공격적인 디자인과 완벽한 편안함, 도시에서 타기 좋은 오토바이.",
        "Kawasaki Z900": "카와사키 Z900",
        "Diseño agresivo y con gran potencia": "공격적인 디자인과 강력한 파워.",
        "Honda CBR 600RR": "혼다 CBR 600RR",
        "Gran potencia, aerodinámica y rápida, perfecta para rutas llenas de emoción": "강력한 파워와 공기역학적 디자인, 빠른 속도로 흥미로운 루트에 적합.",
        "Suzuki GSX 1000R": "스즈키 GSX 1000R",
        "Extremadamente rápida, colores únicos, potencia abismal": "극도로 빠르고, 독특한 색상과 깊은 파워.",
        "Honda CL500": "혼다 CL500",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "편안하고 낮은 디자인, 도시와 장거리 주행에 적합.",
        "Suzuki GSX 800R": "스즈키 GSX 800R",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "편안하고 낮은 디자인, 도시와 장거리 주행에 적합."
      },
      gl: {
        inicio: "Inicio",
        productos: "Produtos",
        acercaDe: "Sobre nós",
        carrito: "Carrito",
        login: "Acceder",
        bienvenido: "Benvido á nosa tenda de motos",
        explora: "Explora a nosa colección de motocicletas de alta gama.",
        derechos: "Todos os dereitos reservados.",
        anadirAlCarrito: "Engadir ao carrito",
        "Honda CB650R": "Honda CB650R",
        "Una moto deportiva con gran potencia.": "Unha moto deportiva con moita potencia.",
        "Kawasaki Ninja": "Kawasaki Ninja",
        "Alta velocidad y rendimiento para los amantes de la adrenalina.": "Alta velocidade e rendemento para os amantes da adrenalina.",
        "Yamaha R1": "Yamaha R1",
        "Diseño aerodinámico y potencia inigualable.": "Deseño aerodinámico e potencia inigualable.",
        "KTM Duke 990": "KTM Duke 990",
        "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad": "Deseño agresivo e comodidade absoluta, perfecta para andar pola cidade.",
        "Kawasaki Z900": "Kawasaki Z900",
        "Diseño agresivo y con gran potencia": "Deseño agresivo e gran potencia.",
        "Honda CBR 600RR": "Honda CBR 600RR",
        "Gran potencia, aerodinámica y rápida, perfecta para rutas llenas de emoción": "Gran potencia, aerodinámica e rápida, perfecta para rutas cheas de emoción.",
        "Suzuki GSX 1000R": "Suzuki GSX 1000R",
        "Extremadamente rápida, colores únicos, potencia abismal": "Extremadamente rápida, cores únicas, potencia abismal.",
        "Honda CL500": "Honda CL500",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Cómoda, baixa, perfecta para cidade e traxectos longos.",
        "Suzuki GSX 800R": "Suzuki GSX 800R",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Cómoda, baixa, perfecta para cidade e traxectos longos."
      },
      ca: {
        inicio: "Inici",
        productos: "Productes",
        acercaDe: "Qui som",
        carrito: "Carret",
        login: "Iniciar sessió",
        bienvenido: "Benvingut a la nostra botiga de motos",
        explora: "Explora la nostra col·lecció de motocicletes de gamma alta.",
        derechos: "Tots els drets reservats.",
        anadirAlCarrito: "Afegir al carret",
        "Honda CB650R": "Honda CB650R",
        "Una moto deportiva con gran potencia.": "Una moto esportiva amb gran potència.",
        "Kawasaki Ninja": "Kawasaki Ninja",
        "Alta velocidad y rendimiento para los amantes de la adrenalina.": "Alta velocitat i rendiment per als amants de l'adrenalina.",
        "Yamaha R1": "Yamaha R1",
        "Diseño aerodinámico y potencia inigualable.": "Disseny aerodinàmic i potència incomparable.",
        "KTM Duke 990": "KTM Duke 990",
        "Diseño agresivo y comodidad absoluta, perfecta para ir por ciudad": "Disseny agressiu i comoditat absoluta, perfecta per a la ciutat.",
        "Kawasaki Z900": "Kawasaki Z900",
        "Diseño agresivo y con gran potencia": "Disseny agressiu i gran potència.",
        "Honda CBR 600RR": "Honda CBR 600RR",
        "Gran potencia, aerodinámica y rápida, perfecta para rutas llenas de emoción": "Gran potència, aerodinàmica i ràpida, perfecta per a rutes plenes d'emoció.",
        "Suzuki GSX 1000R": "Suzuki GSX 1000R",
        "Extremadamente rápida, colores únicos, potencia abismal": "Extremadament ràpida, colors únics, potència abismal.",
        "Honda CL500": "Honda CL500",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Cómoda, baixa, perfecta per a la ciutat i trajectes llargs.",
        "Suzuki GSX 800R": "Suzuki GSX 800R",
        "Comoda, baja, perfecta para ciudad y trayectos largos": "Cómoda, baixa, perfecta per a la ciutat i trajectes llargs."
      }
    }
    
    idiomaSelect.addEventListener("change", () => cambiarIdioma(idiomaSelect.value));
  
    function cambiarIdioma(idioma) {
      console.log("Cambiando idioma a:", idioma);
  
      if (traducciones[idioma]) {
        document.querySelectorAll("[data-translate]").forEach((element) => {
          const key = element.getAttribute("data-translate");
          if (traducciones[idioma][key]) {
            element.textContent = traducciones[idioma][key];
          }
        });
  
        // Actualizar el título y texto del hero si existen
        const heroTitle = document.querySelector(".hero-title");
        const heroText = document.querySelector(".hero-text");
        if (heroTitle) heroTitle.textContent = traducciones[idioma]["bienvenido"];
        if (heroText) heroText.textContent = traducciones[idioma]["explora"];
  
        // Actualizar el footer
        const footerText = document.querySelector(".footer-text");
        if (footerText) {
          const year = new Date().getFullYear();
          footerText.textContent = `© ${year} Tienda de Motos. ${traducciones[idioma]["derechos"]}`;
        }
  
        // Actualizar el contenido del popup si está abierto
        if (document.getElementById("popup").classList.contains("show")) {
          translatePopupContent();
        }
      }
    }
  
    // Inicializar el idioma basado en la selección actual
    cambiarIdioma(idiomaSelect.value);
});
  
// Función para traducir el contenido del popup
function translatePopupContent() {
    const idioma = document.getElementById("idioma-select").value;
    const popupTitle = document.getElementById("popup-title");
    const popupDesc = document.getElementById("popup-desc");
    const addToCartButton = document.querySelector(".popup-info button");
  
    if (popupTitle && popupDesc && addToCartButton && traducciones[idioma]) {
      // Traducir el título si existe una traducción
      if (traducciones[idioma][popupTitle.textContent]) {
        popupTitle.textContent = traducciones[idioma][popupTitle.textContent];
      }
  
      // Traducir la descripción si existe una traducción
      if (traducciones[idioma][popupDesc.textContent]) {
        popupDesc.textContent = traducciones[idioma][popupDesc.textContent];
      }
  
      // Traducir el botón "Añadir al carrito"
      addToCartButton.textContent = traducciones[idioma]["anadirAlCarrito"];
    }
}
  
// Exponer la función globalmente para que pueda ser llamada desde code.js
window.translatePopupContent = translatePopupContent;