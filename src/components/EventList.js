import Title from "./Title"

export default function EventList({ events, handleClick }) {
    return (
        <div>
        { events.map((event, index) => (
            <div >
            <Title title={event.name} />
            <button onClick={ () => handleClick(event.id)}>Remove event</button>
            </div>
        )) }
        </div>
    )
}

