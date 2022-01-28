import React from 'react';
import '../styles/components/header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav className="navigation">
                <div className="container-header">
                    <div className="header-left">
                        <img src="https://zupimages.net/up/22/03/5ct9.png" width="35%" alt=""/>
                    </div>
                    <div className="header-right">
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="products">Catalogue</Link></li>
                            <li><Link to="about">À propos</Link></li>
                            <li><Link to="cart">Panier</Link></li>
                            <li><Link to="account">Mon compte</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;