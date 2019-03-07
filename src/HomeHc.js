import React from 'react';
import './HomeHc.css';
import Sticker from './Sticker';


const HomeHc = () => {
  return(
    <div className="flxcenter col-es-12 col-s-12">
        <div className="es-hidden row-s-12 col-s-2"></div>
        <div className="flxcenter col-es-12 col-s-8">
            <Sticker text='41' text1='Guides'/>
            <Sticker text='23' text1='Vehicles'/>
            <Sticker text='25' text1='Accomodations'/>         
        </div>
        <div className="es-hidden row-s-12 col-s-2 m-hidden"></div>       
    </div> 
  );
}


export default HomeHc;






