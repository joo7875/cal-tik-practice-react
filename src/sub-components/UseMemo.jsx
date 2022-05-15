import React, { useState, useMemo } from 'react';

const UseMemo = () => {

    const [arr, setArr] = useState([]);
    const [num, setNum] = useState('');

    const onChange = e => {
        setNum(e.target.value);
    }

    const onClick = e => {
        const nextArr = arr.concat(parseInt(num));
        setArr(nextArr);
        setNum('');
    }

    const getSum = (num) => {
        console.log('summing...');
        if (num.length === 0) return 0;
        const sum = num.reduce((a, b) => a + b);

        return sum;
    }

    const sum = useMemo(() => getSum(arr), [arr]);


    return (
        <div>
            <input value={num} onChange={onChange} />
            <button onClick={onClick}>Submit</button>
            <div>
                {arr.map((el, i) => (
                    <span key={i}>{el}, </span>
                ))}
            </div>
            <div><b>Total:</b>{sum}</div>
        </div>
    );
}

export default UseMemo;