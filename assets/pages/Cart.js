import React from 'react';
import "../styles/pages/cart.css";

const Cart = () => {
    return (
        <div className="cart d-flex flex-row justify-content-center">
            <div className="section-cart section-left-cart bg-white">
                <h2>Mon panier</h2>
                <hr/>
                <div className="d-flex flex-row justify-content-end">
                    <h6 className="order-price-cart">Sous-total</h6>
                    <h6>35.99€</h6>
                </div>
            </div>
            <div className="section-cart section-right-cart bg-white">
                <h2>Total</h2>
                <hr/>
                <button>Valider la commande</button>
            </div>
        </div>
    );
};

export default Cart;