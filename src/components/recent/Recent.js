import React from 'react'
import Carousel from '../utils/carousel/Carousel'
import './Recent.scss'


const Recent = () => {
    return ( 
        <div className="recent-container">
            <h2>Recent</h2>
            <p>Recently Added Properties</p>
            <div className="carousel">
                <Carousel/>
            </div>
            
        </div>

     );
}
 
export default Recent;