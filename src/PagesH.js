import React from 'react';
import './PagesH.css';
import BnHome from './BnHome';
import BnExplore from './BnExplore';
import Searchbox from './Searchbox';


class PagesH extends React.Component  {
  render(){
      const { onRouteChange } = this.props;
      return(
          <div className='PagesH padding5'>
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
          </div>
      );
  }
}


export default PagesH;