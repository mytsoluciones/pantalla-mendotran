import React, {useState, useEffect } from 'react'
import './Arrivals.css'

function Arrivals() {
    const [arrivals, setArrivals]   = useState('')
    const llegadas = () => [] 
    //const [llegadas, setLlegadas] = useState('')

    var arrivalsNumber = 0
    var arrivalsScreensResto
    var arrivalsScreensMod 
    var space = 160  //distancia entre carteles = 

    const URL = `https://mendotran.oba.visionblo.com/oba_api/api/where/arrivals-and-departures-for-stop/${process.env.REACT_APP_MENDOTRAN_PARADA_ID}.json?platform=mobile&v=&minutesBefore=0&minutesAfter=${process.env.REACT_APP_MENDOTRAN_INTERVALO_CONSULTA}&version=${process.env.REACT_APP_MENDOTRAN_VERSION}`
    
    //para debuguear las respuestas de mendotran api
    //const URL = `https://mendotran.oba.visionblo.com/oba_api/api/where/arrivals-and-departures-for-stop/1008_11111.json?platform=mobile&v=&minutesBefore=0&minutesAfter=20&version=1.0`

    const getData = async () =>{
        await fetch(URL)
        .then(response => {return response.json()})
        .then(data =>{
            if(data.code >= 404){
                setArrivals(false)  //no se pudo obtener infomracion de la parada
             }else{

                // ******************************************
                // Informacion tomada de api mendotran
                // ******************************************
                setArrivals(data)
                console.log(arrivals)
                
                // ******************************************
                // cuantos arrivos hay?
                // ******************************************
                arrivalsNumber =  arrivals.data.entry.arrivalsAndDepartures.length                

                // ******************************************
                // cuantos arribos tendrá la ultima pantalla
                // ******************************************
                arrivalsScreensResto = arrivalsNumber % 7
                console.log('Hay pendientes: '+arrivalsNumber+' arribos dividos en')

                // ******************************************
                //cuantas pantallas de 7 arribos habrá
                // ******************************************
                arrivalsScreensMod = ~~(arrivalsNumber/7)

                console.log("Hay: "+ arrivalsNumber +" llegadas. Se armarán: " + arrivalsScreensMod + " pantallas de 7 llegadas y la ultima pantalla tendrá " + arrivalsScreensResto + " arrivos.")

                // ******************************************
                // armamos array con arribos
                // ******************************************
                for (let index = 0; index < arrivalsNumber; index++) {
                    llegadas[index] = arrivals.data.entry.arrivalsAndDepartures[index].tripId
                    //setLlegadas(arrivals.data.entry.arrivalsAndDepartures[index])
                    console.log('Llegada['+ index +']: '+llegadas[index])
                }

            }
            //console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
    <>
    <div>
    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "445px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "605px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "765px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "925px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "1085px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "1245px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'>
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "1405px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>
    </div>
    

    </>
  );
}

export default Arrivals

//para debuguear paradas

 /* <div className='arrival_data' style={{top: "455px"}}>
    <div className='arrival_data' style={{top: "615px"}}>
    <div className='arrival_data' style={{top: "755px"}}>
    <div className='arrival_data' style={{top: "910px"}}>
    <div className='arrival_data' style={{top: "1065px"}}>
    <div className='arrival_data' style={{top: "1220px"}}>
    <div className='arrival_data' style={{top: "1370px"}}>
 */

//para testeo de pantallas

{/*<div className='arrivals_box'>
        <div className='arrival_data' style={{top: "445px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "605px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "765px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "925px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "1085px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "1245px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'>
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div>

    <div className='arrivals_box'>
        <div className='arrival_data' style={{top: "1405px"}}>
            <div className='arrival_color' style={{background: '#FE7018'}}></div>
            <div className='arrival_number'>330</div>
            <div className='arrival_description'> 
                <div className='arrival_addres'>Rawson Bº Estanzuela por Paso De Los Andes</div>
                <div className='arrival_state_box' style={{background: '#1E3480'}}>
                    <div className='arrival_state_data'>1 min tarde</div>
                </div>
                <div className='arrival_schedule'>Llegando a las 9:18 </div>
            </div>
            <div className='arrival_timer' style={{color: '#1E3480'}}>
                <div className='arrival_timer_num' >2 </div>
                <div className='arrival_timer_min'>min</div>            
            </div>
        </div>
    </div> */}