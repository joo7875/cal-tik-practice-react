import React, { useState } from 'react';
import styled from 'styled-components';

const Card = ({ data, idx }) => {

    const [flip, setFlip] = useState(true);

    const flipClick = () => {
        setFlip(!flip);
    }

    return (
        <Container>
            <img alt={`image-${idx}`} src={data} onClick={flipClick} />
            <div className={flip ? 'flip' : ''}>{idx}</div>
        </Container>
    );
}

const Container = styled.div`

    text-align: center;
    user-select: none;

    img {
        width: 400px;
        height: 400px;
    }

    .flip {
        border: 5px solid yellow;
    }
`;

export default Card;