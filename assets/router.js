import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Products from "./pages/Products";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Home />}/>
            <Route path="/catalogue" element={<Catalog />}/>
            <Route path="/products" element={<Products />}/>

        </Routes>
    );
};

export default Router;