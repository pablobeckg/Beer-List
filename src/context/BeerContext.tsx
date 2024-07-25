import { createContext, useContext } from "react";
import { IBeer } from "../IBeer";

interface BeerContext {
  allBeers: IBeer[] | null;
}

export const BeerContext = createContext<BeerContext>(null!);
export const useBeerContext = () => useContext(BeerContext);
