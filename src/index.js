import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Servicios from './Servicios';
import Formulario from './Formulario';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Servicios/>
    <Formulario/>
  </React.StrictMode>
);


reportWebVitals();
