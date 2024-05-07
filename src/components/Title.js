export default function Title(props) {
  return (
    <>
      <h1 className="title">{props.title}</h1>
      <p className="location">{props.location}</p>
      <p className="date">{props.date}</p>
    </>
  )
} 