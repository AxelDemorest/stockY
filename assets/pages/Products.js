import React from 'react';
import "../styles/pages/products.css"

const Products = () => {
    return (
        <div>

        <div className="cardproduct" >
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn.shopify.com/s/files/1/0562/3863/7217/products/nike-dunk-low-retro-white-black-2021.gif?v=1622297530" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Dunk low panda</h5>
                            <p className="card-text" > PRIX : 230€   </p>
                            <p className="card-text">DECRIPTION DE LA PAIRE : This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btnn btn-dark" type="button">Ajouter panier </button>
                                <p className="card-text"><small className="text-muted">Stock : 150</small></p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>


        </div>
    );
};

export default Products;