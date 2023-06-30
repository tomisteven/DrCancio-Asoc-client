import React from "react";
import BlueButton from '../utils/blueButton/BlueButton'
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="blue-shadow"></div>
      <div className="round-pic"></div>
      <div className="header-container">
        <div className="header-navbar">
          <div className="top-bar">
            <a className="title" href="!#">
              Amazing Homes
            </a>
            <div className="links">
              <a href="!#">How it Works</a>
              <a href="!#">Features</a>
              <a href="!#">About</a>
            </div>
          </div>
          <button className="contact-us" type="button">
            Contact Us
          </button>
        </div> {/*  Navbar */}
        <div className="message">
          <h1>Find Your Perfect Home</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
          <BlueButton 
            text='Contact Us'
          />
        </div> {/*  Message */}
        
            <form className="search-bar" action="!#">
                <div className="text-after">
                  <input className="search text" placeholder="Entry Landmark Location" type="text" name="" id=""/>
                </div>
                <div className="type">
                    <select className="search" name="type" id="">
                        <option value="all">All Properties</option>
                        <option value="house">House</option>
                        <option value="apart">Apartment</option>
                    </select>
                </div>
                <div className="type">
                <select className="search room" name="room" id="">
                    <option value="">Room</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                </div>
                <div className="type">
                <select className="search price" name="price" id="">
                    <option value="any">Any Price</option>
                    <option value="">100 K to 200 K</option>
                    <option value="">200 K to 400 K</option>
                    <option value="">+ 400 K </option>
                </select>
                </div>
                <input className="search button" type="submit" value="SEARCH NOW"/>
            </form>

      </div>
    </header>
  );
};

export default Header;
