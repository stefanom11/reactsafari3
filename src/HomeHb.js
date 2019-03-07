import React from 'react';
import './HomeHb.css';
import Bn from './Bn';


class HomeHb extends React.Component {
  //render
  render(){
    const { text, onRouteChange } = this.props;
    return(
      <div className="flxcenter col-es-12 col-s-12">
          <div className="es-hidden row-s-12 col-s-2 m-hidden"></div>
          <div className="flxcenter col-es-12 col-s-8 col-m-12">
              <p className="es-t3 s-t3 m-t3 col-es-12 col-s-12 col-m-4"> {text} </p>
              <div className="col-es-12 col-s-12 m-hidden" style={{height: 25}}>
              </div>
              <div className="col-es-12 col-s-12 col-m-4" >
                  <Bn  text={'CUSTOMIZE YOUR SAFARI'} route={'book'} onRouteChange={onRouteChange}/>             
              </div>          
          </div>
          <div className="es-hidden row-s-12 col-s-2 m-hidden"></div>       
      </div>  
  );
}
}


export default HomeHb;