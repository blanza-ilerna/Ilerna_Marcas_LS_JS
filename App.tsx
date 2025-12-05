import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CodeBlock } from './components/CodeBlock';
import { DomPlayground } from './components/DomPlayground';
import { EventPlayground } from './components/EventPlayground';
import { VariablePlayground } from './components/VariablePlayground';
import { FunctionPlayground } from './components/FunctionPlayground';
import { Quiz } from './components/Quiz';
import { Info, MousePointer2, Layers, Braces, Calculator, Box, Check, ArrowRight, Repeat, GitMerge, AlertTriangle, Copy, Sparkles, BookOpen, Globe, FileCode, Zap } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('history');

  useEffect(() => {
    // Limpiar cualquier handler de beforeunload que pueda estar causando alertas al recargar
    window.onbeforeunload = null;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffffff] to-[#f5f5f5] text-ilerna-dark pb-20 font-montserrat">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        <Header activeTab={activeTab} onTabChange={setActiveTab} />

        {/* =================================================================================
            SECCIÓN 0: HISTORIA Y ES6
           ================================================================================= */}
        {activeTab === 'history' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-white rounded-3xl shadow-card p-8 md:p-12 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-ilerna-dark mb-6 border-l-4 border-ilerna-cyan pl-4 flex items-center gap-3">
                <BookOpen className="text-ilerna-cyan" size={32} /> Historia y Conceptos Base
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-ilerna-dark mb-3">Naturaleza del Lenguaje</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                    JavaScript se clasifica técnicamente como un lenguaje <strong>procedimental</strong>, dinámico y multiparadigma. Aunque soporta orientación a objetos y programación funcional, su estructura base sigue una secuencia lógica de procedimientos.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Su <strong>función principal</strong> en el ecosistema actual es el <strong>Desarrollo de la interfaz de usuario en el lado del cliente</strong>. Es el motor que permite que las webs respondan a las acciones del usuario instantáneamente sin recargar la página.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ilerna-dark mb-3">Integración en HTML</h3>
                  <div className="bg-[#E8F7FA] p-5 rounded-xl border border-ilerna-cyan/20">
                    <p className="text-gray-700 text-sm mb-3">
                      Para incorporar lógica JavaScript en un documento web, utilizamos exclusivamente la etiqueta <code>&lt;script&gt;</code>.
                    </p>
                    <CodeBlock 
                      code={`<!-- Importar fichero externo (Correcto) -->
<script src="app.js"></script>

<!-- Código en línea -->
<script>
  console.log("Hola Mundo");
</script>`} 
                      language="html"
                    />
                    <p className="text-xs text-red-500 mt-2 font-bold">
                      ⚠️ Importante: Nunca se utiliza la etiqueta &lt;meta&gt; para importar scripts o lógica de programación.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECCIÓN ES6 EMPHASIS */}
              <div className="bg-gradient-to-r from-ilerna-purple to-purple-600 p-8 rounded-2xl text-white mb-10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                  <Zap size={200} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="text-yellow-300" /> La Revolución ES6 (ECMAScript 2015)
                  </h3>
                  <p className="mb-6 text-purple-100 text-lg leading-relaxed">
                    Antes de las revisiones anuales, hubo un "Big Bang". <strong>ES6</strong> fue la actualización más importante en la historia del lenguaje, modernizando drásticamente cómo escribimos código.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                      <strong className="text-yellow-300 block mb-1">Variables Seguras</strong>
                      <p className="text-sm">Introducción de <code>let</code> y <code>const</code> para solucionar los problemas de alcance de <code>var</code>.</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                      <strong className="text-yellow-300 block mb-1">Arrow Functions</strong>
                      <p className="text-sm">Una sintaxis más limpia <code>() =&gt; {}</code> que no altera el contexto de <code>this</code>.</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                      <strong className="text-yellow-300 block mb-1">Clases y Módulos</strong>
                      <p className="text-sm">Sintaxis clara para POO (<code>class</code>) y organización de ficheros (<code>import/export</code>).</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                      <strong className="text-yellow-300 block mb-1">Template Literals</strong>
                      <p className="text-sm">Uso de comillas invertidas (backticks) para interpolar variables: <code>{`Hola \${nombre}`}</code>.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revisiones Anuales y TC39 */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-2xl font-bold text-ilerna-dark mb-4 flex items-center gap-2">
                  <Globe className="text-ilerna-purple" size={24} /> 
                  Estandarización Moderna (TC39)
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Tras el lanzamiento masivo de ES6 en 2015, el comité encargado del estándar (<strong>TC39</strong>) decidió cambiar a un ciclo de liberación <strong>anual</strong>. 
                  Esto evita estancamientos de años sin novedades. Ahora, cualquier propuesta de mejora pasa por 4 etapas (Stages):
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Stage 0</span>
                    <span className="text-sm font-bold text-ilerna-dark">Strawman</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Stage 1</span>
                    <span className="text-sm font-bold text-ilerna-dark">Proposal</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Stage 2/3</span>
                    <span className="text-sm font-bold text-ilerna-dark">Draft / Candidate</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center border border-green-200">
                    <span className="block text-xs font-bold text-green-600 uppercase">Stage 4</span>
                    <span className="text-sm font-bold text-green-800">Finished</span>
                  </div>
                </div>

                <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-gray-200">
                  <h4 className="font-bold text-ilerna-dark mb-4 text-lg">Hitos de las Revisiones Anuales</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="font-bold text-ilerna-cyan mb-1">ES2016 (ES7)</div>
                      <p className="text-sm text-gray-600">Pequeña actualización. Introdujo <code>Array.prototype.includes()</code> y el operador exponencial <code>**</code>.</p>
                    </div>
                    <div>
                      <div className="font-bold text-ilerna-purple mb-1">ES2017 (ES8)</div>
                      <p className="text-sm text-gray-600">Muy importante. Trajo <strong>Async/Await</strong>, simplificando enormemente el manejo de promesas.</p>
                    </div>
                    <div>
                      <div className="font-bold text-ilerna-dark mb-1">ES2020+</div>
                      <p className="text-sm text-gray-600">Mejoras de sintaxis como <strong>Optional Chaining (?. )</strong> y <strong>Nullish Coalescing (??)</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =================================================================================
            SECCIÓN 1: FUNDAMENTOS (VARIABLES & TIPOS)
           ================================================================================= */}
        {activeTab === 'basics' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-white rounded-3xl shadow-card p-8 md:p-12 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-ilerna-dark mb-6 border-l-4 border-ilerna-cyan pl-4">
                Variables y Tipos de Datos
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En JavaScript, las variables son contenedores para almacenar datos. Existen dos categorías principales de datos: 
                <strong> Primitivos</strong> y <strong>Complejos</strong>.
              </p>

              {/* PRIMITIVOS VS COMPLEJOS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
                <div className="bg-[#E8F7FA] p-6 rounded-2xl border border-ilerna-cyan/20">
                  <h4 className="font-bold text-ilerna-cyan text-xl mb-3 flex items-center gap-2">
                    <Box size={20}/> 1. Tipos Primitivos
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Son <strong>inmutables</strong> y se almacenan/copian por <strong>valor</strong>.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-3">
                    <li className="flex items-start gap-2"><Check size={16} className="mt-1 text-ilerna-cyan"/> <span><strong>String:</strong> <code>"Hola"</code></span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="mt-1 text-ilerna-cyan"/> <span><strong>Number:</strong> <code>25</code>, <code>3.14</code></span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="mt-1 text-ilerna-cyan"/> <span><strong>Boolean:</strong> <code>true</code>, <code>false</code></span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="mt-1 text-ilerna-cyan"/> <span><strong>Null:</strong> Ausencia intencional.</span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="mt-1 text-ilerna-cyan"/> <span><strong>Undefined:</strong> No definido aún.</span></li>
                  </ul>
                </div>
                <div className="bg-[#F0EDF5] p-6 rounded-2xl border border-ilerna-purple/20">
                  <h4 className="font-bold text-ilerna-purple text-xl mb-3 flex items-center gap-2">
                    <Braces size={20}/> 2. Tipos Complejos (Objetos)
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Son <strong>mutables</strong> y se almacenan/copian por <strong>referencia</strong>.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-3">
                    <li className="flex items-start gap-2"><Check size={16} className="mt-1 text-ilerna-purple"/> <span><strong>Object:</strong> <code>{`{ nombre: "Ana" }`}</code></span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="mt-1 text-ilerna-purple"/> <span><strong>Array:</strong> <code>[1, 2, 3]</code></span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="mt-1 text-ilerna-purple"/> <span><strong>Function:</strong> Código ejecutable.</span></li>
                  </ul>
                </div>
              </div>

              {/* UNDEFINED VS NULL DETAIL */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                <h3 className="text-xl font-bold text-ilerna-dark mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-orange-500"/> Diferencia Vital: Undefined vs Null
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                     <p className="font-bold text-gray-700 mb-2">Undefined ("No sé qué es")</p>
                     <p className="text-sm text-gray-600 mb-2">Es el valor por defecto que JavaScript asigna a una variable que ha sido declarada pero no inicializada.</p>
                     <code className="block bg-gray-200 p-2 rounded text-xs">let x; // x es undefined</code>
                  </div>
                  <div>
                     <p className="font-bold text-gray-700 mb-2">Null ("Está vacío a propósito")</p>
                     <p className="text-sm text-gray-600 mb-2">Es un valor asignado por el programador para indicar explícitamente que una variable está vacía o no tiene valor.</p>
                     <code className="block bg-gray-200 p-2 rounded text-xs">let y = null; // y es null</code>
                  </div>
                </div>
              </div>

              {/* COPIA POR VALOR VS REFERENCIA */}
              <div className="mt-10 mb-8">
                <h3 className="text-2xl font-bold text-ilerna-dark mb-4 flex items-center gap-2">
                  <Copy size={24} className="text-ilerna-purple"/> Copia por Valor vs Referencia
                </h3>
                <p className="text-gray-600 mb-4">
                  Aquí es donde ocurren muchos errores en programación. 
                  Los primitivos crean copias independientes. Los objetos comparten la misma dirección de memoria.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <CodeBlock 
                   code={`// --- POR VALOR (Primitivos) ---
let a = 10;
let b = a; // Copia el valor 10
b = 20;

console.log(a); // 10 (Intacto)
console.log(b); // 20`} 
                   title="Copia Independiente"
                  />
                  <CodeBlock 
                   code={`// --- POR REFERENCIA (Objetos) ---
let usuario1 = { nombre: "Pepe" };
let usuario2 = usuario1; // Copia la REFERENCIA (puntero)

usuario2.nombre = "Juan";

console.log(usuario1.nombre); // "Juan" (¡Modificado!)
console.log(usuario2.nombre); // "Juan"`} 
                   title="Referencia Compartida (Peligro)"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-xl mt-4 border border-blue-100">
                  <h4 className="font-bold text-blue-800 text-sm mb-2">¿Cómo copiar objetos de verdad? (Deep vs Shallow Copy)</h4>
                  <p className="text-xs text-blue-700 mb-2">
                    Para duplicar un objeto sin mantener la referencia, usamos <strong>Shallow Copy</strong> (Spread Operator) o <strong>Deep Copy</strong> (structuredClone).
                  </p>
                  <pre className="bg-white p-2 rounded border border-blue-200 text-xs font-mono text-gray-600">
{`const original = { a: 1, b: { c: 2 } };

// Shallow Copy (Solo primer nivel)
const copiaSuperficial = { ...original }; 

// Deep Copy (Copia total recursiva - Moderno)
const copiaProfunda = structuredClone(original);`}
                  </pre>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-center mb-4">Simulador de Variables</h3>
                <VariablePlayground />
              </div>
            </section>
          </div>
        )}

        {/* =================================================================================
            SECCIÓN 2: OPERADORES
           ================================================================================= */}
        {activeTab === 'operators' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <section className="bg-white rounded-3xl shadow-card p-8 md:p-12 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-ilerna-dark mb-6 border-l-4 border-ilerna-cyan pl-4">
                Operadores y Coerción de Tipos
              </h2>
              
              {/* Comparación Detallada */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-ilerna-purple mb-4 flex items-center gap-2">
                  <ArrowRight size={20}/> Igualdad Estricta (===) vs Débil (==)
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  JavaScript intenta "ayudar" convirtiendo tipos automáticamente (Coerción). Esto puede causar errores graves.
                  Siempre usa <strong>Igualdad Estricta (===)</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                     <h4 className="text-red-700 font-bold mb-2 text-sm flex items-center gap-2"><AlertTriangle size={16}/> Peligro: Doble Igual (==)</h4>
                     <p className="text-xs text-red-600 mb-3">Realiza conversión de tipos antes de comparar.</p>
                     <ul className="text-xs font-mono text-gray-700 space-y-1">
                       <li>"5" == 5      // ✅ true (String pasa a Number)</li>
                       <li>0 == false    // ✅ true (0 es falsy)</li>
                       <li>"" == false   // ✅ true (String vacío es falsy)</li>
                       <li>null == undefined // ✅ true (Excepción especial)</li>
                     </ul>
                   </div>
                   <div className="bg-green-50 p-5 rounded-xl border border-green-100">
                     <h4 className="text-green-700 font-bold mb-2 text-sm flex items-center gap-2"><Check size={16}/> Correcto: Triple Igual (===)</h4>
                     <p className="text-xs text-green-600 mb-3">Compara VALOR y TIPO sin conversión.</p>
                     <ul className="text-xs font-mono text-gray-700 space-y-1">
                       <li>"5" === 5     // ❌ false (String !== Number)</li>
                       <li>0 === false   // ❌ false (Number !== Boolean)</li>
                       <li>"" === false  // ❌ false</li>
                       <li>null === undefined // ❌ false</li>
                     </ul>
                   </div>
                </div>
              </div>

              {/* Lógicos y Cortocircuito */}
              <div>
                <h3 className="text-xl font-bold text-ilerna-purple mb-4 flex items-center gap-2">
                  <GitMerge size={20}/> Operadores Lógicos y Short-Circuit
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Los operadores lógicos no siempre devuelven true/false, devuelven el valor del operando que resolvió la condición.
                </p>
                <CodeBlock 
                  code={`// OR (||) -> Busca el primer "truthy"
let nombre = inputUsuario || "Usuario Anónimo"; 
// Si inputUsuario es "", null o undefined, usa el default.

// AND (&&) -> Se detiene en el primer "falsy" o devuelve el último
let acceso = estaLogueado && tienePermisos && "Bienvenido";
// Si alguno es false, devuelve false. Si todos true, devuelve "Bienvenido".

// Nullish Coalescing (??) -> Solo actúa si es null o undefined (respeta el 0 o false)
let puntos = puntajeUsuario ?? 10; 
// Si puntajeUsuario es 0, respeta el 0 (|| lo cambiaría a 10).`}
                  title="Lógica Avanzada"
                />
              </div>
            </section>
          </div>
        )}

        {/* =================================================================================
            SECCIÓN 3: BUCLES Y LÓGICA
           ================================================================================= */}
        {activeTab === 'loops' && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <section className="bg-white rounded-3xl shadow-card p-8 md:p-12 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-ilerna-dark mb-6 border-l-4 border-ilerna-cyan pl-4">
                Estructuras de Control
              </h2>
              
              {/* Condicionales Profundos */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-ilerna-dark mb-4">1. Lógica Condicional</h3>
                <p className="text-gray-600 mb-6">Permiten ejecutar bloques de código solo si se cumplen ciertas condiciones.</p>

                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h4 className="font-bold text-ilerna-cyan mb-2 text-lg">If / Else If / Else</h4>
                      <p className="text-sm text-gray-600 mb-2 text-justify">
                        Es la estructura fundamental. Evalúa condiciones booleanas secuencialmente. 
                        En cuanto una condición es <code>true</code>, se ejecuta su bloque y se salta el resto.
                      </p>
                      <CodeBlock 
                        code={`const nota = 7;

if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 5) {
  console.log("Aprobado"); // Se ejecuta este
} else {
  console.log("Suspenso");
}`} 
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-ilerna-purple mb-2 text-lg">Switch (Casos Discretos)</h4>
                      <p className="text-sm text-gray-600 mb-2 text-justify">
                        Ideal cuando comparamos una misma variable contra múltiples valores específicos (igualdad estricta <code>===</code>). 
                        ¡No olvides el <code>break</code>!
                      </p>
                      <CodeBlock 
                        code={`const rol = "admin";

switch (rol) {
  case "admin":
    darPermisosTotales();
    break; // Si olvidas el break, sigue ejecutando abajo
  case "editor":
    darPermisosEdicion();
    break;
  default:
    darPermisosLectura();
}`} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bucles */}
              <div>
                <h3 className="text-2xl font-bold text-ilerna-dark mb-4 flex items-center gap-2">
                  <Repeat size={24}/> 2. Bucles e Iteraciones
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#F9FAFB] p-5 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-ilerna-purple mb-2">Bucle For Clásico</h4>
                    <p className="text-xs text-gray-500 mb-2">Control total sobre el índice. Útil si necesitas saltar pasos o ir hacia atrás.</p>
                    <CodeBlock 
                      code={`for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Salta el 2
  console.log(i);
}`}
                    />
                  </div>

                  <div className="bg-[#E8F7FA] p-5 rounded-xl border border-ilerna-cyan/30">
                    <h4 className="font-bold text-ilerna-cyan mb-2">Iteradores Modernos</h4>
                    <p className="text-xs text-gray-500 mb-2">
                      Más declarativos y limpios. <code>map</code> transforma, <code>filter</code> selecciona.
                    </p>
                    <CodeBlock 
                      code={`const nums = [1, 2, 3, 4];

// Filter: Solo pares
const pares = nums.filter(n => n % 2 === 0);

// Map: Multiplica x2
const dobles = pares.map(n => n * 2); 
// Resultado: [4, 8]`}
                    />
                  </div>
                </div>
              </div>

             </section>
           </div>
        )}


        {/* =================================================================================
            SECCIÓN 4: FUNCIONES
           ================================================================================= */}
        {activeTab === 'functions' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-white rounded-3xl shadow-card p-8 md:p-12 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-ilerna-dark mb-6 border-l-4 border-ilerna-purple pl-4">
                Funciones en JavaScript
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Las funciones son bloques de código reutilizables. En JS moderno, la sintaxis predominante es la <strong>Arrow Function</strong>.
              </p>

              {/* Tipos de Funciones */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
                 <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                   <h3 className="font-bold text-sm text-ilerna-dark mb-2">1. Declaración (Tradicional)</h3>
                   <p className="text-xs text-gray-500 mb-2">Tiene <i>hoisting</i> (se puede llamar antes de declarar) y su propio contexto <code>this</code>.</p>
                   <code className="block bg-[#2d2d2d] text-white p-2 rounded text-xs font-mono">
                     function sumar(a, b) {'{'} return a+b {'}'}
                   </code>
                 </div>
                 <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 relative overflow-hidden">
                   <div className="absolute top-0 right-0 bg-ilerna-purple text-white text-[10px] px-2 py-0.5 rounded-bl">MODERNA</div>
                   <h3 className="font-bold text-sm text-purple-900 mb-2 flex items-center gap-1"><Sparkles size={14}/> 2. Arrow Function (ES6)</h3>
                   <p className="text-xs text-purple-800 mb-2">Sintaxis concisa. Se ha convertido en el <strong>estándar</strong> para callbacks y código moderno.</p>
                   <code className="block bg-[#2d2d2d] text-white p-2 rounded text-xs font-mono">
                     const sumar = (a, b) ={'>'} a+b
                   </code>
                 </div>
                 <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                   <h3 className="font-bold text-sm text-ilerna-dark mb-2">3. Expresión de Función</h3>
                   <p className="text-xs text-gray-500 mb-2">Función anónima asignada a una variable. No tiene hoisting.</p>
                   <code className="block bg-[#2d2d2d] text-white p-2 rounded text-xs font-mono">
                     const sumar = function(a, b) {'{'}...{'}'}
                   </code>
                 </div>
              </div>

              {/* Detalle Arrow Functions */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-ilerna-dark mb-4">Profundizando en Arrow Functions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Sintaxis y Retorno Implícito</h4>
                    <p className="text-sm text-gray-600 mb-3 text-justify">
                      Su principal ventaja es la limpieza visual. Si la función tiene una sola línea de código, podemos omitir las llaves <code>{}</code> y la palabra <code>return</code>. 
                    </p>
                    <CodeBlock 
                      code={`// Declaración clásica de función
const miFuncion = () => { 
  // lógica 
};

// Return implícito (Ideal para una línea)
const cuadrado = x => x * x;`} 
                    />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-700 mb-2">Callbacks y Uso Común</h4>
                     <p className="text-sm text-gray-600 mb-3 text-justify">
                       Son omnipresentes en métodos de arrays (map, filter) y event listeners debido a que no vinculan su propio <code>this</code>.
                     </p>
                     <CodeBlock 
                      code={`// Callback en Event Listener
boton.addEventListener('click', () => {
  console.log("Click detectado");
});

// Callback en Array
numeros.map(n => n * 2);`} 
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mt-8 mb-2">Laboratorio de Funciones</h3>
              <p className="text-center text-gray-500 mb-4">Experimenta con diferentes sintaxis y parámetros en tiempo real.</p>
              
              <FunctionPlayground />
            </section>
          </div>
        )}

        {/* =================================================================================
            SECCIÓN 5: DOM Y EVENTOS
           ================================================================================= */}
        {activeTab === 'dom' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-white rounded-3xl shadow-card p-8 md:p-12 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-ilerna-dark mb-6 border-l-4 border-ilerna-cyan pl-4">
                El Modelo de Objetos del Documento (DOM)
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                El <strong>DOM</strong> es la interfaz que permite a JavaScript acceder y manipular el contenido HTML. 
                Cada etiqueta es un "nodo" en un árbol jerárquico.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#E8F7FA] p-6 rounded-2xl border border-ilerna-cyan/20">
                  <h4 className="font-bold text-ilerna-cyan text-xl mb-3 flex items-center gap-2">
                    <Layers size={20}/> Estructura de Árbol
                  </h4>
                  <p className="text-gray-600 text-sm">
                    El <code>document</code> es la raíz. Desde allí accedemos a <code>body</code>, <code>div</code>, etc. usando métodos de selección.
                  </p>
                </div>
                <div className="bg-[#F0EDF5] p-6 rounded-2xl border border-ilerna-purple/20">
                  <h4 className="font-bold text-ilerna-purple text-xl mb-3 flex items-center gap-2">
                    <MousePointer2 size={20}/> Interactividad
                  </h4>
                  <p className="text-gray-600 text-sm">
                    JavaScript escucha <strong>eventos</strong> (clics, teclas, scroll) para modificar estilos, clases o contenido del DOM dinámicamente.
                  </p>
                </div>
              </div>
              
              <h3 className="font-bold text-lg text-ilerna-dark mt-8 mb-4">Ejemplos Comunes de Manipulación</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-ilerna-cyan p-1.5 rounded-lg text-white"><MousePointer2 size={16}/></div>
                    <h4 className="font-bold text-ilerna-dark text-sm">1. Selección de Elementos</h4>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">El método moderno y versátil para seleccionar por clase CSS.</p>
                  <CodeBlock 
                    code={`// Seleccionar todos los elementos con clase "miClase"
const elementos = document.querySelectorAll(".miClase");`}
                    title="Selección por Clase"
                  />
                </div>
                
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                   <div className="flex items-center gap-2 mb-3">
                    <div className="bg-ilerna-purple p-1.5 rounded-lg text-white"><Sparkles size={16}/></div>
                    <h4 className="font-bold text-ilerna-dark text-sm">2. Modificación de Estilos</h4>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Acceso directo a las propiedades CSS inline.</p>
                   <CodeBlock 
                    code={`// Cambiar color de fondo
elemento.style.backgroundColor = "red";`}
                    title="Estilos Inline"
                  />
                </div>
              </div>

              <h3 className="font-bold text-lg text-ilerna-dark mt-8 mb-4">Manipulación Interactiva</h3>
              <DomPlayground />
            </section>

            <section className="bg-white rounded-3xl shadow-card p-8 md:p-12 mb-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-ilerna-dark mb-6 border-l-4 border-ilerna-purple pl-4">
                Flujo de Eventos (Bubbling vs Capturing)
              </h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg flex gap-3">
                 <Info className="text-yellow-600 shrink-0 mt-1" size={20} />
                 <div>
                   <p className="text-sm text-yellow-800">
                     Los eventos no ocurren en un solo elemento, viajan por el DOM.
                   </p>
                   <ul className="list-disc ml-4 mt-1 text-xs text-yellow-800">
                     <li><strong>Capturing (Fase de Captura):</strong> El evento baja desde la raíz (window/document) hasta el objetivo.</li>
                     <li><strong>Target (Objetivo):</strong> El evento llega al elemento donde ocurrió.</li>
                     <li><strong>Bubbling (Fase de Burbujeo):</strong> El evento sube desde el objetivo de vuelta a la raíz. (Comportamiento por defecto).</li>
                   </ul>
                 </div>
              </div>

              <EventPlayground />
            </section>
          </div>
        )}

        {/* =================================================================================
            SECCIÓN 6: QUIZ
           ================================================================================= */}
        {activeTab === 'quiz' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Quiz />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;