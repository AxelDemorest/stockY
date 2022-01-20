import React, {useEffect, useState} from 'react';
import "../styles/pages/home.css";
import Carousel from "../components/Carousel";
import Card from "../components/home/Card";
import axios from "axios";

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products/6')
            .then(function (response) {
                setProducts(response.data)
            })
    }, [])

    return (
        <div className="home">
            <Carousel />
            <h2 className="title-category">Notre sélection</h2>
            <div className="newsneakers" >
                {products.map((product) => (
                    <Card product={product} />
                ))}
            </div>

            <h2 className="title-category">Les dernières sorties</h2>
            <div className="newsneakers" >
                {/* début 1 card sneakers page acceuil */}

                <div className="card sneakerscard" >
                    <img src="https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Bred-Patent/Images/Air-Jordan-1-Retro-High-OG-Bred-Patent/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1633542046&h=320&fm=webp" className="card-img-top" alt="img1"/>
                    <div className="card-body">
                        <h5 className="card-title">Jordan 1 Retro High OG</h5>
                        <p className="card-text">Prix : 200$</p>
                    </div>
                    <div className="card-bodyy">
                        <a href="#" className="card-link">Voir</a>
                    </div>
                </div>

                {/* fin 1 card sneakers page acceuil */}


                <div className="card sneakerscard" >
                    <img src="https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Bred-Patent/Images/Air-Jordan-1-Retro-High-OG-Bred-Patent/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1633542046&h=320&fm=webp" className="card-img-top" alt="img1"/>
                    <div className="card-body">
                        <h5 className="card-title">Jordan 1 Retro High OG</h5>
                        <p className="card-text">Prix : 200$</p>
                    </div>
                    <div className="card-bodyy">
                        <a href="#" className="card-link">Voir</a>
                    </div>
                </div>



                <div className="card sneakerscard" >
                    <img src="https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Bred-Patent/Images/Air-Jordan-1-Retro-High-OG-Bred-Patent/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1633542046&h=320&fm=webp" className="card-img-top" alt="img1"/>
                    <div className="card-body">
                        <h5 className="card-title">Jordan 1 Retro High OG</h5>
                        <p className="card-text">Prix : 200$</p>
                    </div>
                    <div className="card-bodyy">
                        <a href="#" className="card-link">Voir</a>
                    </div>
                </div>



                <div className="card sneakerscard" >
                    <img src="https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Bred-Patent/Images/Air-Jordan-1-Retro-High-OG-Bred-Patent/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1633542046&h=320&fm=webp" className="card-img-top" alt="img1"/>
                    <div className="card-body">
                        <h5 className="card-title">Jordan 1 Retro High OG</h5>
                        <p className="card-text">Prix : 200$</p>
                    </div>
                    <div className="card-bodyy">
                        <a href="#" className="card-link">Voir</a>
                    </div>
                </div>




                <div className="card sneakerscard" >
                    <img src="https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Bred-Patent/Images/Air-Jordan-1-Retro-High-OG-Bred-Patent/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1633542046&h=320&fm=webp" className="card-img-top" alt="img1"/>
                    <div className="card-body">
                        <h5 className="card-title">Jordan 1 Retro High OG</h5>
                        <p className="card-text">Prix : 200$</p>
                    </div>
                    <div className="card-bodyy">
                        <a href="#" className="card-link">Voir</a>
                    </div>
                </div>



                <div className="card sneakerscard" >
                    <img src="https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Bred-Patent/Images/Air-Jordan-1-Retro-High-OG-Bred-Patent/Lv2/img01.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1633542046&h=320&fm=webp" className="card-img-top" alt="img1"/>
                    <div className="card-body">
                        <h5 className="card-title">Jordan 1 Retro High OG</h5>
                        <p className="card-text">Prix : 200$</p>
                    </div>
                    <div className="card-bodyy">
                        <a href="#" className="card-link">Voir</a>
                    </div>
                </div>

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