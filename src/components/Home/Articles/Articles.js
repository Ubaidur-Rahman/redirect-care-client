import React from 'react';
import img3 from '../../../Asset/img/1256586.png';
import img1 from '../../../Asset/img/1_wxte0RvJjY5q7NGBPBPwyw.jpeg';
import img4 from '../../../Asset/img/allopathy-Gastro.jpg';
import img2 from '../../../Asset/img/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg';
import img5 from '../../../Asset/img/young-woman-giving-herself-a-facial-at-home-1296x728-header.jpg';
import './Articles.css';

const Articles = () => {

    const articleData= [
        {
            img: img1,
            title: 'Food and health, Excerpt from the Worldview',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,commodi repudiandae.',
            authorImg: img2,
            authorName: 'Rafida',
            authorCategory: 'Food and Health'
        },
        {
            img: img5,
            title: 'How to Take Care of Your Skin',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,commodi repudiandae.',
            authorImg: img3,
            authorName: 'Nahian',
            authorCategory: 'Skin and Care'
        },
        {
            img: img4,
            title: 'What is a Gastroenterologist?',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,commodi repudiandae.',
            authorImg: img2,
            authorName: 'Ruby Roy',
            authorCategory: 'Gastrology'
        },
    ];

    return (
        <div className='articles-container'>
            <div className="articles">
                <div className="articles-title">
                    <h1>Our Recent Articles</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, <br />
                        molestiae quas vel sint commodi repudiandae.</p>
                </div>
                <div className="articles-card">
                {
                        articleData.map(article =>
                            <div className="articles-single-card">
                                <img className="data-image" src={article.img} alt="" />
                                <h5 className="title">
                                    {article.title}
                                </h5>
                                <p>
                                {article.details}
                                </p>
                                <a href=""> <button> Read more</button></a>
                                <hr />
                                <div className="author">
                                    <img src={article.authorImg} alt="" />
                                    <div>
                                    <h6 className="authorName">{article.authorName}</h6>
                                    <p className="authorCategory">{article.authorCategory}</p>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                <a href=""><button className="all-articles-btn">See All Article</button></a>
            </div>

        </div>
    );
};

export default Articles;