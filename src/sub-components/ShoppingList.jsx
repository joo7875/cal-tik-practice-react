import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';

const ShoppingList = () => {

    const [word, setWord] = useState([]);
    const [cart, setCart] = useState([]);

    const inputChange = (e) => {
        if (e.target.value.length >= 2) debounceFn(e.target.value);
    }

    const inputDebounce = (val) => {
        let url = `https://api.frontendeval.com/fake/food/${val}`; 

        fetch(url)
        .then(res => res.json())
        .then(data => setWord(data))
        .catch(e => console.log(e));
    }

    const debounceFn = useCallback(debounce(inputDebounce, 1000), []);

    const wordClick = (el) => {
        setCart([...cart, el]);
    }

    const checkChange = (e, id) => {

        const label = document.getElementById('label-' + id);
        if (e.target.checked) {
            label.style.color = 'black';
            label.style.textDecoration = 'none';
        } else {
            label.style.color = 'gray';
            label.style.textDecoration = 'line-through';
        }
    }

    const deleteClick = (id) => {
        let filter = cart.filter((el, idx) => idx !== id);
        setCart(filter);
    }

    return (
        <Container>
            <div>
                <div>My shopping list</div><br />
                <input type='text' onChange={e => inputChange(e)}></input>
                <WordContainer>
                {
                    word.length > 0 && word.map((el, id) => {
                        return <div key={id} onClick={() => wordClick(el)}>{el}</div>;
                    })
                }
                </WordContainer>
            </div>
            <div>
                {
                    cart.length > 0 && cart.map((el, id) => {
                        return (
                            <CartItem key={id}>
                                <input type='checkbox' id={`item-${id}`} defaultChecked={true} onChange={e => checkChange(e, id)}></input>
                                <label htmlFor={`item-${id}`} id={`label-${id}`}>{el}</label>
                                <span onClick={() => deleteClick(id)}>X</span>
                            </CartItem>
                        );
                    })
                }
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
    grid-gap: 20px;
    padding: 10px;
`;

const WordContainer = styled.div`
    margin-top: 10px;

    div {
        cursor: pointer;
    }

    div:hover {
        color: red;
    }
`;

const CartItem = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;

    input {
        margin-right: 20px;
    }

    label {
        margin-right: 20px;
    }

    span {
        cursor: pointer;
        color: red;
    }
`;

export default ShoppingList;
