import React from 'react';
// import img1 from '../../../Asset/img/1256586';
// import img2 from '../../../Asset/img/1256586';
// import img3 from '../../../Asset/img/1256586';
// import img4 from '../../../Asset/img/1256586';
// import img5 from '../../../Asset/img/1256586';
// import img6 from '../../../Asset/img/1256586';
// import img7 from '../../../Asset/img/1256586';
// import img8 from '../../../Asset/img/1256586';
// import img9 from '../../../Asset/img/1256586';
// import img10 from '../../../Asset/img/1256586';
// import img11 from '../../../Asset/img/1256586';
// import img12 from '../../../Asset/img/1256586';
import { default as img1, default as img10, default as img11, default as img12, default as img2, default as img3, default as img4, default as img5, default as img6, default as img7, default as img8, default as img9 } from '../../../Asset/img/1256506.png';
import './Consulting.css';

const Consulting = () => {

    const cardData = [
        {
            img: img1,
            title: 'Dermatology'
        },
        {
            img: img2,
            title: ''
        },
        {
            img: img3,
            title: ''
        },
        {
            img: img4,
            title: ''
        },
        {
            img: img5,
            title: ''
        },
        {
            img: img6,
            title: ''
        },
        {
            img: img7,
            title: ''
        },
        {
            img: img8,
            title: ''
        },
        {
            img: img9,
            title: ''
        },
        {
            img: img10,
            title: ''
        },
        {
            img: img11,
            title: ''
        },
        {
            img: img12,
            title: ''
        },
    ]

    return (
        <div className="consulting-container">
            <div className="consulting">
                <div className="consulting-title">
                    <h1>Our Consulting Specialties</h1>
                    <p>Ask A doctor Online and get quick medical advice for your health queries. <br /> Our medical panel consists of over 500+ from 40+ specialties </p>
                </div>
                <div className="consulting-card">
                    {
                        cardData.map(data =>
                            <div className="consulting-single-card">
                                <img src={data.img} alt="" />
                                <h5 className="title">
                                    {data.title}
                                </h5>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Consulting;