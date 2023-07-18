import React, { useEffect, useState } from 'react'
import './Arrivals.css'
import Llegada  from './Llegada'
import VideoFromBottom from './VideoFromBottom';
import Loading from './Loading';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

const LlegadasMultiArrival = () => {

    const [paradas, setParadas]             = useState([]);
    const [paradas0, setParadas0]           = useState([]);
    const [paradas1, setParadas1]           = useState([]);
    const [paradas2, setParadas2]           = useState([]);
    const [paradas3, setParadas3]           = useState([]);
    const [paradas4, setParadas4]           = useState([]);
    const [paradas5, setParadas5]           = useState([]);
    const [paradas6, setParadas6]           = useState([]);
    const [paradas7, setParadas7]           = useState([]);
    const [paradas100, setParadas100]       = useState([]);

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
    var arrivalsStopId0;
    var arrivalsStopId1;
    const [publi, setPubli]             = useState(false);
    const [activePubli, setActivePubli] = useState(false);
    const [loading, setLoading]         = useState(false);
    
    //? para funcion que hace las consultas de URLS
    
    const respTemp      = [];  
    const [resp, setResp]       = useState([]);
    const [urls, setUrls]       = useState([]);
    const [arriId, setArriId]   = useState([]);
    const urlsTemp      = [];
    //const urlsFinal     = [];
    //const [urls, setUrls]               = useState([]);
    
    //? Para manejar el punto inicial de las paradas y la cion entre ambas
    //const initSpace = 440; //para 7 paradas
    const initSpace         = 280;
    const intermediateSpace = 152;

   

    useEffect(() => {
        const intervalLlegada = setInterval(()=> {
            console.log('------------------- use-effect ----------------------------')
            getDatos()
            //mostrar()
        }, 60000);
        //setParadas(datos)
        return () => clearInterval(intervalLlegada);
    });

    const getDatos = async () =>{ 

        setUrls([]);
        //todo armar arreglo de paradas
        for(let i=0; i < process.env.REACT_APP_ARRIVALS_AMOUNT;i++){
            //Armamos los urls desde los datos traidos de la web
            const arrivalVariable   = `REACT_APP_MENDOTRAN_PARADA_ID${i}`;
            const arrivalValue      = process.env[arrivalVariable];
            const urlName           = `https://mendotran.oba.visionblo.com/oba_api/api/where/arrivals-and-departures-for-stop/${arrivalValue}.json?platform=mobile&v=&minutesBefore=0&minutesAfter=${process.env.REACT_APP_MENDOTRAN_INTERVALO_CONSULTA}&version=${process.env.REACT_APP_MENDOTRAN_VERSION}`;
            //Almacenamos los urls en un arreglo
            setUrls(urlsPrev=>[...urlsPrev, urlName])
        }
        
        try{
            // const data2 = await fetch(urlName).then(response => response.json());
            console.log("Arreglo de urls a consultar: ");
            console.log(urls);

            console.log("Arreglos con responses: ");
            const dataTemp  = await Promise.all(urls.map(url => fetch(url)));
            const data      = await Promise.all(dataTemp.map(response => response.json()));
            console.log(data);

            //? NOMBRE DE LA PARADA
            setArriId([]);
            for(let i=0;i<data.length;i++){
                setArriId(arrIdPrev=>[...arrIdPrev, data[i].data.references.stops[0].name]);
            }
            console.log("Estos son los numeros de las paradas consultadas: ");
            console.log(arriId);

            //const url0 = `https://mendotran.oba.visionblo.com/oba_api/api/where/arrivals-and-departures-for-stop/${process.env.REACT_APP_MENDOTRAN_PARADA_ID0}.json?platform=mobile&v=&minutesBefore=0&minutesAfter=${process.env.REACT_APP_MENDOTRAN_INTERVALO_CONSULTA}&version=${process.env.REACT_APP_MENDOTRAN_VERSION}`;
            
            //const url1 = `https://mendotran.oba.visionblo.com/oba_api/api/where/arrivals-and-departures-for-stop/${process.env.REACT_APP_MENDOTRAN_PARADA_ID1}.json?platform=mobile&v=&minutesBefore=0&minutesAfter=${process.env.REACT_APP_MENDOTRAN_INTERVALO_CONSULTA}&version=${process.env.REACT_APP_MENDOTRAN_VERSION}`;

//            let responsel = urlsFinal.map(url => fetch(url));
            //const data2      = await Promise.all(responses2.map(response => response.json()));
            //setResp(responses2);
            //console.log(responsel);
            
            //! hardcodeado anda - cambiar "data" por "algo" y desomentar url0 y url1 de arriba
            // const data = await Promise.all([
            
            //    //pedir las paradas de todas las urls
            //    fetch(resp[0]).then(response => response.json()),
            //    fetch(resp[1]).then(response => response.json())
            // ]);
            
            //arrivalsStopId0    =  data[0].data.references.stops[0].name;
            //arrivalsStopId1    =  data[1].data.references.stops[0].name;
            //console.log("Codigos de parada: "+arrivalsStopId0+" - "+arrivalsStopId1);

            //todo LLENAMOS LOS ARREGLOS CON 7 ARRIBOS COMO MÁXIMO POR PANTALLA
            //setParadas(data[0].data.entry.arrivalsAndDepartures.map(objeto => ({
            //    ...objeto,
            //    nuevoElemento: arrivalsStopId0
            //  })))
            
            console.log("***********************");
            //TODO hacer esta parte en funcion y se va todo a la concha de su madre rey
            setParadas([]);
            for(let m=0;m<data.length;m++){
                setParadas(paradasPrev => [...paradasPrev, data[m].data.entry.arrivalsAndDepartures.map((item, i) => {
                    return {
                      ...item,
                      arriId: arriId[i]
                    };
                })]
                )
                //setParadas(paradasPrev =>[...paradasPrev, updatedData])
            }
            
            
            //const llegadas      = [...data[0].data.entry.arrivalsAndDepartures.map(objeto => ({
            //    ...objeto,
            //    nuevoElemento: arrivalsStopId0
            //  })), ...data[1].data.entry.arrivalsAndDepartures.map(objeto => ({
            //    ...objeto,
            //    nuevoElemento: arrivalsStopId1
            //  }))];
            //setParadas(llegadas)
            //TODO hacer esta parte en funcion y se va todo a la concha de su madre rey
            //if(paradas){
            //? CUANTAS PARADAS HAY?
            const arrivalsNumber    =  paradas.length
            if(arrivalsNumber === 0){
                setLoading(true)
            }else{
                setLoading(false)
            }
            console.log("Cantidad de paradas: " + arrivalsNumber)

            //? CUANTAS PANTALLAS COMPLETAS SE PUEDEN ARMAR (N)?
            const screensFull       = ~~(arrivalsNumber/8)
            console.log("Pantallas completas con 8 paradas: " + screensFull)

            //? CUANTAS PARADAS TIENE LA ULTIMA PANTALLA INCOMPLETA (X)
            const screensPart       = arrivalsNumber%8
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

            if(screensDelay > 10000){
                screensDelay = 10000;
                setActivePubli(true);
            }else{
                setActivePubli(false);
            }
            console.log("cada pantalla se mostrará durante " + (screensDelay/1000) + " segundos.")

            console.log("Esto esta hardcodeado: ")
            console.log(paradas)

            //? ordenar paradas por numero de linea
        paradas.sort((a,b) =>{
            if(a.routeShortName < b.routeShortName){
                return -1;
            }
            if(a.routeShortName > b.routeShortName){
                return 1;
            }
            return 0;
        })
        
        
        if(screensFull !== 0){
            for (let pantalla = 0; pantalla < screensFull; pantalla++) {
                armarParadas(pantalla)
                await delay(screensDelay)
            }
        }
        
        if(screensPart !== 0){
            armarParadas(100,screensPart,screensFull)
            await delay(screensDelay)
        }

        //if(screensDelay > 10000){
        if(activePubli){
            armarParadas(1000,screensPart,screensFull)
            await delay((60000-(10000*(screensFull+screensPart))))
        }else{

        }
        // if(activePubli){
        //     setModo0(false)
        //     setModo1(false)
        //     setModo2(false)
        //     setModo3(false)
        //     setModo4(false)
        //     setModo5(false)
        //     setModo6(false)
        //     setModo7(false)
        //     setModo100(false)
        //     setPubli(true);
        //     const publiActiveTime = (50000-(10000*screensTotal));
        //     console.log("aca se debería ver la publicidad durante: "+publiActiveTime/1000);
        //     await delay(publiActiveTime);
        //     setPubli(false);
        //     //await delay(60000-(10000*screensTotal));
        // }else{
        //     setPubli(false);
        //     console.log("La publicidad no debería estar ");
        // }
    //}else{
    //    setLoading(true);
    //    setPubli(false);
    //}
        }catch(error){
            console.log('Error al obtener los datos:', error);
            setLoading(true)
            setPubli(false);
        }
    }

    const armarParadas = async (pantalla, screensPart, screensFull) =>{
        // const armarParadas = (pantalla, screensPart, screensFull) =>{
            switch (pantalla) {
                case 0:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 8 paradas.")
                    const newArray0         = paradas.slice(0,8)
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
                    setPubli(false);
                    //setParadas1(paradas0.map(function(parada0, index){ return (index <= 6)?  console.log(parada0) : count++;}))   
                    break;
                case 1:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 8 paradas.")
                    const newArray1 = paradas.slice(8,16)
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
                    setPubli(false);
                    break;
                case 2:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 8 paradas.")
                    const newArray2 = paradas.slice(16,24)
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
                    setPubli(false);
                    break;
                case 3:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 8 paradas.")
                    const newArray3 = paradas.slice(24,32)
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
                    setPubli(false);
                    break;
                case 4:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 8 paradas.")
                    const newArray4 = paradas.slice(32,40)
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
                    setPubli(false);
                    break;
                case 5:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 8 paradas.")
                    const newArray5 = paradas.slice(40,48)
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
                    setPubli(false);
                    break;
                case 6:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 8 paradas.")
                    const newArray6 = paradas.slice(48,56)
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
                    setPubli(false);
                    break;
                case 7:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré 8 paradas.")
                    const newArray7 = paradas.slice(56,64)
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
                    setPubli(false);
                    break;
                case 100:
                    console.log("Estoy en funcion armar paradas con index: "+pantalla+" y mostraré: "+ screensPart + " paradas.")
                    console.log("slice("+(screensFull*8)+" , "+((screensFull*8)+screensPart)+")")
                    const inicio    = screensFull*8
                    const fin       = (screensFull*8)+screensPart
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
                    setPubli(false);
                    break;
                case 1000:
                    const publiActiveTime = (60000-(10000*(screensFull+screensPart)));
                    console.log("Cantidad de pantallas activas: "+screensFull+screensPart);
                    //console.log("aca se debería ver la publicidad durante: "+publiActiveTime/1000);
                    setModo0(false)
                    setModo1(false)
                    setModo2(false)
                    setModo3(false)
                    setModo4(false)
                    setModo5(false)
                    setModo6(false)
                    setModo7(false)
                    setModo100(false)
                    setPubli(true);
                    break;
            
                default:
                    break;
            }
        }

    return (

        <>
            {(loading)?
                <div>
                    <Loading/>
                </div>:null}
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
                                        spaceBox                ={initSpace+(index*intermediateSpace)}
                                        // predicted               ={false}
                                        //stopId                ={"M2045"}
                                        predicted               ={item.predicted}
                                        stopId                  ={item.nuevoElemento}//{JSON.stringify(screensDelay)}//{"M2045"}
                                        scheduledArrivalTime    ={new Date(item.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item.scheduledArrivalTime-item.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item.predictedArrivalTime -new Date()}
                                        delayTimeScheduled      ={item.scheduledArrivalTime -new Date()}
                                        
                                    />
                                </div>
                            ))}
                            {/* .sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)} */}
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
                                        spaceBox                ={initSpace+(index1*intermediateSpace)}
                                        // predicted               ={false}
                                        predicted               ={item1.predicted}
                                        stopId                  ={item1.nuevoElemento}
                                        scheduledArrivalTime    ={new Date(item1.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item1.scheduledArrivalTime-item1.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item1.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item1.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item1.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            ))}
                            {/* .sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)} */}
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
                                        spaceBox                ={initSpace+(index2*intermediateSpace)}
                                        // predicted               ={false}
                                        predicted               ={item2.predicted}
                                        stopId                  ={item2.nuevoElemento}
                                        scheduledArrivalTime    ={new Date(item2.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item2.scheduledArrivalTime-item2.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item2.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item2.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item2.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            ))}
                            {/* .sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)} */}
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
                                        spaceBox                ={initSpace+(index3*intermediateSpace)}
                                        // predicted               ={false}
                                        predicted               ={item3.predicted}
                                        stopId                  ={item3.nuevoElemento}
                                        scheduledArrivalTime    ={new Date(item3.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item3.scheduledArrivalTime-item3.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item3.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item3.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item3.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            ))}
                            {/* .sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)} */}
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
                                        spaceBox                ={initSpace+(index4*intermediateSpace)}
                                        // predicted               ={false}
                                        predicted               ={item4.predicted}
                                        stopId                  ={item4.nuevoElemento}
                                        scheduledArrivalTime    ={new Date(item4.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item4.scheduledArrivalTime-item4.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item4.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item4.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item4.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            ))}
                            {/* .sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)} */}
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
                                        spaceBox                ={initSpace+(index5*intermediateSpace)}
                                        // predicted               ={false}
                                        predicted               ={item5.predicted}
                                        stopId                  ={item5.nuevoElemento}
                                        scheduledArrivalTime    ={new Date(item5.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item5.scheduledArrivalTime-item5.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item5.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item5.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item5.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            ))}
                            {/* .sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)} */}
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
                                        spaceBox                ={initSpace+(index6*intermediateSpace)}
                                        // predicted               ={false}
                                        predicted               ={item6.predicted}
                                        stopId                  ={item6.nuevoElemento}
                                        scheduledArrivalTime    ={new Date(item6.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item6.scheduledArrivalTime-item6.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item6.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item6.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item6.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            ))}
                            {/* .sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)} */}
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
                                        spaceBox                ={initSpace+(index7*intermediateSpace)}
                                        // predicted               ={false}
                                        predicted               ={item7.predicted}
                                        stopId                  ={item7.nuevoElemento}
                                        scheduledArrivalTime    ={new Date(item7.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item7.scheduledArrivalTime-item7.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item7.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item7.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item7.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                                
                            ))}
                            {/* .sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)} */}
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
                                        spaceBox                ={initSpace+(index100*intermediateSpace)}
                                        // predicted               ={false}
                                        predicted               ={item100.predicted}
                                        stopId                  ={item100.nuevoElemento}
                                        scheduledArrivalTime    ={new Date(item100.scheduledArrivalTime).toLocaleTimeString()}
                                        statusArrivalTime       ={item100.scheduledArrivalTime-item100.predictedArrivalTime}
                                        predictedArrivalTime    ={new Date(item100.predictedArrivalTime).toLocaleTimeString()}
                                        delayTimePredicted      ={item100.predictedArrivalTime - new Date()}
                                        delayTimeScheduled      ={item100.scheduledArrivalTime - new Date()}
                                    />
                                </div>
                            ))}
                            {/* .sort((a,b) => a.scheduledArrivalTime - b.scheduledArrivalTime)} */}
                        </ul>
                    </div>
                    :
                    null}
                    {(publi)?
                        <div>
                            <VideoFromBottom/>
                        </div>
                    :
                    null}
            </div>
        </>
    )
}

export default LlegadasMultiArrival