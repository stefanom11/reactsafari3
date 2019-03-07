import React from 'react';
import './LbRectangular.css';



const LbRectangular = ({bgimage}) => {
  return(

        <div className='LbRectangular padding5 col-es-6 col-s-6'>
            <div className='LbRectangular-label h100 maxw270 col-es-12 col-s-12 border' style={{backgroundImage: `url(${bgimage})`}}>
              <input id="tent1person" className='LbRectangular-input col-es-12 col-s-12' placeholder='number of single rooms' list="numberofrooms" />
              <datalist id="numberofrooms">
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="4" />
                <option value="5" />
              </datalist>
            </div>
        </div>

    
    );
}


export default LbRectangular;