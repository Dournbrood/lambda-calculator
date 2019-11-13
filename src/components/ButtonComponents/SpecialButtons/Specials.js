import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials);
  return (
    <div className="button-bar">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialsState.map((element, index) => (
        <SpecialButton key={index} data={element} />
      ))}
    </div>
  );
};

export default Specials;