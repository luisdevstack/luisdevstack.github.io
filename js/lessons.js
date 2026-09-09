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
                            pacman -Suc<br>
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
                                &nbsp;&nbsp;"cobol": "cobc -x -o $fileNameWithoutExt $fileName && ./$fileNameWithoutExt"<br>
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
                                &nbsp;&nbsp;&nbsp;&nbsp;"command": "cobc -x $ZED_FILE && ./\\${ZED_FILE_STEM}",<br>
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

                <p class="text-slate-300 text-sm leading-relaxed">
                    COBOL (COmmon Business-Oriented Language) procesa cerca del 80% de las transacciones financieras mundiales. Su fortaleza reside en la precisión matemática exacta de centavos y el procesamiento masivo batch.
                </p>

                <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto p-4 shadow-lg">
                    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed"><code class="text-slate-300">
<span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* LECCIÓN 1.1: ESQUELETO MÍNIMO DE UN PROGRAMA EN COBOL          *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">PROGRAM-ID.</span> LEC0101.
<span class="text-slate-500">000060</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000070</span><span class="text-slate-500"> </span><span class="text-amber-300">INICIO.</span>
<span class="text-slate-500">000080</span><span class="text-slate-500">     </span><span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"¡Bienvenido al curso de COBOL!"</span>.
<span class="text-slate-500">000090</span><span class="text-slate-500">     </span><span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
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

                <p class="text-slate-300 text-sm leading-relaxed">
                    COBOL tradicional exige organizar el código a lo largo de 80 columnas fijas, heredadas de las tarjetas perforadas. Cada sección horizontal tiene una función sintáctica sagrada.
                </p>

                <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto p-4 shadow-lg">
                    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed"><code class="text-slate-300">
<span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* DEMOSTRACIÓN DE ZONAS Y ÁREAS EN FORMATO FIJO                  *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">PROGRAM-ID.</span> LEC0102.
<span class="text-slate-500">000060</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">DATA DIVISION.</span>
<span class="text-slate-500">000070</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
<span class="text-slate-500">000080</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">01</span> WS-TEXTO          <span class="text-sky-400 font-semibold">PIC</span> <span class="text-emerald-400">X(20)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">"FORMATO FIJO COBOL"</span>.
<span class="text-slate-500">000090</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000100</span><span class="text-slate-500"> </span><span class="text-amber-300">MAIN-PARAGRAPH.</span>
<span class="text-slate-500">000110</span><span class="text-slate-500">     </span><span class="text-sky-400 font-semibold">DISPLAY</span> WS-TEXTO.
<span class="text-slate-500">000120</span><span class="text-slate-500">     </span><span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
                </div>
            </div>
        `;
    } else if (lessonId === '1.3') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-sky-400">Módulo 1 · Lección 1.3</span>
                    <span class="text-[10px] bg-sky-950 text-sky-300 border border-sky-800 px-2.5 py-0.5 rounded font-mono">Arquitectura Modular</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Las 4 Divisiones Fundamentales de COBOL</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    Todo programa clásico en COBOL está estructurado jerárquicamente en hasta cuatro divisiones obligatorias u opcionales. Cada una cumple un propósito arquitectónico específico, separando los metadatos, el entorno de hardware, la memoria de datos y la lógica ejecutable.
                </p>

                <div class="grid gap-4 text-xs">
                    <!-- DIVISION 1 -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-sky-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-id-card"></i> 1. IDENTIFICATION DIVISION
                        </div>
                        <p class="text-slate-400">Es la única división obligatoria absoluta. Contiene metadatos de documentación del programa, destacando el párrafo <code>PROGRAM-ID</code> que asigna el nombre oficial al binario compilado.</p>
                    </div>

                    <!-- DIVISION 2 -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-purple-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-network-wired"></i> 2. ENVIRONMENT DIVISION
                        </div>
                        <p class="text-slate-400">Define la relación entre el programa y el entorno físico externo de la computadora (Mainframe o servidor). Incluye la <code>CONFIGURATION SECTION</code> y la <code>INPUT-OUTPUT SECTION</code> para asociar archivos lógicos con dispositivos físicos.</p>
                    </div>

                    <!-- DIVISION 3 -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-emerald-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-emerald-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-memory"></i> 3. DATA DIVISION
                        </div>
                        <p class="text-slate-400">Aloja la definición de todas las variables, estructuras de registros y memoria de trabajo. Se divide en secciones clave como la <code>WORKING-STORAGE SECTION</code> y la <code>FILE SECTION</code>.</p>
                    </div>

                    <!-- DIVISION 4 -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-amber-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-terminal"></i> 4. PROCEDURE DIVISION
                        </div>
                        <p class="text-slate-400">Contiene el corazón algorítmico del programa. Aquí reside todo el código ejecutable organizado en párrafos, sentencias y verbos lógicos (como <code>DISPLAY</code>, <code>MOVE</code> o <code>PERFORM</code>).</p>
                    </div>
                </div>
            </div>
        `;
    } else if (lessonId === '1.4') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-sky-400">Módulo 1 · Lección 1.4</span>
                    <span class="text-[10px] bg-sky-950 text-sky-300 border border-sky-800 px-2.5 py-0.5 rounded font-mono">Sintaxis y Puntuación</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Delimitadores, Sentencias y la Importancia del Punto (.)</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    A diferencia de lenguajes modernos donde las llaves <code>{}</code> o los saltos de línea delimitan bloques, en COBOL la puntuación y los delimitadores juegan un papel crítico en el alcance de las instrucciones lógicas.
                </p>

                <div class="space-y-4 text-xs">
                    <!-- PUNTO -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-pink-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-pink-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-circle-stop"></i> El Poder y Peligro del Punto (.)
                        </div>
                        <p class="text-slate-400">
                            El punto final en COBOL marca el cierre definitivo de una sentencia o un párrafo completo. Olvidar un punto o colocarlo erróneamente dentro de una estructura condicional (como un <code>IF</code>) puede alterar drásticamente la lógica de ejecución del programa, haciendo que instrucciones posteriores queden atrapadas dentro de la condición.
                        </p>
                    </div>

                    <!-- SEPARADORES -->
                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                        <div class="font-bold text-sky-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-columns"></i> Espacios y Comas
                        </div>
                        <p class="text-slate-400">
                            Los espacios en blanco son obligatorios para separar palabras reservadas, nombres de variables y operadores (COBOL no permite palabras pegadas). Las comas y los puntos y comas actúan principalmente como elementos estéticos de separación entre argumentos, aunque las versiones modernas prefieren depender netamente de los espacios.
                        </p>
                    </div>
                </div>
            </div>
        `;
    } else if (lessonId === '1.5') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-sky-400">Módulo 1 · Lección 1.5</span>
                    <span class="text-[10px] bg-sky-950 text-sky-300 border border-sky-800 px-2.5 py-0.5 rounded font-mono">Práctica Interactiva</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">¡Tu Primer Hola Mundo y Glosario Didáctico!</h2>

                <p class="text-slate-300 text-sm leading-relaxed">
                    Es momento de consolidar lo aprendido. Revisa el glosario oficial de colores, resuelve el rompecabezas lógico y consulta la solución cuando estés listo.
                </p>

                <!-- GLOSARIO DE SISTEMA DE COLORES ESTILIZADO -->
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
                                <strong class="cobol-comment block mb-0.5">Comentarios de Documentación</strong>
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
                                <span class="text-slate-400 text-[11px]">En tono <span class="text-amber-300 font-bold">Amarillo</span>, funcionan como puntos de anclaje (análogos a :INICIO de Batch).</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SECCIÓN ROMPECABEZAS LÓGICO MEJORADO (COLOCADO ANTES DE LA SOLUCIÓN) -->
                <div class="bg-slate-950/80 border border-purple-900/40 rounded-xl p-5 space-y-4 shadow-lg">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h4 class="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                            <i class="fa-solid fa-puzzle-piece text-purple-400"></i> Rompecabezas Lógico: Arma tu Bloque
                        </h4>
                        <span class="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800">Reto Práctico</span>
                    </div>
                    <p class="text-xs text-slate-300">
                        Ordena mentalmente los siguientes conceptos y líneas clave para construir un programa funcional en COBOL (desde la identificación hasta la ejecución):
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

                <!-- BOTÓN PARA MOSTRAR/OCULTAR LA SOLUCIÓN -->
                <div class="pt-2">
                    <button onclick="toggleSolution()" class="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300">
                        <i id="btn-sol-icon" class="fa-solid fa-eye"></i>
                        <span id="btn-sol-text">Mostrar Solución</span>
                    </button>
                </div>

                <!-- ESTRUCTURA FINAL (OCULTA INICIALMENTE) -->
                <div id="solution-container" class="hidden space-y-3 pt-2 transition-all duration-300">
                    <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-code text-emerald-400"></i> Estructura Final del Programa "Hola Mundo" (Solución)
                    </h3>
                    <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto p-4 shadow-xl">
                        <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed"><code class="text-slate-300">
<span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* MI PRIMER PROGRAMA: HOLA MUNDO EN COBOL                       *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">PROGRAM-ID.</span> HOLAMUNDO.
<span class="text-slate-500">000060</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000070</span><span class="text-slate-500"> </span><span class="text-amber-300">INICIO-PROGRAMA.</span>
<span class="text-slate-500">000080</span><span class="text-slate-500">     </span><span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"¡Hola Mundo desde GnuCOBOL y Mainframe!"</span>.
<span class="text-slate-500">000090</span><span class="text-slate-500">     </span><span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
                    </div>
                </div>

            </div>
        `;
    }
}
