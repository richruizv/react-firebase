import Title from "./Title"
import styles from './EventList.module.css'
import "./EventList.css"

export default function EventList({ events, handleClick }) {
    return (
        <div className="card">
        { events.map((event, index) => (
            <div >
            <Title location={event.location} title={event.title} date={event.date} />
            <button className={ index === 1 ? styles.button : null } onClick={ () => handleClick(event.id)}>Remove event</button>
            </div>
        )) }
        </div>
    )
}

