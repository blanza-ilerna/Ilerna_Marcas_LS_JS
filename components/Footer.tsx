import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center text-ilerna-gray mt-12 p-8 border-t-[3px] border-ilerna-cyan bg-white rounded-t-2xl relative">
      <div className="mb-6 mt-4">
        <h3 className="text-3xl font-bold text-ilerna-cyan mb-2">iLERNA</h3>
        <p className="text-lg font-bold text-ilerna-dark mb-2">Curso de Desarrollo de Aplicaciones Web</p>
        <a 
          href="https://www.ilerna.es/" 
          className="text-ilerna-cyan font-bold text-base hover:underline" 
          target="_blank" 
          rel="noreferrer"
        >
          www.ilerna.es
        </a>
      </div>
      <p className="text-sm mb-8">Centro oficial de FP online y presencial.</p>

      {/* Animated Penguin at the bottom */}
      <div className="mt-8 text-5xl animate-bounce cursor-pointer hover:scale-110 transition-transform inline-block">
        🐧
      </div>
    </footer>
  );
};