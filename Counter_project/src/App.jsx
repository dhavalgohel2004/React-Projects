import { useState } from 'react'
import './App.css'

function App() {

  useState(5);

  let [Counter, setCounter] = useState(5);

  const addValue = () => {
    if(Counter < 20){
      setCounter(Counter + 1);
    }else{
      alert('Counter value can not be greater than 20');
    }
  }
  
  const removeValue = () => {
    if(Counter > 0){
      setCounter(Counter - 1);
    }else{
      alert('Counter value can not be less than 0');
    }
  }

  return (
    <>
     <h1>hello dhaval</h1>
     <h2>Counter value : {Counter}</h2>
     <button onClick={addValue}>Increase Value to {Counter + 1}</button> <br /><br />
     <button onClick={removeValue}>Decrease value to {Counter - 1}</button>
    </>
  )
}

export default App
