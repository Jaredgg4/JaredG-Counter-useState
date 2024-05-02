import { useState } from "react";
import React from "react";
import styles from './counter.module.css';

const Counter: React.FC = () => {
    const [number, setNumber] = useState(0);
    const [inc, setInc] = useState<string>('');
    const [list, setList] = useState<string[]>([]);


    
    function addNum(){
        setList([...list, inc]);
        setNumber(number + parseFloat(inc));
    }

    function subNum(){
        setList([...list, inc]);
        setNumber(number - parseFloat(inc));
    }




   function reset(){
    setList([]);
   }



    return (
        <div className={styles.counter}>
            Add/Sub by: <form>
            <input type="text" value={inc} onChange={(e: any) => setInc(e.target.value)}></input>
            </form>
            <p>counter: {number}</p>
            <button onClick={addNum}>Increment</button>
            <button onClick={subNum}>Decrement</button>
            <button onClick={reset}>Reset History</button>
            <h3>History: </h3>
            <ul>
            {list.map((value: any, index: any)=> (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        
        </div>
    )
}

export default Counter;