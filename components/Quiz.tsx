import React, { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCw, Trophy, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es la diferencia principal entre 'undefined' y 'null'?",
    options: [
      "Son exactamente lo mismo.",
      "Undefined es un error, Null es un valor.",
      "Undefined es 'no inicializado', Null es 'vacío intencional'.",
      "Null es un tipo primitivo, Undefined es un objeto."
    ],
    correctAnswer: 2,
    explanation: "Undefined es el valor por defecto de variables no inicializadas. Null se usa para indicar explícitamente la ausencia de valor."
  },
  {
    id: 2,
    question: "¿Qué operador deberías usar siempre para comparar valores en JS Moderno?",
    options: [
      "El operador de asignación (=)",
      "El doble igual (==)",
      "El triple igual (===)",
      "Depende del tipo de dato"
    ],
    correctAnswer: 2,
    explanation: "El triple igual (===) verifica tanto el valor como el tipo de dato, evitando conversiones automáticas peligrosas (coerción)."
  },
  {
    id: 3,
    question: "¿Cuál fue la revolución de ES6 (2015)?",
    options: [
      "Introdujo el DOM.",
      "Introdujo let, const y Arrow Functions.",
      "Eliminó el uso de funciones.",
      "Hizo que JavaScript fuera un lenguaje compilado."
    ],
    correctAnswer: 1,
    explanation: "ES6 fue la mayor actualización histórica, introduciendo sintaxis moderna como const/let para variables y funciones flecha."
  },
  {
    id: 4,
    question: "¿Qué método del DOM permite seleccionar elementos usando sintaxis CSS?",
    options: [
      "document.getElementByCSS()",
      "document.select()",
      "document.querySelectorAll()",
      "document.target()"
    ],
    correctAnswer: 2,
    explanation: "querySelectorAll (y querySelector) permite usar selectores como '.clase', '#id' o 'div > p' de forma flexible."
  },
  {
    id: 5,
    question: "Si copias un OBJETO en una nueva variable (let b = a), ¿qué sucede?",
    options: [
      "Se crea una copia idéntica e independiente.",
      "Se copia la referencia (apuntan al mismo sitio en memoria).",
      "El objeto original se borra.",
      "Da un error de sintaxis."
    ],
    correctAnswer: 1,
    explanation: "Los objetos son tipos complejos y se pasan por referencia. Modificar 'b' también modificará 'a'. Para copiar valores se necesita una copia profunda."
  },
  {
    id: 6,
    question: "¿Qué devuelve la expresión `typeof 42`?",
    options: [
      "'integer'",
      "'float'",
      "'number'",
      "'digit'"
    ],
    correctAnswer: 2,
    explanation: "En JavaScript, tanto los enteros como los decimales son del tipo primitivo 'number'."
  },
  {
    id: 7,
    question: "¿Cómo se escribe una Arrow Function que suma dos números con retorno implícito?",
    options: [
      "function (a, b) { return a + b }",
      "(a, b) => a + b",
      "(a, b) => { return a + b }",
      "arrow(a, b) return a + b"
    ],
    correctAnswer: 1,
    explanation: "Si la función tiene una sola línea, se pueden omitir las llaves y la palabra 'return' para un código más limpio."
  },
  {
    id: 8,
    question: "Si declaras `const usuario = { nombre: 'Ana' }`, ¿puedes hacer `usuario.nombre = 'Eva'`?",
    options: [
      "No, porque es const.",
      "Sí, porque const protege la variable (referencia), no el contenido del objeto.",
      "Sí, pero solo si usamos 'let' primero.",
      "Da error de ejecución."
    ],
    correctAnswer: 1,
    explanation: "Const evita la reasignación de la variable (usuario = ...), pero los objetos siguen siendo mutables por dentro."
  },
  {
    id: 9,
    question: "¿Qué hacen los Template Literals (comillas invertidas ` `)?",
    options: [
      "Permiten escribir HTML solamente.",
      "Permiten interpolar variables con ${} y saltos de línea.",
      "Son para comentarios multilínea.",
      "No existen en JavaScript."
    ],
    correctAnswer: 1,
    explanation: "Introducidos en ES6, facilitan la creación de cadenas complejas inyectando variables directamente."
  },
  {
    id: 10,
    question: "¿Qué ocurre en la fase de 'Bubbling' (Burbujeo) de un evento?",
    options: [
      "El evento desaparece.",
      "El evento baja desde el documento hasta el elemento.",
      "El evento sube desde el elemento objetivo hacia sus padres.",
      "El evento se congela."
    ],
    correctAnswer: 2,
    explanation: "Por defecto, los eventos se propagan hacia arriba (burbujean) desde el elemento clickeado hasta la raíz del documento."
  },
  {
    id: 11,
    question: "¿Qué método detiene la propagación de un evento?",
    options: [
      "e.preventDefault()",
      "e.stopBubbling()",
      "e.stopPropagation()",
      "e.pause()"
    ],
    correctAnswer: 2,
    explanation: "stopPropagation() evita que el evento siga viajando a los elementos padre (o hijos en fase de captura)."
  },
  {
    id: 12,
    question: "¿Qué resultado da `0 || 'Hola'`?",
    options: [
      "0",
      "true",
      "'Hola'",
      "undefined"
    ],
    correctAnswer: 2,
    explanation: "El operador OR (||) devuelve el primer valor 'truthy'. Como 0 es 'falsy', pasa al siguiente valor ('Hola')."
  },
  {
    id: 13,
    question: "¿Cuál es la forma correcta de insertar un script externo?",
    options: [
      "<script href='app.js'></script>",
      "<link src='app.js'>",
      "<script src='app.js'></script>",
      "<js file='app.js'></js>"
    ],
    correctAnswer: 2,
    explanation: "La etiqueta <script> usa el atributo 'src' para vincular archivos JavaScript."
  },
  {
    id: 14,
    question: "¿Para qué sirve el método `Array.map()`?",
    options: [
      "Para filtrar elementos de un array.",
      "Para buscar un elemento específico.",
      "Para transformar cada elemento del array y devolver uno nuevo.",
      "Para ordenar el array alfabéticamente."
    ],
    correctAnswer: 2,
    explanation: "Map itera sobre cada elemento, aplica una función transformadora y devuelve un nuevo array con los resultados."
  },
  {
    id: 15,
    question: "En una sentencia `switch`, ¿qué pasa si olvidas el `break`?",
    options: [
      "Da un error de sintaxis.",
      "El código se detiene automáticamente.",
      "Se siguen ejecutando los casos siguientes (fall-through).",
      "El bucle se vuelve infinito."
    ],
    correctAnswer: 2,
    explanation: "Sin break, el switch continúa ejecutando el código de los 'case' inferiores aunque no coincidan, lo cual suele ser un error."
  },
  {
    id: 16,
    question: "¿Qué valor es 'Falsy' en JavaScript?",
    options: [
      "'false' (string)",
      "[] (array vacío)",
      "0",
      "{} (objeto vacío)"
    ],
    correctAnswer: 2,
    explanation: "En JS, 0, false, null, undefined, NaN y '' son falsy. Los objetos y arrays vacíos son truthy."
  },
  {
    id: 17,
    question: "¿Qué hace `e.preventDefault()`?",
    options: [
      "Detiene el burbujeo del evento.",
      "Evita el comportamiento por defecto del navegador (ej: enviar form).",
      "Cierra la ventana del navegador.",
      "Borra el elemento del DOM."
    ],
    correctAnswer: 1,
    explanation: "Es muy común en formularios para evitar que la página se recargue al hacer submit."
  },
  {
    id: 18,
    question: "¿Cómo se cambia el color de fondo de un elemento 'el'?",
    options: [
      "el.background = 'red'",
      "el.style.backgroundColor = 'red'",
      "el.css('background-color', 'red')",
      "el.setAttribute('color', 'red')"
    ],
    correctAnswer: 1,
    explanation: "Se accede a la propiedad .style y luego a la propiedad CSS en formato camelCase."
  },
  {
    id: 19,
    question: "¿Qué es el TC39?",
    options: [
      "Un modelo de robot de Star Wars.",
      "El comité técnico que estandariza JavaScript (ECMAScript).",
      "Una librería de gráficos.",
      "El nombre original de JavaScript."
    ],
    correctAnswer: 1,
    explanation: "TC39 es el comité encargado de revisar y aprobar las nuevas características que se añaden al lenguaje anualmente."
  },
  {
    id: 20,
    question: "¿Cuál es el resultado de `console.log(1 + '1')`?",
    options: [
      "2",
      "'11'",
      "Error",
      "NaN"
    ],
    correctAnswer: 1,
    explanation: "JavaScript realiza una coerción de tipos. Al sumar un número con un string, concatena los valores, resultando en el string '11'."
  },
  {
    id: 21,
    question: "¿Qué diferencia principal tiene 'let' respecto a 'var'?",
    options: [
      "No hay diferencia, son alias.",
      "'let' tiene alcance de bloque (block scope) y 'var' de función.",
      "'let' es inmutable, 'var' no.",
      "'var' es más moderno que 'let'."
    ],
    correctAnswer: 1,
    explanation: "La gran mejora de 'let' en ES6 fue limitar el alcance de la variable al bloque {} donde se define, evitando errores de sobreescritura global."
  },
  {
    id: 22,
    question: "¿Qué método convierte un objeto JavaScript a un string JSON?",
    options: [
      "JSON.parse()",
      "JSON.toString()",
      "JSON.stringify()",
      "Object.toJSON()"
    ],
    correctAnswer: 2,
    explanation: "JSON.stringify() toma un objeto o array y lo serializa a una cadena de texto JSON para enviarlo o guardarlo."
  },
  {
    id: 23,
    question: "¿Cuál es la sintaxis correcta del Operador Ternario?",
    options: [
      "condicion ? verdadero : falso",
      "condicion : verdadero ? falso",
      "if condicion ? verdadero : falso",
      "condicion ?? verdadero :: falso"
    ],
    correctAnswer: 0,
    explanation: "El operador ternario es una forma abreviada del if/else: `condición ? valor_si_true : valor_si_false`."
  },
  {
    id: 24,
    question: "¿Qué devuelve `typeof NaN`?",
    options: [
      "'nan'",
      "'undefined'",
      "'number'",
      "'object'"
    ],
    correctAnswer: 2,
    explanation: "Aunque NaN significa 'Not a Number', técnicamente en la especificación de JavaScript es un tipo numérico especial."
  },
  {
    id: 25,
    question: "¿Cuál es la forma moderna recomendada de añadir un evento?",
    options: [
      "elemento.onclick = funcion",
      "elemento.addEventListener('click', funcion)",
      "elemento.attachEvent('onclick', funcion)",
      "<div onclick='funcion()'>"
    ],
    correctAnswer: 1,
    explanation: "addEventListener permite añadir múltiples listeners al mismo evento y da más control sobre opciones como 'capture' o 'once'."
  },
  {
    id: 26,
    question: "¿Qué método elimina el ÚLTIMO elemento de un array?",
    options: [
      "shift()",
      "remove()",
      "pop()",
      "push()"
    ],
    correctAnswer: 2,
    explanation: "pop() elimina el último elemento y lo devuelve. shift() elimina el primero. push() añade al final."
  },
  {
    id: 27,
    question: "¿Por qué es preferible usar `textContent` sobre `innerHTML` para texto?",
    options: [
      "Es más lento pero más bonito.",
      "Previene ataques XSS (Cross-Site Scripting) y es más rápido.",
      "innerHTML está obsoleto.",
      "No hay diferencia."
    ],
    correctAnswer: 1,
    explanation: "innerHTML interpreta el texto como HTML, lo que puede ser peligroso si el texto viene de un usuario malicioso. textContent lo trata como texto plano."
  },
  {
    id: 28,
    question: "¿Qué devuelve la operación `10 % 3`?",
    options: [
      "3.33",
      "3",
      "1",
      "0"
    ],
    correctAnswer: 2,
    explanation: "El operador módulo (%) devuelve el resto de la división entera. 10 dividido entre 3 es 3, con un resto de 1."
  },
  {
    id: 29,
    question: "¿Qué hace la función `setTimeout(fn, 1000)`?",
    options: [
      "Detiene el código por 1 segundo.",
      "Repite la función cada segundo.",
      "Ejecuta la función 'fn' una vez después de 1 segundo.",
      "Cancela la ejecución de 'fn'."
    ],
    correctAnswer: 2,
    explanation: "setTimeout programa una ejecución única diferida en el tiempo. Para repeticiones se usa setInterval."
  },
  {
    id: 30,
    question: "¿Qué valor devuelve `!''` (NOT string vacío)?",
    options: [
      "false",
      "true",
      "undefined",
      "error"
    ],
    correctAnswer: 1,
    explanation: "Un string vacío '' es falsy. El operador ! (NOT) invierte el valor booleano. NOT false es true."
  }
];

export const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) {
      setCurrentQuestion(nextQ);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showScore) {
    return (
      <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 text-center border-t-8 border-ilerna-cyan animate-in zoom-in duration-300">
        <div className="mb-6 flex justify-center">
          <Trophy className="text-yellow-400 w-24 h-24 drop-shadow-lg" />
        </div>
        <h2 className="text-3xl font-bold text-ilerna-dark mb-4">¡Quiz Completado!</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Has acertado <span className="font-bold text-ilerna-cyan text-2xl">{score}</span> de {questions.length} preguntas.
        </p>
        
        <div className="mb-8">
           {score === questions.length ? (
             <div className="bg-green-100 text-green-800 p-4 rounded-xl font-bold">¡Perfecto! Dominas JavaScript. 🚀</div>
           ) : score > questions.length / 2 ? (
             <div className="bg-blue-100 text-blue-800 p-4 rounded-xl font-bold">¡Buen trabajo! Sigue practicando. 👍</div>
           ) : (
             <div className="bg-orange-100 text-orange-800 p-4 rounded-xl font-bold">Repasa los temas e inténtalo de nuevo. 📚</div>
           )}
        </div>

        <button 
          onClick={restartQuiz}
          className="bg-ilerna-cyan text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-cyan-600 transition-colors flex items-center gap-2 mx-auto"
        >
          <RefreshCw size={20} /> Reiniciar Quiz
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="bg-white rounded-3xl shadow-card overflow-hidden border border-gray-100">
      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-2">
        <div 
          className="bg-ilerna-cyan h-2 transition-all duration-500 ease-out"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="p-8 md:p-12">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-bold text-ilerna-purple bg-purple-50 px-3 py-1 rounded-full">
             Puntos: {score}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-ilerna-dark mb-8 leading-tight">
          {q.question}
        </h2>

        <div className="grid gap-4 mb-8">
          {q.options.map((option, index) => {
            let btnClass = "w-full text-left p-5 rounded-xl border-2 transition-all duration-200 font-medium relative ";
            
            if (isAnswered) {
              if (index === q.correctAnswer) {
                btnClass += "bg-green-50 border-green-500 text-green-800";
              } else if (index === selectedOption) {
                btnClass += "bg-red-50 border-red-500 text-red-800";
              } else {
                btnClass += "bg-gray-50 border-gray-200 text-gray-400 opacity-50";
              }
            } else {
              btnClass += "bg-white border-gray-200 hover:border-ilerna-cyan hover:bg-cyan-50 text-gray-700 hover:shadow-md cursor-pointer";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={btnClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isAnswered && index === q.correctAnswer && <CheckCircle2 className="text-green-600" />}
                  {isAnswered && index === selectedOption && index !== q.correctAnswer && <XCircle className="text-red-600" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {isAnswered && (
          <div className="animate-in fade-in slide-in-from-bottom-2">
            <div className={`p-4 rounded-xl mb-6 border-l-4 ${selectedOption === q.correctAnswer ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
              <p className={`font-bold mb-1 ${selectedOption === q.correctAnswer ? 'text-green-800' : 'text-red-800'}`}>
                {selectedOption === q.correctAnswer ? "¡Correcto!" : "Incorrecto"}
              </p>
              <p className="text-sm text-gray-700">
                {q.explanation}
              </p>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={nextQuestion}
                className="bg-ilerna-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors flex items-center gap-2"
              >
                {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente Pregunta"} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};