import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = useState([
    {
      name: "",
      price: "",
      quantity: "",
      totalValue: "",
    },
  ]);
  const reducer = useReducer;

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setUsers(response.data))
  //     .catch((error) => console.log(error));
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       console.log(response.data);
  //       return response.data;
  //     })
  //     .then((response) => setUsers(response))
  //     .catch((error) => console.log(error));
  // }, []);

  const categories = [
    {
      category: "cake",
      name: "blueberry cake",
      price: 500,
    },
    {
      category: "cake",
      name: "fruit punch cake",
      price: 700,
    },
    {
      category: "breads",
      name: "milk bread",
      price: 60,
    },
    {
      category: "breads",
      name: "garlic bread",
      price: 80,
    },

    // snacks: [
    //   { name: "sandwich", price: 90 },
    //   { name: "pizza", price: 120 },
    // ],
  ];

  const obj = { ...cartItems };
  // console.log(...cartItems);

  // console.log(...cartItems);

  // console.log(cartItems[0].name);
  // const addToCart = (name, price) => {
  //   {
  //     console.log(cartItems[0].name);
  //     if (cartItems.name === name) {
  //       cartItems.quantity.push(cartItems.quantity + 1);
  //       console.log(cartItems.quantity);
  //     } else {
  //       cartItems.push(name, +price);
  //       console.log(cartItems);
  //     }
  //     // setCartItems([...cartItems, { name, price }]);
  //     // console.log(cartItems);
  //     // cartItems.push(name, +price);
  //     // console.log(...cartItems);
  //   }
  // };
  // const removeFromCart = () => {
  //   {
  //     // console.log(cartItems);
  //     // console.log("bye");
  //   }
  // };
  // const calculateTotalValue = (item) => {
  //   return item.price * item.quantity;
  // };

  console.log(cartItems);

  const addToCart = (newName, newPrice) => {
    // cartItems.map((cartItem) => {
    //   if (cartItem.name === newName) {
    //     const [newCartItems] = [...cartItems];
    //     const newCartObject = {
    //       ...newCartItems,
    //       name: newName,
    //       price: newPrice,
    //       totalValue: +(newPrice * newCartItems.quantity),
    //       quantity: +(newCartItems.quantity + 1),
    //     };
    //     console.log("if block running");
    //     setCartItems([...cartItems, newCartObject]);
    //   }

    if (cartItems.some((cartItem) => cartItem.name === newName)) {
      const newCartItems = [...cartItems];
      const newCartObject = newCartItems.find(
        (cartItem) => cartItem.name === newName
      );
      // newCartObject.price = newPrice;
      newCartObject.quantity += 1;
      newCartObject.totalValue = newPrice * newCartObject.quantity;
      console.log("if block running");
      setCartItems(newCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          name: newName,
          price: newPrice,
          quantity: 1,
          totalValue: newPrice * 1,
        },
      ]);
      console.log("else block running");
    }
  };
  const removeFromCart = () => {};

  return (
    // <>
    //   <div>
    //     {users.map((user) => (
    //       <div key={user.id}>
    //         {/* <h3>{user.name}</h3> */}
    //         {/* <p>{user.email}</p> */}
    //         <h3>{user.title}</h3>
    //         {/* <p>{user.class}</p> */}
    //         {/* why it is not throwing any error, when user.class does not exsist  */}
    //         {/* <hr /> */}
    //       </div>
    //     ))}
    //   </div>
    <div>
      {categories.map((cat) => (
        <div style={{ display: "flex", gap: "2rem" }} key={cat.price}>
          <h1>{cat.name}</h1>
          <h1>{cat.price}</h1>
          <button onClick={() => addToCart(cat.name, cat.price)}>
            {" "}
            Add To Cart{" "}
          </button>
          <button onClick={removeFromCart}> - </button>
        </div>
      ))}
      <div>
        <h1> This is Cart</h1>
      </div>
    </div>
  );
}

export default App;
