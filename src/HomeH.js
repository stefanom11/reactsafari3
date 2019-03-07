import React from 'react';
import './HomeH.css';
import HomeHa from './HomeHa';
import HomeHb from './HomeHb';
import HomeHc from './HomeHc';
import App from './App';


class HomeH extends React.Component{
  //render
  render(){
    const { onRouteChange } = this.props;
    return(
      <div className='HomeH padding5'>
          <HomeHa />
          <p className="es-t1 s-t1 m-t1" onClick={()=>onRouteChange('book')}> Go beyond traditional Safaris</p>
          <HomeHb text='We offer the cheapest and the highest quality Safaris. The choice is yours!' onRouteChange={App.onRouteChange}/>
          <div className='col-es-12 col-s-12 h80'></div>
          <HomeHc />
          <div className='col-es-12 col-s-12 h80'></div>
      </div>
    );
  }
}

export default HomeH;













