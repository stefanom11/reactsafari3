import React from 'react';
import './Bn.css';

class Bn extends React.Component {
  //render
  render(){
  const { text, route, onRouteChange } = this.props;
  return(
    <div className='bn h40 maxw270 t4 shadow verde b1blu radius5' onClick={()=>onRouteChange(route)}>
      <p> {text} </p>
    </div>   
  );
}
}


export default Bn;