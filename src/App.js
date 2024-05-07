
import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  let [showModal, setShowModal] = useState(false)
  let [showEvents, setShowEvents] = useState(true);
  let [events, setEvents] = useState([
    { id: 1, name: 'Moo Moo Meadows'},
    { id: 2, name: 'Rainbow Road'},
    { id: 3, name: 'Bowser Castle'},
    { id: 4, name: 'Yoshi Valley'},
    { id: 5, name: 'Toad Harbor'}
  ])


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
      { showEvents && <button onClick={() => setShowEvents(false)}>Hide events</button> }
      { !showEvents && <button onClick={() => setShowEvents(true)}>Show events</button> }
      { showEvents && <EventList events={events} handleClick={handleClick} />}
      <br />
      <button onClick={handleShow}> App new event</button>
      { showModal && <Modal handleClose={handleClose}>
        <NewEventForm />

      </Modal> }
    </div>
  );
}

export default App;
