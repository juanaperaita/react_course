import logo from './logo.svg';
import './App.css';

function App() {

  const myArray=()=>{
    const numbersArray=[
      {id:1, num:15},
      {id:2, num:37},
      {id:3, num:26},
      {id:4, num:95},
      {id:5, num:81}
    ];
    return(
      <p>
        {numbersArray.map((item)=>{
          return <span key={item.id}>
            {item.id}&nbsp;{item.num}&nbsp;
          </span>
        })}
      </p>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Numbers from the array</h1>
        {myArray()}
      </header>
    </div>
  );
}

export default App;
