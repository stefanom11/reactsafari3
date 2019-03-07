import React, { Component } from 'react';
import './App.css';
import HomeHa from './HomeHa';
import HomeHb from './HomeHb';
import HomeHc from './HomeHc';
import PagesH from './PagesH';
import BookB from './BookB';
import PagesF from './PagesF';

import HomeBa from './HomeBa';
import {news} from './news';



class App extends Component {
 
//constructor

  constructor(){
    super();
    this.state = {
      route: 'home'
    }

  }



//methods

  onRouteChange = (route) => {
    this.setState({route: route});
  }



//render

  render() {
    return (
      <div >

        {this.state.route === 'home'

        ?

        <div className='home'>
          <div className='HomeH padding5'>
            <HomeHa onRouteChange={this.onRouteChange} />
            <p className="es-t1 s-t1 m-t1" > Go beyond traditional Safaris</p>
            <HomeHb text='We offer the cheapest and the highest quality Safaris. The choice is yours!' onRouteChange={this.onRouteChange}/>
            <div className='col-es-12 col-s-12 h80'></div>
            <HomeHc />
            <div className='col-es-12 col-s-12 h80'></div>
          </div>
          <div className='HomeB'>
            <div className='col-es-12 col-s-12 h80'></div>
            <HomeBa news={news} />
            <div className='col-es-12 col-s-12 h80'></div>
          </div>
          <PagesF />
        </div>


        :


        <div>

          <PagesH onRouteChange={this.onRouteChange}/>

          <BookB />

          <PagesF />

        </div>


        }      

      </div>
           
    );
  }
}

export default App;
