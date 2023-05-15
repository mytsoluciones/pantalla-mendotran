import React from "react";
import './Arrivals.css'

const Llegada2 = (props) => {
    return (
        <div className='arrivals_box'>
            <div className='arrival_data llegada2' style={{top: `${props.spaceBox}px`}}>
                <div className='arrival_color' style={{background: `#${props.color}`}}></div>
                    <div className='arrival_number'>{props.routeShortName}</div>
                        <div className='arrival_description'> 
                            <div className='arrival_addres'>{props.tripHeadsign.slice(0,34)}</div>
                    
                                { props.predicted ? //el horario es estimado ? 
                                    <div>
                                        <div className='arrival_state_box' style={{background: '#1E3480'}}>
                                            <div className='arrival_state_data'> Estimado</div>
                                        </div>
                                        <div className='arrival_schedule'>Llegando a las {props.predictedArrivalTime.substring(0, props.predictedArrivalTime.length - 3)}</div>
                                    </div>
                                    :
                                    <div>
                                        <div className='arrival_state_box' style={{background: '#686868'}}>
                                            <div className='arrival_state_data'>Planificado</div>
                                        </div>
                                        <div className='arrival_schedule'>Llegando a las {props.scheduledArrivalTime.substring(0, props.scheduledArrivalTime.length - 3)}</div>
                                    </div>
                                }
                   
                        </div>

                        { props.predicted ?
                            <div>
                                {(((Math.round((props.delayTimePredicted/1000)/60)) < 0) || ((Math.round((props.delayTimePredicted/1000)/60)) === 0)) ? //el horario es negativo ?
                                    <div className='arrival_timer' style={{color: '#1E3480'}}>
                                        <div className='arrival_timer_num'>{null}</div>
                                        <div className='arrival_timer_min'>{null}</div>
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
                                            <div className='arrival_timer_num'>{null}</div>
                                            <div className='arrival_timer_min_arrivando'>{null}</div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className='arrival_timer' style={{color: '#686868'}}>
                                            <div className='arrival_timer_num'>{Math.round((props.delayTimeScheduled/1000)/60)}</div>
                                            <div className='arrival_timer_min_arrivando'>min</div>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
            </div>
        </div>
    )
}

export default Llegada2;
