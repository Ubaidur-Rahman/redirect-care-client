import React from 'react';
import headerImg from '../../../Asset/img/doctor-character-background_1270-84.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <header className="header">

                <div className="header-content">
                    <h1>Find The Right <br />
                        <span className="doctor">Doctor</span> Get The <br />
                        Best Care</h1>
                    <p>Dental Clinic Skin Doctor Appointment Booking
                        Hospital, Healthcare Services Dentist</p>
                    <div>
                        <a href=""><button className="header-btn">Ask A Doctor</button></a>
                        <a href=""><button className="header-btn header-btn-2">Unlimited Chat</button></a>
                    </div>
                </div>

                <div className='header-img'>
                    <img src={headerImg} alt="" />
                </div>

            </header>
        </div>
    );
};

export default Header;