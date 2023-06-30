import React from 'react'
import './Properties.scss'

import Card from '../utils/card/card';
import MainCard from '../utils/main-card/main-card'
import BlueButton from '../utils/blueButton/BlueButton';

import bath01 from '../../assets/bath01-small.jpg'
import kitchen01 from '../../assets/kitchen01-small.jpg'
import living01 from '../../assets/living01-small.jpg'
import living02 from '../../assets/living02-small.jpg'
import living03 from '../../assets/living03-small.jpg'
import living04 from '../../assets/living04-small.jpg'



const Properties = () => {
    const cards = [
        {pic:bath01,id:1},
        {pic:kitchen01,id:2},
        {pic:living01,id:3},
        {pic:living02,id:4},
        {pic:living03,id:5},
        {pic:living04,id:6}
    ];

    return ( 
        <div className="properties-container">
            <h2> Properties for Sale & Rent </h2>
            <p> Our Featured Properties For Sale and Rent </p>
            <div className="cards-container">
                <MainCard/>
                {cards.map(card=>(
                    <Card
                        key={card.id}
                        pic={card.pic}
                    />
                ))}
            </div>
            <div className="button-container">
                <BlueButton className="blueOne" text='Load More' />
            </div>


        </div>
     );
}
 
export default Properties;