import React from 'react'
import './Footer.css'
import publicidad from '../images/publicidad/media/vendimia.jpg'

function Footer() {
  return (
    <>
      <div >
        <img className='publicidad_media' src={publicidad} alt="Publicidad"></img>
        <div className='powered-footer'>
          <div className='powered-footer-gob'>
            Secretaría de Servicios Públicos - Gobierno de Mendoza
          </div>
          <div className='powered-footer-myt'>
            Powered by MyT Soluciones
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer