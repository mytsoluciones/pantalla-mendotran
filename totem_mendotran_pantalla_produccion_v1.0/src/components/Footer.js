// Componente encargado de desplegar la publicidad inferior y las leyendas del footer
//en alusion al cliente y a myt
import React, { useEffect } from 'react'
import './Footer.css'
import publicidad from '../images/publicidad/media/img_chica.jpg'

function Footer() {
  return (
    <>
      <div >
        {/* muestra la imagen de width: 1056px; height: 336px; de manera permanente */}
        <img className='publicidad_media' src={publicidad} alt="Publicidad"></img>
        {/*Leyenda que mendiona al cliente y a myt */}
        <div className='powered-footer'>
          <div className='powered-footer-gob'>
            Secretaría de Servicios Públicos - Gobierno de Mendoza
          </div>
          <div className='powered-footer-myt'>
            Powered by MYT Soluciones
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer