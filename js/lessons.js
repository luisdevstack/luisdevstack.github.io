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

                <div class="pt-4 border-t border-slate-800 space-y-3">
                    <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-vial text-emerald-400"></i> Programa de Prueba (hola.cbl)
                    </h3>
                    <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto p-4 shadow-lg">
                        <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed"><code class="text-slate-300">
<span class="text-slate-500">000010</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000020</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">PROGRAM-ID.</span> HOLAMUNDO.
<span class="text-slate-500">000030</span><span class="text-slate-500"> </span><span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000040</span><span class="text-slate-500">     </span><span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"¡ENTORNO CONFIGURADO CORRECTAMENTE!"</span>.
<span class="text-slate-500">000050</span><span class="text-slate-500">     </span><span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
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

                <div class="space-y-3 pt-2">
                    <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-table-columns text-sky-400"></i> Desglose Estricto de Columnas y Operadores
                    </h3>
                    <div class="grid gap-3 text-xs">
                        <div class="pl-4 py-3 border-l-4 border-slate-500 bg-slate-900/50 rounded-r-xl">
                            <p class="text-xs text-slate-300 leading-relaxed">
                                <span class="font-bold text-slate-400">Cols 1 - 6 (Sequence Number):</span> Reservadas para numeración lógica de línea.
                            </p>
                        </div>
                        <div class="pl-4 py-3 border-l-4 border-yellow-500 bg-slate-900/50 rounded-r-xl">
                            <p class="text-xs text-slate-300 leading-relaxed">
                                <span class="font-bold text-yellow-500">Columna 7 (Indicator Area):</span> Control del compilador (* para comentarios, - para continuación).
                            </p>
                        </div>
                        <div class="pl-4 py-3 border-l-4 border-cyan-500 bg-slate-900/50 rounded-r-xl">
                            <p class="text-xs text-slate-300 leading-relaxed">
                                <span class="font-bold text-cyan-400">Cols 8 - 11 (Área A):</span> Reservada para Divisiones, Secciones, Parágrafos y variables base (01).
                            </p>
                        </div>
                        <div class="pl-4 py-3 border-l-4 border-purple-500 bg-slate-900/50 rounded-r-xl">
                            <p class="text-xs text-slate-300 leading-relaxed">
                                <span class="font-bold text-purple-400">Cols 12 - 72 (Área B):</span> Área para sentencias ejecutables (DISPLAY, MOVE) y subniveles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (lessonId === '1.3') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6 text-center py-12">
                <span class="text-xs font-mono text-sky-400">Módulo 1 · Lección 1.3</span>
                <h2 class="text-2xl font-bold text-white tracking-tight">Las 4 Divisiones de COBOL</h2>
                <p class="text-slate-400 text-sm max-w-md mx-auto">
                    Esta lección se encuentra actualmente en desarrollo y se integrará próximamente con guías detalladas e interactividad.
                </p>
                <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-xs font-mono">
                    <i class="fa-solid fa-person-digging text-amber-400"></i> Próximamente
                </div>
            </div>
        `;
    } else if (lessonId === '1.4') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6 text-center py-12">
                <span class="text-xs font-mono text-sky-400">Módulo 1 · Lección 1.4</span>
                <h2 class="text-2xl font-bold text-white tracking-tight">Delimitadores y Puntos en COBOL</h2>
                <p class="text-slate-400 text-sm max-w-md mx-auto">
                    Esta lección se encuentra actualmente en desarrollo y se integrará próximamente con guías detalladas e interactividad.
                </p>
                <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-xs font-mono">
                    <i class="fa-solid fa-person-digging text-amber-400"></i> Próximamente
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
                    Es momento de consolidar lo aprendido. A continuación, te presentamos el glosario oficial de colores que utilizamos en nuestros editores y un ejercicio interactivo de código.
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
                                <strong class="text-purple-300 block mb-0.5"><span class="cobol-comment font-bold">Comentarios de Documentación</span></strong>
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

                <!-- EJEMPLO COMPLETADO DE HOLA MUNDO -->
                <div class="space-y-3 pt-2">
                    <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-code text-emerald-400"></i> Estructura Final del Programa "Hola Mundo"
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

                <!-- SECCIÓN ROMPECABEZAS DIDÁCTICO -->
                <div class="bg-slate-950/80 border border-purple-900/40 rounded-xl p-5 space-y-4">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h4 class="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                            <i class="fa-solid fa-puzzle-piece text-purple-400"></i> Rompecabezas Lógico: Arma tu Bloque
                        </h4>
                        <span class="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800">Reto Práctico</span>
                    </div>
                    <p class="text-xs text-slate-300">
                        Identifica mentalmente el orden correcto en el que deben colocarse las líneas lógicas de la <code>PROCEDURE DIVISION</code> para imprimir un mensaje de bienvenida y cerrar el programa con éxito:
                    </p>
                    <div class="grid gap-2 text-xs font-mono">
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>1. [ ? ] <strong class="text-amber-300">INICIO-PROGRAMA.</strong></span>
                            <span class="text-[10px] text-slate-500">Párrafo de inicio</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>2. [ ? ] <strong class="text-sky-400">DISPLAY "¡Hola Mundo!"</strong></span>
                            <span class="text-[10px] text-slate-500">Salida por pantalla</span>
                        </div>
                        <div class="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex items-center justify-between">
                            <span>3. [ ? ] <strong class="text-sky-400">STOP RUN.</strong></span>
                            <span class="text-[10px] text-slate-500">Cierre de ejecución</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
