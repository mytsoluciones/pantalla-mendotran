import React, { useEffect, useState } from 'react'
import './Arrivals.css'
import Llegada  from './Llegada'
import Clean    from './Clean'
import Llegada2 from './Llegada2'

const Llegadas = () => {

    const [paradas, setParadas]     = useState([]);

    useEffect(() => {
        const intervalLlegada = setInterval(()=> {
            console.log('use-effect')
            getDatos()
        }, 30000);
        //setParadas(datos)
        return () => clearInterval(intervalLlegada);
    },[])

    const getDatos = async () =>{
        const URL = `https://mendotran.oba.visionblo.com/oba_api/api/where/arrivals-and-departures-for-stop/${process.env.REACT_APP_MENDOTRAN_PARADA_ID}.json?platform=mobile&v=&minutesBefore=0&minutesAfter=${process.env.REACT_APP_MENDOTRAN_INTERVALO_COSNULTA}&version=${process.env.REACT_APP_MENDOTRAN_VERSION}`
        
        const data      = await fetch(URL)
        const llegadas  = await data.json()
        
        setParadas(llegadas.data.entry.arrivalsAndDepartures)
        
        console.log("Cantidad de paradas")
        // setParadas(llegadas.data.entry.arrivalsAndDepartures.sort((a,b)=>a.llegadas.data.entry.arrivalsAndDepartures.scheduledArrivalTime.toLocalCompare(b.a.llegadas.data.entry.arrivalsAndDepartures.scheduledArrivalTime)))
        
        console.log(llegadas.data.entry.arrivalsAndDepartures.sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime))
        console.log("Cantidad de paradas")

    }

    return (
        <div>
            <ul>
                {       
                    paradas.map((item,index) =>(
                        (index / 7 < 1 || index === 0)?
                        // (index !== 3)?
                            <div>
                                <Llegada 
                                    key                     ={item.tripId} 
                                    color                   ={item.color} 
                                    routeShortName          ={item.routeShortName} 
                                    tripHeadsign            ={item.tripHeadsign}
                                    spaceBox                ={440+(index*164)}
                                    // predicted               ={false}
                                    predicted               ={item.predicted}
                                    scheduledArrivalTime    ={new Date(item.scheduledArrivalTime).toLocaleTimeString()}
                                    statusArrivalTime       ={item.scheduledArrivalTime-item.predictedArrivalTime}
                                    predictedArrivalTime    ={new Date(item.predictedArrivalTime).toLocaleTimeString()}
                                    delayTimePredicted      ={item.predictedArrivalTime - new Date()}
                                    delayTimeScheduled      ={item.scheduledArrivalTime - new Date()}
                                />
                            </div>
                            :
                            <div>
                                {index === 7?
                                    <Clean/> :null
                                }            

                                <Llegada2
                                    key                     ={item.tripId} 
                                    color                   ={item.color} 
                                    routeShortName          ={item.routeShortName} 
                                    tripHeadsign            ={item.tripHeadsign}
                                    spaceBox                ={440+((index-7)*164)}
                                    // predicted               ={false}
                                    predicted               ={item.predicted}
                                    scheduledArrivalTime    ={new Date(item.scheduledArrivalTime).toLocaleTimeString()}
                                    statusArrivalTime       ={item.scheduledArrivalTime-item.predictedArrivalTime}
                                    predictedArrivalTime    ={new Date(item.predictedArrivalTime).toLocaleTimeString()}
                                    delayTimePredicted      ={item.predictedArrivalTime - new Date()}
                                    delayTimeScheduled      ={item.scheduledArrivalTime - new Date()}
                                />
                            </div>
            
                    )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)
                }
            </ul>
            
        </div>
    )
}

export default Llegadas

