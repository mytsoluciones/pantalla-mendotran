// Componenete encargado de mostrar el gif de loading cuando no sea posible obtener los datos de la api
// entiendase por falta de conexion, por dato incorrecto de parada u demora del servidor.

import React, { useState, useEffect } from 'react';
import './Loading.css'; // Archivo CSS para las transiciones
import loadingImage from '../images/loading.gif'

const Loading = () => {
  //Frases a mostrar misntras se despliega el gif de login
  const texts = ['Pronto podrás ver los póximos arribos !', 'Casi Listo !', 'Que tengas un buen viaje !', ];
  const [currentText, setCurrentText] = useState(texts[0]);

  //Cambia la frase cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Obtener un texto aleatorio de la lista
      const randomIndex = Math.floor(Math.random() * texts.length);
      setCurrentText(texts[randomIndex]);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="loading-box">
      <h1 className="fade-in-out loading-text">{currentText}</h1>
      <img className="loading" src={loadingImage} alt="GIF animado"/>
    </div>
  );
};

export default Loading;