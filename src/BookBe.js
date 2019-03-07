import React from 'react';
import './BookBe.css';
import Bn from './Bn';

const BookBe = () => {
  return(
        <div className='BookBe'>
            <div className='BookBe-S col-es-12 col-s-12 m-hidden'>
                <Bn text={'CHECK DETAILS'} />
            <div className='col-es-12 col-s-12 h80'></div>
            </div>

            <div className='BookBe-M es-hidden s-hidden m-visible col-m-2 padding5'>
                <div className='BookBe-M-button bn h40 maxw270 t4 shadow verde b1blu radius5'>
                    <p> CHECK DETAILS </p>
                </div> 
            </div>
        </div>  
    


  );
  }


export default BookBe;