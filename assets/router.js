import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

const Router = () => {
    return (
        <div className="global-container">
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/login" element={<Home />}/>
            </Routes>
        </div>
    );
};

export default Router;