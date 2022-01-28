import React, {useEffect, useState} from 'react';
import "../styles/pages/home.css";
import Carousel from "../components/Carousel";
import Card from "../components/home/Card";
import axios from "axios";
import jwt_decode from "jwt-decode";

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

    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDMyODkzMTQsImV4cCI6MTY0MzI5MjkxNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYXhlbC5kZW1vcmVzdEBnbWFpbC5jb20ifQ.ds9cm3VagDtdvpltA-Brzehc93UsAubII2To-6SBCyoIaOI9Uhn7Mww_ghwurZHg6WxlXKQeHks6FBY2moOnhhofbp_I8EHyOVt-QutEycOGNFen6HGl2Dg3lPEhz3k3OhoOiP6g8ZiEIcWbwKte8IpjGxbd7Whfeq33VjLsnwNsOCW83sfgzR50FJjOxcqx4lLYe3LmBM0j0Jzm1ilA9X64mEKJqWyTSq-2YzzluQci8_YFi960DN5UqYqyIKI09vd3S4magdKJEXyK16SE1_caFzBzp-MXkslhvbHCPyGpz9OYQLDIBvJyaAcXxC5EBb45HsHOVBxH6GsshYnOgs6ribahgiVeY9xP7NAvjyGGvgLImBRzmg6edfwIWzojvfd4YTtpJaY2LKfM7XaqCU0QLMlIgXJ6a-hheEMYOB9nxSJ20YaL7wR7pVnhumrD74SyNPwj1b8e4guSEeHTZGth5n2dGbRCo083EEKS8PsXZ_J9vb1I7Er9ciIyBp9gReDWaqlelk5r9sUXJrjIjRb9v15FxgcsooWSxz4EeoHr0s5v2KghfFbJZvAB9lXvpGJ2863J9LUgeKL1pFErPuhohRu46Rxicb59wYOwU8lHAxcsNyIis8uXMYooFpc8ToR8J1_w-15O2CvvdKI2yFP2XRaGCYOErbQRVxxW-TM";
    let decoded = jwt_decode(token);

    console.log(decoded);

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