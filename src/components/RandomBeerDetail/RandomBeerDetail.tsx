import { useEffect, useState } from "react";
import "./RandomBeerDetail.css"
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { IBeer } from "../../IBeer";

const RandomBeerDetail = () => {
  const [randomBeer, setRandomBeer] = useState<IBeer | null>(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((data) => setRandomBeer(data))
      .catch((err) => console.error("Error by fetching beer data", err));
  }, []);

  return (
    <div className="random-beer">
      <h1>{randomBeer?.name}</h1>
      <h1>{randomBeer?.tagline}</h1>
      <h3>First brewed: {randomBeer?.first_brewed}</h3>
      <h3>Attenuation level: {randomBeer?.attenuation_level}</h3>
      <p>{randomBeer?.description}</p>
      <button className="arrow">
        <Link to="/all-beers">
          <img src="images/Back.png" alt="" />
        </Link>
      </button>
      <Footer/>
    </div>
  );
};

export default RandomBeerDetail;