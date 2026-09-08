// RASTREADOR DE TRÁFICO (Cloudflare Web Analytics)
(function initAnalytics() {
    const cloudflareToken = 'ad588e5df3374f38999bda54de6ce296';
    if (cloudflareToken) {
        const script = document.createElement('script');
        script.defer = true;
        script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
        script.setAttribute('data-cf-beacon', `{"token": "${cloudflareToken}"}`);
        document.head.appendChild(script);
    }
})();

// Control de Acordeones Desplegables Exclusivos para Portafolio
function setupAccordionToggle() {
    const accordions = document.querySelectorAll('.portfolio-accordion');
    accordions.forEach(acc => {
        acc.addEventListener('toggle', () => {
            if (acc.open) {
                accordions.forEach(otherAcc => {
                    if (otherAcc !== acc && otherAcc.open) {
                        otherAcc.open = false;
                    }
                });
            }
        });
    });
}

// CARRUSEL AUTOMÁTICO DE VENTAJAS DE EXERCISM (Curso COBOL)
function initExercismCarousel() {
    let currentIndex = 0;
    const totalItems = 4;

    // Verificar si el primer elemento del carrusel existe en la página actual
    const firstItem = document.getElementById('ex-item-0');
    if (!firstItem) return; // Si no existe, salir sin ejecutar intervalo

    setInterval(() => {
        // Remover estado activo del ítem y del indicador actual
        const currentEl = document.getElementById(`ex-item-${currentIndex}`);
        const currentDot = document.getElementById(`dot-ex-${currentIndex}`);

        if (currentEl) currentEl.classList.remove('active');
        if (currentDot) {
            currentDot.classList.remove('bg-purple-400', 'w-2');
            currentDot.classList.add('bg-slate-700', 'w-1.5');
        }

        // Incrementar índice circularmente
        currentIndex = (currentIndex + 1) % totalItems;

        // Activar el nuevo ítem e indicador
        const nextEl = document.getElementById(`ex-item-${currentIndex}`);
        const nextDot = document.getElementById(`dot-ex-${currentIndex}`);

        if (nextEl) nextEl.classList.add('active');
        if (nextDot) {
            nextDot.classList.remove('bg-slate-700', 'w-1.5');
            nextDot.classList.add('bg-purple-400', 'w-2');
        }
    }, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
    setupAccordionToggle();
    initExercismCarousel();
});
