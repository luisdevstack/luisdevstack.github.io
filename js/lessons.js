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
                            Estas macrocomputadoras utilizaban salas enteras, almacenamiento en cintas magnéticas y tarjetas perforadas, y una memoria de núcleos magnéticos de apenas unos pocos kilobytes. Herencias directas de esta época son las líneas de código estructuradas en un ancho fijo de <strong class="text-amber-300">80 columnas</strong> y el uso obligatorio del punto y los números de nivel.
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <img src="./assets/univacii.svg" alt="UNIVAC Mainframe" class="max-h-56 w-auto rounded-xl border border-slate-800 shadow-lg object-contain bg-slate-900/50 p-2" onerror="this.style.display='none';">
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

                <div class="space-y-3 pt-2">
                    <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-list-check text-sky-400"></i> Documentación Exhaustiva Línea por Línea
                    </h3>
                    <div class="grid gap-3 text-xs">
                        <div class="p-3 bg-slate-950/80 border-l-4 border-slate-500 rounded-r-lg space-y-1">
                            <div class="font-mono font-bold text-slate-200">Líneas 000010 - 000030: Encabezado de Comentario</div>
                            <p class="text-slate-400"><strong class="text-amber-400">Columna 7 (*):</strong> Operador de comentario. Desactiva la línea para el compilador.</p>
                        </div>
                        <div class="p-3 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-lg space-y-1">
                            <div class="font-mono font-bold text-sky-300">Línea 000040: IDENTIFICATION DIVISION.</div>
                            <p class="text-slate-400"><strong class="text-sky-400">Área A (Col 8):</strong> Declaración de la primera división obligatoria. Cierra obligatoriamente con punto (.).</p>
                        </div>
                        <div class="p-3 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-lg space-y-1">
                            <div class="font-mono font-bold text-purple-300">Línea 000050: PROGRAM-ID. LEC0101.</div>
                            <p class="text-slate-400"><strong class="text-purple-400">Sintaxis:</strong> Define el nombre único del programa ejecutable.</p>
                        </div>
                        <div class="p-3 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-lg space-y-1">
                            <div class="font-mono font-bold text-sky-300">Línea 000060 - 000070: PROCEDURE DIVISION. / INICIO.</div>
                            <p class="text-slate-400"><strong class="text-sky-400">Área A:</strong> Tercera división obligatoria que aloja la lógica ejecutable.</p>
                        </div>
                        <div class="p-3 bg-slate-950/80 border-l-4 border-emerald-400 rounded-r-lg space-y-1">
                            <div class="font-mono font-bold text-emerald-300">Líneas 000080 - 000090: DISPLAY y STOP RUN.</div>
                            <p class="text-slate-400"><strong class="text-slate-200">Área B (Col 12):</strong> <strong class="text-purple-400">DISPLAY</strong> imprime en pantalla y <strong class="text-purple-400">STOP RUN</strong> finaliza el proceso.</p>
                        </div>
                    </div>
                </div>
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

                <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4">
                    <h3 class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-palette text-sky-400"></i> Glosario Visual de Sintaxis COBOL
                    </h3>
                    <div class="grid sm:grid-cols-2 gap-3 text-xs">
                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-sky-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.5)]"></span>
                            <div>
                                <strong class="text-sky-300 block mb-0.5">Palabras Reservadas y Verbos</strong>
                                <span class="text-slate-400 text-[11px]">En tono <span class="text-sky-400 font-bold">Azul Claro</span>, indican instrucciones clave como <code class="text-sky-300">DISPLAY</code> o <code class="text-sky-300">DIVISION</code>.</span>
                            </div>
                        </div>

                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-purple-600 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.5)]"></span>
                            <div>
                                <strong class="cobol-comment text-[13px] block font-extrabold mb-0.5"><b>Comentarios y Documentación</b></strong>
                                <span class="text-slate-400 text-[11px]">Envueltos con la etiqueta <span class="cobol-comment font-bold">tornasol</span>, señalan líneas ignoradas por el compilador (*).</span>
                            </div>
                        </div>

                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-pink-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(244,114,182,0.5)]"></span>
                            <div>
                                <strong class="text-pink-300 block mb-0.5">Literales Alfanuméricos (Strings)</strong>
                                <span class="text-slate-400 text-[11px]">En color <span class="text-pink-300 font-bold">Rosa</span>, definen cadenas de texto fijas entre comillas.</span>
                            </div>
                        </div>

                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-amber-300 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(252,211,77,0.5)]"></span>
                            <div>
                                <strong class="text-amber-300 block mb-0.5">Etiquetas y Párrafos</strong>
                                <span class="text-slate-400 text-[11px]">En tono <span class="text-amber-300 font-bold">Amarillo</span>, funcionan como puntos de anclaje.</span>
                            </div>
                        </div>
                    </div>
                </div>

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
                            <span>2. [ ? ] <strong class="text-sky-400">PROGRAM-ID. HOLAMUNDO.</strong></span>
                            <span class="text-[10px] text-slate-500">Identificador del programa</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>3. [ ? ] <strong class="text-sky-400">PROCEDURE DIVISION.</strong></span>
                            <span class="text-[10px] text-slate-500">División de procedimientos</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>4. [ ? ] <strong class="text-sky-400">INICIO-PROGRAMA.</strong></span>
                            <span class="text-[10px] text-slate-500">Etiqueta / Párrafo inicial</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>5. [ ? ] <strong class="text-sky-400">DISPLAY "¡Hola Mundo!"</strong></span>
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

                       <b>COBOL</b> nació bajo <b>restricciones extremas</b> de <b>hardware</b>, su gestión de <b>memoria</b> se diseñó como un <span class="text-gold-900 font-extrabold strong">bloque estático</span> y <b>contiguo</b> de bytes preasignado en tiempo de compilación dentro de la <b>WORKING-STORAGE SECTION</b>. Cada variable ocupaba un desplazamiento (offset) fijo en el búfer de memoria.

                    </p>
                </div>

                <!-- SECCIÓN MODIFICADA A DOS COLUMNAS CON EL TEXTO Y LA IMAGEN matrk.svg -->
                <div class="grid md:grid-cols-2 gap-6 items-center bg-slate-950/40 border border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-lg">
                    <div class="space-y-4 text-slate-300 text-sm leading-relaxed">

                        <p class="text-slate-400 text-xs leading-relaxed">
                            Imagina que la memoria <span class="text-white-900 font-extrabold">RAM</span> de la computadora es una enorme tira de papel continua (o una cinta métrica gigante). COBOL no es como Python o JavaScript donde tú creas una variable llamada nombre y la computadora mágicamente le busca un lugar; No, en COBOL tú agarras esa tira gigante y dices: <span class="cobol-comment font-bold italic">"A ver, esta sección mide 50 bytes, esta otra 10, y yo te voy a decir exactamente qué vive en dónde"</span>.<br>
                            Los niveles no son sino reglas de jerarquía y anidación: <br>

                        </p>
                            <ul class="list-disc list-inside bg-slate-950/80 text-slate-300 text-xs leading-relaxed space-y-1">
                                <li class="text-purple-300"><span class="text-slate-400">Imagina que tienes una caja de cartón <span class="text-purple-300 font-bold">(Nivel 01)</span>.</span></li>
                                <li class="text-sky-400"><span class="text-slate-400">Dentro de esa caja, metes cajas más pequeñas <span class="text-sky-400 font-bold">(Nivel 05)</span>.</span></li>
                                <li class="text-amber-400"><span class="text-slate-400">Y tienes un Post-it que no está en ninguna caja <span class="text-amber-400 font-bpld">(Nivel 77)</span>.</span></li>
                            </ul>
                    </div>
                    <div class="flex justify-center">
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
                            Define el bloque completo de datos. Si tú le pides a COBOL que mueva, imprima o guarde un 01, la computadora agarra toda la caja con todo lo que tiene adentro de un solo golpe.<br>
                            Ejemplo informal: 01 CLIENTE. (La caja entera que contiene la ficha de una persona: su nombre, su edad, su dirección).
                        </p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-sky-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-sitemap"></i> Niveles 02 al 49 (Subcampos)
                        </div>
                        <p class="text-slate-400">
                            Si el nivel 01 es CLIENTE, los niveles 05 son las cosas que están adentro: el nombre, el apellido, la calle. Si quieres acceder a ellos individualmente, le dices a COBOL: "Oye, búscame el 05 que está dentro del 01".<br>
                            Ejemplo informal: Dado que el cliente es 01, su edad vendría a ser un elemento 05.
                        </p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-amber-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-tag"></i> Nivel 77 (Variables Independientes)
                        </div>
                        <p class="text-slate-400">
                            Es una variable suelta que creas para hacer cálculos rápidos (un contador, un acumulador, un interruptor de "sí o no"). No tiene hijos, no tiene padres, no pertenece a ninguna estructura familiar. Está ahí sola en la memoria.<br>
                            Ejemplo informal: Un numerito aislado que usas para contar cuántas veces pasó algo, sin importarle los clientes.
                        </p>
                    </div>
                </div>
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
                    <p class="text-slate-400">Únicamernte acepta letras, [de la A a la Z y espacios]. Honestamente, hoy en día casi no se usa; los programadores prefieren usar X para el texto.</p>
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

        </div>


        `;
    } else if (lessonId === '2.3') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-purple-400">Módulo 2 · Lección 2.3</span>
                    <span class="text-[10px] bg-purple-950 text-purple-300 border border-purple-800 px-2.5 py-0.5 rounded font-mono">Inicialización</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Literales y Valores Figurativos</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    Los valores figurativos en COBOL son palabras clave predefinidas que permiten inicializar bloques de memoria completos sin necesidad de escribir literales explícitos.
                </p>

                <div class="grid gap-3 text-xs">
                    <div class="p-3 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-lg">
                        <strong class="text-purple-300 block font-mono text-sm">SPACES / SPACE</strong>
                        <p class="text-slate-400">Llena el campo o variable completamente con espacios en blanco (caracteres de relleno estándar).</p>
                    </div>
                    <div class="p-3 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-lg">
                        <strong class="text-sky-300 block font-mono text-sm">ZEROS / ZERO</strong>
                        <p class="text-slate-400">Rellena la variable numérica o alfanumérica con ceros ('0').</p>
                    </div>
                    <div class="p-3 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-lg">
                        <strong class="text-amber-300 block font-mono text-sm">HIGH-VALUES / LOW-VALUES</strong>
                        <p class="text-slate-400">Representan el valor hexadecimal más alto (xFF) y más bajo (x00) del conjunto de caracteres del sistema, muy usados en control de corte de control.</p>
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

                <h2 class="text-2xl font-bold text-white tracking-tight">La Cláusula REDEFINES</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    La cláusula <code>REDEFINES</code> permite que dos o más variables compartan exactamente el <strong>mismo espacio físico de memoria RAM</strong>, permitiendo interpretar los mismos bytes de formas distintas según el contexto del programa.
                </p>

                <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto p-4 shadow-lg">
<div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-lg">
    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000100</span><span class="text-sky-400 font-semibold"> 01</span> <span class="text-emerald-400">WS-FECHA-RAW</span>        <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(8)</span>.
<span class="text-slate-500">000110</span><span class="text-sky-400 font-semibold"> 01</span> <span class="text-emerald-400">WS-FECHA-ESTRUCTURA</span> <span class="text-sky-400 font-semibold">REDEFINES</span> <span class="text-emerald-400">WS-FECHA-RAW</span>.
<span class="text-slate-500">000120</span>     <span class="text-sky-400 font-semibold">05</span> <span class="text-emerald-400">WS-ANIO</span>         <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(4)</span>.
<span class="text-slate-500">000130</span>     <span class="text-sky-400 font-semibold">05</span> <span class="text-emerald-400">WS-MES</span>          <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(2)</span>.
<span class="text-slate-500">000140</span>     <span class="text-sky-400 font-semibold">05</span> <span class="text-emerald-400">WS-DIA</span>          <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(2)</span>.</code></pre>
</div>
            </div>
        `;
    }
}
