import React from 'react';
import './Sticker.css';


const Sticker = ({text, text1}) => {
  return(
      <div className='col-es-12 col-s-12 col-m-4 padding3'>
          <div className='sticker h80 radius5 col-es-12 col-s-12'>
              <p className='sticker-text'> <span className="es-t2 s-t2 m-t2">{text}</span> <br /> {text1} </p>
          </div>
      </div>
      
  );
}


export default Sticker;
