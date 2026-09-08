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

document.addEventListener('DOMContentLoaded', () => {
    setupAccordionToggle();
});
