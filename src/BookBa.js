import React from 'react';
import './BookBa.css';



const BookBa = () => {
  return(
        <div className='BookBa flxcenter'>
            <div className='col-es-1 col-s-2'></div>
            <div className='BookBa-content flxcenter col-es-10 col-s-8 padding15 radius5'>
                <input className="BookBa-input h40 col-es-12 col-s-12 col-m-6 tl-roundcorner borderb-none m-borderr-none es-tr-roundcorner s-tr-roundcorner  m-tr-roundcorner-none " id="from" placeholder="From" /> 
                <input className="BookBa-input h40 col-es-12 col-s-12 col-m-6 m-tr-roundcorner borderb-none" id="to" placeholder="To" />
                <input className="BookBa-input h40 min-col-es-12 min-col-s-12 min-col-m-6 col-es-12 col-s-12 col-m-6 m-bl-roundcorner es-borderb-none s-borderb-none m-borderb m-borderr-none" type="date" id="when" placeholder="When" />
                <div className="col-es-12 col-s-12 col-m-6">
                    <input id="nights" className='BookBa-input h40 col-es-6 col-s-6 borderr-none es-bl-roundcorner s-bl-roundcorner m-bl-roundcorner-none' type="number" placeholder="How many nights?" />
                    <input className="BookBa-input h40 col-es-6 col-s-6 br-roundcorner" id="people" type="number" placeholder="How many people?" />
                </div>
            </div>
            <div className='col-es-1 col-s-2'></div>
        </div>
    
    );
}


export default BookBa;