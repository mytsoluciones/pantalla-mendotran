// Compoenente encargado de consultar y desplegar el clima y el logo del cliente en la parte superior

import React, { useEffect, useState } from 'react'
import './Header.css'
import 'typeface-roboto'
import logo from '../images/logo-header.jpg'

function Header() {

    //Consulta el clima al servidor cada 20minutos
    useEffect(()=>{
        const intervalWeather = setInterval(()=> {
            getData()
        },20*60000);
        return () => clearInterval(intervalWeather);
    }) 

    const [values, setValues]   = useState('')

    // URL del archivo php ubicado en el servidor encargado 
    // de realizar la consulta a la api cuando corresponde y entregar los datos a los totems 
    const URL = `https://mytsoluciones.com/desarrollo/Totem/api_clima.php?localidad=mendoza`

    const getData = async () =>{
        // Solicitud de datos del clima
        try{
            //Por cuestiones de servidor es necesario activar 'Access-Control-Allow-Origin': '*' para 
            //permitir que la solicitud ingrese y sea procesada
            const jsonData = await fetch(URL).then(response => response.json(),{
                'mode': 'no-cors',
                'headers':{
                    'Access-Control-Allow-Origin': '*',
            }})
            setValues(jsonData);

        }catch (error) {
             console.log('Error al analizar el JSON:', error);
           }
    }

    return (
    <>
      <div className="Header">
          
          <div className="header_botom_box">
                <div>
                    {/* Logo del cliente */}
                    <img className='mendotran_logo' src={logo} alt="Logo"></img>
                </div>
                <div className='clima'>
                    {(values) ? (
                        <div>
                            
                            {/* <img className='icon_clima' src={`http://openweathermap.org/img/wn/10d.png`} alt="clima icon"></img> */}
                            <img className='icon_clima' src={`http://openweathermap.org/img/wn/${values.weather[0].icon}.png`} alt="clima icon"></img>
                            <p className='temp_clima'> 
                            {/* 27&deg;C */}
                            {Math.round(values.main.temp)}&deg;C
                            {/* {values.weather[0].description}  */}
                            </p>
                        </div>
                    ) : (
                        //Si no hay datos del clima, no muestra nada
                        <p className='temp_clima'></p>
                    )}
                </div>
          </div>
      </div>
    </>
    );
}

export default Header
