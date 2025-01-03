import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types"

function App() {

  const user={
    name: "Rosalía",
    last_name:"Vila",
    age:32,
    gender:"woman"
  };

  return (
    <div>
      <Greeting user={user}></Greeting>
    </div>
  );
}

function Greeting(props){

  const{name, last_name, age, gender} = props.user

  return (
    <div>{
      name && last_name?(<div>
        <h1>Hello {name} {last_name}</h1>
      <p>
        You are <strong>{age}</strong> years old.
      </p>
      <p>
        Your gender is <strong>{gender}</strong>.
      </p>
    </div>):<h1>Username not provided.</h1>}</div>
  );
}

Greeting.propTypes={
  user:PropTypes.shape(
    {
      name:PropTypes.string.isRequired,
      age:PropTypes.number.isRequired
    }
  ).isRequired
}

export default App;
