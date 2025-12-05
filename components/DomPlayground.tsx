import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

export const DomPlayground: React.FC = () => {
  const [elements, setElements] = useState([
    { id: 1, text: 'Elemento 1', color: 'bg-white' },
    { id: 2, text: 'Elemento 2', color: 'bg-white' },
  ]);

  const [inputText, setInputText] = useState('');

  const addElement = () => {
    const newId = elements.length > 0 ? Math.max(...elements.map(e => e.id)) + 1 : 1;
    setElements([...elements, { id: newId, text: inputText || `Nuevo Elemento ${newId}`, color: 'bg-white' }]);
    setInputText('');
  };

  const removeLast = () => {
    setElements(elements.slice(0, -1));
  };

  const changeColor = (id: number) => {
    setElements(elements.map(el => {
      if (el.id === id) {
        const colors = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100', 'bg-white'];
        const currentIdx = colors.indexOf(el.color);
        const nextColor = colors[(currentIdx + 1) % colors.length];
        return { ...el, color: nextColor };
      }
      return el;
    }));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-xl border border-gray-300 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Controls */}
        <div className="space-y-4">
          <h4 className="font-bold text-ilerna-dark text-lg border-b pb-2">Consola de Control</h4>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <label className="block text-sm font-bold text-gray-700 mb-2">Crear Nodo (CreateElement + AppendChild)</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Texto del nodo..."
                className="flex-1 px-3 py-2 border rounded text-sm focus:outline-none focus:border-ilerna-cyan"
              />
              <button 
                onClick={addElement}
                className="bg-ilerna-cyan text-white px-4 py-2 rounded text-sm font-bold hover:bg-cyan-600 transition-colors flex items-center gap-2"
              >
                <Play size={14} /> Añadir
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
             <label className="block text-sm font-bold text-gray-700 mb-2">Eliminar Nodo (RemoveChild)</label>
             <button 
                onClick={removeLast}
                className="w-full bg-red-500 text-white px-4 py-2 rounded text-sm font-bold hover:bg-red-600 transition-colors"
                disabled={elements.length === 0}
              >
                Eliminar Último Hijo
              </button>
          </div>

           <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-xs text-blue-800">
             <p><strong>Tip:</strong> Haz clic en los elementos de la derecha para cambiar su propiedad <code>style.backgroundColor</code>.</p>
           </div>
        </div>

        {/* DOM Visualization */}
        <div>
          <h4 className="font-bold text-ilerna-dark text-lg border-b pb-2 mb-4">Vista del DOM (Resultado)</h4>
          <div className="bg-white min-h-[300px] p-4 rounded-xl border-2 border-dashed border-gray-300 shadow-inner relative">
             <div className="absolute top-2 left-2 text-xs text-gray-400 font-mono">&lt;div id="container"&gt;</div>
             
             <div className="flex flex-col gap-3 mt-6 mb-6 px-4">
                {elements.length === 0 && <span className="text-gray-400 text-center italic text-sm">El contenedor está vacío (No child nodes)</span>}
                
                {elements.map((el) => (
                  <div 
                    key={el.id}
                    onClick={() => changeColor(el.id)}
                    className={`${el.color} border border-gray-300 p-3 rounded shadow-sm cursor-pointer hover:scale-[1.02] transition-transform select-none flex justify-between items-center group`}
                  >
                    <span className="font-mono text-sm text-gray-700">Node #{el.id}: "{el.text}"</span>
                    <span className="text-xs text-gray-400 group-hover:text-ilerna-cyan">Click to style</span>
                  </div>
                ))}
             </div>

             <div className="absolute bottom-2 left-2 text-xs text-gray-400 font-mono">&lt;/div&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
};