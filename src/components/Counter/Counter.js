import React, { useReducer, useState } from "react";
import Card from "../UI/Card";
import Header from "../Header/Header";
import Context from "../../storage/Context";

const counterReducer = (state, action) => {
  if (action.type === "DECREMENT")
    return {
      counter: state.counter - 1
    };
  if (action.type === "INCREMENT") return { counter: state.counter + 1 };
  throw new Error();
};
const Counter = (props) => {
  const [counterState, dispatchCounter] = useReducer(counterReducer, {
    counter: 0
  });

  const onClickMinusHandler = (e) => {
    dispatchCounter({ type: "DECREMENT" });
  };

  const onClickPLusHandler = (e) => {
    dispatchCounter({ type: "INCREMENT" });
  };
  return (
    <Card>
      <Context.Provider value={{ counter: counterState.counter }}>
        <Header />
        Total: {counterState.counter} <br />
        <button onClick={onClickMinusHandler}>-</button>
        {" | "}
        <button onClick={onClickPLusHandler}>+</button>
      </Context.Provider>
    </Card>
  );
};

export default Counter;
