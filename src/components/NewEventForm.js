import './NewEventForm.css'
import { useRef } from 'react';

export default function NewEventForm({ addEvent }) {

  const title = useRef();
  const date = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random() * 10000)
    }
    addEvent(event)
    resetForm()
  }

  const resetForm = () => {
    title.current.value = ''
    date.current.value = ''
  }
  
  return (
    <form className='new-event-form' onSubmit={handleSubmit} >
      <label htmlFor="title-event">
        <span>Title event</span>
        <input type="text" name='title-event' ref={title}/>
      </label>
      <label htmlFor="date-event">
        <span>Date event</span>
        <input type="date" name="date-event" ref={date} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
