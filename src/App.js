//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [resultado, setResultado] = useState(0);
  
 function somarContadorESomar(){
 setResultado(contador1 + contador2);
  }

 

  return (
    <div className="App">
      <h1>Meu primeiro App em React</h1>
      <input type="text" value={contador1}/>
      <input type="text" value={contador2}/>
      <button onClick={() => setContador2(contador2 + 1)}>clique aqui para c. 1</button>
      <button onClick={() => setContador1(contador1 + 1)}>clique aqui para c. 2</button>
      <button>Somar os dois valores, resultado: {resultado}</button>


    </div>

  );

}

export default App;

 