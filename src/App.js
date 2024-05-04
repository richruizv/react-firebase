
import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

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

  console.log(showModal)

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
      { showEvents && events.map((event, index) => (
        <React.Fragment key={event.id} >
          <Title title={event.name} />
          <button onClick={() => handleClick(event.id)}>Remove event</button>
        </React.Fragment>
      ))}
      <br />
      <button onClick={handleShow}> Show Modal</button>
      { showModal && <Modal handleClose={handleClose}>
        <h2>10% off coupon code</h2>
        <p>Use the Code RICHARD10 at the checkout!</p>
      </Modal> }
    </div>
  );
}

export default App;
