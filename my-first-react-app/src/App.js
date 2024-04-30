
import './App.css';
import { useState } from 'react';

function App() {
  let [name, setName] = useState('Mario')

  const changeName = () => { 
    setName('Luigi')
    // this console still shows "Mario" because the setName function affects the variable after the console was executed
    console.log(name)
  }

  return (
    <div className="App">
      <h2>It's a me {name}</h2>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default App;
