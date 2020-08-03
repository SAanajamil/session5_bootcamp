import React,{useContext} from 'react';
import Countercontext from './Countercontext';

const Child = () => {
    
    let counterValue = useContext(Countercontext)
    console.log(counterValue)
    return (
        <div>
            <h2>This is first child using Counter ontext</h2>
            <h3>Counter Value is : {counterValue[0]}</h3>

            <button onClick={()=> {counterValue[1](++counterValue[0]
            )}}>Increament Context</button>

        </div>
    )
}

export default Child;