import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';

import App from './components/App';
import Footer from './Footer';

import Calculator from './components/Calaulator';
import TikTakTo from './components/TikTakTo';
import Carousel from './components/Carousel';
import ShoppingList from './sub-components/ShoppingList';

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/tiktakto" element={<TikTakTo />} />
                <Route path="/carousel" element={<Carousel />} />
                <Route path="/shopping-list" element={<ShoppingList />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
