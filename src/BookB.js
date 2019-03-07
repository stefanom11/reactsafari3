import React from 'react';
import './BookB.css';
import BookBa from './BookBa';
import BookBb from './BookBb';
import BookBc from './BookBc';
import BookBd from './BookBd';
import BookBe from './BookBe';

const BookB = () => {
  return(
        <div className='BookB'>
            <div className='col-es-12 col-s-12 h80'></div>
            <BookBa />
            <div className='col-es-12 col-s-12 h80'></div>
            <BookBb text={'Guide'} text1={'Select the desired guide experience or choose directly from the guides list'} />
            <div className='col-es-12 col-s-12 h80'></div>
            <BookBc text={'Vehicle'} text1={'Select your preferred vehicle type or choose directly from the vehicles list'}/>
            <div className='col-es-12 col-s-12 h80'></div>
            <BookBd />
            <div className='col-es-12 col-s-12 h80'></div>
            <BookBe />
        </div>  
  );
  }


export default BookB;