import React from 'react';
import './HomeHa.css';
import BnHome from './BnHome';
import BnExplore from './BnExplore';
import Searchbox from './Searchbox';


const HomeHa = ({onRouteChange}) => {
  return(
    <div className="flxcenter col-es-12 col-s-12">
        <div className="col-es-8 col-s-8 row col-m-4" onClick={()=>onRouteChange('home')}>
            <BnHome />
        </div>
        <div className="es-hidden s-hidden m-visible col-m-3">
            <BnExplore />
        </div>
        <div className="es-hidden s-hidden m-visible col-m-1"></div>
        <div className="es-hidden s-hidden m-visible col-m-4">
            <Searchbox />
        </div>      
    </div>  
  );
}


export default HomeHa;