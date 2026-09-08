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
                                &nbsp;&nbsp;&nbsp;&nbsp;"command": "cobc -x $ZED_FILE && ./\${ZED_FILE_STEM}",<br>
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
                    <div class="cobol-editor font-mono-code p-4 rounded-xl text-xs leading-relaxed overflow-x-auto border border-slate-800 shadow-2xl">
                        <div><span class="col-seq">000010</span><span class="col-ind"> </span><span class="col-area-a">IDENTIFICATION DIVISION.</span></div>
                        <div><span class="col-seq">000020</span><span class="col-ind"> </span><span class="col-area-a">PROGRAM-ID.</span><span class="col-area-b"> HOLAMUNDO.</span></div>
                        <div><span class="col-seq">000030</span><span class="col-ind"> </span><span class="col-area-a">PROCEDURE DIVISION.</span></div>
                        <div><span class="col-seq">000040</span><span class="col-ind"> </span><span class="col-area-b">    </span><span class="cobol-keyword">DISPLAY</span><span class="col-area-b"> </span><span class="cobol-string">"¡ENTORNO CONFIGURADO CORRECTAMENTE!"</span><span class="col-area-b">.</span></div>
                        <div><span class="col-seq">000050</span><span class="col-ind"> </span><span class="col-area-b">    </span><span class="cobol-keyword">STOP RUN</span><span class="col-area-b">.</span></div>
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

                <div class="cobol-editor font-mono-code p-4 rounded-xl text-xs leading-relaxed overflow-x-auto border border-slate-800 shadow-2xl">
                    <div><span class="col-seq">000010</span><span class="col-ind">*</span><span class="cobol-comment">================================================================*</span></div>
                    <div><span class="col-seq">000020</span><span class="col-ind">*</span><span class="cobol-comment"> LECCIÓN 1.1: ESQUELETO MÍNIMO DE UN PROGRAMA EN COBOL          *</span></div>
                    <div><span class="col-seq">000030</span><span class="col-ind">*</span><span class="cobol-comment">================================================================*</span></div>
                    <div><span class="col-seq">000040</span><span class="col-ind"> </span><span class="col-area-a">IDENTIFICATION DIVISION.</span></div>
                    <div><span class="col-seq">000050</span><span class="col-ind"> </span><span class="col-area-a">PROGRAM-ID.</span><span class="col-area-b"> LEC0101.</span></div>
                    <div><span class="col-seq">000060</span><span class="col-ind"> </span><span class="col-area-a">PROCEDURE DIVISION.</span></div>
                    <div><span class="col-seq">000070</span><span class="col-ind"> </span><span class="col-area-a">INICIO.</span></div>
                    <div><span class="col-seq">000080</span><span class="col-ind"> </span><span class="col-area-b">    </span><span class="cobol-keyword">DISPLAY</span><span class="col-area-b"> </span><span class="cobol-string">"¡Bienvenido al curso de COBOL!"</span><span class="col-area-b">.</span></div>
                    <div><span class="col-seq">000090</span><span class="col-ind"> </span><span class="col-area-b">    </span><span class="cobol-keyword">STOP RUN</span><span class="col-area-b">.</span></div>
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

                <div class="cobol-editor font-mono-code p-4 rounded-xl text-xs leading-relaxed overflow-x-auto border border-slate-800 shadow-2xl">
                    <div><span class="col-seq">000010</span><span class="col-ind">*</span><span class="cobol-comment">================================================================*</span></div>
                    <div><span class="col-seq">000020</span><span class="col-ind">*</span><span class="cobol-comment"> DEMOSTRACIÓN DE ZONAS Y ÁREAS EN FORMATO FIJO                  *</span></div>
                    <div><span class="col-seq">000030</span><span class="col-ind">*</span><span class="cobol-comment">================================================================*</span></div>
                    <div><span class="col-seq">000040</span><span class="col-ind"> </span><span class="col-area-a">IDENTIFICATION DIVISION.</span></div>
                    <div><span class="col-seq">000050</span><span class="col-ind"> </span><span class="col-area-a">PROGRAM-ID.</span><span class="col-area-b"> LEC0102.</span></div>
                    <div><span class="col-seq">000060</span><span class="col-ind"> </span><span class="col-area-a">DATA DIVISION.</span></div>
                    <div><span class="col-seq">000070</span><span class="col-ind"> </span><span class="col-area-a">WORKING-STORAGE SECTION.</span></div>
                    <div><span class="col-seq">000080</span><span class="col-ind"> </span><span class="col-area-a">01</span><span class="col-area-b"> WS-TEXTO          </span><span class="cobol-keyword">PIC</span><span class="col-area-b"> X(20) </span><span class="cobol-keyword">VALUE</span><span class="col-area-b"> </span><span class="cobol-string">"FORMATO FIJO COBOL"</span><span class="col-area-b">.</span></div>
                    <div><span class="col-seq">000090</span><span class="col-ind"> </span><span class="col-area-a">PROCEDURE DIVISION.</span></div>
                    <div><span class="col-seq">000100</span><span class="col-ind"> </span><span class="col-area-a">MAIN-PARAGRAPH.</span></div>
                    <div><span class="col-seq">000110</span><span class="col-ind"> </span><span class="col-area-b">    </span><span class="cobol-keyword">DISPLAY</span><span class="col-area-b"> WS-TEXTO.</span></div>
                    <div><span class="col-seq">000120</span><span class="col-ind"> </span><span class="col-area-b">    </span><span class="cobol-keyword">STOP RUN</span><span class="col-area-b">.</span></div>
                </div>

                <div class="space-y-3 pt-2">
                    <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <i class="fa-solid fa-table-columns text-sky-400"></i> Desglose Estricto de Columnas y Operadores
                    </h3>
                    <div class="grid gap-3 text-xs">
                        <div class="p-3 bg-slate-950/80 border-l-4 border-slate-500 rounded-r-lg">
                            <strong class="text-slate-300 font-mono">Cols 1 – 6 (Sequence Number):</strong> Reservadas para numeración lógica de línea.
                        </div>
                        <div class="p-3 bg-slate-950/80 border-l-4 border-amber-500 rounded-r-lg">
                            <strong class="text-amber-400 font-mono">Columna 7 (Indicator Area):</strong> Control del compilador (* para comentarios, - para continuación).
                        </div>
                        <div class="p-3 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-lg">
                            <strong class="text-sky-300 font-mono">Cols 8 – 11 (Área A):</strong> Reservada para Divisiones, Secciones, Parágrafos y variables base (01).
                        </div>
                        <div class="p-3 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-lg">
                            <strong class="text-purple-300 font-mono">Cols 12 – 72 (Área B):</strong> Área para sentencias ejecutables (DISPLAY, MOVE) y subniveles.
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
