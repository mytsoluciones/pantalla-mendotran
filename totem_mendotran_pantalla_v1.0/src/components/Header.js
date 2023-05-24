import React, { useEffect, useState } from 'react'
import './Header.css'
import 'typeface-roboto'
import logo from '../images/LOGO-MENDOTRAN-2.jpg'

function Header() {
    const [values, setValues]   = useState('')

    //! decomentar esto para produccion, aunque es muy probable que haya algo que pida una sola vez cada hora el dato en el server, guarde un archivo en el servidor y los totems le apunten ahi para no quemar las request diarias (50 como mucho para los peteros)
    //const URL = `https://api.openweathermap.org/data/2.5/weather?q=mendoza&lang=es&units=metric&appid=${process.env.REACT_APP_API_WEATHER_KEY}`
    //! Descomentar para test
    //const URL = `https://mytsoluciones.com/desarrollo/Totem/json_files_test/openweather.json`
    const URL = `../json_files_test/openweather.json`

    

    //! Descomentar para produccion
    const getData = async () =>{
        await fetch(URL)

    //! Descomentar para test
    // const getData = async () =>{
    //     await fetch(URL,{
    //         'mode': 'no-cors',
    //         'headers':{
    //             'Access-Control-Allow-Origin': '*',
    //         }
    //     })
        .then(response => {return response.json()})
        .then(data =>{
            if(data.cod >= 404){
            // if(data.cod == 10000){
                setValues(false)
            }else{
                //console.log(data.weather[0].main)
                //setIcon(data.weather[0].main)
                setValues(data)
                //setValues(prueba)
                //console.log(values)
            }
            //console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    //! tener en cuenta el timer para produccion, son 50 request máximas por día que puede hacer esta api gratis - para produccion 1800000 - para test 60000 
    useEffect(()=>{
        const intervalWeather = setInterval(()=> {
            getData()
        },60000);

        return () => clearInterval(intervalWeather);
    }) // eslint-disable-line react-hooks/exhaustive-deps

    return (
    <>
      <div className="Header">
          
          <div className="header_botom_box">
                <div>
                    <img className='mendotran_logo' src={logo} alt="Logo"></img>
                </div>
                <div className='clima'>
                    {/* {(values) ? ( */}
                    
                        <div>
                            
                            <img className='icon_clima' src={`http://openweathermap.org/img/wn/10d.png`} alt="clima icon"></img>
                            {/* <img className='icon_clima' src={`http://openweathermap.org/img/wn/${values.weather[0].icon}.png`} alt="clima icon"></img> */}
                            <p className='temp_clima'> 
                            27&deg;C
                            {/* {Math.round(values.main.temp)}&deg;C */}
                            {/* {values.weather[0].description} */} 
                            </p>
                        </div>
                        
                    {/* ) : (
                        <p></p>
                    )} */}
                </div>
          </div>
      </div>
    </>
    );
}

export default Header
