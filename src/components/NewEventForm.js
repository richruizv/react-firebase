import './NewEventForm.css'
import { useState } from 'react';

export default function NewEventForm({ addEvent }) {

  let [title, setTitle] = useState('');
  let [date, setDate] = useState('')
  let [location, setLocation] = useState('CDMX')

  const resetForm = () => { 
    setTitle('')
    setDate('')
    setLocation('CDMX')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }
    addEvent(event)
    resetForm();
  }
  
  return (
    <form className='new-event-form' onSubmit={handleSubmit} >
      <label htmlFor="title-event">
        <span>Title event</span>
        <input type="text" name='title-event' 
          onChange={(e) => { setTitle(e.target.value) }} value={title} />
      </label>
      <label htmlFor="date-event">
        <span>Date event</span>
        <input type="date" name="date-event" 
          onChange={(e) => { setDate(e.target.value) }} value={date} />
      </label>
      <label>
        <span>Location</span>
        <select onChange={(e) => { setLocation(e.target.value) }} value={location}>
          <option value="CDMX">CDMX</option>
          <option value="Tehuacán">Tehuacán</option>
          <option value="Orizaba">Orizaba</option>
        </select>
      </label>
      <div>
        {title} - {date}
      </div>
      <p onClick={resetForm}>Reset the form</p>
      <button type="submit">Submit</button>
    </form>
  )
}
