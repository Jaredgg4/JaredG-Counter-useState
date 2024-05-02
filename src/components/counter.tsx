import { useState } from "react";
import React from "react";
import styles from './counter.module.css';

const Counter: React.FC = () => {
    const [number, setNumber] = useState(0);
    
    function addNum(){
        setNumber(number + 1);
    }

    function subNum(){
        setNumber(number - 1);
    }


    return (
        <div className={styles.counter}>
            <p>counter: {number}</p>
            <button onClick={addNum}>Increment</button>
            <button onClick={subNum}>Decrement</button>
        </div>
    )
}

export default Counter;