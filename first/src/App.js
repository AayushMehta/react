import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  // state handling start

  const [stylee, setStylee] = useState({
    background: "white",
    color: "black",
  });
  const [modal, setModal] = useState(false);
  const [uiSwitch, setuiSwitch] = useState(false);

  const [step, setstep] = useState(0);

  const [userInput, setuserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  // state handling ends
  const names = [
    {
      id: 1,
      name: "Meanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];

  // for (let i = 0; i < names.length; i++) {
  //   {
  //     if (names[i].name[0] === "M") {
  //       console.log(names[i].name);
  //     }
  //   }
  // }

  // const nameDiplay = () => {
  //   names.map((name) => {
  //     if (name.name[0] === "M") {
  //       console.log(name.name);
  //       return <p>{name.name}</p>;
  //     }
  //   });
  // };

  const clickHandler = () => {
    setuiSwitch((uiSwitch) => !uiSwitch);
    if (stylee.color === "black") {
      setStylee({
        background: "black",
        color: "white",
      });
    } else {
      setStylee({
        background: "white",
        color: "black",
      });
    }
  };
  // let stylee = {
  //   backgroundColor: "black",
  //   color: "white",
  // };
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // nameDiplay();

  const buttonHandler = () => {
    setModal((modal) => !modal);
  };

  const nextButtonHandler = () => {
    setstep(step + 1);
  };

  const prevButtonHandler = () => {
    setstep(step - 1);
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    alert("form submitted");
  };

  const step1 = () => {
    return (
      <div>
        <p>form 1</p>
        <input type="email" name="email" placeholder="Email" />
        <button onClick={nextButtonHandler}>Next</button>
        {console.log(step)}
      </div>
    );
  };
  const step2 = () => {
    return (
      <div>
        <p>form 2</p>
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <button onClick={prevButtonHandler}>Previous</button>
        <button onClick={nextButtonHandler}>Next</button>
        {console.log(step)}
      </div>
    );
  };
  const step3 = () => {
    return (
      <div>
        <p>form 3</p>
        <input type="tel" name="phone" placeholder="Phone Number" />
        <button onClick={prevButtonHandler}>Previous</button>
        <button onClick={submitButtonHandler}>Submit</button>
        {console.log(step)}
      </div>
    );
  };

  return (
    <div>
      <div style={stylee}>
        <button onClick={clickHandler}>
          {uiSwitch ? "Light Mdoe" : "Dark Mdoe"}
        </button>
        <hr />
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
        <hr />
        {names.map((name) => {
          if (name.name[0] === "M") {
            return <p key={name.id}>{name.name}</p>;
          }
        })}
        <hr />
        <div style={{ height: "50vh" }}>
          <button onClick={buttonHandler}>
            {modal ? "Hide" : "Open"} Modal
          </button>
          {modal && <div>This is modal</div>}
          {modal ? <div>This is modal</div> : undefined}
        </div>
        <hr />
        <div
          style={{
            // outline: "5px solid red",
            width: "50vw",
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            marginBottom: "2rem",
          }}
        >
          {step === 0 && step1()}
          {step === 1 && step2()}
          {step === 2 && step3()}
        </div>
        <div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default App;
