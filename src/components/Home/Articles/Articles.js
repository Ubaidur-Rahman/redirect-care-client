import React from 'react';
import img1 from '../../../Asset/img/1250211.png';
import './Articles.css';

const Articles = () => {

    const articleData= [
        {
            img: img1,
            title: 'How to Decrese the leve of adipose in the body?',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,commodi repudiandae.',
            authorImg: img1,
            authorName: 'Abdullah',
            authorCategory: 'Food and Health'
        },
        {
            img: img1,
            title: '',
            details: '',
            authorImg: '',
            authorName: '',
            authorCategory: ''
        },
        {
            img: img1,
            title: '',
            details: '',
            authorImg: '',
            authorName: '',
            authorCategory: ''
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