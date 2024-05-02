
import './App.css';
import { useState } from 'react';

function App() {
  let [showEvents, setShowEvents] = useState(true);
  let [events, setEvents] = useState([
    { id: 1, name: 'Moo Moo Meadows'},
    { id: 2, name: 'Rainbow Road'},
    { id: 3, name: 'Bowser Castle'},
    { id: 4, name: 'Yoshi Valley'},
    { id: 5, name: 'Toad Harbor'}
  ])

  console.log(showEvents)

  const handleClick = (id) => { 
    // we pass a function here which returns a new state value
    setEvents((prevEvents) => {
      return prevEvents.filter( (event) => {
        return event.id !== id
      })
    })
  }

  return (
    <div className="App">
      { showEvents && <button onClick={() => setShowEvents(false)}>Hide events</button> }
      { !showEvents && <button onClick={() => setShowEvents(true)}>Show events</button> }
      { showEvents && events.map((event, index) => (
        <div key={event.id} >
          <h2>{ index + 1 } - {event.name}</h2>
          <button onClick={() => handleClick(event.id)}>Remove event</button>
        </div> 
      ))}
    </div>
  );
}

export default App;
