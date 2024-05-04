import Title from "./Title"
import styles from './EventList.module.css'

export default function EventList({ events, handleClick }) {
    return (
        <div>
        { events.map((event, index) => (
            <div >
            <Title title={event.name} />
            <button className={ index == 1 ? styles.button : null } onClick={ () => handleClick(event.id)}>Remove event</button>
            </div>
        )) }
        </div>
    )
}

