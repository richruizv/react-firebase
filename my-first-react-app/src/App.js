
import './App.css';
import { useState } from 'react';

function App() {
  let [name, setName] = useState('Mario')
  let [events, setEvents] = useState([
    { id: 1, name: 'Moo Moo Meadows'},
    { id: 2, name: 'Rainbow Road'},
    { id: 3, name: 'Bowser Castle'},
    { id: 4, name: 'Yoshi Valley'},
    { id: 5, name: 'Toad Harbor'}
  ])

  const changeName = () => { 
    setName('Luigi')
    // this console still shows "Mario" because the setName function affects the variable after the console was executed
    console.log(name)
  }

  return (
    <div className="App">
      <h2>It's a me {name}</h2>
      <button onClick={changeName}>Change name</button>
      { events.map((event, index) => (
        <div key={event.id} ><h2>{ index + 1 } - {event.name}</h2></div> 
      ))}
    </div>
  );
}

export default App;
