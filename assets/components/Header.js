import React from 'react';
import '../styles/components/header.css';

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
                            <li>Catalogue</li>
                            <li>À propos</li>
                            <li>Panier</li>
                            <li>Mon compte</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;