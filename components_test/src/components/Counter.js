import React, {useState} from "react";

const Counter=()=>{
  const[count, setCounter] =useState(1);

  const increment=()=>{
    setCounter(count+1);

  };
  const decrement=()=>{
    setCounter(count-1);

  };

  return(
    <div>
        <button onClick={decrement}>-</button>
        <input type="text" value={count} size="2" style={{textAlign:"center"}}></input>
        <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;