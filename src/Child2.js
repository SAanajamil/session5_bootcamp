import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch]= useReducer(CounterReducer, 10)
    console.log(state)
    return(
        <div>
            <h2>This is second child using Counter Reducer</h2>
            <h3>Value of reducer is: {state}</h3>
            <button onClick={()=>dispatch('INCREAMENT')}>Increament Reducer</button>
        </div>
    )
} 

export default Child2