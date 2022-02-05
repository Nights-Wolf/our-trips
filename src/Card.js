export default function Card(props) {
  return(
      <div  className= "card">
          <img src={`../images/${props.img}`} className="card--image" alt="trip" />
          <div className="card--details">
          <span className="card--details--destiny">{props.destiny}</span>
          <span className="card--details--date">{props.date}</span>
          </div>
          <p className="card--description">{props.description}</p>
      </div>
  );
}
