import React from 'react'
import Child from './Child';

const Parent = () => {

    const [value, setValue] = React.useState("");

    const get = (val) => {
        setValue(val.toUpperCase());
    };

    return (
        <div>
            <h1>HELLO </h1>
            {value}
            <Child get={get} />
        </div>
    )
}

export default Parent