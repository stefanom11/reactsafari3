import React from 'react';
import './LbSquare.css';



const LbSquare = ({bgimage}) => {
  return(

        <div className='LbSquare padding5 col-es-6 col-s-6 col-m-3'>
            <input className='LbSquare-input' type="radio" name="guideexperience" id="gold" value="gold" />
            <label className='LbSquare-label h100 w100' style={{backgroundImage: `url(${bgimage})`}}></label>
        </div>

    
    );
}


export default LbSquare;
