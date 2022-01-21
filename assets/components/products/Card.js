import React from 'react';

const Card = ({ product }) => {

    const truncate = ((str) => {
        return str.length > 32 ? str.substring(0, 25) + "..." : str;
    });

    return (
        <div className="card">
            <div className="container-img-card">
                <img src={product.picture} alt="" width="100%"/>
            </div>
            <div className="card-body d-flex flex-column align-items-center w-100">
                <h3 className="card-text">{truncate(product.name)}</h3>
                <h5>€{product.price}</h5>
                <div className="d-flex justify-content-around w-100 pb-3">
                    <button type="button" className="ncss-btn-primary-dark ncss-btn-primary-dark ">Ajouter au panier</button>
                    <button type="button" className="ncss-btn-primary-dark ncss-btn-primary-dark ">Voir l'article</button>
                </div>
            </div>
        </div>
    );
};

export default Card;