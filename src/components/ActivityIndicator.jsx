import React from 'react';

const ActivityIndicator = () => {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const spinnerStyle = {
    border: '8px solid rgba(0, 0, 0, 0.1)', 
    borderLeft: '8px solid #1b8059', 
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
  };

  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={overlayStyle}>
      <div style={spinnerStyle}>
        <style>{keyframesStyle}</style>
      </div>
    </div>
  );
};

export default ActivityIndicator;
