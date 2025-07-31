import React, { useState } from 'react';
import CertificatePreview from './components/CertificatePreview';
import CodeBlock from './components/CodeBlock';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorPage from './components/ErrorPage';
import './App.css';

const App = () => {
  const [categoryName, setCategoryName] = useState('');
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!categoryName.trim()) {
      setError('Please enter a category name');
      return;
    }
    setLoading(true);
    setError(null); 
    try {
      const response = await fetch('http://localhost:3300/api/certificates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categoryName }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch certificates');
      }
      const data = await response.json();
      setCertificates(data);
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    handleSubmit({ preventDefault: () => {} });
  };

  return (
    <div className="container">
      <h1>🎓 Certificate Generator</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name (e.g., Summer Code Camp, Web Development)"
          className="input"
          disabled={loading}
        />
        <button type="submit" className="button" disabled={loading}>
          {loading ? '🎨 Generating Certificates...' : '✨ Generate Certificates'}
        </button>
      </form>
      
      {/* Error Display */}
      {error && !loading && (
        <ErrorPage 
          error={error} 
          onRetry={handleRetry}
        />
      )}
      
      {/* Loading State */}
      {loading && (
        <LoadingSpinner message="🎨 Creating beautiful certificates..." />
      )}
      
      {/* Certificates Display */}
      {certificates.length > 0 && !loading && !error && (
        <div className="certificates">
          {certificates.map((cert, index) => (
            <div key={cert.id} className="certificate-container" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 style={{ 
                marginBottom: '1rem', 
                color: '#333', 
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                {cert.title}
              </h3>
              <CertificatePreview certificate={cert} />
              <CodeBlock code={cert.design} />
            </div>
          ))}
        </div>
      )}
      
      {/* Empty State */}
      {certificates.length === 0 && !loading && !error && (
        <div style={{ 
          textAlign: 'center', 
          color: 'rgba(255, 255, 255, 0.8)', 
          marginTop: '3rem',
          fontSize: '1.1rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>🎨 Ready to create beautiful certificates?</div>
          <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            Enter a category name above to get started
          </div>
        </div>
      )}
    </div>
  );
};

export default App;