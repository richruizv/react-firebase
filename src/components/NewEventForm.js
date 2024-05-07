import './NewEventForm.css'
import { useState } from 'react';

export default function NewEventForm() {

  let [title,setTitle] = useState('');
  let [date,setDate] = useState('')

  const resetForm = () => { 
    setTitle('')
    setDate('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000)
    }

    resetForm()

    console.log(event)

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
      <div>
        {title} - {date}
      </div>
      <p onClick={resetForm}>Reset the form</p>
      <button type="submit">Submit</button>
    </form>
  )
}
