import React from 'react'
import SampleBox from '../utils/sample-box/Sample-box'
import './How-it-work.scss'
import search from '../../assets/icons/search.svg'
import hands from '../../assets/icons/handshake.svg'
import alert from '../../assets/icons/alert.svg'


const HowItWork = () => {

    const boxDetails = [
        {id:1,bkcolor:'#ffffff',iconColor:'#f6f6f6',color:'#666666',title:'Find Homes',bColor:'#c4c4c481',icon:search},
        {id:2,bkcolor:'#297EFF',iconColor:'#5A9CFF',color:'#ffffff',title:'Meet Roommates',bColor:'#ffffff',icon:hands},
        {id:3,bkcolor:'#ffffff',iconColor:'#f6f6f6',color:'#666666',title:'Make It Official',bColor:'#c4c4c481',icon:alert}
    ];

    return ( 
        <div className="how-container">
            <h2>How It Work</h2>
            <p>A New Way Of Working For Many Of Professionals.</p>
            <div className="boxes-container">
                {boxDetails.map(detail=>(
                    <SampleBox
                        key={detail.id}
                        bkColor={detail.bkcolor}
                        iconColor={detail.iconColor}
                        color={detail.color}
                        title={detail.title}
                        bColor={detail.bColor}
                        icon={detail.icon}
                    />
                ))}
            </div>
        </div>

        
        
     );
}
 
export default HowItWork;