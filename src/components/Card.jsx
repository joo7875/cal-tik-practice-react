import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ title, src }) => {

    return (
        <Link to={src}><Container>{title}</Container></Link>
    );
} 

const Container = styled.div`
    width: 200px;
    height: 100px;
    border: 1px solid black;
    border-left: 10px solid pink;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`;

export default Card;