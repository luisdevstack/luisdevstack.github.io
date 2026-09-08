const i18n = {
    es: {
        navHome: "Inicio",
        navPortfolio: "Portafolio",
        navCourse: "Aprende COBOL",
        navContact: "Contacto",
        heroSubtitle: "Especialista en optimización de bases de datos, Arquitectura de Procesamiento Paralelo Masivo, Modelado Semántico, Query Tuning e Implementación de Flujos de Datos de Alto Rendimiento.",
        exploreProjectsTag: "EXPLORAR",
        exploreProjectsTitle: "Proyectos de Datos",
        learnCobolTag: "MAINFRAME",
        learnCobolTitle: "Aprende COBOL",
        contactTitle: "Contacto & Consultoría",
        contactDesc: "Si deseas colaborar en proyectos, asistencia técnica o requieres una solución de arquitectura de datos: envía un mensaje.",
        whatsappBtn: "Contactar por WhatsApp",
        orEmail: "o envía un correo",
        fieldName: "Nombre Completo",
        fieldEmail: "Correo Electrónico",
        fieldMessage: "Mensaje",
        sendEmailBtn: "Enviar Mensaje por Correo"
    },
    en: {
        navHome: "Home",
        navPortfolio: "Portfolio",
        navCourse: "Learn COBOL",
        navContact: "Contact",
        heroSubtitle: "Specialist in database optimization, Massively Parallel Processing Architecture, Semantic Modeling, Query Tuning, and High-Performance Data Pipeline Implementation.",
        exploreProjectsTag: "EXPLORE",
        exploreProjectsTitle: "Data Projects",
        learnCobolTag: "MAINFRAME",
        learnCobolTitle: "Learn COBOL",
        contactTitle: "Contact & Consulting",
        contactDesc: "If you want to collaborate on projects, technical assistance, or require a data architecture solution: send a message.",
        whatsappBtn: "Contact via WhatsApp",
        orEmail: "or send an email",
        fieldName: "Full Name",
        fieldEmail: "Email Address",
        fieldMessage: "Message",
        sendEmailBtn: "Send Message via Email"
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    }
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('preferredLang') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);
});