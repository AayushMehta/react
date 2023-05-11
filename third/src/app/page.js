"use client";
import React, { useState, useReducer } from "react";

//************************** */
// ussState
//************************* */

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <p>Count: {count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  );
};
export default Counter;

//************************** */
// ussReduces
//************************* */

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "plus":
//       return { count: state.count + 1 };
//     case "minus":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// };
// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const inc = () => {
//     dispatch({ type: "plus" });
//   };

//   const dec = () => {
//     dispatch({ type: "minus" });
//   };

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={inc}>+</button>
//       <button onClick={dec}>-</button>
//     </div>
//   );
// };

// export default Counter;
