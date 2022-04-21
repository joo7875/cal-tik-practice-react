import React from 'react';
import './styles/Nav.css';

import { Link } from 'react-router-dom';

function App() {
    return (
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/tiktakto">TikTakTo</Link>
            <Link to="/carousel">Carousel</Link>
        </div>
    );
}

export default App;
