/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Router from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Router />
        <Footer />
    </BrowserRouter>
    , document.getElementById('root'));