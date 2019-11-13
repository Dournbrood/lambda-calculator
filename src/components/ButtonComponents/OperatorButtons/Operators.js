import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton"

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {/* Remember, operators is an array of objects. Each element looks like such: {
         char: "x"
         value: "*"
       }  */}
      {operatorsState.map((element, index) => (
        <OperatorButton key={index} data={element} />
      ))}
    </div>
  );
};

export default Operators;