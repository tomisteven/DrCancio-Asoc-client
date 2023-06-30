import React from 'react';
import './Footer.scss'

const Footer = () => {
    return ( 
        <footer>
            <div className="main-container">

                <div className="footer-navbar">
                    <a href="!#" className="footer-name">Amazing Homes</a>
                    <div className="socials">
                        <a className="follow-us"href="!#">Follow Us</a>
                        <div className="media">
                            <a href="!#"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="!#"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="!#"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="!#"><ion-icon name="logo-linkedin"></ion-icon></a>
                        </div>
                    </div>
                </div>

                <div className="options">
                    <div className="menu">
                        <div className="popular">
                            <h3>Polular Search</h3>
                            <ul>
                                <li> <a href="!#"> Aparment For Rent </a> </li>
                                <li> <a href="!#"> Aparment Low To Hide </a> </li>
                                <li> <a href="!#"> Offices For Buy </a> </li>
                                <li> <a href="!#"> Offices For Rent </a> </li>
                            </ul>
                        </div>
                        <div className="homepress">
                        <h3>Homepress Markets</h3>
                            <ul>
                                <li> <a href="!#"> Los Angeles Offices </a> </li>
                                <li> <a href="!#"> Las Vegas Apartment </a> </li>
                                <li> <a href="!#"> Sacramento Townhome </a> </li>
                                <li> <a href="!#"> San Francisco Offices </a> </li>
                            </ul>
                        </div>
                        <div className="quick">
                        <h3>Quick Links</h3>
                            <ul>
                                <li> <a href="!#"> Pricing Plan </a> </li>
                                <li> <a href="!#"> FQA </a> </li>
                                <li> <a href="!#"> About Us </a> </li>
                                <li> <a href="!#"> Contact Us </a> </li>
                            </ul>
                        </div>
                    </div>
                    
                    <form className='form' action="!#">
                        <input type="text" name="name" placeholder="Your Name"/>
                        <input type="text" name="email" placeholder="Your email"/>
                        <input className="button"type="submit" value="Subscribe"/>
                    </form>
                    
                </div>

                <p className="copyright" >@Amazing Homes 2020 Developed by Jose Rangel (Desing by Kawsar Ahmed) </p>
                
            </div>
        </footer>
     );
}
 
export default Footer;