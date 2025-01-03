import React, {useState} from "react";
import ComponenteMultiple from "./components/ComponenteMultiple.js";
import './App.css';

function App() {
  const[dias, setDias] = useState(0);
  const[opcion, setOpcion] = useState("Hotel");

  const selectorHotelCoche=(e)=>{
    setOpcion(e.target.value);
  };
  return <div className="container">
    <select onChange={selectorHotelCoche} className="desplegable">
      <option value="Hotel">Hotel</option>
      <option value="Coche">Coche</option>
    </select>
    <input type="text" onChange={e=>setDias(e.target.value)} placeholder="Introduce el número de días"></input>

    {opcion==="Hotel" && <ComponenteMultiple opcion={1} dias={dias}/>}
    {opcion==="Coche" && <ComponenteMultiple opcion={2} dias={dias}/>}
  </div>
}

export default App;
