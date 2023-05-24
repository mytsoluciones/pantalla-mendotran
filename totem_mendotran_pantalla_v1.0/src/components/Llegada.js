import React from "react";
import './Arrivals.css'

const Llegada = (props) => {
    return (
        <div className='arrivals_box'>
            <div className='arrival_data' style={{top: `${props.spaceBox}px`}}>
                <div className='arrival_color' style={{background: `#${props.color}`}}></div>
                    <div className='arrival_number'>{props.routeShortName}</div>
                        <div className='arrival_description'> 
                            <div className='arrival_addres'>{props.tripHeadsign.slice(0,32)}</div>
                    
                                { props.predicted ? //el horario es estimado ? 
                                    <div>
                                        <div className='arrival_state_box' style={{background: '#1E3480'}}>
                                            <div className='arrival_state_data'> Estimado</div>
                                        </div>
                                        <div className='arrival_schedule'>
                                            Llegando a las {props.predictedArrivalTime.substring(0, props.predictedArrivalTime.length - 3)}
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className='arrival_state_box' style={{background: '#686868'}}>
                                            <div className='arrival_state_data'>Planificado</div>
                                        </div>
                                        <div className='arrival_schedule'>
                                            Llegando a las {props.scheduledArrivalTime.substring(0, props.scheduledArrivalTime.length - 3)}
                                        </div>
                                    </div>
                                }
                            <div className="stop_id">{props.stopId}</div>
                            {/* <div className="stop_id">{props.stopId}</div> */}
                        </div>

                        
                        { props.predicted ?
                            <div className="arrival_test">
                                {/* {(((Math.round((props.delayTimePredicted/1000)/60)) < 0) || ((Math.round((props.delayTimePredicted/1000)/60)) === 0)) ? //el horario es negativo ? */}
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
