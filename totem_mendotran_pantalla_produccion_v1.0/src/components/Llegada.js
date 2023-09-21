//Componente que muestra los datos de cada arribo. Los parámetros son:
// color de la linea
// Numero de la linea
// Nombre del Recorrido
// Color de la linea
// Tiempo estimado o programado de llegada
// Numero de parada e la que llega la linea

import React from "react";
import './Arrivals.css'

const Llegada = (props) => {
    return (
        //Box que contiene y muestra los datos
        <div className='arrivals_box'>
            {/* Margen top */}
            <div className='arrival_data' style={{top: `${props.spaceBox}px`}}>
                {/* Color */}
                <div className='arrival_color' style={{background: `#${props.color}`}}></div>
                    {/* Numeo de Linea */}
                    <div className='arrival_number'>{props.routeShortName}</div>
                        <div className='arrival_description'> 
                            {/* Nombre del recorrido */}
                            <div className='arrival_addres'>{props.tripHeadsign.slice(0,32)}</div>
                    
                                { props.predicted ? //el horario es estimado ? 
                                    <div>
                                        {/* Color azul */}
                                        <div className='arrival_state_box' style={{background: '#1E3480'}}>
                                            <div className='arrival_state_data'> Estimado</div>
                                        </div>
                                        {/* Tiempo de llegada */}
                                        <div className='arrival_schedule'>
                                            Llegando a las {props.predictedArrivalTime.substring(0, props.predictedArrivalTime.length - 3)}
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        {/* Color gris */}
                                        <div className='arrival_state_box' style={{background: '#686868'}}>
                                            <div className='arrival_state_data'>Planificado</div>
                                        </div>
                                        {/* Tiempo de llegada */}
                                        <div className='arrival_schedule'>
                                            Llegando a las {props.scheduledArrivalTime.substring(0, props.scheduledArrivalTime.length - 3)}
                                        </div>
                                    </div>
                                }
                                {/* Código de la parada */}
                            <div className="stop_id">{props.stopId}</div>
                        </div>

                        
                        { props.predicted ?
                            <div className="arrival_test">
                                {(((Math.round(props.delayTimePredicted/1000)/60) < 3)) ? //el horario es negativo ?
                                    <div className='arrival_timer' style={{color: '#1E3480'}}>
                                        <div className='arrival_timer_num_arribando'>Llegando</div>
                                        {/* <div className='arrival_timer_num'>0000</div> */}
                                        <div className='arrival_timer_min'>{null}</div>
                                        {/* <div className='arrival_timer_min'>1111</div> */}
                                    </div>
                                    :
                                    <div className='arrival_timer' style={{color: '#1E3480'}}>
                                        <div className='arrival_timer_num'>{Math.round((props.delayTimePredicted/1000)/60)}</div>
                                        <div className='arrival_timer_min'>min</div>
                                    </div>
                                }
                            </div>
                            :
                            <div>
                                {(((Math.round((props.delayTimeScheduled/1000)/60)) < 0) || ((Math.round((props.delayTimeScheduled/1000)/60)) === 0) ) ?
                                    <div>
                                        <div className='arrival_timer' style={{color: '#686868'}}>
                                            <div className='arrival_timer_num_arribando'>Llegando</div>
                                            <div className='arrival_timer_min_arribando'>{null}</div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className='arrival_timer' style={{color: '#686868'}}>
                                            <div className='arrival_timer_num'>{Math.round((props.delayTimeScheduled/1000)/60)}</div>
                                            <div className='arrival_timer_min_arribando'>min</div>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
            </div>
        </div>
    )
}

export default Llegada;
