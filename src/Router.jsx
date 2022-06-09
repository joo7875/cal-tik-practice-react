import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';

import App from './components/App';
import Footer from './Footer';

import Calculator from './components/Calaulator';
import TikTakTo from './components/TikTakTo';
import Carousel from './components/Carousel/Carousel';
import ShoppingList from './sub-components/ShoppingList';
import UseMemo from './sub-components/UseMemo';
import CountdownTimer from './sub-components/CountdownTimer';

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
                <Route path="/use-memo" element={<UseMemo />} />
                <Route path="/countdown-timer" element={<CountdownTimer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
