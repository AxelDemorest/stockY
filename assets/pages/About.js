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

                    <img className={"imgabout2"} src="https://stockx.com/about/wp-content/uploads/2021/04/transparent-pricing2021.png" />
                    <div className="card-body">
                        <p className="card-title">Transparent Pricing </p>
                        <p className="card-textabout">Our real-time marketplace works just like the stock market –  allowing you to buy and sell the most coveted items at their true market price.  </p>


                    </div>
                </div>


                <div className="card cardabout2" >

                    <img className={"imgabout3"} src="https://stockx.com/about/wp-content/uploads/2021/04/global-access2021.png" />
                    <div className="card-body">
                        <p className="card-title">Global Access </p>
                        <p className="card-textabout">Whether it’s pre-release, regionally limited, or “sold out” – our millions of customers from over 200+ countries allow you to easily secure those hard-to-find, coveted items.  </p>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;