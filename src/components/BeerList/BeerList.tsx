import { useBeerContext } from "../../context/BeerContext";
import BeerItem from "../BeerItem/BeerItem";
import "./BeerList.css"

const BeerList = () => {
  const { allBeers } = useBeerContext();

  return (
    <div className="beer-list">
      {allBeers?.map((beer) => (
        <BeerItem key={beer._id} beer={beer} />
      ))}
    </div>
  );
};

export default BeerList;
