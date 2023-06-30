import React from 'react';
import './testimonial-2.scss'
import profile from '../../../assets/Profile02.jpg'
import quote from '../../../assets/quote.svg'

const TestimonialB  = () => {
    return ( 
        <div className="testimonial-container">
            <div className="text-container">
                <img src={quote} alt="quote"/>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy.
                </p>
                <div className="blue-shadow"></div>
                <img className="profile-pic" src={profile} alt="Profile"/>
            </div>
            <p className="name" >Kawsar Ahmed</p>
            <p className="position">Ui Ux Designer</p>
        </div>
     );
}
 
export default TestimonialB;