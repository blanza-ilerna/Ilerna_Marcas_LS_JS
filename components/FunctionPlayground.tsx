import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const FunctionPlayground: React.FC = () => {
  const [numA, setNumA] = useState(5);
  const [numB, setNumB] = useState(3);
  const [operation, setOperation] = useState('add');
  const [funcType, setFuncType] = useState('arrow');

  const calculate = () => {
    switch(operation) {
      case 'add': return numA + numB;
      case 'sub': return numA - numB;
      case 'mul': return numA * numB;
      default: return 0;
    }
  };

  const getCodeSnippet = () => {
    const opSymbol = operation === 'add' ? '+' : operation === 'sub' ? '-' : '*';
    
    if (funcType === 'declaration') {
      return `function calcular(a, b) {
  return a ${opSymbol} b;
}`;
    } else if (funcType === 'expression') {
      return `const calcular = function(a, b) {
  return a ${opSymbol} b;
};`;
    } else {
      return `const calcular = (a, b) => a ${opSymbol} b;`;
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 mt-6">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        
        {/* Controls */}
        <div className="flex-1 space-y-6 w-full">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100">
            <label className="block text-sm font-bold text-indigo-900 mb-3">1. Tipo de Función</label>
            <div className="flex gap-2">
              {['arrow', 'declaration', 'expression'].map(t => (
                <button
                  key={t}
                  onClick={() => setFuncType(t)}
                  className={`px-3 py-1.5 rounded text-xs font-bold capitalize transition-colors
                    ${funcType === t ? 'bg-ilerna-purple text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100">
            <label className="block text-sm font-bold text-indigo-900 mb-3">2. Parámetros (Inputs)</label>
            <div className="flex items-center gap-4">
              <input 
                type="number" 
                value={numA}
                onChange={(e) => setNumA(Number(e.target.value))}
                className="w-20 p-2 border border-gray-300 rounded text-center font-mono font-bold"
              />
              <select 
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                className="font-bold text-xl bg-transparent text-gray-500 focus:outline-none cursor-pointer"
              >
                <option value="add">+</option>
                <option value="sub">-</option>
                <option value="mul">×</option>
              </select>
              <input 
                type="number" 
                value={numB}
                onChange={(e) => setNumB(Number(e.target.value))}
                className="w-20 p-2 border border-gray-300 rounded text-center font-mono font-bold"
              />
            </div>
          </div>
        </div>

        {/* Visualizer */}
        <div className="flex-1 w-full">
           <div className="bg-[#2d2d2d] rounded-xl overflow-hidden shadow-xl">
             <div className="bg-[#1e1e1e] px-4 py-2 border-b border-gray-700 flex justify-between items-center">
               <span className="text-xs text-gray-400 font-mono">script.js</span>
               <div className="flex gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
               </div>
             </div>
             
             <div className="p-6">
                <pre className="font-mono text-sm text-gray-300 mb-6">
                  {getCodeSnippet()}
                </pre>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center gap-2 text-gray-400 font-mono text-xs mb-2">
                    <span>// Ejecución</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-purple-400">calcular({numA}, {numB})</span>
                    <ArrowRight size={16} className="text-gray-500"/>
                    <span className="font-mono text-green-400 text-xl font-bold">{calculate()}</span>
                  </div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};