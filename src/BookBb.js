import React from 'react';
import './BookBb.css';
import LbSquare from './LbSquare';
import stargold from './STARGOLD.png';
import starsilver from './STARSILVER.png';
import starbronze from './STARBRONZE.png';
import guide from './GUIDE.png';



const BookBb = ({text, text1}) => {
  return(
<div className='BookBb flxcenter col-es-12 col-s-12'>
            <div className='col-es-0 col-s-2 m-hidden'></div>
            <div className='BookBb-content col-es-12 col-s-8 col-m-12'>
                <div className='BookBb-header padding15'>
                    <p className='BookBb-title' > <span className="t1">{text}</span> <br /> {text1} </p>
                </div>              
                <div className='flxcenter col-es-12 col-s-12'>
                    <div className='col-es-0 col-s-0 col-m-2'></div>
                    <div className='flxcenter col-es-12 col-s-12 col-m-8'>
                        <LbSquare bgimage={stargold}/>
                        <LbSquare bgimage={starsilver}/>
                        <LbSquare bgimage={starbronze}/>
                        <LbSquare bgimage={guide}/>          
                    </div>
                    <div className='col-es-0 col-s-0 col-m-2'></div>
                </div>
            </div>
            <div className='col-es-0 col-s-2 m-hidden'></div>
        </div>
    
    );
}


export default BookBb;