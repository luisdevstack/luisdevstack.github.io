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

                <div class="space-y-6 text-slate-300 text-sm leading-relaxed">
                    <p>
                        <strong class="text-white">COBOL (COmmon Business-Oriented Language)</strong> se diseñó en 1959 como un lenguaje de programación de alto nivel enfocado en el procesamiento de datos comerciales y financieros. El primer programa se ejecutó con éxito en diciembre de 1960 en equipos Mainframe pioneros como la <strong class="text-sky-300">UNIVAC II</strong> y la <strong class="text-sky-300">RCA 501</strong>. Estas macrocomputadoras utilizaban salas enteras, almacenamiento en cintas magnéticas y tarjetas perforadas, y una memoria de núcleos magnéticos de apenas unos pocos kilobytes. Herencias directas de esta época son las líneas de código estructuradas en un ancho fijo de <strong class="text-amber-300">80 columnas</strong> y el uso obligatorio del punto y los números de nivel.
                    </p>

                <div class="flex justify-center my-4">
                    <img src="./assets/univacii.svg" alt="UNIVAC Mainframe" class="max-h-56 w-auto rounded-xl border border-slate-800 shadow-lg object-contain" onerror="this.style.display='none';">
                </div>
                
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
                
                <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto p-4 shadow-lg">
                    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed"><code class="text-slate-300">
<span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* LECCIÓN 1.1: ESQUELETO MÍNIMO DE UN PROGRAMA EN COBOL          *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> LEC0101.
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000070</span> <span class="text-amber-300">INICIO.</span>
<span class="text-slate-500">000080</span>       <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"¡Bienvenido al curso de COBOL!"</span>.
<span class="text-slate-500">000090</span>       <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
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

                <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto p-4 shadow-lg">
                    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed"><code class="text-slate-300">
<span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* DEMOSTRACIÓN DE ZONAS Y ÁREAS EN FORMATO FIJO                  *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> LEC0102.
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">DATA DIVISION.</span>
<span class="text-slate-500">000070</span> <span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
<span class="text-slate-500">000080</span> <span class="text-sky-400 font-semibold">01</span> WS-TEXTO                 <span class="text-sky-400 font-semibold">PIC</span> <span class="text-emerald-400">X(20)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">"FORMATO FIJO COBOL"</span>.
<span class="text-slate-500">000090</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000100</span> <span class="text-amber-300">MAIN-PARAGRAPH.</span>
<span class="text-slate-500">000110</span>       <span class="text-sky-400 font-semibold">DISPLAY</span> WS-TEXTO.
<span class="text-slate-500">000120</span>       <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
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

                    <div class="p-4 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-purple-300 text-sm flex items-center gap-2">
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
                            <span class="w-3 h-3 rounded-full bg-purple-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.5)]"></span>
                            <div>
                                <strong class="cobol-comment block font-extrabold mb-0.5">Comentarios de Documentación</strong>
                                <span class="text-slate-400 text-[11px]">Envueltos con la etiqueta <span class="cobol-comment font-bold">tornasol</span>, señalan líneas ignoradas por el compilador (*).</span>
                            </div>
                        </div>

                        <div class="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            <span class="w-3 h-3 rounded-full bg-pink-400 mt-0.5 flex-shrink-0 shadow-[0_0_8px_rgba(244,114,182,0.5)]"></span>
                            <div>
                                <strong class="text-pink-300 block mb-0.5">Literales Alfanuméricos (Strings)</strong>
                                <span class="text-slate-400 text-[11px]">En color <span class="text-pink-400 font-bold">Rosa</span>, definen cadenas de texto fijas entre comillas.</span>
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
                            <span>4. [ ? ] <strong class="text-amber-300">INICIO-PROGRAMA.</strong></span>
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
                        <i class="fa-solid fa-code text-emerald-400"></i> Estructura Final del Programa "Hola Mundo" (Solución)
                    </h3>
                    <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto p-4 shadow-xl">
                        <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed"><code class="text-slate-300">
<span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* MI PRIMER PROGRAMA: HOLA MUNDO EN COBOL                        *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> HOLAMUNDO.
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000070</span> <span class="text-amber-300">INICIO-PROGRAMA.</span>
<span class="text-slate-500">000080</span>       <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"¡Hola Mundo desde GnuCOBOL y Mainframe!"</span>.
<span class="text-slate-500">000090</span>       <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
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

                <h2 class="text-2xl font-bold text-white tracking-tight">Niveles de Datos (01, 05, 77)</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    COBOL no utiliza variables sueltas como otros lenguajes; organiza la memoria RAM en jerarquías estrictas basadas en números de nivel dentro de la <code>WORKING-STORAGE SECTION</code>.
                </p>

                <div class="grid gap-4 text-xs">
                    <div class="p-4 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-purple-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-layer-group"></i> Nivel 01 (Registros Principales)
                        </div>
                        <p class="text-slate-400">Define el nivel superior o un bloque de datos completo (por ejemplo, un registro de empleado o estructura de cabecera).</p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-sky-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-sitemap"></i> Niveles 02 al 49 (Subcampos)
                        </div>
                        <p class="text-slate-400">Subdividen lógicamente al nivel 01 superior, permitiendo crear estructuras anidadas similares a objetos o structs en C.</p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-amber-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-tag"></i> Nivel 77 (Variables Independientes)
                        </div>
                        <p class="text-slate-400">Se utiliza para declarar variables elementales aisladas que no dependen ni tienen subcampos subordinados.</p>
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

                <h2 class="text-2xl font-bold text-white tracking-tight">La Cláusula PIC (Picture) y Tipos de Datos</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    La cláusula <code>PIC</code> define exactamente cuántos bytes ocupa una variable en memoria y qué tipo de caracteres puede almacenar.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 text-xs">
                    <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                        <span class="font-bold text-emerald-300 block text-sm">Alfanuméricos: X(n)</span>
                        <p class="text-slate-400">Acepta letras, números y símbolos. Ejemplo: <code>PIC X(10)</code> reserva 10 espacios de texto alineados a la izquierda.</p>
                    </div>

                    <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                        <span class="font-bold text-sky-300 block text-sm">Numéricos Enteros: 9(n)</span>
                        <p class="text-slate-400">Almacena exclusivamente dígitos numéricos (0-9). Ejemplo: <code>PIC 9(5)</code> para un valor entero de hasta 5 cifras.</p>
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
                    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed"><code class="text-slate-300">
<span class="text-slate-500">000100</span> <span class="text-sky-400 font-semibold">01</span> WS-FECHA-RAW       <span class="text-sky-400 font-semibold">PIC</span> <span class="text-emerald-400">X(8)</span>.
<span class="text-slate-500">000110</span> <span class="text-sky-400 font-semibold">01</span> WS-FECHA-ESTRUCTURA <span class="text-sky-400 font-semibold">REDEFINES</span> WS-FECHA-RAW.
<span class="text-slate-500">000120</span>      <span class="text-sky-400 font-semibold">05</span> WS-ANIO       <span class="text-sky-400 font-semibold">PIC</span> <span class="text-emerald-400">9(4)</span>.
<span class="text-slate-500">000130</span>      <span class="text-sky-400 font-semibold">05</span> WS-MES        <span class="text-sky-400 font-semibold">PIC</span> <span class="text-emerald-400">9(2)</span>.
<span class="text-slate-500">000140</span>      <span class="text-sky-400 font-semibold">05</span> WS-DIA        <span class="text-sky-400 font-semibold">PIC</span> <span class="text-emerald-400">9(2)</span>.</code></pre>
                </div>
            </div>
        `;
    }
}
