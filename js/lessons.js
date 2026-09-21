function toggleModule(modId) {
    const el = document.getElementById(modId);
    const icon = document.getElementById(`icon-${modId}`);

    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        if (icon) {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        }
    } else {
        el.classList.add('hidden');
        if (icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }
    }
}

// lessons.js

function getCobolDocumentationBlock() {
    return `
        <!-- Bloque de Documentación Despliegue -->
        <details class="bg-slate-900/60 border border-slate-800 rounded-xl p-5 group transition-all duration-300 bubble-card hover:bg-fuchsia-800/40 my-4" style="--bubble-opacity: 0.13;">
            <!-- Cabecera desplegable -->
            <summary class="cursor-pointer text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between select-none">
                <span class="flex items-center gap-2">
                    <i class="fa-solid fa-palette text-sky-400"></i><span class="text-cyan-300"> Glosario Visual de Sintaxis COBOL</span>
                </span>
                <i class="fa-solid fa-chevron-down text-slate-400 transition-transform duration-300 group-open:rotate-180"></i>
            </summary>

            <!-- Contenido que se despliega -->
            <div class="mt-4 pt-4 border-t border-slate-800/80 grid sm:grid-cols-2 gap-3 text-xs">

                <!-- 1. Palabras Reservadas y Verbos -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-sky-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.5)]"></span>
                    <div>
                        <strong class="text-sky-300 block mb-0.5">Palabras Reservadas y Verbos</strong>
                        <span class="text-slate-400 text-[11px]">En tono <span class="text-sky-400 font-bold">Azul Claro</span>, indican instrucciones clave como <code class="text-sky-300">DISPLAY</code> o <code class="text-sky-300">DIVISION</code>.</span>
                    </div>
                </div>

                <!-- 2. Comentarios y Documentación -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-purple-600 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.5)]"></span>
                    <div>
                        <strong class="cobol-comment text-[13px] block font-extrabold mb-0.5"><b>Comentarios y Documentación</b></strong>
                        <span class="text-slate-400 text-[11px]">Envueltos con la etiqueta <span class="cobol-comment font-bold">tornasol</span>, señalan líneas ignoradas por el compilador (*).</span>
                    </div>
                </div>

                <!-- 3. Literales Alfanuméricos (Strings) -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-pink-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(244,114,182,0.5)]"></span>
                    <div>
                        <strong class="text-pink-300 block mb-0.5">Literales Alfanuméricos (Strings)</strong>
                        <span class="text-slate-400 text-[11px]">En color <span class="text-pink-300 font-bold">Rosa</span>, definen cadenas de texto fijas entre comillas.</span>
                    </div>
                </div>

                <!-- 4. Etiquetas y Párrafos -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-amber-300 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(252,211,77,0.5)]"></span>
                    <div>
                        <strong class="text-amber-300 block mb-0.5">Etiquetas y Párrafos</strong>
                        <span class="text-slate-400 text-[11px]">En tono <span class="text-amber-300 font-bold">Amarillo</span>, funcionan como puntos de anclaje.</span>
                    </div>
                </div>

                <!-- 5. Nombre del Programa -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-slate-100 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(241,245,249,0.5)]"></span>
                    <div>
                        <strong class="text-slate-100 block mb-0.5">Nombre del Programa</strong>
                        <span class="text-slate-400 text-[11px]">En tono <span class="text-slate-100 font-bold">Blanco</span>, identifica el módulo o programa (ej. <code class="text-slate-200">EJEMPLOPIC</code>).</span>
                    </div>
                </div>

                <!-- 6. Variables y Data Names -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-emerald-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <div>
                        <strong class="text-emerald-300 block mb-0.5">Variables y Data Names</strong>
                        <span class="text-slate-400 text-[11px]">En tono <span class="text-emerald-400 font-bold">Verde</span>, corresponden a nombres de campos y registros.</span>
                    </div>
                </div>

                <!-- 7. Cláusulas PIC y Tipos -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-pink-300/70 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(244,114,182,0.3)]"></span>
                    <div>
                        <strong class="text-pink-200/90 block mb-0.5">Cláusulas PIC y Tipos</strong>
                        <span class="text-slate-400 text-[11px]">En <span class="text-pink-200/90 font-bold">Rosa Tenue</span>, definen la estructura y máscara (ej. <code class="text-pink-200">X(15)</code>, <code class="text-pink-200">9(02)</code>).</span>
                    </div>
                </div>

                <div></div>

                <!-- Título de sección columnas -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3.5 rounded-lg border border-slate-800 col-span-full my-2">
                    <h3 class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2 w-full">
                        <i class="fa-solid fa-columns text-sky-400"></i><strong class="text-cyan-300/90 block mb-0.5"> Distribución de Columnas (Formato Clásico COBOL)</strong>
                    </h3>
                </div>

                <!-- Columnas 1 a 6 -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-slate-500 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(100,116,139,0.5)]"></span>
                    <div>
                        <strong class="text-slate-300 block mb-0.5">Columnas 1 - 6</strong>
                        <span class="text-slate-400 text-[11px]">Área de <span class="text-slate-200 font-bold">Secuencia</span>. Utilizada tradicionalmente para numerar líneas.</span>
                    </div>
                </div>

                <!-- Columna 7 -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-amber-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></span>
                    <div>
                        <strong class="text-amber-300 block mb-0.5">Columna 7</strong>
                        <span class="text-slate-400 text-[11px]">Área de <span class="text-amber-300 font-bold">Indicador</span>. El asterisco (<code class="text-amber-200">*</code>) denota comentarios.</span>
                    </div>
                </div>

                <!-- Columnas 8 a 11 -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-emerald-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(2,132,199,0.5)]"></span>
                    <div>
                        <strong class="text-emerald-300 block mb-0.5">Columnas 8 - 11 (Área A)</strong>
                        <span class="text-slate-400 text-[11px]">Margen A para <span class="text-emerald-300 font-bold">Divisiones, Secciones</span> y nivel 01.</span>
                    </div>
                </div>

                <!-- Columnas 12 a 80 -->
                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                    <span class="w-3 h-3 rounded-full bg-purple-500 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    <div>
                        <strong class="text-purple-300 block mb-0.5">Columnas 12 - 80 (Área B)</strong>
                        <span class="text-slate-400 text-[11px]">Margen B para <span class="text-purple-400 font-bold">sentencias ejecutables</span>, verbos y cláusulas (<code class="text-sky-400">PIC</code>, <code class="text-sky-400">MOVE</code>).</span>
                    </div>
                </div>

            </div>
        </details>
    `;
}

// Función para alternar la visibilidad de la solución del rompecabezas
function toggleSolution() {
    const solutionDiv = document.getElementById('solution-container');
    const btnText = document.getElementById('btn-sol-text');
    const btnIcon = document.getElementById('btn-sol-icon');

    if (solutionDiv.classList.contains('hidden')) {
        solutionDiv.classList.remove('hidden');
        btnText.innerText = 'Ocultar Solución';
        btnIcon.classList.remove('fa-eye');
        btnIcon.classList.add('fa-eye-slash');
    } else {
        solutionDiv.classList.add('hidden');
        btnText.innerText = 'Mostrar Solución';
        btnIcon.classList.remove('fa-eye-slash');
        btnIcon.classList.add('fa-eye');
    }
}

function loadLesson(lessonId) {
    const container = document.getElementById('lesson-content');
    if (!container) return;

    if (lessonId === '0.1') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-emerald-400">Módulo 0 · Lección 0.1</span>
                    <span class="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-1 rounded font-mono">Compilador Local</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Instalación de MSYS2 y GnuCOBOL en Windows</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    Para ejecutar programas COBOL nativamente en Windows se utiliza <strong>GnuCOBOL</strong>. La forma más limpia y robusta de compilarlo es mediante <strong>MSYS2</strong>, un gestor de paquetes que provee las herramientas nativas de C/C++ requeridas.
                </p>

                <div class="space-y-4 text-xs">
                    <div class="p-4 bg-slate-950/80 border-l-4 border-emerald-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-emerald-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-download"></i> Paso 1: Descargar e Instalar MSYS2
                        </div>
                        <p class="text-slate-400">Descarga el instalador oficial desde <a href="https://www.msys2.org/" target="_blank" class="text-sky-400 underline">msys2.org</a> e instálalo en la ruta por defecto (<code>C:\\msys64</code>).</p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-sky-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-terminal"></i> Paso 2: Instalar GnuCOBOL desde la Terminal MSYS2
                        </div>
                        <p class="text-slate-400">Abre la terminal <strong>MSYS2 UCRT64</strong> e ingresa el siguiente comando para actualizar paquetes e instalar GnuCOBOL:</p>
                        <div class="bg-slate-900 p-2.5 rounded-lg font-mono-code text-slate-200 text-xs border border-slate-800">
                            pacman -Syu<br>
                            pacman -S mingw-w64-ucrt-x86_64-gnucobol
                        </div>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-purple-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-sliders"></i> Paso 3: Agregar al PATH de Windows
                        </div>
                        <p class="text-slate-400">Añade la siguiente ruta a las Variables de Entorno del Sistema (PATH):</p>
                        <code class="block bg-slate-900 p-2 rounded text-purple-300 font-mono">C:\\msys64\\ucrt64\\bin</code>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-amber-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-circle-check"></i> Paso 4: Verificación
                        </div>
                        <p class="text-slate-400">Abre una nueva ventana de PowerShell o CMD e ingresa:</p>
                        <code class="block bg-slate-900 p-2 rounded text-amber-300 font-mono">cobc -v</code>
                        <p class="text-slate-400 mt-1">Si responde con la versión de GnuCOBOL, ¡el compilador está listo!</p>
                    </div>
                </div>
            </div>
        `;
    } else if (lessonId === '0.2') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-emerald-400">Módulo 0 · Lección 0.2</span>
                    <span class="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-1 rounded font-mono">Editores de Código</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Configuración en Visual Studio Code y Zed Editor</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    Una vez teniendo <code>cobc</code> en el sistema, configura tu editor preferido para contar con resaltado de sintaxis, linters y compilación con un solo clic.
                </p>

                <div class="grid md:grid-cols-2 gap-6 text-xs">
                    <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-4">
                        <div class="flex items-center gap-2 text-sky-400 font-bold text-base border-b border-slate-800 pb-2">
                            <i class="fa-solid fa-code"></i> Visual Studio Code
                        </div>
                        <div class="space-y-2">
                            <span class="font-bold text-slate-200 block">1. Extensiones clave:</span>
                            <ul class="list-disc list-inside text-slate-400 space-y-1">
                                <li><strong class="text-sky-300">IBM COBOL</strong> o <strong class="text-sky-300">COBOL</strong> (by bitlang): Brinda autocompletado y formato de columnas.</li>
                                <li><strong class="text-sky-300">Code Runner</strong>: Para ejecutar el archivo actual con un botón.</li>
                            </ul>
                        </div>
                        <div class="space-y-2">
                            <span class="font-bold text-slate-200 block">2. Configurar Code Runner:</span>
                            <p class="text-slate-400">En <code>settings.json</code> agrega este mapeo de ejecución:</p>
                            <div class="bg-slate-900 p-2.5 rounded font-mono-code text-[11px] text-slate-300 border border-slate-800 overflow-x-auto">
                                "code-runner.executorMap": {<br>
                                &nbsp;&nbsp;"cobol": "cobc -x -o $fileNameWithoutExt $fileName &amp;&amp; ./$fileNameWithoutExt"<br>
                                }
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-4">
                        <div class="flex items-center gap-2 text-emerald-400 font-bold text-base border-b border-slate-800 pb-2">
                            <i class="fa-solid fa-bolt"></i> Zed Editor
                        </div>
                        <div class="space-y-2">
                            <span class="font-bold text-slate-200 block">1. Extensiones recomendadas:</span>
                            <p class="text-slate-400">En Zed (<code>Ctrl+Shift+X</code> / <code>Cmd+Shift+X</code>), busca e instala la extensión oficial de <strong class="text-emerald-300">COBOL</strong> para resaltado de sintaxis y detección del formato fijo de 80 columnas.</p>
                        </div>
                        <div class="space-y-2">
                            <span class="font-bold text-slate-200 block">2. Tarea de Compilación (Task):</span>
                            <p class="text-slate-400">Agrega en tu archivo <code>.zed/tasks.json</code> del proyecto:</p>
                            <div class="bg-slate-900 p-2.5 rounded font-mono-code text-[11px] text-slate-300 border border-slate-800 overflow-x-auto">
                                [<br>
                                &nbsp;&nbsp;{<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;"label": "Compilar y Ejecutar COBOL",<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;"command": "cobc -x $ZED_FILE &amp;&amp; ./$ZED_FILE_STEM",<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;"use_new_terminal": true<br>
                                &nbsp;&nbsp;}<br>
                                ]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (lessonId === '1.1') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-sky-400">Módulo 1 · Lección 1.1</span>
                    <span class="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded">Estructura Mínima</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Historia y Arquitectura del Mainframe / COBOL</h2>

                <div class="grid md:grid-cols-2 gap-6 items-center bg-slate-950/40 border border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-lg">
                    <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
                        <p>
                            <strong class="text-white">COBOL (COmmon Business-Oriented Language).</strong>
                        </p>
                        <p class="text-xs text-slate-400">
                            Se diseñó en 1959 como un lenguaje de programación de alto nivel enfocado en el procesamiento de datos comerciales y financieros. El primer programa se ejecutó con éxito en diciembre de 1960 en equipos Mainframe pioneros como la <strong class="text-sky-300">UNIVAC II</strong> y la <strong class="text-sky-300">RCA 501</strong>.<br><br>
                            Estas macrocomputadoras utilizaban salas enteras, almacenamiento en cintas magnéticas, tarjetas perforadas y una memoria de núcleos magnéticos de apenas unos pocos kilobytes.<br><br>
                            Herencias directas de esta época son las líneas de código estructuradas en un ancho fijo de <strong class="text-amber-300">80 columnas</strong> y el uso obligatorio del punto y los números de nivel.<br><br>
                            A diferencia de otros lenguajes, que a veces sufren de errores de redondeo por el uso de punto flotante binario, <b>COBOL</b> utiliza <b>aritmética decimal empaquetada</b>, garantizando una <b>precisión absoluta</b> hasta el último centavo.
                        </p>
                    </div>
                    <div class="flex justify-center bubble-card" style="--bubble-opacity: 0.08;">
                        <img src="./assets/univacii.svg" alt="UNIVAC Mainframe" class="max-h-56 w-auto" onerror="this.style.display='none';">
                    </div>
                </div>

                <div class="space-y-6 text-slate-300 text-sm leading-relaxed">
                    <div class="p-4 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-xl space-y-2">
                        <h4 class="font-bold text-purple-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-microchip"></i> De la Memoria Magnética al Silicio Moderno
                        </h4>
                        <p class="text-slate-400 text-xs">
                            La memoria magnética quedó atrás; hoy emplean <strong class="text-slate-200">semiconductores de silicio (RAM de alta velocidad)</strong> del orden de terabytes. Sus CPUs modernas combinan frecuencias muy elevadas con procesadores especializados integrados para cifrado por hardware e inteligencia artificial.
                        </p>
                    </div>

                    <div class="space-y-3">
                        <h4 class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                            <i class="fa-solid fa-server text-emerald-400"></i> Arquitectura y la Cúspide Tecnológica Actual
                        </h4>
                        <p class="text-xs text-slate-300">
                            Operan bajo el principio de <strong class="text-emerald-300">Scale-Up</strong> (máquinas hiperpotentes centralizadas) y utilizan particionamiento físico/virtual avanzado (<strong class="text-emerald-300">LPARs</strong>) para correr entornos corporativos junto a contenedores o Linux de manera totalmente aislada.
                        </p>
                        <div class="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
                            <strong class="text-sky-400 block text-xs font-mono">El Equipo más Reciente: IBM z17 &amp; LinuxONE 5</strong>
                            <p class="text-slate-400 text-xs">
                                La cúspide de esta tecnología se encuentra en sistemas avanzados como la familia <strong class="text-white">IBM z17</strong> y la línea <strong class="text-white">LinuxONE 5</strong>, los cuales incorporan <strong class="text-sky-300">aceleradores de IA nativos en el silicio</strong> (para analizar el 100% de las transacciones financieras en tiempo real y detectar fraudes en menos de un milisegundo) y criptografía avanzada orientada a proteger los datos frente a la computación cuántica.
                            </p>
                        </div>
                    </div>
                </div>

<div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-lg">
    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* LECCIÓN 1.1: ESQUELETO MÍNIMO DE UN PROGRAMA EN COBOL          *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> LEC0101.
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000070</span> <span class="text-amber-300">INICIO.</span>
<span class="text-slate-500">000080</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"¡Bienvenido al curso de COBOL!"</span>.
<span class="text-slate-500">000090</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
</div>

<!-- BLOQUE REUTILIZABLE DEL GLOSARIO -->
            ${getCobolDocumentationBlock()}

            </div>
        `;
    } else if (lessonId === '1.2') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-sky-400">Módulo 1 · Lección 1.2</span>
                    <span class="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded">Estructura de Columnas</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">El Formato Fijo de 80 Columnas</h2>

                <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                        <strong class="text-sky-300 block text-xs font-bold uppercase tracking-wider">El Legado Histórico (Formato Fijo)</strong>
                        <p class="text-slate-400 text-xs">
                            El formato clásico de 80 columnas se mantiene intacto como opción predeterminada y obligatoria en miles de sistemas antiguos que aún corren en producción en los mainframes del mundo. Si una empresa tiene un programa escrito en los años 70 u 80, el compilador actual del mainframe lo leerá exactamente respetando esas columnas (las secuencias, el área de comentarios en la columna 7, el Área A y el Área B).
                        </p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-emerald-400 rounded-r-xl space-y-2">
                        <strong class="text-emerald-300 block text-xs font-bold uppercase tracking-wider">La Evolución Moderna (Formato Libre)</strong>
                        <p class="text-slate-400 text-xs">
                            A partir del estándar oficial <strong>COBOL 2002</strong> (y consolidado en los estándares posteriores de 2014 y 2023), se introdujo oficialmente el Formato Libre. Los compiladores modernos (GnuCOBOL y los entornos actuales de IBM Enterprise COBOL) soportan perfectamente la directiva para prescindir de las restricciones de columnas.
                        </p>
                    </div>

                    <p class="text-xs text-slate-400 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                        <strong class="text-white block mb-1">En resumen:</strong> En los sistemas <em>legacy</em> más antiguos sigue rigiendo el formato fijo de 80 columnas por cuestiones de inercia y compatibilidad; sin embargo, el COBOL moderno ya adoptó el formato libre para alinearse con los estándares de programación actuales. ¡Es el puente perfecto entre el pasado de las tarjetas perforadas y el desarrollo de software contemporáneo!
                    </p>
                </div>

<div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-lg">
    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* DEMOSTRACIÓN DE ZONAS Y ÁREAS EN FORMATO FIJO                  *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> LEC0102.
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">DATA DIVISION.</span>
<span class="text-slate-500">000070</span> <span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
<span class="text-slate-500">000080</span> <span class="text-sky-400 font-semibold">01</span> <span class="text-emerald-400">WS-TEXTO</span>                 <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(20)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">"FORMATO FIJO COBOL"</span>.
<span class="text-slate-500">000090</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000100</span> <span class="text-amber-300">MAIN-PARAGRAPH.</span>
<span class="text-slate-500">000110</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-emerald-400">WS-TEXTO</span>.
<span class="text-slate-500">000120</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
</div>

<!-- BLOQUE REUTILIZABLE DEL GLOSARIO -->
            ${getCobolDocumentationBlock()}

            </div>
        `;
    } else if (lessonId === '1.3') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-sky-400">Módulo 1 · Lección 1.3</span>
                    <span class="text-[10px] bg-sky-950 text-sky-300 border border-sky-800 px-2.5 py-0.5 rounded font-mono">Limitadores Estructurales y Sintácticos</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Delimitadores, Divisiones y la Importancia del Punto (.)</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    Todo programa clásico en COBOL está estructurado jerárquicamente en divisiones, párrafos y sentencias. A diferencia de lenguajes modernos donde las llaves <code>{}</code> o los saltos de línea delimitan bloques, en COBOL la puntuación y los delimitadores juegan un papel crítico en el alcance de las instrucciones lógicas.
                </p>

                <div class="space-y-4 text-xs">
                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-sky-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-layer-group"></i> Las 4 Divisiones Fundamentales
                        </div>
                        <p class="text-slate-400">
                            Se dividen arquitectónicamente en:
                            <br>• <code>IDENTIFICATION DIVISION</code> (Metadatos y nombre del programa)
                            <br>• <code>ENVIRONMENT DIVISION</code> (Relación hardware/archivos)
                            <br>• <code>DATA DIVISION</code> (Memoria RAM y variables)
                            <br>• <code>PROCEDURE DIVISION</code> (Lógica y verbos ejecutables)
                        </p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-pink-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-pink-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-circle-stop"></i> El Poder y Peligro del Punto (.)
                        </div>
                        <p class="text-slate-400">
                            El punto final en COBOL marca el cierre definitivo de una sentencia o un párrafo completo. Olvidar un punto o colocarlo erróneamente dentro de una estructura condicional (como un <code>IF</code>) puede alterar drásticamente la lógica de ejecución del programa.
                        </p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-amber-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-columns"></i> Espacios y Comas
                        </div>
                        <p class="text-slate-400">
                            Los espacios en blanco son obligatorios para separar palabras reservadas, nombres de variables y operadores (COBOL no permite palabras pegadas).
                        </p>
                    </div>
                </div>
            </div>
        `;
    } else if (lessonId === '1.4') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-sky-400">Módulo 1 · Lección 1.4</span>
                    <span class="text-[10px] bg-sky-950 text-sky-300 border border-sky-800 px-2.5 py-0.5 rounded font-mono">Práctica Interactiva</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">¡Tu Primer Hola Mundo y Glosario Didáctico!</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    Es momento de consolidar lo aprendido. Revisa el glosario oficial de colores, resuelve el rompecabezas lógico y consulta la solución cuando estés listo.
                </p>

                        <!-- Bloque de Documentación -->
                <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4">
                    <h3 class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-palette text-sky-400"></i> Glosario Visual de Sintaxis COBOL
                    </h3>
                    <div class="grid sm:grid-cols-2 gap-3 text-xs">
                        <!-- 1. Palabras Reservadas y Verbos -->
                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-sky-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.5)]"></span>
                            <div>
                                <strong class="text-sky-300 block mb-0.5">Palabras Reservadas y Verbos</strong>
                                <span class="text-slate-400 text-[11px]">En tono <span class="text-sky-400 font-bold">Azul Claro</span>, indican instrucciones clave como <code class="text-sky-300">DISPLAY</code> o <code class="text-sky-300">DIVISION</code>.</span>
                            </div>
                        </div>

                        <!-- 2. Comentarios y Documentación -->
                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-purple-600 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.5)]"></span>
                            <div>
                                <strong class="cobol-comment text-[13px] block font-extrabold mb-0.5"><b>Comentarios y Documentación</b></strong>
                                <span class="text-slate-400 text-[11px]">Envueltos con la etiqueta <span class="cobol-comment font-bold">tornasol</span>, señalan líneas ignoradas por el compilador (*).</span>
                            </div>
                        </div>

                        <!-- 3. Literales Alfanuméricos (Strings) -->
                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-pink-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(244,114,182,0.5)]"></span>
                            <div>
                                <strong class="text-pink-300 block mb-0.5">Literales Alfanuméricos (Strings)</strong>
                                <span class="text-slate-400 text-[11px]">En color <span class="text-pink-300 font-bold">Rosa</span>, definen cadenas de texto fijas entre comillas.</span>
                            </div>
                        </div>

                        <!-- 4. Etiquetas y Párrafos -->
                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-amber-300 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(252,211,77,0.5)]"></span>
                            <div>
                                <strong class="text-amber-300 block mb-0.5">Etiquetas y Párrafos</strong>
                                <span class="text-slate-400 text-[11px]">En tono <span class="text-amber-300 font-bold">Amarillo</span>, funcionan como puntos de anclaje.</span>
                            </div>
                        </div>

                        <!-- 5. Nombre del Programa -->
                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-slate-100 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(241,245,249,0.5)]"></span>
                            <div>
                                <strong class="text-slate-100 block mb-0.5">Nombre del Programa</strong>
                                <span class="text-slate-400 text-[11px]">En tono <span class="text-slate-100 font-bold">Blanco</span>, identifica el módulo o programa (ej. <code class="text-slate-200">EJEMPLOPIC</code>).</span>
                            </div>
                        </div>

                        <!-- 6. Variables y Data Names -->
                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-emerald-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                            <div>
                                <strong class="text-emerald-300 block mb-0.5">Variables y Data Names</strong>
                                <span class="text-slate-400 text-[11px]">En tono <span class="text-emerald-400 font-bold">Verde</span>, corresponden a nombres de campos y registros.</span>
                            </div>
                        </div>

                        <!-- 7. Cláusulas PIC y Tipos -->
                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800 col-span-full sm:col-span-1">
                            <span class="w-3 h-3 rounded-full bg-pink-300/70 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(244,114,182,0.3)]"></span>
                            <div>
                                <strong class="text-pink-200/90 block mb-0.5">Cláusulas PIC y Tipos</strong>
                                <span class="text-slate-400 text-[11px]">En <span class="text-pink-200/90 font-bold">Rosa Tenue</span>, definen la estructura y máscara (ej. <code class="text-pink-200">X(15)</code>, <code class="text-pink-200">9(02)</code>).</span>
                            </div>
                        </div>
                    </div>
                </div>
                        <!-- Mini Bloque columnas -->
                        <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4">
                            <h3 class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                                <i class="fa-solid fa-columns text-sky-400"></i> Distribución de Columnas (Formato Clásico COBOL)
                            </h3>
                            <div class="grid sm:grid-cols-2 gap-3 text-xs">
                                <!-- 1. Columnas 1 a 6 -->
                                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                                    <span class="w-3 h-3 rounded-full bg-slate-500 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(100,116,139,0.5)]"></span>
                                    <div>
                                        <strong class="text-slate-300 block mb-0.5">Columnas 1 - 6</strong>
                                        <span class="text-slate-400 text-[11px]">Área de <span class="text-slate-200 font-bold">Secuencia</span>. Utilizada tradicionalmente para numerar líneas.</span>
                                    </div>
                                </div>

                                <!-- 2. Columna 7 -->
                                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                                    <span class="w-3 h-3 rounded-full bg-amber-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></span>
                                    <div>
                                        <strong class="text-amber-300 block mb-0.5">Columna 7</strong>
                                        <span class="text-slate-400 text-[11px]">Área de <span class="text-amber-300 font-bold">Indicador</span>. El asterisco (<code class="text-amber-200">*</code>) denota comentarios.</span>
                                    </div>
                                </div>

                                <!-- 3. Columnas 8 a 11 -->
                                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                                    <span class="w-3 h-3 rounded-full bg-emerald-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(2,132,199,0.5)]"></span>
                                    <div>
                                        <strong class="text-emerald-300 block mb-0.5">Columnas 8 - 11 (Área A)</strong>
                                        <span class="text-slate-400 text-[11px]">Margen A para <span class="text-emerald-300 font-bold">Divisiones, Secciones</span> y nivel 01.</span>
                                    </div>
                                </div>

                                <!-- 4. Columnas 12 a 80 -->
                                <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                                    <span class="w-3 h-3 rounded-full bg-purple-500 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                    <div>
                                        <strong class="text-purple-300 block mb-0.5">Columnas 12 - 80 (Área B)</strong>
                                        <span class="text-slate-400 text-[11px]">Margen B para <span class="text-purple-400 font-bold">sentencias ejecutables</span>, verbos y cláusulas (<code class="text-sky-400">PIC</code>, <code class="text-sky-400">MOVE</code>).</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Bloque de Documentación -->

                <div class="bg-slate-950/80 border border-purple-900/40 rounded-xl p-5 space-y-4 shadow-lg">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h4 class="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                            <i class="fa-solid fa-puzzle-piece text-purple-400"></i> Rompecabezas Lógico: Arma tu Bloque
                        </h4>
                        <span class="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800">Reto Práctico</span>
                    </div>
                    <p class="text-xs text-slate-300">
                        Ordena mentalmente los siguientes conceptos y líneas clave para construir un programa funcional en COBOL:
                    </p>
                    <div class="grid gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>1. [ ? ] <strong class="text-sky-400">IDENTIFICATION DIVISION.</strong></span>
                            <span class="text-[10px] text-slate-500">División inicial</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>2. [ ? ] <strong class="text-sky-400">PROGRAM-ID. </strong><strong class="text-sky-100">HOLAMUNDO.</strong></span>
                            <span class="text-[10px] text-slate-500">Identificador del programa</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>3. [ ? ] <strong class="text-sky-400">PROCEDURE DIVISION.</strong></span>
                            <span class="text-[10px] text-slate-500">División de procedimientos</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>4. [ ? ] <strong class="text-amber-400">INICIO-PROGRAMA.</strong></span>
                            <span class="text-[10px] text-slate-500">Etiqueta / Párrafo inicial</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>5. [ ? ] <strong class="text-sky-400">DISPLAY </strong><strong class="text-pink-400">"¡Hola Mundo desde GnuCOBOL y Mainframe!"</strong></span>
                            <span class="text-[10px] text-slate-500">Salida en pantalla</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>6. [ ? ] <strong class="text-sky-400">STOP RUN.</strong></span>
                            <span class="text-[10px] text-slate-500">Cierre de ejecución</span>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <button onclick="toggleSolution()" class="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300">
                        <i id="btn-sol-icon" class="fa-solid fa-eye"></i>
                        <span id="btn-sol-text">Mostrar Solución</span>
                    </button>
                </div>

                <div id="solution-container" class="hidden space-y-3 pt-2 transition-all duration-300">
                    <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-code text-emerald-400"></i> Estructura Final del Programa "Hola Mundo"
                    </h3>
<div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-xl">
    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* MI PRIMER PROGRAMA: HOLA MUNDO EN COBOL                        *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> HOLAMUNDO.
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000070</span> <span class="text-amber-300">INICIO-PROGRAMA.</span>
<span class="text-slate-500">000080</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"¡Hola Mundo desde GnuCOBOL y Mainframe!"</span>.
<span class="text-slate-500">000090</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
</div>
                </div>
            </div>
        `;
    }
    // --- MÓDULO 2: MANEJO DE MEMORIA ---
    else if (lessonId === '2.1') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-purple-400">Módulo 2 · Lección 2.1</span>
                    <span class="text-[10px] bg-purple-950 text-purple-300 border border-purple-800 px-2.5 py-0.5 rounded font-mono">Estructura Jerárquica</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Los Niveles de Datos</h2>

                <div class="relative p-4 bg-slate-950/80 rounded-r-xl space-y-2 border-torna">
                    <i class="cobol-comment fa-solid fa-feather"></i><span class="cobol-comment font-bold"> Históricamente:</span>
                    <p class="text-slate-400 text-xs leading-relaxed">

                       <b>COBOL</b> nació bajo <b>restricciones extremas</b> de <b>hardware</b>, su gestión de <b>memoria</b> se diseñó como un <span class="text-gold-900 font-extrabold strong">bloque estático</span> y <b>contiguo</b> de bytes preasignado en tiempo de compilación dentro de la <b>WORKING-STORAGE SECTION</b>. Cada variable ocupaba un desplazamiento <b><i>(offset)</i></b> fijo en el búfer de memoria.

                    </p>
                </div>

                <!-- SECCIÓN MODIFICADA A DOS COLUMNAS CON EL TEXTO Y LA IMAGEN matrk.svg -->
                <div class="grid md:grid-cols-2 gap-6 items-center bg-slate-950/40 border border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-lg">
                    <div class="space-y-4 text-slate-300 text-sm leading-relaxed">

                        <p class="text-slate-400 text-xs leading-relaxed">
                            Imagina que la memoria <span class="text-white-900 font-extrabold">RAM</span> de la computadora es una enorme tira de papel continua (o una cinta métrica gigante). COBOL no es como Python o JavaScript, donde tú creas una variable y la computadora mágicamente le busca un lugar, y la tira de papel crece, o se encoge y las variables flotan libremente; No, en <b>COBOL</b> tú agarras esa tira gigante y dices: <span class="cobol-comment font-bold italic">"A ver, esta sección mide 50 bytes, esta otra 10, y yo te voy a decir exactamente qué vive en dónde"</span>.<br><br>
                            Los niveles de datos no son sino reglas de jerarquía y anidación: <br>

                        </p>
                            <ul class="list-disc list-inside bg-slate-950/80 text-slate-300 text-xs leading-relaxed space-y-1">
                                <li class="text-purple-300"><span class="text-slate-400">Imagina que tienes una caja de cartón <span class="text-purple-300 font-bold">(Nivel 01)</span>.</span></li>
                                <li class="text-sky-400"><span class="text-slate-400">Dentro de esa caja, metes cajas más pequeñas <span class="text-sky-400 font-bold">(Nivel 05)</span>.</span></li>
                                <li class="text-amber-400"><span class="text-slate-400">Y tienes un Post-it que no está en ninguna caja <span class="text-amber-400 font-bpld">(Nivel 77)</span>.</span></li>
                            </ul>
                    </div>
                    <div class="flex justify-center bubble-card" style="--bubble-opacity: 0.08;">
                    <img src="./assets/matrk.svg" alt="Estructura de Memoria COBOL"
                    class="max-h-56 w-auto" onerror="this.style.display='none';">
                    </div>
                </div>

                <div class="grid gap-4 text-xs">
                    <div class="p-4 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-purple-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-layer-group"></i> Nivel 01 (Registros Principales)
                        </div>
                        <p class="text-slate-400">
                            Define el <b>bloque completo</b> de datos. Si tú le pides a COBOL que mueva, imprima o guarde un 01, la computadora agarra toda la caja con todo lo que tiene adentro de un solo golpe. Se rige por la <b>especificación</b> del <b>lenguaje COBOL</b>. <b>Todo</b> registro individual o <b>grupo principal</b> <b>debe comenzar</b> con el <b>nivel 01</b>. Debe iniciar siempre en el <b>Área A</b> del <b>código</b> de <b>COBOL</b>.<br><br>
                            Ej: 01 CLIENTE. (La caja entera que contiene la ficha de una persona: su nombre, su edad, su dirección).
                        </p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-sky-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-sitemap"></i> Niveles 02 al 49 (Subcampos)
                        </div>
                        <p class="text-slate-400">
                            Si el nivel 01 es <b>CLIENTE</b>, los niveles 05 son las cosas que están adentro: el nombre, el apellido, la calle. En la industria <b>Mainframe</b>, se estableció el <b>acuerdo de estilo</b> de <b>incrementar</b> de 5 en 5. Si quieres acceder a ellos individualmente, le dices a COBOL: "Oye, búscame el 05 que está dentro del 01".<br><br>
                            Ej: El cliente es 01, el nombre del cliente sería 05, su fecha de nacimiento un 10 y el año de nacimiento un 15.<br><br>
                            Dado que es una acuerdo de estilo, esto también sería válido: Cliente: 01, Nombre: 02, Fecha 03, Año: 04.
                        </p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-amber-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-tag"></i> Nivel 77 (Variables Independientes)
                        </div>
                        <p class="text-slate-400">
                            Es una variable suelta que creas para hacer cálculos rápidos (un contador, un acumulador, un interruptor de "sí o no"). No tiene hijos, no tiene padres, no pertenece a ninguna estructura familiar. Está ahí sola en la memoria.<br><br>
                            Ej: Un numerito aislado que usas para contar cuántas veces pasó algo, sin importarle los clientes.
                        </p>
                    </div>
                </div>

<div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-lg">
    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* DEMOSTRACIÓN DE LA DECLARACIÓN DE NIVELES DE DATOS            *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span><span class="cobol-comment">* División principal para identificar el programa</span>
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> DEMONIV.
<span class="text-slate-500">000070</span><span class="cobol-comment">* Nombre del programa ejecutable</span>
<span class="text-slate-500">000080</span> <span class="text-sky-400 font-semibold">DATA DIVISION.</span>
<span class="text-slate-500">000090</span><span class="cobol-comment">* División reservada para la definición de la memoria RAM</span>
<span class="text-slate-500">000100</span> <span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
<span class="text-slate-500">000110</span><span class="cobol-comment">* Bloque estático y contiguo preasignado en tiempo de compilación</span>
<span class="text-slate-500">000120</span> <span class="text-sky-400 font-semibold">77</span>  <span class="text-emerald-400">WS-CONTADOR</span>             <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(03)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">000</span>.
<span class="text-slate-500">000130</span><span class="cobol-comment">* NIVEL 77: Post-it suelto. Variable independiente sin jerarquía</span>
<span class="text-slate-500">000140</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-CLIENTE</span>.
<span class="text-slate-500">000150</span><span class="cobol-comment">* NIVEL 01: Caja de cartón. Registro principal en Área A</span>
<span class="text-slate-500">000160</span>     <span class="text-sky-400 font-semibold">05</span>  <span class="text-emerald-400">WS-NOMBRE</span>           <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(30)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">"JUAN PEREZ"</span>.
<span class="text-slate-500">000170</span><span class="cobol-comment">*    NIVEL 05: Subcampo primario dentro de la caja CLIENTE</span>
<span class="text-slate-500">000180</span>     <span class="text-sky-400 font-semibold">05</span>  <span class="text-emerald-400">WS-FECHA-NACIMIENTO</span>.
<span class="text-slate-500">000190</span><span class="cobol-comment">*    NIVEL 05: Caja intermedia que agrupa los campos de la fecha</span>
<span class="text-slate-500">000200</span>         <span class="text-sky-400 font-semibold">10</span>  <span class="text-emerald-400">WS-DIA</span>         <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(02)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">15</span>.
<span class="text-slate-500">000210</span><span class="cobol-comment">*       NIVEL 10: Subcampo hijo que almacena el día</span>
<span class="text-slate-500">000220</span>         <span class="text-sky-400 font-semibold">10</span>  <span class="text-emerald-400">WS-MES</span>         <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(02)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">09</span>.
<span class="text-slate-500">000230</span><span class="cobol-comment">*       NIVEL 10: Subcampo hijo que almacena el mes</span>
<span class="text-slate-500">000240</span>         <span class="text-sky-400 font-semibold">10</span>  <span class="text-emerald-400">WS-ANIO</span>.
<span class="text-slate-500">000250</span><span class="cobol-comment">*       NIVEL 10: Subgrupo contenedor para descomponer el año</span>
<span class="text-slate-500">000260</span>             <span class="text-sky-400 font-semibold">15</span>  <span class="text-emerald-400">WS-SIGLO</span>   <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(02)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">20</span>.
<span class="text-slate-500">000270</span><span class="cobol-comment">*          NIVEL 15: Subcampo nieto para los primeros dos dígitos</span>
<span class="text-slate-500">000280</span>             <span class="text-sky-400 font-semibold">15</span>  <span class="text-emerald-400">WS-DECADA</span>  <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(02)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">26</span>.
<span class="text-slate-500">000285</span><span class="cobol-comment">*          NIVEL 15: Subcampo nieto para los últimos dos dígitos</span>
<span class="text-slate-500">000290</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000300</span><span class="cobol-comment">* División de instrucciones ejecutables</span>
<span class="text-slate-500">000310</span> <span class="text-amber-300">MAIN-PARAGRAPH.</span>
<span class="text-slate-500">000320</span><span class="cobol-comment">* Párrafo de inicio del programa</span>
<span class="text-slate-500">000330</span>     <span class="text-sky-400 font-semibold">ADD</span> <span class="text-purple-300">1</span> <span class="text-sky-400 font-semibold">TO</span> <span class="text-emerald-400">WS-CONTADOR</span>.
<span class="text-slate-500">000340</span><span class="cobol-comment">* Operación sobre la variable aislada (Nivel 77)</span>
<span class="text-slate-500">000350</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"CONTADOR (77): "</span> <span class="text-emerald-400">WS-CONTADOR</span>.
<span class="text-slate-500">000360</span><span class="cobol-comment">* Imprime el valor del Post-it independiente</span>
<span class="text-slate-500">000370</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"CAJA ENTERA (01): "</span> <span class="text-emerald-400">WS-CLIENTE</span>.
<span class="text-slate-500">000380</span><span class="cobol-comment">* Imprime toda la caja (Nivel 01) y sus subcampos de un solo golpe</span>
<span class="text-slate-500">000390</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"SUBCAMPO (15): "</span> <span class="text-emerald-400">WS-SIGLO</span>.
<span class="text-slate-500">000400</span><span class="cobol-comment">* Accede individualmente al subcampo Nivel 15</span>
<span class="text-slate-500">000410</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.
<span class="text-slate-500">000420</span><span class="cobol-comment">* Fin de la ejecución del programa</span></code></pre>
</div>

<!-- BLOQUE REUTILIZABLE DEL GLOSARIO -->
            ${getCobolDocumentationBlock()}

            </div>
        `;
    } else if (lessonId === '2.2') {
        container.innerHTML = `

        <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <span class="text-xs font-mono text-purple-400">Módulo 2 · Lección 2.2</span>
                <span class="text-[10px] bg-purple-950 text-purple-300 border border-purple-800 px-2.5 py-0.5 rounded font-mono">Tipos y Formatos</span>
            </div>

            <h2 class="text-2xl font-bold text-white tracking-tight">La Cláusula PIC (Picture) y Los Tipos de Datos</h2>

            <div class="relative p-4 bg-slate-950/80 rounded-r-xl space-y-2 border-torna">
                <i class="cobol-comment fa-solid fa-memory"></i><span class="cobol-comment font-bold"> Históricamente:</span>
                <p class="text-slate-400 text-xs leading-relaxed">
                En COBOL no existen tipos de datos abstractos como <b>int</b>, <b>float</b> o <b>string</b>.
                La <b>gestión de memoria</b> se diseñó como un <b>bloque estático y contiguo</b> de <b>bytes preasignado</b>. Cada variable ocupaba un <b><i>offset</i></b>, <span class="cobol-comment italic">(un <b><i>offset</i></b> actúa como una coordenada que <b>marca</b> el <b>inicio</b> de un bloque de <b>memoria</b> y junto a <b><i>Length</i></b> determina la <b>ubicación milimétrica</b> del espacio donde <b>habita</b> la <b>variable)</b></span> fijo en el búfer de memoria.
                Como la memoria es una tira plana de bytes, tienes que dibujar con <b>precisión quirúrgica</b> cómo se ve cada <b>dato</b> usando una máscara o plantilla.<br><br>

                Al no haber un motor moderno que adivine los tipos de datos en tiempo de ejecución (como Python o JavaScript), <b>el compilador confía ciegamente en la etiqueta PIC.</b> Si la etiqueta dice: <span class="cobol-comment">"La caja es numérica (PIC 9)"</span> y tú intentas meterle una <b>letra</b>, <b>COBOL asume</b> que estás <b>violando las leyes</b> de clasificación, lo que puede provocar un error matemático <b>(data exception)</b> y <b>apagar</b> el <b>programa</b> por <b>seguridad</b>.
                </p>
            </div>
            <div class="p-4 bg-slate-950/80 border-l-4 border-red-300 rounded-r-xl space-y-2">
                <div class="font-bold text-red-300 text-sm flex items-center gap-2">
                    <i class="fa-solid fa-camera-retro"></i> ¿Qué es la cláusula PIC?
                </div>
                <p class="text-slate-400 text-xs leading-relaxed">
                <b>PIC</b> es la abreviatura de Picture (Imagen). Es una <b>cadena de símbolos</b> que le <b>explica</b> al <b>compilador</b>: <span class="cobol-comment">"Este campo mide tantos caracteres y solo acepta letras, o solo números, o viene con puntos decimales incluidos". </span>
                La forma más sencilla de entender la cláusula PIC, es <b>pensar</b> que la PIC es el <b>molde</b> que <b>le dice a COBOL</b> <b>cómo</b> debe ser un dato: <b>qué</b> tipo de dato es, <b>cuántos</b> caracteres ocupa y, en algunos casos, cómo se debe presentar.<br><br>
                Si los niveles <b>(</b><span class="text-purple-300 font-bold">01</span>, <span class="text-sky-300 font-bold">05</span>, <span class="text-amber-300 font-bold">77</span><b>)</b> eran las <b>cajas</b> para <b>organizar</b> la <b>memoria</b>, la <b>Cláusula PIC</b> (Picture) es la <b>etiqueta pegada</b> en la caja que dice <b>exactamente</b> qué <b>tipo de contenido</b> vive adentro y <b>cuánto espacio ocupa</b>. Los tipos de datos básicos para almacenar información, son tres:
                </p>
            </div>

            <div class="grid sm:grid-cols-2 gap-4 text-xs">
                <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                    <span class="font-bold text-sky-300 block text-sm">Alfanuméricos: (X)</span>
                    <p class="text-slate-400">Acepta letras, números y símbolos. Ejemplo: <code>PIC X(10)</code> reserva 10 espacios de texto alineados a la izquierda. Es lo más parecido a una cadena de texto (string).</p>
                </div>

                <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                    <span class="font-bold text-purple-300 block text-sm">Alfabéticos: (A)</span>
                    <p class="text-slate-400">Únicamente acepta letras, [de la A a la Z y espacios]. Honestamente, hoy en día casi no se usa; los programadores prefieren usar X para el texto.</p>
                </div>
            </div>

  <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
      <span class="font-bold text-yellow-300 block text-sm">Numéricos: (9)</span>
      <p class="text-slate-400 text-xs">
      Guarda únicamente números para realizar cálculos matemáticos.<br><br>
      <span class="font-bold text-yellow-300 block text-xs">Las 2 extensiones numéricas</span>
      Aunque los 3 anteriores son la base, dentro del tipo numérico (9) existen dos modificadores fundamentales para trabajar con números reales:
      <ul class="list-disc list-inside bg-slate-950/80 text-slate-300 text-xs leading-relaxed space-y-1">
      <li>Con signo (S): Para indicar si el número puede ser negativo (ejemplo: PIC S9(4)).</li>
      <li>Con decimales (V): Para indicar la posición de la coma o punto decimal (ejemplo: PIC 9(3)V99).</li>
      </ul>
      <span class="font-bold text-yellow-300 block text-xs">Numéricos de edición (para mostrar en pantalla o reportes)</span>
      <span class="text-slate-400 text-xs">
      Existe una cuarta categoría indirecta llamada caracteres de edición, que sirve para dar formato visual a los números antes de imprimir un cheque o reporte:
      </span>

      <ul class="list-disc list-inside bg-slate-950/80 text-slate-300 text-xs leading-relaxed space-y-1">
         <li>Z: Reemplaza los ceros a la izquierda por espacios (ej. PIC ZZ9).</li>
         <li>, / .: Añade comas de miles o puntos decimales visibles.</li>
         <li>$: Añade el símbolo de moneda automáticamente.</li>
      </ul>

  </div>

            <!-- Contenedor de código -->
            <div id="solution-container-pic" class="space-y-3 pt-2 transition-all duration-300">
                <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <i class="fa-solid fa-code text-emerald-400"></i> Ejemplo de Uso de Cláusula PIC
                </h3>
                <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-xl">
                    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000100</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000200</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> EJEMPLOPIC.
<span class="text-slate-500">000300</span> <span class="text-sky-400 font-semibold">ENVIRONMENT DIVISION.</span>
<span class="text-slate-500">000400</span> <span class="text-sky-400 font-semibold">DATA DIVISION.</span>
<span class="text-slate-500">000500</span> <span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
<span class="text-slate-500">000600</span><span class="cobol-comment">*----------------------------------------------------------------*</span>
<span class="text-slate-500">000700</span><span class="cobol-comment">* DEFINICION DE VARIABLES CON CLAUSULA PIC EN FORMATO COLUMNADO  *</span>
<span class="text-slate-500">000800</span><span class="cobol-comment">*----------------------------------------------------------------*</span>
<span class="text-slate-500">000900</span> <span class="text-sky-400 font-semibold">01</span> <span class="text-emerald-400">NOMBRE-CLIENTE</span>  <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(15)</span>     <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">"CARLOS GOMEZ"</span>.
<span class="text-slate-500">001000</span> <span class="text-sky-400 font-semibold">01</span> <span class="text-emerald-400">EDAD-CLIENTE</span>    <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(02)</span>     <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">30</span>.
<span class="text-slate-500">001100</span> <span class="text-sky-400 font-semibold">01</span> <span class="text-emerald-400">SALDO-CUENTA</span>    <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(04)V99</span>  <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">1250.50</span>.
<span class="text-slate-500">001200</span> <span class="text-sky-400 font-semibold">01</span> <span class="text-emerald-400">SALDO-FORMATO</span>   <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">$Z,ZZ9.99</span>.
<span class="text-slate-500">001300</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">001400</span> <span class="text-amber-300">MAIN-PROCEDURE.</span>
<span class="text-slate-500">001500</span>     <span class="text-sky-400 font-semibold">MOVE</span> <span class="text-emerald-400">SALDO-CUENTA</span> <span class="text-sky-400 font-semibold">TO</span> <span class="text-emerald-400">SALDO-FORMATO</span>.
<span class="text-slate-500">001600</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"NOMBRE: "</span> <span class="text-emerald-400">NOMBRE-CLIENTE</span>.
<span class="text-slate-500">001700</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"EDAD:   "</span> <span class="text-emerald-400">EDAD-CLIENTE</span>.
<span class="text-slate-500">001800</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"SALDO:  "</span> <span class="text-emerald-400">SALDO-FORMATO</span>.
<span class="text-slate-500">001900</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
                </div>
            </div>

            <!-- BLOQUE REUTILIZABLE DEL GLOSARIO -->
                        ${getCobolDocumentationBlock()}

        </div>


        `;
    } else if (lessonId === '2.3') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-purple-400">Módulo 2 · Lección 2.3</span>
                    <span class="text-[10px] bg-purple-950 text-purple-300 border border-purple-800 px-2.5 py-0.5 rounded font-mono">Inicialización</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Literales y Literales Figurativos</h2>

                <div class="relative p-4 bg-slate-950/80 rounded-r-xl space-y-2 border-torna">
                    <i class="cobol-comment fa-solid fa-book-open-reader"></i><span class="cobol-comment font-bold"> Antecedentes</span>
                    <p class="text-slate-400 text-xs leading-relaxed">

                    La existencia de los literales y los literales figurativos responde, directamente, a la arquitectura de las computadoras de mediados del siglo XX y a la filosofía del lenguaje de ser legible como  <b><i>inglés empresarial</i></b>. En los <b>mainframes</b> antiguos, las zonas de <b>memoria</b> no inicializadas contenían "basura" <b>(datos residuales de otros procesos)</b>. La RAM conserva los patrones de bits de la última electricidad o magnetismo que pasó por ella; la región de memoria RAM donde trabajó quedaba liberada en el sistema operativo, pero los datos binarios seguían grabados físicamente en los transistores o núcleos de ferrita. Se necesitaba una forma rápida, estándar y sin consumo extra de almacenamiento en  blanquear grandes estructuras de datos <b><i>(RECORDS)</i></b> antes de procesar archivos.<br><br>
                    Para entenderlo mejor, imagina que eres un profesor y al entrar a dar <span class="silver-gradient-text font-bold italic">clase:: [Programa]</span>, el <span class="text-sky-300 font-bold italic">pizarrón:: [Memoria]</span> contiene los apuntes de la clase previa, el problema es que esos apuntes interfieren con tu clase y necesitas borrarlos; los <span class="text-red-300 font-bold italic">literales</span> vendrían a ser el <span class="text-red-300 font-bold italic">borrador y plumón</span> para sobreescribir el pizarrón, mientras que los <span class="cobol-comment font-bold italic">literales figurativos</span> serían un <span class="cobol-comment font-bold italic">botón mágico que limpia el pizarrón por completo</span>.
                    </p>
                </div>

<!-- Bloque demostrativo -->

                    <!-- SPACES / SPACE -->
                    <div class="bg-[#111827]/80 backdrop-blur-md border-l-4 border-purple-500 rounded-r-xl p-5 text-gray-200 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                        <div class="flex items-center gap-3 mb-2">
                            <i class="fa-solid fa-[#111827] fa-marker text-purple-400 text-sm"></i>
                            <h3 class="font-bold text-sm text-purple-400 tracking-wide">SPACES / SPACE</h3>
                        </div>
                        <p class="text-xs text-gray-300 leading-relaxed mb-3">
                            Llena el campo o variable completamente con espacios en blanco (caracteres de relleno estándar).
                        </p>
                        <div class="bg-[#0B0F19] rounded-lg p-3 text-xs text-gray-400 border border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span><strong class="text-purple-300">Tipo de dato:</strong> Alfanumérico (<code class="text-purple-400">PIC X</code>)</span>
                            <span class="bg-purple-950/60 text-purple-300 px-2.5 py-1 rounded border border-purple-800/40"><i class="fa-solid fa-terminal mr-1.5"></i>MOVE SPACES TO WS-TEXTO</span>
                        </div>
                    </div>

                    <!-- ZEROS / ZERO / ZEROES -->
                    <div class="bg-[#111827]/80 backdrop-blur-md border-l-4 border-sky-500 rounded-r-xl p-5 text-gray-200 shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
                        <div class="flex items-center gap-3 mb-2">
                            <i class="fa-solid fa-[#111827] fa-hashtag text-sky-400 text-sm"></i>
                            <h3 class="font-bold text-sm text-sky-400 tracking-wide">ZEROS / ZERO / ZEROES</h3>
                        </div>
                        <p class="text-xs text-gray-300 leading-relaxed mb-3">
                            Rellena la variable numérica o alfanumérica con ceros ('0'). Se adapta automáticamente al formato numérico (<code class="text-sky-300">COMP-3, binario o display</code>) sin provocar errores de tipo de dato.
                        </p>
                        <div class="bg-[#0B0F19] rounded-lg p-3 text-xs text-gray-400 border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span><strong class="text-sky-300">Tipo de dato:</strong> Numérico / Alfanumérico (<code class="text-sky-400">PIC 9</code> / <code class="text-sky-400">PIC X</code>)</span>
                            <span class="bg-sky-950/60 text-sky-300 px-2.5 py-1 rounded border border-sky-800/40"><i class="fa-solid fa-terminal mr-1.5"></i>MOVE ZEROS TO WS-ACUMULADOR</span>
                        </div>
                    </div>

                    <!-- HIGH-VALUES / LOW-VALUES -->
                    <div class="bg-[#111827]/80 backdrop-blur-md border-l-4 border-amber-500 rounded-r-xl p-5 text-gray-200 shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                        <div class="flex items-center gap-3 mb-2">
                            <i class="fa-solid fa-[#111827] fa-sort text-amber-400 text-sm"></i>
                            <h3 class="font-bold text-sm text-amber-400 tracking-wide">HIGH-VALUES / LOW-VALUES</h3>
                        </div>
                        <p class="text-xs text-gray-300 leading-relaxed mb-3">
                            Representan el valor hexadecimal más alto (<code class="text-amber-300">X'FF'</code>) y más bajo (<code class="text-amber-300">X'00'</code>) del conjunto de caracteres del sistema. Son fundamentales para indicar fin de archivo (EOF) y control de cortes en procesos Batch.
                        </p>
                        <div class="bg-[#0B0F19] rounded-lg p-3 text-xs text-gray-400 border border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span><strong class="text-amber-300">Uso común:</strong> Archivos, tablas y algoritmos de ordenamiento</span>
                            <span class="bg-amber-950/60 text-amber-300 px-2.5 py-1 rounded border border-amber-800/40"><i class="fa-solid fa-terminal mr-1.5"></i>MOVE HIGH-VALUES TO REG-CLAVE</span>
                        </div>
                    </div>

                    <!-- ALL 'literal' -->
                    <div class="bg-[#111827]/80 backdrop-blur-md border-l-4 border-emerald-500 rounded-r-xl p-5 text-gray-200 shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                        <div class="flex items-center gap-3 mb-2">
                            <i class="fa-solid fa-[#111827] fa-repeat text-emerald-400 text-sm"></i>
                            <h3 class="font-bold text-sm text-emerald-400 tracking-wide">ALL 'literal'</h3>
                        </div>
                        <p class="text-xs text-gray-300 leading-relaxed mb-3">
                            Repite una cadena o carácter especificado cíclicamente hasta llenar por completo la longitud de la variable receptora. Ideal para generar líneas divisoras o patrones en reportes.
                        </p>
                        <div class="bg-[#0B0F19] rounded-lg p-3 text-xs text-gray-400 border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span><strong class="text-emerald-300">Tipo de dato:</strong> Alfanumérico (<code class="text-emerald-400">PIC X</code>)</span>
                            <span class="bg-emerald-950/60 text-emerald-300 px-2.5 py-1 rounded border border-emerald-800/40"><i class="fa-solid fa-terminal mr-1.5"></i>MOVE ALL '-' TO WS-LINEA</span>
                        </div>
                    </div>

                    <!-- QUOTES / QUOTE -->
                    <div class="bg-[#111827]/80 backdrop-blur-md border-l-4 border-rose-500 rounded-r-xl p-5 text-gray-200 shadow-lg hover:shadow-rose-500/10 transition-all duration-300">
                        <div class="flex items-center gap-3 mb-2">
                            <i class="fa-solid fa-[#111827] fa-quote-right text-rose-400 text-sm"></i>
                            <h3 class="font-bold text-sm text-rose-400 tracking-wide">QUOTES / QUOTE</h3>
                        </div>
                        <p class="text-xs text-gray-300 leading-relaxed mb-3">
                            Representa el carácter de comilla simple o doble (según la configuración del compilador). Permite insertar comillas dentro de cadenas de texto sin romper la sintaxis del programa.
                        </p>
                        <div class="bg-[#0B0F19] rounded-lg p-3 text-xs text-gray-400 border border-rose-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span><strong class="text-rose-300">Uso común:</strong> Archivos delimitados (CSV) y cadenas complejas</span>
                            <span class="bg-rose-950/60 text-rose-300 px-2.5 py-1 rounded border border-rose-800/40"><i class="fa-solid fa-terminal mr-1.5"></i>MOVE QUOTE TO WS-DELIMITADOR</span>
                        </div>
                    </div>

<!-- SECCIÓN VENTAJAS -->
<div class="p-4 bg-slate-950/80 border-l-4 border-red-300 rounded-r-xl space-y-2">
    <div class="font-bold text-red-300 text-sm flex items-center gap-1">
        <i class="fa-solid fa-laptop-code"></i> Diferencias entre Literales y Figurativos
    </div>
    <p class="text-slate-400 text-xs leading-relaxed">
    <b>Literales comunes (fijos):</b><br>
    Tienen un valor y un tamaño estáticos explícitamente definidos por ti en el código.</p>

            <ul class="list-disc list-inside bg-slate-950/80 text-slate-300 text-xs leading-relaxed space-y-1">
            <li>'HOLA' siempre ocupará 4 bytes.</li>
            <li>100 siempre representará el número cien.</li>
            </ul>
    <p class="text-slate-400 text-xs leading-relaxed">
    <b>Literales figurativos (dinámicos/adaptativos):</b><br></p>
    <p class="text-slate-100 text-xs leading-relaxed">
    Son conceptos abstractos cuyos valores se generan dinámicamente y se adaptan en tamaño y tipo según la variable receptora. Si haces MOVE SPACES TO WS-CAMPO, el literal figurativo SPACES adoptará automáticamente la longitud del PIC de WS-CAMPO (ya sean 5 bytes, 100 bytes o 5000 bytes) y rellenará toda esa área.
    </p>
</div>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
    <!-- Ventaja 1 -->
    <div class="bg-navy p-8 rounded-2xl border border-lime-300/30 hover:border-lime-400/50 hover:shadow-xl hover:shadow-teal/5 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-lime-500/10 flex items-center justify-center text-lime-400 text-2xl mb-6 group-hover:scale-10 group-hover:bg-lime-400/30 transition-all">
            <i class="fa-solid fa-wrench"></i>
        </div>
        <h3 class="text-sm font-bold text-white mb-3">Mantenibilidad de Código</h3>
        <p class="text-slate-300 text-xs leading-relaxed">
            Si la definición de una variable cambia de <code class="font-mono text-teal">PIC X(50)</code> a <code class="font-mono text-teal">PIC X(200)</code>, un <code class="font-mono text-teal">MOVE SPACES</code> se ajusta automáticamente sin modificar el código fuente.
        </p>
    </div>

    <!-- Ventaja 2 -->
    <div class="bg-navy p-8 rounded-2xl border border-sky-300/30 hover:border-sky-400/50 hover:shadow-xl hover:shadow-teal/5 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:scale-10 group-hover:bg-sky-400/30 transition-all">
            <i class="fa-solid fa-globe"></i>
        </div>
        <h3 class="text-sm font-bold text-white mb-3">Portabilidad Multiplataforma</h3>
        <p class="text-slate-300 text-xs leading-relaxed">
            Figurativos como <code class="font-mono text-sky-400">HIGH-VALUES</code> y <code class="font-mono text-sky-400">LOW-VALUES</code> garantizan el comportamiento de ordenamiento sin importar si el entorno opera bajo codificación ASCII o EBCDIC.
        </p>
    </div>

    <!-- Ventaja 3 -->
    <div class="bg-navy p-8 rounded-2xl border border-purple-300/30 hover:border-purple-400/50 hover:shadow-xl hover:shadow-teal/5 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl mb-6 group-hover:scale-10 group-hover:bg-purple-400/30 transition-all">
            <i class="fa-solid fa-user-check"></i>
        </div>
        <h3 class="text-sm font-bold text-white mb-3">Prevención de Errores</h3>
        <p class="text-slate-300 text-xs leading-relaxed">
            Elimina la necesidad de escribir y contar manualmente largas cadenas de espacios o ceros (evita errores como escribir 19 espacios en lugar de 20).
        </p>
    </div>

    <!-- Ventaja 4 -->
    <div class="bg-navy p-8 rounded-2xl border border-amber-300/30 hover:border-amber-400/50 hover:shadow-xl hover:shadow-teal/5 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-2xl mb-6 group-hover:scale-10 group-hover:bg-amber-400/30 transition-all">
            <i class="fa-solid fa-gauge-high"></i>
        </div>
        <h3 class="text-sm font-bold text-white mb-3">Optimización de Hardware</h3>
        <p class="text-slate-300 text-xs leading-relaxed">
            Los compiladores transforman palabras como <code class="font-mono text-amber-400">ZERO</code> o <code class="font-mono text-amber-400">SPACE</code> en instrucciones en ensamblador de muy bajo nivel para llenado ultra rápido de bloques de RAM.
        </p>
    </div>

    <!-- Ventaja 5 -->
    <div class="bg-navy p-8 rounded-2xl border border-emerald-300/30 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-teal/5 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-2xl mb-6 group-hover:scale-10 group-hover:bg-emerald-400/30 transition-all">
            <i class="fa-solid fa-shield-halved"></i>
        </div>
        <h3 class="text-sm font-bold text-white mb-3">Seguridad e Inicialización</h3>
        <p class="text-slate-300 text-xs leading-relaxed">
            Facilita la limpieza completa de campos, arreglos (<code class="font-mono text-emerald">OCCURS</code>) y estructuras complejas antes de procesar archivos, previniendo lecturas de datos basura.
        </p>
    </div>

    <!-- Ventaja 6 -->
    <div class="bg-navy p-8 rounded-2xl border border-rose-300/30 hover:border-rose-400/50 hover:shadow-xl hover:shadow-teal/5 transition-all group">
        <div class="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 text-2xl mb-6 group-hover:scale-10 group-hover:bg-rose-400/30  transition-all">
            <i class="fa-solid fa-book-open"></i>
        </div>
        <h3 class="text-sm font-bold text-white mb-3">Expresividad Clara</h3>
        <p class="text-slate-300 text-xs leading-relaxed">
            Permite redactar código con un nivel de auto-documentación único en la industria: <code class="font-mono text-rose-400">MOVE ZEROS TO SALDO</code> expresa la intención directa del negocio.
        </p>
    </div>
</div>

            </div>
        `;
    } else if (lessonId === '2.4') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-purple-400">Módulo 2 · Lección 2.4</span>
                    <span class="text-[10px] bg-purple-950 text-purple-300 border border-purple-800 px-2.5 py-0.5 rounded font-mono">Optimización de Memoria</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Representación en Memoria</h2>

                <div class="space-y-4">

                    <!-- CONTENEDOR PRINCIPAL: CONCEPTO GLOBAL -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-mauve-500 rounded-r-xl space-y-2">
                        <div class="font-bold text-mauve-500 text-sm flex items-center gap-1">
                            <i class="fa-solid fa-border-all"></i> Cláusulas de Definición de Datos (Retícula en Memoria)
                        </div>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            Continuemos con la analogía del pizarrón y definamos las cláusulas. <b>El Esquema de Diseño en Memoria:</b> Es el conjunto de reglas en la <code><span class="font-bold text-yellow-300">DATA DIVISION</span></code> que actúan como el plano arquitectónico del pizarrón. Definen la jerarquía de espacio, el tipo de cuadrícula, la técnica de codificación física y la inicialización de los datos antes de ejecutar el programa.
                        </p>
                    </div>

                    <!-- CATEGORÍA 1: GEOMETRÍA Y LÍMITES -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-300 rounded-r-xl space-y-2">
                        <div class="font-bold text-sky-300 text-sm flex items-center gap-1">
                            <i class="fa-solid fa-ruler-combined"></i> Cláusulas de Estructuración y Límites
                        </div>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            <a href="javascript:void(0)" onclick="loadLesson('2.1')" class="text-slate-400 font-bold hover:text-cyan-500 transition-colors cursor-pointer">Niveles (01-49):</a>
                            Marcan las fronteras jerárquicas en el pizarrón (marcos principales y subdivisiones internas de recuadros).<br><br>
                            <b>PICTURE (PIC):</b>
                            Funciona como la cinta métrica que asigna la cantidad exacta de casillas cuadradas y el tipo de dato permitido (carácter o número).<br><br>
                            <b>SYNCHRONIZED (SYNC):</b>
                            Ajusta las casillas a los bordes de palabra de la CPU, dejando espacios en blanco intencionales (<i>slack bytes</i>) para optimizar la lectura.
                        </p>
                    </div>

                    <!-- CATEGORÍA 2: CODIFICACIÓN FÍSICA -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-purple-400 text-sm flex items-center gap-1">
                            <i class="fa-solid fa-microchip"></i> Cláusulas de Representación en Memoria (USAGE)
                        </div>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            <b>USAGE IS DISPLAY:</b>
                            Escribe 1 carácter legible por casilla (formato de texto normal).<br><br>
                            <b>USAGE IS COMP-3:</b>
                            Apreta 2 dígitos por casilla en formato decimal empaquetado para ahorrar espacio en disco y acelerar cálculos financieros.<br><br>
                            <b>USAGE IS COMP / BINARY:</b>
                            Almacena los valores en binario puro de máquina (bloques fijos de 2, 4 u 8 bytes) para máxima velocidad de procesamiento.
                        </p>
                    </div>

                    <!-- CATEGORÍA 3: REUTILIZACIÓN Y OPTIMIZACIÓN -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-amber-400 text-sm flex items-center gap-1">
                            <i class="fa-solid fa-clone"></i> Cláusulas de Reutilización y Arreglos
                        </div>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            <b>REDEFINES:</b>
                            Sobrepone una plantilla transparente sobre una sección de pizarrón existente para interpretarla con otra estructura sin gastar memoria adicional.<br><br>
                            <b>OCCURS:</b>
                            Estampilla y clona un recuadro $N$ veces consecutivas para crear arreglos o tablas fijas y variables.
                        </p>
                    </div>

                    <!-- CATEGORÍA 4: ESTADO INICIAL -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-emerald-500 rounded-r-xl space-y-2">
                        <div class="font-bold text-emerald-500 text-sm flex items-center gap-1">
                            <i class="fa-solid fa-eraser"></i> Inicialización de Espacio (Literales)
                        </div>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            <b>VALUE (Literales Fijos):</b>
                            Escribe a mano un valor predefinido de tamaño y contenido estático en las casillas seleccionadas.<br><br>
                            <b>Literales Figurativos (SPACES, ZEROES):</b>
                            Actúan como un botón mágico que limpia o rellena todo el ancho del contenedor sin importar cuántos bytes mida.
                        </p>
                    </div>

                </div>

                <div class="space-y-6">

                    <!-- ENCABEZADO DEL EJERCICIO -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-red-500 rounded-r-xl space-y-2">
                        <div class="font-bold cobol-comment text-sm flex items-center gap-2">
                            <i class="fa-solid fa-pen-to-square"></i> Ejercicio Práctico: El Plano del Pizarrón Bancario
                        </div>
                        <p class="cobol-comment font-bold text-xs leading-relaxed">
                            Eres el arquitecto de datos de un sistema financiero. Antes de ejecutar el programa, debes calcular el plano arquitectónico en la memoria RAM (el pizarrón) para verificar la retícula de espacio y el comportamiento de las cláusulas de COBOL.
                        </p>
                    </div>

                    <!-- CÓDIGO COBOL DE EVALUACIÓN (DESPLEGABLE) -->
                    <details class="group p-4 bg-slate-950/80 border-l-4 border-white rounded-r-xl space-y-3" closed>
                        <!-- BOTÓN / ENCABEZADO -->
                        <summary class="font-bold text-white text-sm flex items-center justify-between cursor-pointer list-none select-none">
                            <span class="flex items-center gap-2">
                                <i class="fa-solid fa-code"></i> Código a Evaluar (DATA DIVISION)
                            </span>
                            <span class="text-xs text-slate-400 group-open:rotate-180 transition-transform duration-200">
                                <i class="fa-solid fa-chevron-down"></i>
                            </span>
                        </summary>

    <!-- CONTENIDO A OCULTAR/MOSTRAR -->
    <div class="pt-2">
        <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-lg">
            <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* ESTRUCTURA DE REGISTRO DE CUENTA Y TIPOS DE DATOS              *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span><span class="cobol-comment">* Identificación del programa</span>
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> REGCTA.
<span class="text-slate-500">000070</span><span class="cobol-comment">* Nombre del programa ejecutable</span>
<span class="text-slate-500">000080</span> <span class="text-sky-400 font-semibold">DATA DIVISION.</span>
<span class="text-slate-500">000090</span><span class="cobol-comment">* División de datos para la definición de memoria</span>
<span class="text-slate-500">000100</span> <span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
<span class="text-slate-500">000110</span><span class="cobol-comment">* Sección de almacenamiento de variables en memoria contigua</span>
<span class="text-slate-500">000120</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">REGISTRO-CUENTA</span>.
<span class="text-slate-500">000130</span><span class="cobol-comment">* Registro principal (Nivel 01) en Área A</span>
<span class="text-slate-500">000140</span>     <span class="text-sky-400 font-semibold">05</span>  <span class="text-emerald-400">CLIENTE-ID</span>           <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(8)</span>        <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-sky-400 font-semibold">SPACES</span>.
<span class="text-slate-500">000150</span><span class="cobol-comment">*    Identificador alfanumérico del cliente</span>
<span class="text-slate-500">000160</span>     <span class="text-sky-400 font-semibold">05</span>  <span class="text-emerald-400">DATOS-FECHA</span>.
<span class="text-slate-500">000170</span><span class="cobol-comment">*    Grupo contenedor de la estructura de fecha</span>
<span class="text-slate-500">000180</span>         <span class="text-sky-400 font-semibold">10</span>  <span class="text-emerald-400">FECHA-AAAAMMDD</span>   <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(8)</span>        <span class="text-sky-400 font-semibold">USAGE IS DISPLAY</span>.
<span class="text-slate-500">000190</span><span class="cobol-comment">*        Campo numérico de 8 dígitos en formato estándar DISPLAY</span>
<span class="text-slate-500">000200</span>         <span class="text-sky-400 font-semibold">10</span>  <span class="text-emerald-400">FECHA-DETALLE</span> <span class="text-sky-400 font-semibold">REDEFINES</span> <span class="text-emerald-400">FECHA-AAAAMMDD</span>.
<span class="text-slate-500">000210</span><span class="cobol-comment">*        Redefinición del espacio de memoria de FECHA-AAAAMMDD</span>
<span class="text-slate-500">000220</span>             <span class="text-sky-400 font-semibold">15</span>  <span class="text-emerald-400">FECHA-AAAA</span>   <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(4)</span>.
<span class="text-slate-500">000230</span><span class="cobol-comment">*          Subcampo nieto que representa el año</span>
<span class="text-slate-500">000240</span>             <span class="text-sky-400 font-semibold">15</span>  <span class="text-emerald-400">FECHA-MM</span>     <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(2)</span>.
<span class="text-slate-500">000250</span><span class="cobol-comment">*          Subcampo nieto que representa el mes</span>
<span class="text-slate-500">000260</span>             <span class="text-sky-400 font-semibold">15</span>  <span class="text-emerald-400">FECHA-DD</span>     <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(2)</span>.
<span class="text-slate-500">000270</span><span class="cobol-comment">*          Subcampo nieto que representa el día</span>
<span class="text-slate-500">000280</span>     <span class="text-sky-400 font-semibold">05</span>  <span class="text-emerald-400">SALDO-PRINCIPAL</span>      <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">S9(7)V99</span>    <span class="text-sky-400 font-semibold">USAGE IS COMP-3</span>.
<span class="text-slate-500">000290</span><span class="cobol-comment">*    Campo numérico con signo y decimales empacado</span>
<span class="text-slate-500">000300</span>     <span class="text-sky-400 font-semibold">05</span>  <span class="text-emerald-400">CONTADOR-ACCESOS</span>     <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(4)</span>        <span class="text-sky-400 font-semibold">USAGE IS COMP</span>.
<span class="text-slate-500">000310</span><span class="cobol-comment">*    Contador entero binario puro (COMP)</span>
<span class="text-slate-500">000320</span>     <span class="text-sky-400 font-semibold">05</span>  <span class="text-emerald-400">HISTORIAL-MOVIM</span>      <span class="text-sky-400 font-semibold">OCCURS 3 TIMES</span>.
<span class="text-slate-500">000330</span><span class="cobol-comment">*    Tabla o arreglo interno repetido 3 veces</span>
<span class="text-slate-500">000340</span>         <span class="text-sky-400 font-semibold">10</span>  <span class="text-emerald-400">COD-OPERACION</span>    <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(2)</span>        <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">'OP'</span>.
<span class="text-slate-500">000350</span><span class="cobol-comment">*        Código de operación de 2 caracteres inicializado con 'OP'</span>
<span class="text-slate-500">000360</span>         <span class="text-sky-400 font-semibold">10</span>  <span class="text-emerald-400">MONTO-MOVIM</span>      <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(5)V99</span>     <span class="text-sky-400 font-semibold">USAGE IS COMP-3</span>.
<span class="text-slate-500">000370</span><span class="cobol-comment">*        Monto del movimiento en formato numérico empacado</span>
<span class="text-slate-500">000380</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000390</span><span class="cobol-comment">* División de instrucciones ejecutables</span>
<span class="text-slate-500">000400</span> <span class="text-amber-300">MAIN-PARAGRAPH.</span>
<span class="text-slate-500">000410</span><span class="cobol-comment">* Párrafo de inicio del programa</span>
<span class="text-slate-500">000420</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.
<span class="text-slate-500">000430</span><span class="cobol-comment">* Detiene la ejecución y finaliza el programa</span></code></pre>
        </div>

                            <!-- BLOQUE REUTILIZABLE DEL GLOSARIO -->
                            <div class="mt-3">
                                ${getCobolDocumentationBlock()}
                            </div>
                        </div>
                    </details>

                    </div>

                    <!-- PREGUNTAS DEL EJERCICIO -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-3">
                        <div class="font-bold text-sky-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-calculator"></i> Parte 1: Cálculo del Ancho del Pizarrón
                        </div>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            Calcula los bytes exactos que ocupa cada campo de <code>01 REGISTRO-CUENTA</code> en la memoria RAM:
                        </p>
                        <ul class="text-slate-300 text-xs space-y-2 list-disc list-inside pl-1">
                            <li><b>CLIENTE-ID:</b> ¿Cuántos bytes ocupa y qué valor contiene al iniciar por la cláusula <code>VALUE SPACES</code>?</li>
                            <li><b>DATOS-FECHA:</b> ¿Cuántos bytes ocupa en total? ¿La plantilla <code>REDEFINES</code> añade espacio extra?</li>
                            <li><b>SALDO-PRINCIPAL:</b> Aplica la fórmula $\lceil(dígitos + 1) / 2\rceil$ para <code>COMP-3</code>. ¿Cuántos bytes ocupa?</li>
                            <li><b>CONTADOR-ACCESOS:</b> ¿Cuántos bytes asigna la CPU para un campo <code>PIC 9(4) COMP</code>?</li>
                            <li><b>HISTORIAL-MOVIM:</b> Calcula los bytes de una ocurrencia y multiplícalo por <code>OCCURS 3 TIMES</code>.</li>
                        </ul>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-3">
                        <div class="font-bold text-amber-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-brain"></i> Parte 2: Análisis de Comportamiento
                        </div>
                        <ul class="text-slate-300 text-xs space-y-2 list-disc list-inside pl-1">
                            <li><b>A. Botón Mágico:</b> Al hacer <code>MOVE SPACES TO CLIENTE-ID</code>, ¿cómo actúa el literal figurativo sobre las casillas asignadas por la <code>PICTURE</code>?</li>
                            <li><b>B. Plantilla Transparente:</b> Si asignas <code>"20260920"</code> a <code>FECHA-AAAAMMDD</code>, ¿qué valor exacto lee la variable <code>FECHA-AAAA</code>?</li>
                            <li><b>C. Rendimiento:</b> ¿Por qué es más eficiente usar <code>USAGE IS COMP</code> en <code>CONTADOR-ACCESOS</code> que <code>DISPLAY</code>?</li>
                        </ul>
                    </div>

                    <!-- SOLUCIONARIO (DESPLEGABLE) -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-pink-400 rounded-r-xl space-y-2">
                        <details class="group">
                            <summary class="font-bold text-pink-300 text-sm flex items-center justify-between cursor-pointer list-none">
                                <span class="flex items-center gap-2">
                                    <i class="fa-solid fa-square-check"></i> Ver Solucionario del Ejercicio
                                </span>
                                <span class="text-xs text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>

                            <div class="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-3 leading-relaxed">
                                <p><b>1. Resultados del Cálculo de Bytes:</b></p>
                                <ul class="list-disc list-inside space-y-1 pl-2">
                                    <li><b>CLIENTE-ID:</b> <b>8 bytes</b>. Inicializado con 8 espacios vacíos mediante <code>SPACES</code>.</li>
                                    <li><b>DATOS-FECHA:</b> <b>8 bytes</b>. La cláusula <code>REDEFINES</code> no agrega ningún byte adicional; sólo superpone una lectura transparente.</li>
                                    <li><b>SALDO-PRINCIPAL:</b> <b>5 bytes</b>. Tiene 9 dígitos numéricos: $\lceil(9 + 1) / 2\rceil = 5\text{ bytes}$.</li>
                                    <li><b>CONTADOR-ACCESOS:</b> <b>2 bytes</b>. Los rangos hasta <code>PIC 9(4)</code> caben en media palabra binaria de hardware (16 bits).</li>
                                    <li><b>HISTORIAL-MOVIM:</b> <b>18 bytes</b> (2 bytes de <code>COD-OPERACION</code> + 4 bytes de <code>MONTO-MOVIM</code> = 6 bytes por ocurrencia $\times$ 3).</li>
                                </ul>

                                <p class="text-emerald-300 font-bold bg-emerald-950/40 p-2 rounded border border-emerald-800/50">
                                    Total del Ancho del Pizarrón (REGISTRO-CUENTA): 8 + 8 + 5 + 2 + 18 = 41 Bytes
                                </p>

                                <p><b>2. Respuestas de Análisis:</b></p>
                                <p>
                                    <b>A:</b> <code>SPACES</code> limpia los 8 bytes completos del contenedor ajustándose al tamaño de la <code>PICTURE</code>.<br>
                                    <b>B:</b> <code>FECHA-AAAA</code> lee <code>"2026"</code> al tomar los primeros 4 bytes de la plantilla.<br>
                                    <b>C:</b> <code>COMP</code> procesa operaciones e incrementos directamente a nivel binario en el procesador.
                                </p>
                            </div>
                        </details>
                    </div>

                </div>

            </div>
        `;
    }
}
