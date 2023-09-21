import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//componentes
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Fecha from './components/Fecha';
import LlegadasMultiArrival from './components/LlegadasMultiArrival';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/>     */}
    <Fecha/> {/* Fecha y hora */}
    <Header/> {/* Logo y clima */}
    <LlegadasMultiArrival/> {/* Consulta, procesamiento y despliegue de información */}
    <Footer/>  {/* Publicidad inferior y leyendas de cliente y MYTIND S.A. */}
  </React.StrictMode>
);

