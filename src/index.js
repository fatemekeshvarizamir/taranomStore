import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// src/components/FontAwesomeIcons.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faCircleXmark);







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
);


