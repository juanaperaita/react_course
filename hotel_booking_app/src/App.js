import React, {useState} from "react";
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState("hotel");
  const [numberOfDays, setNumberOfDays] = useState(null)

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setNumberOfDays(event.target.value);
  };

  const calculatePrice = (numberOfDays, typeOfReservation) => {
    let result;
    if (typeOfReservation === "car") {
      result = numberOfDays * 50;
    } else {
      result = numberOfDays * 100;
    }
    return result;
  };

  return (
    <div className="main-container">
      <select className="selector" value={selectedOption} onChange={handleSelectChange}>
        <option value="hotel">Hotel</option>
        <option value="car">Car</option>
      </select>
      <input 
        type="number"
        placeholder="Number of days"
        value={numberOfDays}
        onChange={handleInputChange}>
      </input>
      <div className="result">
      {numberOfDays && selectedOption ? `${calculatePrice(Number(numberOfDays), selectedOption)} €` : "Please enter the number of days."}
      </div>
    </div>
  );
}

export default App;
