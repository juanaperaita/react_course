import './App.css';
import React, {useRef, useState, useEffect} from "react";

function App() {

  const[valueExchange,setValueExchange] = useState(null);
  const title = <h1 className='centered-title'>Euro-Dollar Converter</h1>

  const eurosRef = useRef()
  const resultRef = useRef()

  useEffect(()=>{

    const callApiExchange=async()=>{
      try{
        const response=await fetch("https://v6.exchangerate-api.com/v6/c0e8259eef7043e12001e68f/latest/EUR");
        const data=await response.json();

        setValueExchange(data.conversion_rates.USD);
      }catch(error){
        console.error("error accessing the API: ", error);
      }
    };
    callApiExchange();
  }, []);

  const calculate=()=>{
    const eurosValue = parseFloat(eurosRef.current.value);
    const dollars=eurosValue*valueExchange;
    resultRef.current.innerHTML=dollars.toFixed(4) + " $";
  }

  return(
    <div>
      <div>{title}</div>
      <div className="input-container">
     <input 
        type="text" 
        id="EUR"
        ref={eurosRef} 
        placeholder="Amount of money in EUR"
        className='centered-input'
        ></input> 
      </div>
      <div className='input-container'>
        <button onClick={calculate}>Calculate</button>
      </div>
      <div className="input-container"><h2 ref={resultRef}></h2></div>
    </div>
  )
}

export default App;
