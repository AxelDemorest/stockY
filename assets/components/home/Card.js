import React from 'react';

const Card = ({ product }) => {

    const truncate = ((str) => {
        return str.length > 22 ? str.substring(0, 20) + "..." : str;
    });

    return (
        <div className="card sneakerscard" >
            {/*https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Bred-Patent/Images/Air-Jordan-1-Retro-High-OG-Bred-Patent/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1633542046&h=320&fm=webp*/}
            <img src={product.picture} className="card-img-top" alt="img1"/>
            <div className="card-body">
                <p className="card-title mb-1">{truncate(product.name)}</p>
                <p className="card-text category-card text-secondary">Catégorie</p>
                <p className="card-text mb-0">€{product.price}</p>
            </div>
                <div className="d-flex justify-content-center">
                    <a href="#" className="card-bottom-link">Voir plus</a>
                </div>
        </div>
    );
};

export default Card;