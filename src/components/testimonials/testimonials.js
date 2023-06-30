import React from 'react'
import './testimonials.scss'
import TestimonialA from '../utils/testimonial/Testimonial-1'
import TestimonialB from '../utils/testimonial/testimonial-2'
import Profile01 from '../../assets/Profile01.jpg'
import Profile03 from '../../assets/Profile03.jpg'


const Testmonials = () => {

    const userArray = [{photo:Profile01},{photo:Profile03}]
    
    return ( 
        <div className="testimonials-main">
            <h2>Testimonials</h2>
            <p className="description" >What They Are Saying</p>
            <div className="testimonials-container">
                    <div className="dotted"></div>
                    <div className="dotted d2 "></div>
                    <div className="dotted d3 "></div>
                    <div className="dotted d4 "></div>
                    {userArray.map(user=>(
                        <TestimonialA
                            photo={user.photo}
                        />
                    ))}
                    
                    <div className="testb-container">
                        <TestimonialB/>
                    </div>
            </div>
        </div>
     );
}
 
export default Testmonials;