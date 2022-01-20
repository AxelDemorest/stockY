import React from 'react';
import "../styles/pages/about.css"

const About = () => {
    return (
        <div>

            <div className={"cardabout"} >
                <div className="card cardabout2" >

                    <img className={"imgabout"} src="https://stockx.com/about/wp-content/uploads/2021/04/verified-authentic2021-400x230.png" />
                    <div className="card-body">
                        <p className="card-title">100% Verified Authentic </p>
                        <p className="card-textabout">Every item sold goes through our proprietary multi-step verification process with our team of expert authenticators.  </p>

                    </div>
                </div>


                <div className="card cardabout2" >

                    <img className={"imgabout"} src="https://stockx.com/about/wp-content/uploads/2021/04/verified-authentic2021-400x230.png" />
                    <div className="card-body">
                        <p className="card-text">Air Jordan 6 Low </p>

                    </div>
                </div>


                <div className="card cardabout2" >

                    <img className={"imgabout"} src="https://stockx.com/about/wp-content/uploads/2021/04/verified-authentic2021-400x230.png" />
                    <div className="card-body">
                        <p className="card-text">Air Jordan 6 Low </p>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;