import './App.css';
import React, {useState} from "react";

function App() {

  // Definir el estado para almacenar el resultado de la suma
  const [resultado, setResultado] = useState(null);
  const elemento = <h1 className='centrar-titulo'>Math website</h1>
  //const elemento2=<h2>{suma(7,5)}{/*El código JavaScript debe ir entre llaves siempre.*/}</h2>

  const botonPulsado = () => {
    const result= suma(7,5);
    setResultado(result)

  };
  
  return <div>
    <button onClick={botonPulsado} style={{marginTop: "10px", marginLeft:"20px"}}>Click here</button>
    <div>{elemento}</div>
    <div>{resultado != null && <h2>El resultado es: {resultado}</h2>}</div>
    </div>

}

function  suma(a,b){
  return a+b
}

export default App;