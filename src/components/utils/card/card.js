import React from 'react';
import './Card.scss'
import user from '../../../assets/icons/user.svg'
import bed from '../../../assets/icons/bed.svg'
import bath from '../../../assets/icons/bathroom.svg'
import area from '../../../assets/icons/area.svg'


const Card = ({pic}) => {
    return ( 
        <div className="card">
            <div className="blue-shadow"></div>
            <img className="card-image" src={pic} alt="Bath"/>
            <div className="card-body">
                <div className="card-content">
                    <a href="!#">
                        <img src={user} alt="user"/>
                        <span>Vilma Jarvi by Redbrox </span>    
                    </a>
                    <h4><a className="card-title" href="!#">Jason Landville Appartment</a></h4>
                    <p> $350/mo <span>$790/mo</span> </p>
                </div>
            <div className="card-footer">
                <div className="footer-item">
                    <img src={bed} alt="bed"/>
                    <p>05 Bed</p>
                </div>
                <div className="footer-item">
                    <img src={bath} alt="bathtub"/>
                    <p>05 Bath</p>
                </div>
                <div className="footer-item">
                    <img src={area} alt="area"/>
                    <p>1899 sq.</p>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Card;