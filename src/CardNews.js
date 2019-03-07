import React from 'react';
import './CardNews.css';

const CardNews = ({image, title, description}) => {
    return (
      <div className='CardNews Highlight minw270 w270 margin5 h400 border'>
        <div className='AppDcard-head row-es-6 row-s-6 col-es-12 col-s-12'>
          <img className='AppDcard-image' draggable='false' src={image} alt='ciao' />
        </div>
        <div className='AppDcard-body row-es-4 row-s-4'>
          <p className='AppDcard-title t5' draggable='false'> {title} </p>
          <p className='AppDcard-description' draggable='false'> {description} </p>
        </div>
        <div class='row-es-2 row-s-2'>
        </div>
      </div>
    );
}

export default CardNews;