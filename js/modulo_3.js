// modulo_3.js

function loadLessonModule3(lessonId) {
    const container = document.getElementById('lesson-content');
    if (!container) return;

    if (lessonId === '3.1') {
        container.innerHTML = `
            <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span class="text-xs font-mono text-amber-400">Módulo 3 · Lección 3.1</span>
                    <span class="text-[10px] bg-amber-950 text-amber-300 border border-amber-800 px-2 py-1 rounded font-mono">Arquitectura del Mainframe</span>
                </div>

                <h2 class="text-2xl font-bold text-white tracking-tight">Mecánica de Hardware y Operación MOVE</h2>

                <div class="relative p-4 bg-slate-950/80 rounded-r-xl space-y-2 border-torna">
                    <i class="cobol-comment fa-solid fa-microchip"></i><span class="cobol-comment font-bold"> Contexto Histórico:</span>
                    <p class="text-slate-400 text-xs leading-relaxed">
                        En los años 60 y 70, la memoria RAM era extremadamente costosa. Cuando definías una variable de destino más pequeña que la de origen, COBOL no generaba un error de <i>runtime</i>; simplemente truncaba el dato. COBOL se diseñó para priorizar la velocidad y la eficiencia de los recursos en los mainframes en lugar de consumir ciclos de CPU en validaciones de ejecución, delegando la responsabilidad del control de desbordamiento directamente al programador. Esto causó miles de errores silenciosos en sistemas contables históricos.
                    </p>
                </div>

                <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
                    <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                        <h4 class="font-bold text-amber-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-server"></i> Enfoque Cercano al Hardware
                        </h4>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            COBOL procesa los datos con un enfoque muy cercano a la arquitectura del hardware del Mainframe. En la arquitectura Mainframe, el comando <code>MOVE</code> se traduce casi directamente a instrucciones de ensamblador como <strong class="text-white">MVC (Move Characters)</strong> o <strong class="text-white">MVCL (Move Characters Long)</strong>. COBOL no suele asignar memoria dinámica al ejecutar un <code>MOVE</code>. La memoria está previamente reservada en la <code>DATA DIVISION</code>.
                        </p>
                    </div>

                    <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                        <h4 class="font-bold text-sky-300 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-bolt"></i> Copia Directa de Bytes a Alta Velocidad
                        </h4>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            Al hacer un <code>MOVE</code>, la CPU del mainframe realiza una copia directa de bytes, de una dirección de memoria RAM a otra, a una velocidad extremadamente alta.
                        </p>
                    </div>
                </div>

                <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-lg">
                    <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* DEMOSTRACIÓN DE MECÁNICA DE HARDWARE Y OPERACIÓN MOVE          *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> LECC31.
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">DATA DIVISION.</span>
<span class="text-slate-500">000070</span> <span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
<span class="text-slate-500">000080</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-ORIGEN</span>    <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(10)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">"1234567890"</span>.
<span class="text-slate-500">000090</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-DESTINO</span>   <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(05)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">SPACES</span>.
<span class="text-slate-500">000100</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000110</span> <span class="text-amber-300">MAIN-PARAGRAPH.</span>
<span class="text-slate-500">000120</span><span class="cobol-comment">*    Operación MOVE que genera truncamiento silencioso por hardware</span>
<span class="text-slate-500">000130</span>     <span class="text-sky-400 font-semibold">MOVE</span> <span class="text-emerald-400">WS-ORIGEN</span> <span class="text-sky-400 font-semibold">TO</span> <span class="text-emerald-400">WS-DESTINO</span>.
<span class="text-slate-500">000140</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"DESTINO TRUNCADO: "</span> <span class="text-emerald-400">WS-DESTINO</span>.
<span class="text-slate-500">000150</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
                </div>

                <!-- BLOQUE REUTILIZABLE DEL GLOSARIO -->
                ${typeof getCobolDocumentationBlock === 'function' ? getCobolDocumentationBlock() : ''}
            </div>
        `;
  }
  else if (lessonId === '3.2') {
          container.innerHTML = `
              <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                  <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span class="text-xs font-mono text-amber-400">Módulo 3 · Lección 3.2</span>
                      <span class="text-[10px] bg-amber-950 text-amber-300 border border-amber-800 px-2.5 py-0.5 rounded font-mono">Operaciones y COMPUTE</span>
                  </div>

                  <h2 class="text-2xl font-bold text-white tracking-tight">Operaciones Matemáticas y COMPUTE</h2>

                  <div class="relative p-4 bg-slate-950/80 rounded-r-xl space-y-2 border-torna">
                      <i class="cobol-comment fa-solid fa-calculator"></i><span class="cobol-comment font-bold"> Contexto Histórico:</span>
                      <p class="text-slate-400 text-xs leading-relaxed">
                          Cuando COBOL nació en 1959, los verbos <code>ADD</code>, <code>SUBTRACT</code>, etc., fueron diseñados pensando en directores de finanzas y contadores sin formación en informática, para que leyeran el código como inglés natural. La sentencia <code>COMPUTE</code> no existía con la misma flexibilidad al inicio; se introdujo para reducir la molestia de escribir decenas de líneas de verbos simples para una sola fórmula algebraica.
                      </p>
                  </div>

                  <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
                      <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                          <h4 class="font-bold text-amber-300 text-sm flex items-center gap-2">
                              <i class="fa-solid fa-building-columns"></i> El Núcleo del Sistema Financiero
                          </h4>
                          <p class="text-slate-400 text-xs leading-relaxed">
                              COBOL y los mainframes de IBM siguen siendo el núcleo insustituible del sistema financiero mundial. La combinación del tipo de dato <code>COMP-3</code> con la arquitectura de hardware IBM Z ofrece ventajas críticas que los lenguajes modernos basados en software rara vez pueden replicar con la misma eficiencia.
                          </p>
                      </div>

                      <p class="text-xs text-slate-400 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                          <strong class="text-white block mb-1">En resumen:</strong> En COBOL, las dos formas principales de realizar operaciones matemáticas son mediante verbos aritméticos específicos y mediante el comando <code>COMPUTE</code>.
                      </p>
                  </div>

                  <div class="grid gap-4 text-xs">
                      <!-- 1. VERBOS ARITMÉTICOS BÁSICOS -->
                      <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-3">
                          <div class="font-bold text-sky-300 text-sm flex items-center gap-2">
                              <i class="fa-solid fa-list-ol"></i> 1. Verbos aritméticos básicos (Instrucciones específicas)
                          </div>
                          <p class="text-slate-400">
                              Utilizan palabras en inglés cercanas al lenguaje natural para realizar una sola operación a la vez:
                          </p>
                          <ul class="list-disc list-inside text-slate-300 space-y-1.5 pl-1">
                              <li><strong class="text-sky-300">ADD:</strong> Para sumar valores.</li>
                              <li><strong class="text-sky-300">SUBTRACT:</strong> Para restar valores.</li>
                              <li><strong class="text-sky-300">MULTIPLY:</strong> Para multiplicar valores (utiliza la cláusula <code>BY</code> y opcionalmente <code>GIVING</code>).</li>
                              <li><strong class="text-sky-300">DIVIDE:</strong> Para dividir valores.</li>
                          </ul>
                      </div>

                      <!-- 2. COMANDO COMPUTE -->
                      <div class="p-4 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-xl space-y-3">
                          <div class="font-bold text-purple-300 text-sm flex items-center gap-2">
                              <i class="fa-solid fa-function"></i> 2. Comando COMPUTE (Expresiones aritméticas)
                          </div>
                          <p class="text-slate-400 leading-relaxed">
                              Permite combinar múltiples operaciones matemáticas complejas (sumas, restas, multiplicaciones, divisiones y potencias) en una sola instrucción usando símbolos matemáticos tradicionales (<code class="text-purple-300">+</code>, <code class="text-purple-300">-</code>, <code class="text-purple-300">*</code>, <code class="text-purple-300">/</code>, <code class="text-purple-300">**</code> para potencias) y paréntesis.
                          </p>
                      </div>
                  </div>

                  <!-- BLOQUE DE CÓDIGO DEMOSTRATIVO -->
                  <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-lg">
                      <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
  <span class="text-slate-500">000020</span><span class="cobol-comment">* DEMOSTRACIÓN DE VERBOS ARITMÉTICOS Y COMPUTE                   *</span>
  <span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
  <span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
  <span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> LECC32.
  <span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">DATA DIVISION.</span>
  <span class="text-slate-500">000070</span> <span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
  <span class="text-slate-500">000080</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-VALOR1</span>    <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(03)V92</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">150.50</span>.
  <span class="text-slate-500">000090</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-VALOR2</span>    <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(03)V92</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">25.25</span>.
  <span class="text-slate-500">000100</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-RESULTADO</span> <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(05)V92</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">0</span>.
  <span class="text-slate-500">000110</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
  <span class="text-slate-500">000120</span> <span class="text-amber-300">MAIN-PARAGRAPH.</span>
  <span class="text-slate-500">000130</span><span class="cobol-comment">*    Ejemplo usando verbos tradicionales</span>
  <span class="text-slate-500">000140</span>     <span class="text-sky-400 font-semibold">ADD</span> <span class="text-emerald-400">WS-VALOR2</span> <span class="text-sky-400 font-semibold">TO</span> <span class="text-emerald-400">WS-VALOR1</span>.
  <span class="text-slate-500">000150</span><span class="cobol-comment">*    Ejemplo usando COMPUTE avanzado</span>
  <span class="text-slate-500">000160</span>     <span class="text-sky-400 font-semibold">COMPUTE</span> <span class="text-emerald-400">WS-RESULTADO</span> = (<span class="text-emerald-400">WS-VALOR1</span> + <span class="text-emerald-400">WS-VALOR2</span>) * <span class="text-purple-300">2</span>.
  <span class="text-slate-500">000170</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"RESULTADO COMPUTE: "</span> <span class="text-emerald-400">WS-RESULTADO</span>.
  <span class="text-slate-500">000180</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
  </div>

                  <!-- BLOQUE REUTILIZABLE DEL GLOSARIO -->
                  ${typeof getCobolDocumentationBlock === 'function' ? getCobolDocumentationBlock() : ''}
              </div>
          `;
      }

      else if (lessonId === '3.3') {
            container.innerHTML = `
                <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                        <span class="text-xs font-mono text-amber-400">Módulo 3 · Lección 3.3</span>
                        <span class="text-[10px] bg-amber-950 text-amber-300 border border-amber-800 px-2.5 py-0.5 rounded font-mono">Estructura Condicional</span>
                    </div>

                    <h2 class="text-2xl font-bold text-white tracking-tight">Estructuras Condicionales y EVALUATE</h2>

                    <div class="relative p-4 bg-slate-950/80 rounded-r-xl space-y-2 border-torna">
                        <i class="cobol-comment fa-solid fa-code-branch"></i><span class="cobol-comment font-bold"> Contexto Histórico:</span>
                        <p class="text-slate-400 text-xs leading-relaxed">
                            La estructura condicional nació emulando la gramática del inglés tradicional, pero su evolución técnica refleja perfectamente la transición de la programación antigua, que estaba llena de saltos desordenados, a la programación estructurada moderna.
                        </p>
                    </div>

                    <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
                        <!-- 1. EL ENEMIGO HISTÓRICO -->
                        <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                            <h4 class="font-bold text-amber-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-triangle-exclamation"></i> 1. El enemigo histórico: El punto final (.) frente al END-IF
                            </h4>
                            <p class="text-slate-400 text-xs leading-relaxed">
                                Esta es la lección más importante al explicar COBOL. Históricamente, COBOL no tenía una instrucción para cerrar un <code>IF</code>. El compilador asumía que el condicional terminaba cuando encontraba un punto físico (<code>.</code>).
                            </p>
                            <ul class="list-disc list-inside text-slate-400 text-xs space-y-1 pl-1">
                                <li><strong class="text-slate-300">El peligro:</strong> Si olvidabas el punto al final de la línea de <code>PERFORM</code>, la siguiente línea (<code>DISPLAY "ESTO SE EJECUTA SIEMPRE"</code>) se volvía parte del <code>IF</code> de manera destructiva. Un solo punto cambiaba la lógica de todo un sistema bancario.</li>
                                <li><strong class="text-slate-300">La solución moderna (COBOL-85):</strong> Se introdujo el delimitador explícito <code>END-IF</code>. Hoy en día, la buena práctica dicta prohibir los puntos intermedios y cerrar cada condición con su respectivo <code>END-IF</code>.</li>
                            </ul>
                        </div>

                        <!-- 2. SINTAXIS Y OPERADORES -->
                        <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-3">
                            <h4 class="font-bold text-sky-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-table-cells"></i> 2. Sintaxis y Operadores (Legibilidad de Negocio)
                            </h4>
                            <p class="text-slate-400 text-xs leading-relaxed">
                                Para mantener el código legible por humanos no técnicos, COBOL permite escribir los operadores condicionales con palabras completas o con símbolos tradicionales.
                            </p>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left text-xs text-slate-300 border-collapse">
                                    <thead>
                                        <tr class="border-b border-slate-800 text-sky-300">
                                            <th class="p-2">Operador Simbólico</th>
                                            <th class="p-2">Operador de Palabra (COBOL)</th>
                                            <th class="p-2">Ejemplo de Uso</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-800/60 text-slate-400">
                                        <tr><td class="p-2 font-mono text-purple-300">=</td><td class="p-2 font-mono text-white">EQUAL TO</td><td class="p-2 font-mono text-emerald-400">IF EDAD IS EQUAL TO 18</td></tr>
                                        <tr><td class="p-2 font-mono text-purple-300">&gt;</td><td class="p-2 font-mono text-white">GREATER THAN</td><td class="p-2 font-mono text-emerald-400">IF BALANCE IS GREATER THAN LIMIT</td></tr>
                                        <tr><td class="p-2 font-mono text-purple-300">&lt;</td><td class="p-2 font-mono text-white">LESS THAN</td><td class="p-2 font-mono text-emerald-400">IF STOCK IS LESS THAN MINIMUM</td></tr>
                                        <tr><td class="p-2 font-mono text-purple-300">&gt;=</td><td class="p-2 font-mono text-white">GREATER THAN OR EQUAL TO</td><td class="p-2 font-mono text-emerald-400">IF PUNTOS &gt;= 100</td></tr>
                                        <tr><td class="p-2 font-mono text-purple-300">NOT =</td><td class="p-2 font-mono text-white">NOT EQUAL TO</td><td class="p-2 font-mono text-emerald-400">IF ESTADO NOT EQUAL 'X'</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="text-slate-400 text-xs pt-2">Además, cuenta con evaluaciones especiales únicas del lenguaje:</p>
                            <ul class="list-disc list-inside text-slate-400 text-xs space-y-1 pl-1">
                                <li><strong class="text-slate-300">IF VARIABLE IS NUMERIC:</strong> Verifica si el contenido de una variable de texto son solo números antes de operar con ella (crucial para evitar caídas del sistema o "abends").</li>
                                <li><strong class="text-slate-300">IF VARIABLE IS ALPHABETIC:</strong> Verifica si contiene únicamente letras.</li>
                            </ul>
                        </div>

                        <!-- 3. CONDICIONALES MÚLTIPLES -->
                        <div class="p-4 bg-slate-950/80 border-l-4 border-purple-400 rounded-r-xl space-y-2">
                            <h4 class="font-bold text-purple-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-list-check"></i> 3. Condicionales Múltiples: Adiós a los IF anidados
                            </h4>
                            <p class="text-slate-400 text-xs leading-relaxed">
                                Cuando un sistema bancario requiere evaluar múltiples escenarios (por ejemplo, tipos de transacciones o categorías de tarjetas), llenar el código de <code>IF</code> anidados se vuelve una pesadilla de mantenimiento llamada "código espagueti". Para solucionar esto, COBOL utiliza la instrucción <code>EVALUATE</code>, que es el equivalente al <code>switch</code> de Java/C# o al <code>match</code> de Python, pero mucho más potente porque permite evaluar múltiples variables y rangos a la vez.
                            </p>
                        </div>
                    </div>

                    <!-- BLOQUE DE CÓDIGO DEMOSTRATIVO -->
              <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-lg">
                  <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000010</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000020</span><span class="cobol-comment">* DEMOSTRACIÓN DE ESTRUCTURAS CONDICIONALES Y EVALUATE           *</span>
<span class="text-slate-500">000030</span><span class="cobol-comment">*================================================================*</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> LECC33.
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">DATA DIVISION.</span>
<span class="text-slate-500">000070</span> <span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
<span class="text-slate-500">000080</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-EDAD</span>      <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(02)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">20</span>.
<span class="text-slate-500">000090</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-TIPO-CTA</span>  <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(01)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">"A"</span>.
<span class="text-slate-500">000100</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000110</span> <span class="text-amber-300">MAIN-PARAGRAPH.</span>
<span class="text-slate-500">000120</span><span class="cobol-comment">*    Uso de IF moderno con delimitador END-IF</span>
<span class="text-slate-500">000130</span>     <span class="text-sky-400 font-semibold">IF</span> <span class="text-emerald-400">WS-EDAD</span> <span class="text-sky-400 font-semibold">IS GREATER THAN OR EQUAL TO</span> <span class="text-purple-300">18</span>
<span class="text-slate-500">000140</span>         <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"ACCESO PERMITIDO: MAYOR DE EDAD"</span>
<span class="text-slate-500">000150</span>     <span class="text-sky-400 font-semibold">ELSE</span>
<span class="text-slate-500">000160</span>         <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"ACCESO DENEGADO: MENOR DE EDAD"</span>
<span class="text-slate-500">000170</span>     <span class="text-sky-400 font-semibold">END-IF</span>.
<span class="text-slate-500">000180</span><span class="cobol-comment">*    Uso de EVALUATE para múltiples condiciones</span>
<span class="text-slate-500">000190</span>     <span class="text-sky-400 font-semibold">EVALUATE</span> <span class="text-emerald-400">WS-TIPO-CTA</span>
<span class="text-slate-500">000200</span>         <span class="text-sky-400 font-semibold">WHEN</span> <span class="text-pink-400">"A"</span>
<span class="text-slate-500">000210</span>             <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"CUENTA DE AHORROS"</span>
<span class="text-slate-500">000220</span>         <span class="text-sky-400 font-semibold">WHEN</span> <span class="text-pink-400">"C"</span>
<span class="text-slate-500">000230</span>             <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"CUENTA CORRIENTE"</span>
<span class="text-slate-500">000240</span>         <span class="text-sky-400 font-semibold">WHEN OTHER</span>
<span class="text-slate-500">000250</span>             <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"TIPO DE CUENTA INVALIDO"</span>
<span class="text-slate-500">000260</span>     <span class="text-sky-400 font-semibold">END-EVALUATE</span>.
<span class="text-slate-500">000270</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
              </div>

                    <!-- BLOQUE REUTILIZABLE DEL GLOSARIO -->
                    ${typeof getCobolDocumentationBlock === 'function' ? getCobolDocumentationBlock() : ''}
                </div>
            `;
        }

        else if (lessonId === '3.4') {
                container.innerHTML = `
                    <div class="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-6">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                            <span class="text-xs font-mono text-amber-400">Módulo 3 · Lección 3.5</span>
                            <span class="text-[10px] bg-amber-950 text-amber-300 border border-amber-800 px-2.5 py-0.5 rounded font-mono">Control de Flujo y Bucles</span>
                        </div>

                        <h2 class="text-2xl font-bold text-white tracking-tight">Bucles, PERFORM y Niveles 88</h2>

                        <div class="relative p-4 bg-slate-950/80 rounded-r-xl space-y-2 border-torna">
                            <i class="cobol-comment fa-solid fa-rotate"></i><span class="cobol-comment font-bold"> Contexto de Arquitectura:</span>
                            <p class="text-slate-400 text-xs leading-relaxed">
                                A diferencia de lenguajes como C o Python donde cada llamada a función añade un marco de pila (<span class="text-white">Stack Frame</span>) dinámico que puede causar un <span class="text-red-400">Stack Overflow</span>, en COBOL clásico las direcciones de retorno de un <code>PERFORM</code> se gestionan en punteros fijos en memoria. Al usar punteros estáticos para las direcciones de retorno, el lenguaje sacrifica la capacidad de realizar recursividad natural a cambio de una estabilidad y predictibilidad absolutas en entornos mainframe.
                            </p>
                        </div>

                        <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
                            <div class="p-4 bg-slate-950/80 border-l-4 border-amber-400 rounded-r-xl space-y-2">
                                <h4 class="font-bold text-amber-300 text-sm flex items-center gap-2">
                                    <i class="fa-solid fa-server"></i> Determinismo en Batch Jobs
                                </h4>
                                <p class="text-slate-400 text-xs leading-relaxed">
                                    En un sistema de producción que procesa miles de millones de transacciones, un <code>Stack Overflow</code> no es una opción; COBOL prefiere el determinismo. Los bucles <code>PERFORM UNTIL</code> son el motor principal de los trabajos en lote (<span class="text-white">Batch Jobs</span>) en mainframes (<span class="text-white">MVS/z/OS</span>), leyendo millones de registros secuenciales de cinta/disco paso a paso mediante bloques de memoria intermedia (<span class="text-white">buffers</span>).
                                </p>
                            </div>

                            <div class="p-4 bg-slate-950/80 border-l-4 border-sky-400 rounded-r-xl space-y-2">
                                <h4 class="font-bold text-sky-300 text-sm flex items-center gap-2">
                                    <i class="fa-solid fa-code-branch"></i> Evolución: De COBOL-74 a COBOL-85
                                </h4>
                                <p class="text-slate-400 text-xs leading-relaxed">
                                    En COBOL sirve tanto para invocar párrafos o secciones como para construir bucles iterativos. En el estándar <span class="text-white">COBOL-74</span>, era obligatorio que el cuerpo del bucle estuviera en un párrafo separado: <code>PERFORM 1000-PROCESO UNTIL...</code>. Fue en <span class="text-white">COBOL-85</span> cuando se añadieron los bucles inline con <code>END-PERFORM</code>, permitiendo escribir código mucho más estructurado dentro del mismo bloque sin perder eficiencia en el manejo de buffers.
                                </p>
                            </div>
                        </div>

                        <!-- MODALIDADES DE PERFORM -->
                        <div class="grid sm:grid-cols-3 gap-4 text-xs">
                            <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                                <span class="font-bold text-sky-300 block text-sm"><i class="fa-solid fa-arrow-pointer mr-1"></i> Invocación Simple</span>
                                <p class="text-slate-400">Ejecuta un párrafo o sección externa una sola vez como una subrutina y regresa al flujo normal.</p>
                            </div>

                            <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                                <span class="font-bold text-purple-300 block text-sm"><i class="fa-solid fa-list-ol mr-1"></i> Bucle por Conteo</span>
                                <p class="text-slate-400">Utiliza la cláusula <code>VARYING</code> o <code>TIMES</code> para repetir un bloque un número determinado de iteraciones.</p>
                            </div>

                            <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                                <span class="font-bold text-amber-300 block text-sm"><i class="fa-solid fa-filter mr-1"></i> Bucle Condicional</span>
                                <p class="text-slate-400">Equivalente a un <span class="text-white">While / Do-While</span>, repite la ejecución evaluando una condición lógica (<span class="text-white">UNTIL</span>).</p>
                            </div>
                        </div>

                        <!-- EJERCICIO INTEGRADOR MÓDULO 3 Y NIVELES 88 -->
                        <div class="p-4 bg-slate-950/80 border-l-4 border-emerald-400 rounded-r-xl space-y-4">
                            <div class="font-bold text-emerald-300 text-sm flex items-center gap-2">
                                <i class="fa-solid fa-shield-halved"></i> Ejercicio Integrador del Módulo 3: Buenas Prácticas con Niveles 88
                            </div>
                            <p class="text-slate-400 text-xs leading-relaxed">
                                Este programa de ejemplo consolida los operadores aritméticos, el control de flujo con <code>PERFORM UNTIL</code> y la aplicación profesional de los <b>Niveles 88 (Condition Names)</b>. Los niveles 88 permiten evaluar códigos de estado con nombres legibles en lugar de comparar valores numéricos o literales directamente en los <code>IF</code>, facilitando enormemente el mantenimiento del software.
                            </p>

                            <div class="bg-[#0b1121] border border-slate-800 rounded-xl overflow-x-auto shadow-xl">
                                <pre class="cobol-code-block cobol-columns-bg text-[13px] leading-relaxed p-5 min-w-max block"><code class="text-slate-300 block"><span class="text-slate-500">000010</span> <span class="text-sky-400 font-semibold">IDENTIFICATION DIVISION.</span>
<span class="text-slate-500">000020</span> <span class="text-sky-400 font-semibold">PROGRAM-ID.</span> CALCBT01.
<span class="text-slate-500">000030</span> <span class="text-sky-400 font-semibold">DATA DIVISION.</span>
<span class="text-slate-500">000040</span> <span class="text-sky-400 font-semibold">WORKING-STORAGE SECTION.</span>
<span class="text-slate-500">000050</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-CONTADOR</span>       <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(02)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">0</span>.
<span class="text-slate-500">000060</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-LIMITE</span>         <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">9(02)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-purple-300">5</span>.
<span class="text-slate-500">000070</span> <span class="text-sky-400 font-semibold">01</span>  <span class="text-emerald-400">WS-ESTADO-TRANS</span>   <span class="text-sky-400 font-semibold">PIC</span> <span class="text-purple-300">X(01)</span> <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">'P'</span>.
<span class="text-slate-500">000080</span><span class="cobol-comment">*    BUENA PRÁCTICA: Nivel 88 para dar legibilidad a las condiciones</span>
<span class="text-slate-500">000090</span>     <span class="text-sky-400 font-semibold">88</span>  <span class="text-amber-300">TRANS-PENDIENTE</span>     <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">'P'</span>.
<span class="text-slate-500">000100</span>     <span class="text-sky-400 font-semibold">88</span>  <span class="text-amber-300">TRANS-APROBADA</span>      <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">'A'</span>.
<span class="text-slate-500">000110</span>     <span class="text-sky-400 font-semibold">88</span>  <span class="text-amber-300">TRANS-FIN</span>           <span class="text-sky-400 font-semibold">VALUE</span> <span class="text-pink-400">'F'</span>.
<span class="text-slate-500">000120</span> <span class="text-sky-400 font-semibold">PROCEDURE DIVISION.</span>
<span class="text-slate-500">000130</span> <span class="text-amber-300">MAIN-PARAGRAPH.</span>
<span class="text-slate-500">000140</span><span class="cobol-comment">*    Bucle condicional PERFORM UNTIL con bloque inline (COBOL-85)</span>
<span class="text-slate-500">000150</span>     <span class="text-sky-400 font-semibold">PERFORM</span> <span class="text-sky-400 font-semibold">UNTIL</span> <span class="text-emerald-400">WS-CONTADOR</span> <span class="text-purple-300">&gt;=</span> <span class="text-emerald-400">WS-LIMITE</span>
<span class="text-slate-500">000160</span>         <span class="text-sky-400 font-semibold">ADD</span> <span class="text-purple-300">1</span> <span class="text-sky-400 font-semibold">TO</span> <span class="text-emerald-400">WS-CONTADOR</span>
<span class="text-slate-500">000170</span>         <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"PROCESANDO LOTE NUMERO: "</span> <span class="text-emerald-400">WS-CONTADOR</span>
<span class="text-slate-500">000180</span>         <span class="text-sky-400 font-semibold">IF</span> <span class="text-emerald-400">WS-CONTADOR</span> <span class="text-purple-300">=</span> <span class="text-purple-300">3</span>
<span class="text-slate-500">000190</span>             <span class="text-sky-400 font-semibold">MOVE</span> <span class="text-pink-400">'A'</span> <span class="text-sky-400 font-semibold">TO</span> <span class="text-emerald-400">WS-ESTADO-TRANS</span>
<span class="text-slate-500">000200</span>         <span class="text-sky-400 font-semibold">END-IF</span>
<span class="text-slate-500">000210</span><span class="cobol-comment">*        Evaluación limpia usando el Nivel 88 en lugar de comparar literales</span>
<span class="text-slate-500">000220</span>         <span class="text-sky-400 font-semibold">IF</span> <span class="text-amber-300">TRANS-APROBADA</span>
<span class="text-slate-500">000230</span>             <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"-> ESTADO: TRANSACCION APROBADA EXITOSAMENTE."</span>
<span class="text-slate-500">000240</span>         <span class="text-sky-400 font-semibold">END-IF</span>
<span class="text-slate-500">000250</span>     <span class="text-sky-400 font-semibold">END-PERFORM</span>.
<span class="text-slate-500">000260</span>     <span class="text-sky-400 font-semibold">DISPLAY</span> <span class="text-pink-400">"PROCESO BATCH FINALIZADO CORRECTAMENTE."</span>.
<span class="text-slate-500">000270</span>     <span class="text-sky-400 font-semibold">STOP RUN</span>.</code></pre>
                            </div>
                        </div>

                        ${typeof getCobolDocumentationBlock === 'function' ? getCobolDocumentationBlock() : ''}
                    </div>
                `;
            }
}
