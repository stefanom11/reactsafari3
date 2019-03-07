import React from 'react';
import './HomeBa.css';
import CardNews from './CardNews';


const HomeBa = ({news}) => {
    return (
      <div className="HomeBa row-es-12 row-s-12">
        <div className="row-es-2 row-s-2 col-es-12 col-s-12" style={{paddingLeft: 15}}>
            <p className="t2" style={{display:'inline-block'}}>News from our latest journey</p>
            <i className="fas fa-long-arrow-alt-right" style={{color:'grey'}}></i>
        </div>
        <div id="weee" className='HomeBa-content row-es-10 row-s-10 col-es-12 col-s-12'>    
            {
                news.map(
                    (value,i)=>{
                        return (
                            <CardNews key={i} image={news[i].image} title={news[i].title} description={news[i].description} />
                        );
                    }
                )
            }
        </div>
        <button id="bnscrollleft" className='Button-left' onclick="ScrollLeftSlowly('weee')">
            <i class="fas fa-angle-left"></i>
        </button>
        <button id="bnscrollright" className='Button-right' onclick="ScrollRightSlowly('weee')">
            <i class="fas fa-angle-right"></i>
        </button>
        <div className="HomeBa-fixiOS noniOS-hidden col-es-12 col-s-12 row-es-11 row-s-11"></div>
        <div className="HomeBa-hidescrollbar col-es-12 col-s-12 row-es-1 row-s-1"></div>
    </div>
    );
}


export default HomeBa;