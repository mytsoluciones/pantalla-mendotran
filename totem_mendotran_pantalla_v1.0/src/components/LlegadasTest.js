import React, { useEffect, useState } from 'react'
import './Arrivals.css'
import Llegada  from './Llegada'

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

const LlegadasTest = () => {

    const [paradas, setParadas]         = useState([]);
    const [paradas0, setParadas0]       = useState([]);
    const [paradas1, setParadas1]       = useState([]);
    const [paradas2, setParadas2]       = useState([]);
    const [paradas3, setParadas3]       = useState([]);
    const [paradas4, setParadas4]       = useState([]);
    const [paradas5, setParadas5]       = useState([]);
    const [paradas6, setParadas6]       = useState([]);
    const [paradas7, setParadas7]       = useState([]);
    const [paradas100, setParadas100]   = useState([]);

    const [modo0, setModo0]             = useState(false);
    const [modo1, setModo1]             = useState(false);
    const [modo2, setModo2]             = useState(false);
    const [modo3, setModo3]             = useState(false);
    const [modo4, setModo4]             = useState(false);
    const [modo5, setModo5]             = useState(false);
    const [modo6, setModo6]             = useState(false);
    const [modo7, setModo7]             = useState(false);
    const [modo100, setModo100]         = useState(false);

    var screensDelay;
    var currentTime;

    useEffect(() => {
        const intervalLlegada = setInterval(()=> {
            console.log('------------------- use-effect ----------------------------')
            getDatos()
            //mostrar()
        }, 60000);
        //setParadas(datos)
        return () => clearInterval(intervalLlegada);
    })

    const getDatos = async () =>{
        
        const URL = `https://mendotran.oba.visionblo.com/oba_api/api/where/arrivals-and-departures-for-stop/${process.env.REACT_APP_MENDOTRAN_PARADA_ID}.json?platform=mobile&v=&minutesBefore=0&minutesAfter=${process.env.REACT_APP_MENDOTRAN_INTERVALO_COSNULTA}&version=${process.env.REACT_APP_MENDOTRAN_VERSION}`
        
        const   data        = await fetch(URL)
        const   llegadas    = await data.json()

        //? TIEMPO DE CONSULTA
        //currentTime = llegadas.currentTime
        //const testTime = Math.round(new Date().getTime());
        //console.log("La consulta se realizó a las: "+ new Date(currentTime)+" segun ovlobo y  a las: "+ new Date(testTime)+" segun mi app")
        //console.log("Veo esto po serveer: "+ currentTime+" y esto por app: "+ testTime+" --- Diferencia: "+(currentTime-testTime))
        
        //? CUANTAS PARADAS HAY?
        const arrivalsNumber    =  llegadas.data.entry.arrivalsAndDepartures.length
        console.log("Cantidad de paradas: " + arrivalsNumber)
       
        //? CUANTAS PANTALLAS COMPLETAS SE PUEDEN ARMAR (N)?
        const screensFull       = ~~(arrivalsNumber/7)
        console.log("Pantallas completas con 7 paradas: " + screensFull)
       
        //? CUANTAS PARADAS TIENE LA ULTIMA PANTALLA INCOMPLETA (X)
        const screensPart       = arrivalsNumber%7
        console.log("Si hay una parada incompleta tendrá: " + screensPart + " paradas.")
       
        //? CANTIDAD DE PANTALLAS TOTALES DEL TOTEM ?
        var screensTotal 
        if(screensPart!==0){
            screensTotal = screensFull+1
        }else{
            screensTotal = screensFull
        }
        console.log("El totem tendra " + screensTotal + " pantallas.")
       
        //? CUANTO TIEMPO SE MOSTRARÁ CADA PANTALLA?
        screensDelay = Math.round(59/screensTotal)*1000 
        console.log("cada pantalla se mostrará durante " + (screensDelay/1000) + " segundos.")

        //todo LLENAMOS LOS ARREGLOS CON 7 ARRIBOS COMO MÁXIMO POR PANTALLA
        //setParadas(llegadas.data.entry.arrivalsAndDepartures.sort((a,b)=>a.scheduledArrivalTime - b.scheduledArrivalTime))
        setParadas(llegadas.data.entry.arrivalsAndDepartures)
        paradas.sort((a,b) =>{
            if(a.scheduledArrivalTime < b.scheduledArrivalTime){
                return -1;
            }
            if(a.scheduledArrivalTime > b.scheduledArrivalTime){
                return 1;
            }
            return 0;
        })
        //console.log(llegadas.data.entry.arrivalsAndDepartures.sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime))
        console.log(paradas);
        //setParadas(llegadas.data.entry.arrivalsAndDepartures.sort((a,b)=>a.scheduledArrivalTime.toLocalCompare(b.scheduledArrivalTime)))
        
        if(screensFull !== 0){
            for (let pantalla = 0; pantalla < screensFull; pantalla++) {
                armarParadas(pantalla)
                await delay(screensDelay)
                // await delay(screensDelay)
            }
        }
        
        if(screensPart !== 0){
            armarParadas(100,screensPart,screensFull)
            await delay(screensDelay)
            // await delay(screensDelay)
        }

        

        // setParadas(llegadas.data.entry.arrivalsAndDepartures.sort((a,b)=>a.llegadas.data.entry.arrivalsAndDepartures.scheduledArrivalTime.toLocalCompare(b.a.llegadas.data.entry.arrivalsAndDepartures.scheduledArrivalTime)))

        // setParadas0(llegadas.data.entry.arrivalsAndDepartures)        
        //console.log(llegadas.data.entry.arrivalsAndDepartures.sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime))

    }

    const armarParadas = async (pantalla, screensPart, screensFull) =>{
        // const armarParadas = (pantalla, screensPart, screensFull) =>{
            switch (pantalla) {
                case 0:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 7 paradas.")
                    const newArray0         = paradas.slice(0,7)
                    setParadas0(newArray0)
                    setModo0(true)
                    setModo1(false)
                    setModo2(false)
                    setModo3(false)
                    setModo4(false) 
                    setModo5(false)
                    setModo6(false)
                    setModo7(false)
                    setModo100(false)
                    //setParadas1(paradas0.map(function(parada0, index){ return (index <= 6)?  console.log(parada0) : count++;}))   
                    break;
                case 1:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 7 paradas.")
                    const newArray1 = paradas.slice(7,14)
                    setParadas1(newArray1)
                    setModo0(false)
                    setModo1(true)
                    setModo2(false)
                    setModo3(false)
                    setModo4(false)
                    setModo5(false)
                    setModo6(false)
                    setModo7(false)
                    setModo100(false)
                    break;
                case 2:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 7 paradas.")
                    const newArray2 = paradas.slice(14,21)
                    setParadas2(newArray2)
                    setModo0(false)
                    setModo1(false)
                    setModo2(true)
                    setModo3(false)
                    setModo4(false)
                    setModo5(false)
                    setModo6(false)
                    setModo7(false)
                    setModo100(false)
                    break;
                case 3:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 7 paradas.")
                    const newArray3 = paradas.slice(21,28)
                    setParadas3(newArray3)
                    setModo0(false)
                    setModo1(false)
                    setModo2(false)
                    setModo3(true)
                    setModo4(false)
                    setModo5(false)
                    setModo6(false)
                    setModo7(false)
                    setModo100(false)
                    break;
                case 4:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 7 paradas.")
                    const newArray4 = paradas.slice(28,35)
                    setParadas4(newArray4)
                    setModo0(false)
                    setModo1(false)
                    setModo2(false)
                    setModo3(false)
                    setModo4(true)
                    setModo5(false)
                    setModo6(false)
                    setModo7(false)
                    setModo100(false)
                    break;
                case 5:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 7 paradas.")
                    const newArray5 = paradas.slice(35,42)
                    setParadas5(newArray5)
                    setModo0(false)
                    setModo1(false)
                    setModo2(false)
                    setModo3(false)
                    setModo4(false)
                    setModo5(true)
                    setModo6(false)
                    setModo7(false)
                    setModo100(false)
                    break;
                case 6:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 7 paradas.")
                    const newArray6 = paradas.slice(42,49)
                    setParadas6(newArray6)
                    setModo0(false)
                    setModo1(false)
                    setModo2(false)
                    setModo3(false)
                    setModo4(false)
                    setModo5(false)
                    setModo6(true)
                    setModo7(false)
                    setModo100(false)
                    break;
                case 7:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 7 paradas.")
                    const newArray7 = paradas.slice(49,56)
                    setParadas7(newArray7)
                    setModo0(false)
                    setModo1(false)
                    setModo2(false)
                    setModo3(false)
                    setModo4(false)
                    setModo5(false)
                    setModo6(false)
                    setModo7(true)
                    setModo100(false)
                    break;
                case 100:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré: "+ screensPart + " paradas.")
                    console.log("slice("+(screensFull*7)+" , "+((screensFull*7)+screensPart)+")")
                    const inicio    = screensFull*7
                    const fin       = (screensFull*7)+screensPart
                    //const newArray100 = paradas0.slice(inicio,fin)
                    const newArray100 = paradas.slice(inicio,fin)
                    setParadas100(newArray100)
                    setModo0(false)
                    setModo1(false)
                    setModo2(false)
                    setModo3(false)
                    setModo4(false)
                    setModo5(false)
                    setModo6(false)
                    setModo7(false)
                    setModo100(true)
                    break;
            
                default:
                    break;
            }
        }

    return (
        <>
            <div>
                {(modo0)? 
                    <div>
                        <ul>
                            {paradas0.map((item,index) => (
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
                                        delayTimePredicted      ={item.predictedArrivalTime -new Date()}
                                        delayTimeScheduled      ={item.scheduledArrivalTime -new Date()}
                                    />
                                </div>
                            )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)}
                        </ul>
                    </div>
                    :
                    null}
                {(modo1)?
                    <div>
                        <ul>
                            {paradas1.map((item1,index1) => (
                                <div>
                                    <Llegada 
                                        key                     ={item1.tripId} 
                                        color                   ={item1.color} 
                                        routeShortName          ={item1.routeShortName} 
                                        tripHeadsign            ={item1.tripHeadsign}
                                        spaceBox                ={440+(index1*164)}
                                        // predicted               ={false}
                                        predicted               ={item1.predicted}
                                        scheduledArrivalTime    ={new Date(item1.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item1.scheduledArrivalTime-item1.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item1.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item1.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item1.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)}
                        </ul>
                    </div>
                    :
                    null}
                {(modo2)?
                    <div>
                        <ul>
                            {paradas2.map((item2,index2) => (
                                <div>
                                    <Llegada 
                                        key                     ={item2.tripId} 
                                        color                   ={item2.color} 
                                        routeShortName          ={item2.routeShortName} 
                                        tripHeadsign            ={item2.tripHeadsign}
                                        spaceBox                ={440+(index2*164)}
                                        // predicted               ={false}
                                        predicted               ={item2.predicted}
                                        scheduledArrivalTime    ={new Date(item2.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item2.scheduledArrivalTime-item2.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item2.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item2.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item2.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)}
                        </ul>
                    </div>
                    :
                    null}
                {(modo3)?
                    <div>
                        <ul>
                            {paradas3.map((item3,index3) => (
                                <div>
                                    <Llegada 
                                        key                     ={item3.tripId} 
                                        color                   ={item3.color} 
                                        routeShortName          ={item3.routeShortName} 
                                        tripHeadsign            ={item3.tripHeadsign}
                                        spaceBox                ={440+(index3*164)}
                                        // predicted               ={false}
                                        predicted               ={item3.predicted}
                                        scheduledArrivalTime    ={new Date(item3.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item3.scheduledArrivalTime-item3.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item3.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item3.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item3.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)}
                        </ul>
                    </div>
                    :
                    null}
                {(modo4)?
                    <div>
                        <ul>
                            {paradas4.map((item4,index4) => (
                                <div>
                                    <Llegada 
                                        key                     ={item4.tripId} 
                                        color                   ={item4.color} 
                                        routeShortName          ={item4.routeShortName} 
                                        tripHeadsign            ={item4.tripHeadsign}
                                        spaceBox                ={440+(index4*164)}
                                        // predicted               ={false}
                                        predicted               ={item4.predicted}
                                        scheduledArrivalTime    ={new Date(item4.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item4.scheduledArrivalTime-item4.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item4.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item4.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item4.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)}
                        </ul>
                    </div>
                    :
                    null}
                {(modo5)?
                    <div>
                        <ul>
                            {paradas5.map((item5,index5) => (
                                <div>
                                    <Llegada 
                                        key                     ={item5.tripId} 
                                        color                   ={item5.color} 
                                        routeShortName          ={item5.routeShortName} 
                                        tripHeadsign            ={item5.tripHeadsign}
                                        spaceBox                ={440+(index5*164)}
                                        // predicted               ={false}
                                        predicted               ={item5.predicted}
                                        scheduledArrivalTime    ={new Date(item5.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item5.scheduledArrivalTime-item5.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item5.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item5.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item5.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)}
                        </ul>
                    </div>
                    :
                    null}
                {(modo6)?
                    <div>
                        <ul>
                            {paradas6.map((item6,index6) => (
                                <div>
                                    <Llegada 
                                        key                     ={item6.tripId} 
                                        color                   ={item6.color} 
                                        routeShortName          ={item6.routeShortName} 
                                        tripHeadsign            ={item6.tripHeadsign}
                                        spaceBox                ={440+(index6*164)}
                                        // predicted               ={false}
                                        predicted               ={item6.predicted}
                                        scheduledArrivalTime    ={new Date(item6.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item6.scheduledArrivalTime-item6.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item6.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item6.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item6.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)}
                        </ul>
                    </div>
                    :
                    null}
                {(modo7)?
                    <div>
                        <ul>
                            {paradas7.map((item7,index7) => (
                                <div>
                                    <Llegada 
                                        key                     ={item7.tripId} 
                                        color                   ={item7.color} 
                                        routeShortName          ={item7.routeShortName} 
                                        tripHeadsign            ={item7.tripHeadsign}
                                        spaceBox                ={440+(index7*164)}
                                        // predicted               ={false}
                                        predicted               ={item7.predicted}
                                        scheduledArrivalTime    ={new Date(item7.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item7.scheduledArrivalTime-item7.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item7.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item7.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item7.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                                
                            )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)}
                        </ul>
                    </div>
                    :
                    null}
                {(modo100)?
                    <div>
                        <ul>
                            {paradas100.map((item100,index100) => (
                                <div>
                                    <Llegada 
                                        key                     ={item100.tripId} 
                                        color                   ={item100.color} 
                                        routeShortName          ={item100.routeShortName} 
                                        tripHeadsign            ={item100.tripHeadsign}
                                        spaceBox                ={440+(index100*164)}
                                        // predicted               ={false}
                                        predicted               ={item100.predicted}
                                        scheduledArrivalTime    ={new Date(item100.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item100.scheduledArrivalTime-item100.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item100.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item100.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item100.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            )).sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)}
                        </ul>
                    </div>
                    :
                    null}
            </div>
        </>
    )
}

export default LlegadasTest