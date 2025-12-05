import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, ArrowUp, Trash2 } from 'lucide-react';

interface LogEntry {
  id: number;
  phase: string;
  target: string;
  currentTarget: string;
  color: string;
}

export const EventPlayground: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [useCapture, setUseCapture] = useState(false);
  const [stopPropagation, setStopPropagation] = useState(false);
  
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (phase: string, target: string, currentTarget: string, color: string) => {
    setLogs(prev => [...prev, { id: Date.now() + Math.random(), phase, target, currentTarget, color }]);
  };

  const handleEvent = (e: React.MouseEvent, layerName: string, color: string, isCapturePhase: boolean) => {
    // In React, onClickCapture handles capture phase, onClick handles bubble phase.
    // We only want to log if the mode matches the current handler type to simulate real DOM behavior cleanly
    
    // Note: React Synthetic Events wrap native events. 
    // e.stopPropagation() works as expected.
    
    if (stopPropagation) {
      e.stopPropagation();
    }

    addLog(
      isCapturePhase ? "Capturing (Bajada)" : "Bubbling (Subida)", 
      (e.target as HTMLElement).getAttribute('data-name') || 'Unknown', 
      layerName, 
      color
    );
  };

  const clearLogs = () => setLogs([]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-6">
      {/* Visualizer Area */}
      <div className="flex-1">
        <div className="bg-gray-100 p-6 rounded-xl border border-gray-300 relative min-h-[400px] flex items-center justify-center">
          
          {/* Legend/Controls */}
          <div className="absolute top-4 left-4 bg-white/90 p-4 rounded-lg shadow-sm text-sm z-10">
            <h4 className="font-bold text-ilerna-dark mb-2">Configuración</h4>
            <label className="flex items-center gap-2 mb-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={useCapture} 
                onChange={(e) => {
                    setUseCapture(e.target.checked);
                    clearLogs();
                }}
                className="w-4 h-4 text-ilerna-cyan rounded focus:ring-ilerna-cyan"
              />
              <span>Monitorizar Fase Captura (Capture)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={stopPropagation} 
                onChange={(e) => setStopPropagation(e.target.checked)}
                className="w-4 h-4 text-ilerna-purple rounded focus:ring-ilerna-purple"
              />
              <span>Stop Propagation (e.stopPropagation)</span>
            </label>
            <p className="mt-2 text-xs text-gray-500 italic">Haz clic en los cuadros para ver el flujo.</p>
          </div>

          {/* Nested Boxes */}
          <div 
            className="w-full max-w-md aspect-square bg-red-100 border-4 border-red-400 rounded-xl p-8 cursor-pointer flex flex-col justify-end transition-all hover:bg-red-200 shadow-sm relative group"
            data-name="Grandparent (Rojo)"
            onClickCapture={(e) => useCapture && handleEvent(e, "Grandparent", "text-red-600", true)}
            onClick={(e) => !useCapture && handleEvent(e, "Grandparent", "text-red-600", false)}
          >
            <span className="absolute top-2 right-2 font-bold text-red-500 opacity-50 group-hover:opacity-100">Grandparent</span>
            
            <div 
              className="w-full h-4/5 bg-blue-100 border-4 border-blue-400 rounded-xl p-8 cursor-pointer flex flex-col justify-end transition-all hover:bg-blue-200 shadow-sm relative group"
              data-name="Parent (Azul)"
              onClickCapture={(e) => useCapture && handleEvent(e, "Parent", "text-blue-600", true)}
              onClick={(e) => !useCapture && handleEvent(e, "Parent", "text-blue-600", false)}
            >
              <span className="absolute top-2 right-2 font-bold text-blue-500 opacity-50 group-hover:opacity-100">Parent</span>

              <div 
                className="w-full h-3/4 bg-green-100 border-4 border-green-400 rounded-xl p-8 cursor-pointer flex items-center justify-center transition-all hover:bg-green-200 shadow-sm relative group"
                data-name="Child (Verde)"
                onClickCapture={(e) => useCapture && handleEvent(e, "Child", "text-green-600", true)}
                onClick={(e) => !useCapture && handleEvent(e, "Child", "text-green-600", false)}
              >
                 <span className="font-bold text-green-700 pointer-events-none">Click Me (Child)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logs Area */}
      <div className="w-full lg:w-1/3 bg-[#2d2d2d] rounded-xl overflow-hidden flex flex-col shadow-xl">
        <div className="bg-[#1e1e1e] p-3 border-b border-gray-700 flex justify-between items-center">
          <span className="text-gray-200 font-mono text-sm font-bold">Event Log</span>
          <button onClick={clearLogs} className="text-gray-400 hover:text-white transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
        <div 
          ref={logContainerRef}
          className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-2 h-[400px]"
        >
          {logs.length === 0 && (
            <p className="text-gray-600 text-center mt-10">Esperando eventos...</p>
          )}
          {logs.map((log, index) => (
            <div key={log.id} className="bg-[#383838] p-2 rounded border-l-2 border-ilerna-cyan animate-in fade-in slide-in-from-left-4 duration-300">
               <div className="flex justify-between text-gray-400 mb-1">
                 <span className="flex items-center gap-1">
                   {index + 1}. 
                   {log.phase.includes('Capturing') ? <ArrowDown size={10} className="text-yellow-400" /> : <ArrowUp size={10} className="text-ilerna-cyan" />}
                   {log.phase}
                 </span>
               </div>
               <div className="text-gray-300">
                 Target: <span className="text-white">{log.target}</span>
               </div>
               <div className={`${log.color} font-bold`}>
                 Listener en: {log.currentTarget}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};