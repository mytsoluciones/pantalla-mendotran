// Componente encargado de actualizar y presentar la fecha y hora de la pantalla principal del 
// totem en el borde superior.

import React, { useEffect, useState } from 'react';
import './Header.css'

function Fecha(props) {
    const [fecha, setFecha] = useState('')
    const data = []

    //se encarga de consultar la fecha y hora cada 10 segundos
    useEffect(()=> {
        const interval = setInterval(()=> {
            data[0] = new Date().toLocaleDateString()  //fecha
            data[1] = new Date().toLocaleTimeString()
            data[1] = data[1].substring(0, data[1].length - 3) //hora
            setFecha(data)
            //console.log(fecha)
        }, 10000);

        return () => clearInterval(interval);
    })

    return (
        <>
        <div className="Header">
            <div className="header_top_box">
                <div className='fecha_header_top'>
                    {/* 29/7/2023 */}
                    {fecha[0]}
                </div>
                <div className='border_top'>
                </div>
                <div className='hora_header_top'>
                    {/* 19:45 */}
                    {fecha[1]}
                </div>
            </div>
        </div>     
        </>
    );
}

export default Fecha;

