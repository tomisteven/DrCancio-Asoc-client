import React from 'react';
import './Carousel.scss'
import Slider from 'react-slick'
import Card from '../card/card';
import bath01 from '../../../assets/bath01-small.jpg'
import kitchen01 from '../../../assets/kitchen01-small.jpg'
import living01 from '../../../assets/living01-small.jpg'
import living02 from '../../../assets/living02-small.jpg'
import living03 from '../../../assets/living03-small.jpg'
import living04 from '../../../assets/living04-small.jpg'


const Carousel = () => {

    const cards = [
        {pic:bath01,id:1},
        {pic:kitchen01,id:2},
        {pic:living01,id:3},
        {pic:living02,id:4},
        {pic:living03,id:5},
        {pic:living04,id:6}
    ];
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        centerMode: false,
        mobileFirst: false,
        variableWidth: true
    };



    return (
            <Slider {...settings}>
                {cards.map(card=>(
                    <div className="card-cover" key={card.id}  style={{width:290}} >
                        <div className="card-item" >
                            <div className="card">
                                <Card pic={card.pic}/>
                            </div>
                        </div>
                    </div>
                     
                ))}
                    

                   
            </Slider>
    )
}

export default Carousel