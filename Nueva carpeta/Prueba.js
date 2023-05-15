import React from "react";
import './Arrivals.css'

const Prueba = (props) => {
    return (
        <div className='arrivals_box'>
            <div className='arrival_data' style={{top: "455px"}}>
                <div className='arrival_color' style={{background: '#FE7018'}}></div>
                <div className='arrival_number'>{props.routeShortName}</div>
                <div className='arrival_description'> 
                    <div className='arrival_addres'>{props.tripHeadsign}</div>
                    <div className='arrival_state_box' style={{background: '#1E3480'}}>
                        <div className='arrival_state_data'>1 min tarde</div>
                    </div>
                    <div className='arrival_schedule'>Llegando a las 9:18</div>
                </div>
                <div className='arrival_timer' style={{color: '#1E3480'}}>
                    <div className='arrival_timer_num' >2</div>
                    <div className='arrival_timer_min'>min</div>            
                </div>
            </div>
        </div>
    )
}

export default Prueba;