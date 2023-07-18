import React, { useState, useEffect } from 'react';
import './Loading.css'; // Archivo CSS para las transiciones
import loadingImage from '../images/loading4.gif'

const Loading = () => {
  const texts = ['Pronto podrás ver los póximos arribos !', 'Casi Listo !', 'Que tengas un buen viaje !', ];
  const [currentText, setCurrentText] = useState(texts[0]);

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