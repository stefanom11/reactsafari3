import React from 'react';
import './BookBd.css';
import LbRectangular from './LbRectangular';
import tent1 from './TENT1.png';
import tent2 from './TENT2.png';
import tent3 from './TENT3.png';
import room1 from './ROOM1.png';
import room2 from './ROOM2.png';

const BookBd = () => {
  return(  
    <div className='BookBd flxcenter col-es-12 col-s-12'>
        <div className="col-es-0 col-s-1 m-hidden">
        </div>
        <div className="BookBd-content col-es-12 col-s-10 col-m-12">
            <div className='BookBb-header padding15'>
                <p className='BookBb-title' > <span className="t1">Accomodation</span> <br /> Select your preferred Accomodation type or choose directly from the accomodations list </p>
            </div>
            <div className="flxcenter col-es-12 col-s-12" style={{padding:5}}>
                <div className="col-es-0 col-s-0 col-m-2">
                </div>
                <div className="flxcenter col-es-12 col-s-12 col-m-8">
                    <LbRectangular bgimage={tent1}/>
                    <LbRectangular bgimage={room1}/>
                    <LbRectangular bgimage={tent2}/>
                    <LbRectangular bgimage={room2}/>
                    <LbRectangular bgimage={tent3}/>
                    <LbRectangular bgimage={room2}/>                  
                </div>       
                <div className="col-es-0 col-s-0 col-m-2">
                </div>
            </div>     
        </div>
        <div className="col-es-0 col-s-1 m-hidden">
        </div>   
    </div>


  );
  }


export default BookBd;