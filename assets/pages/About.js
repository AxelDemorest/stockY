import React from 'react';
import "../styles/pages/about.css"

const About = () => {
    return (
        <div>

            <div className={"cardabout"} >
                <div className="card cardabout2" >

                    <img className={"imgabout"} src="https://stockx.com/about/wp-content/uploads/2021/04/verified-authentic2021-400x230.png" />
                    <div className="card-body">
                        <p className="card-title-about">100% Vérifié Authentique </p>
                        <p className="card-textabout">Chaque article vendu passe par notre processus exclusif de vérification en plusieurs étapes avec notre équipe d'experts authentificateurs.

                        </p>

                    </div>
                </div>


                <div className="card cardabout2" >

                    <img className={"imgabout2"} src="https://stockx.com/about/wp-content/uploads/2021/04/transparent-pricing2021.png" />
                    <div className="card-body">
                        <p className="card-title-about">Tarification transparente </p>
                        <p className="card-textabout">Notre marché en temps réel fonctionne exactement comme le marché boursier - vous permettant d'acheter et de vendre les articles les plus convoités à leur véritable prix du marché.  </p>


                    </div>
                </div>


                <div className="card cardabout2" >

                    <img className={"imgabout3"} src="https://stockx.com/about/wp-content/uploads/2021/04/global-access2021.png" />
                    <div className="card-body">
                        <p className="card-title-about">Accès mondial </p>
                        <p className="card-textabout">Qu'il s'agisse d'une pré-sortie, d'une limitation régionale ou d'une « rupture de stock », nos millions de clients dans plus de 200 pays vous permettent de sécuriser facilement ces articles convoités et difficiles à trouver.  </p>


                    </div>
                </div>
            </div>










        </div>
    );
};

export default About;