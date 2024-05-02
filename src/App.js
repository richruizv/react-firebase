
import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';

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
        <React.Fragment key={event.id} >
          <Title title={event.name} />
          <button onClick={() => handleClick(event.id)}>Remove event</button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
