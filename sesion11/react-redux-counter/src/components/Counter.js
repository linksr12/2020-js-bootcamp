import React from 'react'

const Counter = () => {
    return (
        <>
        Clicked:{props.value}times
        <button onClick={props.onIncrement}>+</button>
        <button onClick={props.onDrecrement}>-</button>
        </>
    ) 
}

export default Counter