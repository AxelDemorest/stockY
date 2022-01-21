import React, {useEffect, useState} from 'react';
import "../styles/pages/home.css";
import Carousel from "../components/Carousel";
import Card from "../components/home/Card";
import axios from "axios";

const Home = () => {

    const [productsSelection, setProductsSelection] = useState([]);
    const [productsLastRelease, setProductsLastRelease] = useState([]);

    useEffect(() => {
        axios.get('/api/products/6')
            .then(function (response) {
                setProductsSelection(response.data)
            })

        axios.get('/api/products/6?orderBy=id')
            .then(function (response) {
                setProductsLastRelease(response.data)
            })
    }, [])

    return (
        <div className="home">
            <Carousel />
            <h2 className="title-category">Notre sélection</h2>
            <div className="newsneakers">
                {productsSelection.map((product) => (
                    <Card product={product} key={product.name} />
                ))}
            </div>

            <h2 className="title-category">Les dernières sorties</h2>
            <div className="newsneakers">
                {productsLastRelease.map((product) => (
                    <Card product={product} key={product.name} />
                ))}
            </div>

            <div className="d-flex flex-wrap w-100 container-section first-section">
                <section className="section-left w-50">
                    <div className="background-img-section first-section-img"/>
                </section>
                <section className="section-right w-50">
                    <div>
                        <h2>Des paires d'exceptions</h2>
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>
                    </div>
                </section>
            </div>
            <div className="d-flex flex-wrap w-100 container-section">
                <section className="section-right w-50">
                    <div>
                        <h2>Des paires d'exceptions</h2>
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>
                    </div>
                </section>
                <section className="section-left w-50">
                    <div className="background-img-section two-section-img"/>
                </section>
            </div>
        </div>
    );
};

export default Home;