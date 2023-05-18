import React, { useEffect, useState } from 'react';
import './Header.css'

function Fecha(props) {
    const [fecha, setFecha] = useState('')
    const data = []
    //var now

    useEffect(()=> {

        const interval = setInterval(()=> {
            //today = new Date().toLocaleDateString();
            // now = new Date().toLocaleTimeString();
            //console.log(new Date().toLocaleTimeString())
            data[0] = new Date().toLocaleDateString()
            data[1] = new Date().toLocaleTimeString()
            data[1] = data[1].substring(0, data[1].length - 3)
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
                    {/* 29 de septiembre del 2023 */}
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

//setInterval(Fecha, 10000)

export default Fecha;

