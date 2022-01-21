import React, {useEffect, useState} from 'react';
import "../styles/pages/catalog.css"
import Card from "../components/products/Card";
import axios from "axios";

const Catalog = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(function (response) {
                setProducts(response.data)
            })
    }, [])

    return (
        <div className="products">
            <div className="w-75 title-list-products">
                <h2>Liste des produits</h2>
                <hr />
            </div>
            <div className="list-products">
                {products.map((product) => (
                    <Card product={product} key={product.name} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;