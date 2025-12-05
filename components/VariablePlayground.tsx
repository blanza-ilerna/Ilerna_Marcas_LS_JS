import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface Variable {
  id: number;
  name: string;
  value: string;
  type: string;
  declaration: 'const' | 'let';
}

export const VariablePlayground: React.FC = () => {
  const [variables, setVariables] = useState<Variable[]>([
    { id: 1, name: 'nombre', value: '"iLERNA"', type: 'string', declaration: 'const' },
    { id: 2, name: 'edad', value: '25', type: 'number', declaration: 'let' },
  ]);
  const [newName, setNewName] = useState('');
  const [newValue, setNewValue] = useState('');
  const [newDecl, setNewDecl] = useState<'const'|'let'>('let');

  const detectType = (val: string) => {
    if (!isNaN(Number(val)) && val.trim() !== '') return 'number';
    if (val === 'true' || val === 'false') return 'boolean';
    if (val.startsWith('"') || val.startsWith("'")) return 'string';
    if (val.startsWith('[') && val.endsWith(']')) return 'object (Array)';
    if (val.startsWith('{') && val.endsWith('}')) return 'object';
    return 'undefined';
  };

  const addVariable = () => {
    if (!newName || !newValue) return;
    setVariables([...variables, {
      id: Date.now(),
      name: newName,
      value: newValue,
      type: detectType(newValue),
      declaration: newDecl
    }]);
    setNewName('');
    setNewValue('');
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mt-6">
      <h3 className="font-bold text-lg text-ilerna-dark mb-4">Simulador de Memoria</h3>
      
      {/* Input Form */}
      <div className="flex flex-col md:flex-row gap-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
        <select 
          value={newDecl} 
          onChange={(e) => setNewDecl(e.target.value as any)}
          className="bg-white border border-gray-300 rounded px-3 py-2 text-sm font-mono text-ilerna-purple font-bold focus:outline-none focus:border-ilerna-purple"
        >
          <option value="let">let</option>
          <option value="const">const</option>
        </select>
        <input 
          type="text" 
          placeholder="nombreVar" 
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="flex-1 bg-white border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-ilerna-cyan"
        />
        <span className="flex items-center font-bold text-gray-400">=</span>
        <input 
          type="text" 
          placeholder="Valor (ej: 10, 'hola', true)" 
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="flex-1 bg-white border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-ilerna-cyan"
        />
        <button 
          onClick={addVariable}
          className="bg-ilerna-cyan text-white p-2 rounded hover:bg-cyan-600 transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Memory Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {variables.map(v => (
          <div key={v.id} className="relative bg-[#2d2d2d] rounded-xl p-4 font-mono shadow-md group border-l-4 border-ilerna-purple">
            <button 
              onClick={() => setVariables(variables.filter(x => x.id !== v.id))}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={16} />
            </button>
            <div className="text-pink-400 text-xs mb-1">{v.declaration}</div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-bold">{v.name}</span>
            </div>
            <div className="bg-[#1e1e1e] p-2 rounded text-sm text-yellow-300 break-all border border-gray-700">
              {v.value}
            </div>
            <div className="text-right mt-2 text-xs text-gray-400">
              typeof: <span className="text-green-400">{v.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};