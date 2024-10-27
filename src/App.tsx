import Alert from "./components/Alert";
import Button from "./components/Button";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
//import FormA from "./components/FormA";
//import FormB from "./components/FormB";
//import FormC from "./components/FormC";
import FormD from "./components/FormD";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Bs7Circle } from "react-icons/bs";
import { produce } from "immer";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [items, setItems] = useState([
    "New York",
    "London",
    "Dubai",
    "Chicago",
    "Mexico City",
    "Puebla",
  ]);
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Bug 1",
      description: "Description 1",
      fixed: false,
    },
    {
      id: 2,
      title: "Bug 2",
      description: "Description 2",
      fixed: false,
    },
  ]);
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      age: 25,
      email: "john@example.com",
    },
    price: 100,
    quantity: 1,
  });
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleSelectItem = (item: string) => console.log(item);
  const handleButtonClick = () => {
    setShowAlert(true);
    // Add array item
    //setItems([...items, "Xalapa"]);
    // Remove array item
    //setItems(items.filter((item) => item != "Mexico City"));
    // Update array item
    setItems(items.map((item) => (item === "Puebla" ? "Shelby" : item)));
    //console.log(items);
    // Update object array
    //setBugs(bug.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // Using Immer library
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.fixed = true;
        }
      })
    );
  };
  const handleOnClose = () => setShowAlert(false);
  const handleButtonClearCart = () => {
    setCartItems([]);
    setGame({ ...game, player: { ...game.player, name: "Ric" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity++ } : item
      ),
    });
    console.log(cart);
  };
  return (
    <>
      {showAlert && (
        <Alert onClose={handleOnClose}>
          Hello World <Bs7Circle color="black" size="40" />
        </Alert>
      )}
      <Button color="success" onClick={handleButtonClick}>
        Ricardo
      </Button>
      <Like
        onClick={() => {
          console.log("Clicked");
        }}
      />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems}></Cart>
      <Button color="warning" onClick={handleButtonClearCart}>
        Clear Cart
      </Button>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        veritatis ad nostrum neque id incidunt illum omnis laboriosam. Minima
        nihil ad sit fugiat! Voluptatibus quam reprehenderit accusantium cum, ut
        iusto adipisci maxime ea veritatis aliquam! Quisquam harum dolorem ea
        voluptas molestias! Dignissimos provident qui tempore ipsum vero
        eligendi at asperiores eum excepturi animi aperiam sed sit, officiis
        fugit fuga saepe quibusdam quasi laborum autem voluptatum nobis. Atque
        dolorem ut, nesciunt culpa veniam suscipit praesentium cumque saepe
        omnis nulla, facilis debitis, voluptatem vel fuga repellat et.
        Necessitatibus exercitationem dolore voluptas illum.
      </ExpandableText>
      <FormD />
    </>
  );
}

export default App;
