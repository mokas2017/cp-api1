import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Bootstrap styling for react-bootstrap components.
import 'bootstrap/dist/css/bootstrap.min.css';

// Mount the React application with additional runtime checks.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance reporting hook.
