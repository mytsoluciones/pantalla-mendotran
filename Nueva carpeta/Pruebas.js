import React, { useState, useEffect } from 'react'
import Prueba from './Prueba';

const Pruebas = () => {

    const [llegadas, setLlegadas] = useState('')

    const URL = `https://mendotran.oba.visionblo.com/oba_api/api/where/arrivals-and-departures-for-stop/${process.env.REACT_APP_MENDOTRAN_PARADA_ID}.json?platform=mobile&v=&minutesBefore=0&minutesAfter=${process.env.REACT_APP_MENDOTRAN_INTERVALO_COSNULTA}&version=${process.env.REACT_APP_MENDOTRAN_VERSION}`

    const getData = async () =>{
        await fetch(URL)
        .then(response => {return response.json()})
        .then(data =>{
            if(data.code >= 404){
                setLlegadas(false)  //no se pudo obtener infomracion de la parada
             }else{

                // ******************************************
                // Informacion tomada de api mendotran
                // ******************************************
                setLlegadas(data.data.entry.arrivalsAndDepartures)
                console.log(llegadas)
                
            }
            //console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div >
        {llegadas.map(llegada=>{
            return(
                <div>alguna verga</div>
                //<Prueba routeShortName={llegada.routeShortName} tripHeadsign={llegada.tripHeadsign} />
            )
        })}
    </div>
  )
}


export default Pruebas