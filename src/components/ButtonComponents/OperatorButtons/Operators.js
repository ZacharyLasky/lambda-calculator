import React, { useState } from "react";
import OperatorButton from "./OperatorButton";

//import any components needed
import { operators } from "../../../data";
//Import your array data to from the provided data file

const Operators = () => {
  const [operatorsState, setOperatorsState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      operatorsState.map(props => {
        return OperatorButton(props.char)
      })
      }
    </div>
  );
};

export default Operators;