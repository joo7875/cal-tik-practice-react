import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from './Card';

function Carousel() {

    const [image, setImage] = useState([]);
    const [cur, setCur] = useState(0);
    const [len, setLen] = useState(0);

    useEffect(() => {

        fetch('https://www.reddit.com/r/aww/top/.json?t=all')
        .then(res => res.json())
        .then(data => {
            const arr = data.data.children;
            let count = 0; // length

            for (const { data } of arr) {
                const url = data.url_overridden_by_dest;
                
                if (url.slice(-3) === 'jpg') {
                    setImage(image => [...image, url]);
                    count++;
                }
            }

            setLen(count);
        })
        .catch(e => console.log(e));

    }, []);

    const arrowClick = (type) => {
        switch (type) {
            case 'prev':
                if (cur > 0) setCur(cur - 1);
                break;
            case 'next':
                if (cur < len - 1) setCur(cur + 1);
                break;
            default:
                break;
        }
    }

    return (
        <Container>
            {image.length > 0 ? 
                image.map((el, id) => (
                    <div  key={id} className={cur === id ? 'active' : 'deactive'}>
                        <Card idx={id} data={el} />
                    </div>
                ))
            : <div>Loading...</div>
            }
            <button id='prev' className={cur === 0 ? 'deactive' : 'active'} onClick={() => arrowClick('prev')}>{'<'}</button>
            <button id='next' className={cur === len - 1 ? 'deactive' : 'active'} onClick={() => arrowClick('next')}>{'>'}</button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
        position: absolute;
        border: none;
        padding: 25px;
        font-size: 30px;
        border-radius: 50%;
        cursor: pointer;
        user-select: none;
    }

    button:hover {
        color: white;
        background: black;
    }

    button:active {
        color: black;
        background: yellow;
    }

    #prev {
        left: 100px;
    }

    #next {
        right: 100px;
    }

    .active {
        display: block;
    }

    .deactive {
        display: none;
    }
`;

export default Carousel;