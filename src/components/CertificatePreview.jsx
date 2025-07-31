import React, { useEffect, useRef, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import './CertificatePreview.css';

const CertificatePreview = ({ certificate }) => {
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsImageLoaded(false); 
    setError(null);
    setIsLoading(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = certificate.background;

    const drawCanvas = (imageLoaded) => {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (imageLoaded) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        } else {
          ctx.fillStyle = '#F0F0F0';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Execute the design code with proper variable scope
        // eslint-disable-next-line no-unused-vars
        const categoryName = certificate.categoryName;
        // eslint-disable-next-line no-unused-vars
        const description = certificate.description;
        
        // Create a function that will execute the design code with all variables in scope
        const executeDesign = () => {
          // eslint-disable-next-line no-eval
          eval(certificate.design);
        };
        
        executeDesign();
        setIsLoading(false);

      } catch (err) {
        setError(`Failed to render certificate: ${err.message}`);
        setIsLoading(false);
      }
    };

    img.onload = () => {
      setIsImageLoaded(true);
      drawCanvas(true);
    };

    img.onerror = () => {
      setError('Failed to load background image');
      setIsImageLoaded(false);
      drawCanvas(false);
    };

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [certificate]);

  return (
    <div className="certificate-preview">
      {isLoading && (
        <div className="certificate-loading">
          <LoadingSpinner message="🎨 Rendering certificate..." />
        </div>
      )}
      
      {error ? (
        <div className="certificate-error">
          ⚠️ {error}
        </div>
      ) : (
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={600}
          style={{
            display: isLoading ? 'none' : 'block',
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}
        />
      )}
    </div>
  );
};

export default CertificatePreview;