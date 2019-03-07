import React from 'react';
import './BookBc.css';
import LbSquare from './LbSquare';
import car from './CAR.png';
import jeep from './JEEP.png';
import van from './VAN.png';
import vehicle from './VEHICLE.png';



const BookBc = ({text, text1}) => {
  return(
<div className='BookBc flxcenter col-es-12 col-s-12'>
            <div className='col-es-0 col-s-2 m-hidden'></div>
            <div className='BookBc-content col-es-12 col-s-8 col-m-12'>
                <div className='BookBc-header padding15'>
                    <p className='BookBc-title' > <span className="t1">{text}</span> <br /> {text1} </p>
                </div>              
                <div className='flxcenter col-es-12 col-s-12'>
                    <div className='col-es-0 col-s-0 col-m-2'></div>
                    <div className='flxcenter col-es-12 col-s-12 col-m-8'>
                        <LbSquare bgimage={car}/>
                        <LbSquare bgimage={jeep}/>
                        <LbSquare bgimage={van}/>
                        <LbSquare bgimage={vehicle}/>          
                    </div>
                    <div className='col-es-0 col-s-0 col-m-2'></div>
                </div>
            </div>
            <div className='col-es-0 col-s-2 m-hidden'></div>
        </div>
    
    );
}


export default BookBc;