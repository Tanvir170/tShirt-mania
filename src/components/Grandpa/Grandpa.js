import React, { createContext, useState } from "react";
import Uncle from "../Uncle/Uncle";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornaments = "kada matir Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h4>Grandpa</h4>
        <button onClick={handleBuyAHouse}>Buy a House</button>
        <p>House: {house}</p>
        <div style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
