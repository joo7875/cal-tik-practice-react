import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';

import App from './components/App';
import Calculator from './components/Calaulator';
import TikTakTo from './components/TikTakTo';
import Carousel from './components/Carousel';
import Footer from './Footer';

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/tiktakto" element={<TikTakTo />} />
                <Route path="/carousel" element={<Carousel />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
