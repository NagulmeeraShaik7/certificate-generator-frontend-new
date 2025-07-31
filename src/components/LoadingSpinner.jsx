import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="loading-spinner-container">
      {/* Stylish Spinner */}
      <div className="spinner-wrapper">
        {/* Outer ring */}
        <div className="spinner-outer-ring" />
        
        {/* Inner ring */}
        <div className="spinner-inner-ring" />
        
        {/* Center dot */}
        <div className="spinner-center-dot" />
      </div>
      
      {/* Loading message */}
      <div className="loading-message">
        {message}
      </div>
       
      {/* Subtitle */}
      <div className="loading-subtitle">
        Creating beautiful certificates for you...
      </div>
      
      {/* Animated dots */}
      <div className="animated-dots">
        <div className="bounce-dot" />
        <div className="bounce-dot" />
        <div className="bounce-dot" />
      </div>
    </div>
  );
};

export default LoadingSpinner; 