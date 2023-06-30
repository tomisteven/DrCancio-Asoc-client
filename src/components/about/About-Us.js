import React from "react";
import './About-Us.scss'
import house from '../../assets/house.jpg'

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="dotted"></div>
      <div className="dotted dTwo"></div>
      <div className="dotted dThree"></div>
      <h2 >About Us</h2>
      <p className="about-phrase"> A New Way Of Working For Many Of Professionals.</p>
      <div className="about-content">
        <div className="blue-shadow"></div>
        <img className="about-image" src={house} alt="main-house" />
        <div className="about-p">
          <h3>Our Story</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div className="blue-border"></div>
      </div>
    </div>
  );
};

export default AboutUs;
