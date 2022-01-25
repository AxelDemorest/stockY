import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import About from "./pages/About";
import Account from "./pages/Account"

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Home />}/>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/products/:id" element={<SingleProduct />}/>
            <Route path="/connexion" element={<Connexion />}/>
            <Route path="/inscription" element={<Inscription />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/account" element={<Account />}/>

        </Routes>
    );
};

export default Router;