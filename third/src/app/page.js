"use client";
import React, { useState, useReducer } from "react";

//************************** */
// ussState
//************************* */

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  const [divBy5, setDivBy5] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const number = [2, 3, 4, 5, 7, 10, 14, 15];
  const navBar = [
    { name: "Dashboard", path: "/" },
    {
      name: "Employees",
      path: "/employees",
      subMenu: [
        { name: "Jobs", path: "/recruitment/jobs" },
        { name: "Candidates", path: "/recruitment/candidates" },
        { name: "Interview", path: "/recruitment/interview" },
      ],
    },
    {
      name: "Recruitment",
      path: "",
      subMenu: [
        { name: "Jobs", path: "/recruitment/jobs" },
        { name: "Candidates", path: "/recruitment/candidates" },
        { name: "Interview", path: "/recruitment/interview" },
      ],
    },
  ];
  // console.log(navBar[2].subMenu);
  // console.log(navBar[2]);
  function finder(path) {
    const recruitmentItem = navBar.find((item) => item.name === "Recruitment");
    // console.log(recruitmentItem.subMenu);
    if (!recruitmentItem || !recruitmentItem.subMenu) return false;

    const pathSplits = path.split("/").filter((split) => split !== "");
    // console.log(pathSlpits);
    // const pathItem = recruitmentItem.subMenu.find;
    const subPathSplits = recruitmentItem.subMenu.map((item) =>
      item.path.split("/").filter((split) => split !== "")
    );
    // console.log(subPathSplits);
    for (const segments of subPathSplits) {
      if (segments.length <= pathSplits.length) {
        let match = true;
        for (let i = 0; i < segments.length; i++) {
          if (segments[i] !== pathSplits[i]) {
            match = false;
            break;
          }
        }
        return match;
      }
    }
  }

  const path1 = "/recruitment/jobs";
  const path2 = "/recruitment/jobs/some-random-path";

  finder(navBar[2].path);
  console.log(finder(path1));
  // const test = navBar[1].subMenu[1].path
  //   .split("/")
  //   .filter((split) => split !== "");
  // console.log(test);
  // console.log(navBar[2].subMenu);

  // const isDivisible = () => {
  //   let divisible = false;
  //   for (let i = 0; i < number.length; i++) {
  //     if (number[i] % 5 === 0) {
  //       divisible = true;
  //       break;
  //     }
  //   }
  //   setDivBy5(divisible);
  // };

  // isDivisible();
  // console.log(divBy5);
  const isDivisible = number.some((number) => number % 5 === 0);
  const even = number.filter((number) => number % 2 === 0);
  const odd = number.filter((number) => number % 2 !== 0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  const checkBoxHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <p>Count: {count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("green")}>Green</button>
      <p>Numbers Array is :{number.join(", ")} </p>
      {isDivisible ? (
        <p>numbers in array are divisible by 5.</p>
      ) : (
        <p>no numbers in array are divisible by 5.</p>
      )}
      <p> Odd Numbers : {odd.join(",")}</p>
      <p> Even Numbers : {even.join(",")}</p>
      <input type="checkbox" checked={isChecked} onChange={checkBoxHandler} />
      <select disabled={!isChecked}>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
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
