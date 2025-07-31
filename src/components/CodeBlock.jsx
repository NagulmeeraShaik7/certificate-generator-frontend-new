import React, { useState } from 'react';
import './CodeBlock.css';

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }; 

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-title">
          🎨 Canvas Design Code
        </span>
        <button
          onClick={handleCopy}
          className={`code-block-button ${copied ? 'copied' : ''}`}
          type="button"
        >
          {copied ? '✅ Copied!' : '📋 Copy Code'}
        </button>
      </div>
      <pre style={{ margin: 0 }}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;