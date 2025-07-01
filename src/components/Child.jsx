import React from 'react'

const Child = ({ get }) => {


    const handleClick = () => {
        const value = "hello world";
        get(value);
    }


    return (
        <>
            <div>Child</div>
            <button onClick={handleClick}>click me</button>
        </>
    )
}

export default Child