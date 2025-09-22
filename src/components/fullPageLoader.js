import React from 'react';
import "../pages/Auth/loginForm.css"

const FullPageLoader = () => {
  return (
    <div className="full-page-loader">
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <p>Authenticating...</p>
      </div>
    </div>
  );
};

export default FullPageLoader;