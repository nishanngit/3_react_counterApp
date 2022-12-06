 import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);
  //Counter - State - To Store Values
  function incrementCounter(){
    setCounter(counter+1);
  }
  function decrementCounter(){
    setCounter(counter-1);
  } 
  function resetCounter(){
    setCounter(0);
  }
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    }}
    className="App">
      <header className="App-header">
          <h3>Counter Application</h3>
          <h1>{counter}</h1>
          <button style={{
            backgroundColor:'green',
            color:'white',
            border:'1px solid green',
            padding:'10px',
          }} onClick={incrementCounter}>Increment</button>
             <button style={{
            backgroundColor:'red',
            color:'white',
            border:'1px solid red',
            padding:'10px',
          }} onClick={decrementCounter}>Decrement</button>
           <button style={{
            backgroundColor:'white',
            color:'black',
            border:'1px solid red',
            padding:'10px',
          }} onClick={resetCounter}>Reset</button>
      </header>
    </div>
  );
}

export default App;
