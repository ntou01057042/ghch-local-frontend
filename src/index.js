import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Ensure this is the correct path to your App.js
import reportWebVitals from './reportWebVitals';

// Render the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web Vitals is a tool to measure and analyze performance (optional)
reportWebVitals(console.log);
