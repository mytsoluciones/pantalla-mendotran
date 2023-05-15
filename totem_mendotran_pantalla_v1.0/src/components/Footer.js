import React from 'react'
import './Footer.css'
import publicidad from '../images/publicidad/media/vendimia.jpg'

function Footer() {
  return (
    <div >
      <img className='publicidad_media' src={publicidad} alt="Publicidad"></img>

    </div>
  )
}

export default Footer