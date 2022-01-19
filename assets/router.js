import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Home />}/>
        </Routes>
    );
};

export default Router;