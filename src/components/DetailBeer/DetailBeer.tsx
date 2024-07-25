import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBeerContext } from "../../context/BeerContext";
import { IBeer } from "../../IBeer";
import "./DetailBeer.css";

const DetailBeer = () => {
  const { id } = useParams<{ id?: string }>();
  const [filterBeer, setFilteredBeer] = useState<IBeer | null>(null);
  const { allBeers } = useBeerContext();

  useEffect(() => {
    if (allBeers && id) {
      const found = allBeers.find((item) => item._id === id);
      setFilteredBeer(found !== undefined ? found : null);
    }
  }, [id, allBeers]);

  return (
    <div className="detail-beer">
      <h1>{filterBeer?.name}</h1>
      <h1>{filterBeer?.tagline}</h1>
      <h3>First brewed: {filterBeer?.first_brewed}</h3>
      <h3>Attenuation level: {filterBeer?.attenuation_level}</h3>
      <p>{filterBeer?.description}</p>
      <button><Link to="/all-beers"><img src="/public/images/Back.png" alt="" /></Link></button>
    </div>
  );
};

export default DetailBeer;
