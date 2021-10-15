import React from 'react';
import img1 from '../../../Asset/img/1250211.png';
import img2 from '../../../Asset/img/1250212.png';
import img3 from '../../../Asset/img/1256506.png';
import img4 from '../../../Asset/img/1256586.png';
import './WhyTrustUs.css';


const WhyTrustUs = () => {

    const data = [
        {
            img: img1,
            title: "All specialist",
            content: "You can Reach out Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel"
        },
        {
            img: img2,
            title: "Private & Secure",
            content: "You can Reach out Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel"
        }, {
            img: img3,
            title: "More Customers",
            content: "You can Reach out Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel"
        }, {
            img: img4,
            title: "24/7 Support",
            content: "You can Reach out Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel"
        },
    ]




    return (
        <div className="trust-us-container">
            <div className="trust-us">
                <div className="trust-us-title">
                    <h1>Why You Should Trust Us? <br />
                        Get know about Us</h1>
                </div>
                <div className="trust-us-card">

                    {
                        data.map(dt => <div className="single-card"><img src={dt.img} alt="" />
                            <h5 className="title">
                            {dt.title}
                            </h5>
                            <p className="content">
                            {dt.content}
                            </p></div>)
                    }


                </div>
            </div>
        </div>
    );
};

export default WhyTrustUs;