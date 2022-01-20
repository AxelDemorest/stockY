import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Products from "./pages/Products";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription"

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Home />}/>
            <Route path="/catalogue" element={<Catalog />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/connexion" element={<Connexion />}/>
            <Route path="/inscription" element={<Inscription />}/>

        </Routes>
    );
};

export default Router;