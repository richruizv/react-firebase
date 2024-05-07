import './NewEventForm.css'
import { useState } from 'react';

export default function NewEventForm() {

  let [title,setTitle] = useState(null);
  let [date,setDate] = useState(null)
  
  return (
    <form className='new-event-form'>
      <label htmlFor="title-event">
        <span>Title event</span>
        <input type="text" name='title-event' onChange={(e) => { setTitle(e.target.value) }} />
      </label>
      <label htmlFor="date-event">
        <span>Date event</span>
        <input type="date" name="date-event" onChange={(e) => { setDate(e.target.value) }} />
      </label>
      <div>
        {title} - {date}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
