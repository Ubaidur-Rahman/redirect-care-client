import React from 'react';
import qualityCareImg from '../../../Asset/img/portrait-happy-family-with-little-child-looking-camera-isolated_186202-6369.jpg';
import './QualityCare.css';

const QualityCare = () => {
    return (
        <div className="qualityCare-container">
            <div className="qualityCare">
                <div className="qualityCare-img">
                    <img src={qualityCareImg} alt="" />
                </div>
                <div className="qualityCare-content">
                    <h1>We Provide Quality <br /> Care that Treats <br /> Everyone</h1>
                    <p>We Provide Primary Care when we need it, get personalized and highQuality healthcare by talking to top medical doctors</p>
                    <div>
                        <a href=""><button className="btn">Personal</button></a>
                        <a href=""><button className="btn">Family</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualityCare;