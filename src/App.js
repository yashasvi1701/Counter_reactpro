import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(5)
  
const addValue = () =>{
 setCounter(counter + 1)
  console.log("clicked",counter);
}
  const decValue = () =>{
     setCounter(counter - 1)
    console.log("clicked",counter);
  }
  return (
    <>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Increase Value</button> 
    <br/>
    <button onClick={decValue}>Decrease Value</button>
    </>
    
  )
}

export default App;
