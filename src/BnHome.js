import React from 'react';
import './BnHome.css';


const BnHome = () => {
  return(
    <div className='BnHome maxw270 h40'>
        <div className='BnHome-content'>
            <div className='BnHome-icon'>
                <div className='row-es-12 row-s-12 m-hidden'>
                   <i id='SDMenuIcon' class='fas fa-bars'></i>
                </div>
            </div>
            <p className='BnHome-text t5'>ROYALSAFARI</p>
        </div>  
    </div>
  );
}


export default BnHome;