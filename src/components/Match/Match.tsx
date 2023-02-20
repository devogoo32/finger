import "./Match.css";

type MatchProps = {
  image: string;
  name: string;
}

function Match({image, name}: MatchProps) {
  return (
    <div className="match">
      <img className="match__image" src={image} />
      <span className="match__name">{name}</span>
    </div>
  )
}

export default Match