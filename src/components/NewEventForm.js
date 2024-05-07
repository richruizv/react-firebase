import './NewEventForm.css'

import React from 'react'

export default function NewEventForm() {
  return (
    <form className='new-event-form'>
      <label htmlFor="name-event">
        <span>Name event</span>
        <input type="text" name='name-event' />
      </label>
      <label htmlFor="date-event">
        <span>Date event</span>
        <input type="date" name="date-event" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
