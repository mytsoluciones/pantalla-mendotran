import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//componentes
import App from './App';
import Header from './components/Header';
//import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Arrivals from './components/Arrivals';
import Fecha from './components/Fecha';
import LlegadasMultiArrival from './components/LlegadasMultiArrival';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LlegadasMultiArrival/>
    <Header />
    <App />
    <Fecha />
    <Footer />
  </React.StrictMode>
);

