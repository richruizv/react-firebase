
import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  let [showModal, setShowModal] = useState(false)
  let [showEvents, setShowEvents] = useState(true);
  let [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })

    setShowModal(false)
  }

  const handleClick = (id) => { 
    // we pass a function here which returns a new state value
    setEvents((prevEvents) => {
      return prevEvents.filter( (event) => {
        return event.id !== id
      })
    })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleShow = () => {
    setShowModal(true)
  }

  return (
    <div className="App">
      <button onClick={handleShow}> App new event</button>
      { showEvents && <button onClick={() => setShowEvents(false)}>Hide events</button> }
      { !showEvents && <button onClick={() => setShowEvents(true)}>Show events</button> }
      All the events in Richard land
      { showEvents && events.length > 0 && <EventList events={events} handleClick={handleClick} />}
      <br />
      { showModal && <Modal handleClose={handleClose}>
        <NewEventForm addEvent={addEvent} />

      </Modal> }
    </div>
  );
}

export default App;
