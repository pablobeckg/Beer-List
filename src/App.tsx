import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import { useEffect, useState } from "react";
import { IBeer } from "./IBeer";
import { BeerContext } from "./context/BeerContext";
import DetailPage from "./pages/DetailPage";

function App() {
  const [allBeers, setAllBeers] = useState<IBeer[] | null>(null);
  
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setAllBeers(data))
      .catch((err) => console.error("Error by fetching beer data", err));
  }, []);


  return (
    <BeerContext.Provider value={{allBeers}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-beers" element={<AllBeers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path='/beer/:id' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </BeerContext.Provider>
  );
}

export default App;
