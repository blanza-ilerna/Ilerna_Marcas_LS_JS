import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript', title }) => {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border-l-4 border-ilerna-cyan shadow-md bg-[#2d2d2d]">
      {title && (
        <div className="bg-[#1e1e1e] px-4 py-2 text-xs font-mono text-gray-400 border-b border-gray-700">
          {title}
        </div>
      )}
      <div className="p-5 overflow-x-auto">
        <pre className="m-0 font-mono text-sm text-gray-200">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};