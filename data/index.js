const getData = (page) => {
    const pagePath = typeof page === 'object' ? page.path : page;
    switch (pagePath) {
        case "/index.html":
            return {
                "hero-bg": "110",
                "hero-title": "Bienvenido a nuestra pagina web",
                "hero-text": "Soluciones digitales para tu negocio",
                "cards": [
                    { "card-title": "Rápido", "card-text": "Carga instantánea", "card-icon": "" },
                    { "card-title": "Seguro", "card-text": "Datos protegidos", "card-icon": "" },
                    { "card-title": "Escalable", "card-text": "Crece sin límites", "card-icon": "" }
                ],
                "half-title": "Nuestra Historia",
                "half-text": "Somos un equipo dedicado a crear experiencias digitales excepcionales.",
                "half-img": "50",
                "footer-text": "© 2026 Empresa XYZ. Todos los derechos reservados."
            };
    }
    return {};
}
export default getData;