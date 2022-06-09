import React, { useState } from 'react';
import styled from 'styled-components';

import icon from '../styles/birthday-cake.png';
import Card from './Card';

const App = () => {

    const [size, setSize] = useState(200);

    const handleClick = () => {
        setSize(size === 500 ? 200 : 500);
    }

    return (
        <div style={divstyle}>
            <Grid>
                <Card title='Shopping list (medium)' src='./shopping-list' />
                <Card title='useMemo()' src='./use-memo' />
                <Card title='Countdown timer (easy)' src='./countdown-timer' />
            </Grid>
            <img src={icon} width={`${size}px`} alt="icon" onClick={handleClick} />
        </div>
    );
}

const divstyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column wrap',
    padding: '20px'
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    div:hover {
        background: black;
        color: white;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export default App;
