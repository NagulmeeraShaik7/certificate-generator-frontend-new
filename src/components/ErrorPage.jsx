import React from 'react';
import './ErrorPage.css';

const ErrorPage = ({ error, onRetry }) => {
  return (
    <div className="error-page-container">
      {/* Error Icon */}
      <div className="error-icon-wrapper">
        {/* Outer circle */}
        <div className="error-outer-circle" />
        
        {/* Inner circle */}
        <div className="error-inner-circle">
          <span className="error-icon">⚠️</span>
        </div>
      </div> 
      
      {/* Error Title */}
      <h2 className="error-title">
        Oops! Something went wrong
      </h2>
      
      {/* Error Message */}
      <div className="error-message">
        {error || 'An unexpected error occurred while generating your certificates.'}
      </div>
      
      {/* Action Buttons */}
      <div className="error-actions">
        {onRetry && (
          <button
            onClick={onRetry}
            className="error-button error-button-primary"
            type="button"
          >
            🔄 Try Again
          </button>
        )}
        
        <button
          onClick={() => window.location.reload()}
          className="error-button error-button-secondary"
          type="button"
        >
          🔄 Refresh Page
        </button>
      </div>
      
      {/* Helpful Tips */}
      <div className="error-tips">
        <div className="error-tips-title">
          💡 Troubleshooting Tips:
        </div>
        <ul className="error-tips-list">
          <li>Check your internet connection</li>
          <li>Make sure the backend server is running</li>
          <li>Try a different category name</li>
          <li>Clear your browser cache</li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorPage; 