
import React from 'react'
import { useCounter } from '../../Hooks/useCounter';
export function Counter() {
    const {count,increment,decrement,favoritenumber } = useCounter();
    return (
        <div>
            <h1>{count}</h1>
            <h2>{favoritenumber}</h2>
         <button onClick={increment}>Increment</button>

         <button onClick={decrement}>Decrement</button>
        </div>
    )
}

