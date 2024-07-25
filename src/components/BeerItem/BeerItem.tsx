import { Link } from "react-router-dom";
import { IBeer } from "../../IBeer";
import "./BeerItem.css";

interface BeerProps {
  beer: IBeer;
}

const BeerItem: React.FC<BeerProps> = (props) => {
  return (
    <div className="beer-item">
      <h1>{props.beer.name}</h1>
      <h2>{props.beer.tagline}</h2>
      <h3>Created by: {props.beer.name}</h3>
      <button><Link to={`/beer/${props.beer._id}`}>Details</Link></button>
      
      <hr />
    </div>
  );
};

export default BeerItem;
