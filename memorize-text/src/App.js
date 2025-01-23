import logo from './logo.svg';
import './App.css';
import parrafos from "./data/quijote.json"
import { useState } from 'react';
import {Row, Btn} from './styled';
function App() {

  const[parrafoActual, setParrafoActual] = useState(0);
  const siguienteParrafo=()=>{

    if(parrafoActual!==parrafos.length-1)
    setParrafoActual(parrafoActual+1);
  }
  const anteriorParrafo=()=>{
    if(parrafoActual!==0)
    setParrafoActual(parrafoActual-1);
  }
  return (
    <div>
    <p>{parrafos[parrafoActual]}</p>
    <Row>
      <Btn onClick={anteriorParrafo}>Anterior</Btn>
      <Btn onClick={siguienteParrafo}>Siguiente</Btn>
    </Row>
    </div>
  );
}

export default App;
