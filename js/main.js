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

    const firstItem = document.getElementById('ex-item-0');
    if (!firstItem) return;

    setInterval(() => {
        const currentEl = document.getElementById(`ex-item-${currentIndex}`);
        const currentDot = document.getElementById(`dot-ex-${currentIndex}`);

        if (currentEl) currentEl.classList.remove('active');
        if (currentDot) {
            currentDot.classList.remove('bg-purple-400', 'w-2');
            currentDot.classList.add('bg-slate-700', 'w-1.5');
        }

        currentIndex = (currentIndex + 1) % totalItems;

        const nextEl = document.getElementById(`ex-item-${currentIndex}`);
        const nextDot = document.getElementById(`dot-ex-${currentIndex}`);

        if (nextEl) nextEl.classList.add('active');
        if (nextDot) {
            nextDot.classList.remove('bg-slate-700', 'w-1.5');
            nextDot.classList.add('bg-purple-400', 'w-2');
        }
    }, 3500);
}

// INICIALIZADOR DEL FONDO 3D STARDUST GLOBAL
function initStardustBackground() {
    let appDiv = document.querySelector('#app');
    if (!appDiv) {
        appDiv = document.createElement('div');
        appDiv.id = 'app';
        document.body.appendChild(appDiv);
    }

    import('https://cdn.jsdelivr.net/npm/three@0.174.0/build/three.module.js').then((THREE) => {
        const app = document.querySelector('#app');
        if (!app) return;

        const clock = new THREE.Clock();

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        
        renderer.domElement.style.display = 'block';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        app.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x020617, 0.02);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 7);

        const colors = {
            cyan: new THREE.Color(0x00f0ff),
            skyBlue: new THREE.Color(0x48cae4),
            electricBlue: new THREE.Color(0x0077ff)
        };

        const sharedUniforms = { uTime: { value: 0 } };

        const particleCount = 1800;
        const particleGeo = new THREE.BufferGeometry();
        const particlePos = new Float32Array(particleCount * 3);
        const particleScales = new Float32Array(particleCount);
        const particleColorMix = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            const r = 0.5 + Math.pow(Math.random(), 2.0) * 5.5;
            const theta = Math.random() * Math.PI * 2;
            particlePos[i * 3] = Math.cos(theta) * r;
            particlePos[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
            particlePos[i * 3 + 2] = Math.sin(theta) * r;
            particleScales[i] = Math.random();
            particleColorMix[i] = Math.random();
        }

        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
        particleGeo.setAttribute('aScale', new THREE.BufferAttribute(particleScales, 1));
        particleGeo.setAttribute('aColorMix', new THREE.BufferAttribute(particleColorMix, 1));

        const particleMat = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: {
                uTime: sharedUniforms.uTime,
                uColorA: { value: colors.cyan },
                uColorB: { value: colors.skyBlue },
                uColorC: { value: colors.electricBlue }
            },
            vertexShader: `
                uniform float uTime;
                attribute float aScale;
                attribute float aColorMix;
                varying float vAlpha;
                varying float vColorMix;
                void main() {
                    float distXZ = max(length(position.xz), 0.001);
                    float angle = uTime * (0.25 / distXZ);
                    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
                    vec3 pos = position;
                    pos.xz = rot * pos.xz;
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = (14.0 * aScale + 1.5) * (1.0 / -mvPosition.z);
                    vAlpha = (0.3 + 0.7 * sin(uTime * 2.5 + aScale * 10.0));
                    vColorMix = aColorMix;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform vec3 uColorA;
                uniform vec3 uColorB;
                uniform vec3 uColorC;
                varying float vAlpha;
                varying float vColorMix;
                void main() {
                    float dist = length(gl_PointCoord - vec2(0.5));
                    if (dist > 0.5) discard;
                    float glow = smoothstep(0.5, 0.0, dist);
                    vec3 color = mix(uColorA, uColorB, vColorMix);
                    gl_FragColor = vec4(color * glow, vAlpha * glow * 0.85);
                }
            `
        });

        const stardust = new THREE.Points(particleGeo, particleMat);
        scene.add(stardust);

        function setViewportSize() {
            if (!renderer || !camera) return;
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }
        window.addEventListener('resize', setViewportSize);
        setViewportSize();

        function animate() {
            const time = clock.getElapsedTime();
            sharedUniforms.uTime.value = time;
            stardust.rotation.y = time * 0.015;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupAccordionToggle();
    initExercismCarousel();
    initStardustBackground();
});
