import React from 'react';
import image from '../../../Asset/img/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg';
import './BestDoctors.css';

const BestDoctors = () => {
    return (
        <div className="best-doctors-container">
            <div className="best-doctors">
                <div className="best-doctors-content">
                    <h1>We Have The Best <br />
                        Doctors Available <br />
                        In The City</h1>
                    <p>Possimus quis earum veniam
                        quasi aliquam eligendi, placeat qui corporis!</p>
                    <div className="list">
                        <ul>
                            <li>Emergency Cases</li>
                            <li>Modern Clinic</li>
                            <li>Expert Doctors</li>
                            <li>24/7 Help Center</li>
                        </ul>
                    </div>
                    <a href=""><button>See More</button></a>
                </div>
                <div className="best-doctors-img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BestDoctors;