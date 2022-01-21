import React, {useEffect, useState} from 'react';
import "../styles/pages/singleProduct.css";
import axios from "axios";
import {useParams} from "react-router-dom";

const SingleProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`/api/single-product/${id}`)
            .then(function (response) {
                setProduct(response.data)
            })
    }, [])

    return (
        <div className="singleProduct">
            <div className="w-50 d-flex justify-content-center">
                <img src={product.picture} width="80%" alt=""/>
            </div>
            <div className="w-50">
                <div className="d-flex flex-column pt-5">
                    <h3 className="">{product.name}</h3>
                    <p className="price-product">{product.price}€</p>
                    <h5>Description</h5>
                    <p className="description-product">{product.description ? product.description : "Pas de description"}</p>
                    <button className="add-to-cart-button">Ajouter au panier</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;