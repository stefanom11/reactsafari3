import React from 'react';
import './Searchbox.css';


const Searchbox = () => {
  return(
    <div className='Searchbox w270 h40 padding3 radius5'>
      <i class='fa fa-search Searchbox-icon'></i>
      <input class='Searchbox-input' type='search' placeholder='Discover...'></input>
    </div>
  );
}


export default Searchbox;