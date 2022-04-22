import React, { useState } from 'react';
import icon from './styles/birthday-cake.png';

const App = () => {

    const [size, setSize] = useState(500);

    const handleClick = () => {
        setSize(size === 500 ? 200 : 500);
    }

    return (
        <div style={divstyle}>
            <img src={icon} width={`${size}px`} alt="icon" onClick={handleClick} />
        </div>
    );
}

const divstyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default App;
