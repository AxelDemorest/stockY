import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Home />}/>
            <Route path="/catalogue" element={<Catalog />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    );
};

export default Router;