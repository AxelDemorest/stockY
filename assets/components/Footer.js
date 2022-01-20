import React from 'react';
import '../styles/components/footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="row d-flex justify-content-center text-white pt-5">
                    <div className="col-2 d-flex flex-column align-items-center column">
                        <div>
                            <h5 className="mb-4">Nous contacter</h5>
                            <ul>
                                <li>contact@stocky.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center column">
                        <div>
                            <h5 className="mb-4">En savoir plus</h5>
                            <ul>
                                <li>Échanges & Remboursements</li>
                                <li>Mentions Légales</li>
                                <li>Politique de Confidentialité</li>
                                <li>CGU</li>
                                <li>CGV</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center column">
                        <div>
                            <h5 className="mb-4">Trouvez votre produit</h5>
                            <ul>
                                <li>Recherche</li>
                                <li>Moins de 300€</li>
                                <li>Prochaines Sorties</li>
                                <li>Recherche</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <div>
                            <h5 className="mb-4">Devise</h5>
                            <ul>
                                <li>EUR</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-rights">
                <p>©2022 StockY. Tous droits réservés.</p>
            </div>
        </div>
    );
};

export default Footer;