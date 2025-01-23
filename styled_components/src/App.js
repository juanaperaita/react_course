import logo from './logo.svg';
import './App.css';
import { MiBoton } from './styled';
import { MiBotonLargo } from './styled2';
function App() {
  return (
    <div className="App">
      <MiBoton entrar={true}>Log in</MiBoton>
      <MiBoton entrar={false}>Log out</MiBoton>
    </div>
  );
}

export default App;
