import React, { useEffect, useState } from 'react'
import './Header.css'
import 'typeface-roboto'
import logo from '../images/LOGO-MENDOTRAN.jpg'

function Header() {
    const [values, setValues]   = useState('')

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=mendoza&lang=es&units=metric&appid=9e014e5032a9956ebbe2c74c26a16f3d`

    const getData = async () =>{
        await fetch(URL)
        .then(response => {return response.json()})
        .then(data =>{
            if(data.cod >= 404){
                setValues(false)
            }else{
                //console.log(data.weather[0].main)
                //setIcon(data.weather[0].main)
                setValues(data)
                //console.log(values)
            }
            //console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    useEffect(()=>{
        const intervalWeather = setInterval(()=> {
            getData()
        },1800000);

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
                    {(values) ? (
                        <div>
                            <img className='icon_clima' src={`http://openweathermap.org/img/wn/${values.weather[0].icon}.png`} alt="clima icon"></img>
                            {/* <p> */}
                            <br></br>
                            {Math.round(values.main.temp)}&deg;C / Hum: {values.main.humidity}%
                             <br></br>
                            {values.weather[0].description}
                            {/* </p>   */}
                        </div>
                        
                    ) : (
                        <p></p>
                    )}
                </div>
          </div>
      </div>
    </>
    );
}

export default Header
