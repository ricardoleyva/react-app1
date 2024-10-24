import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import { Bs7Circle } from "react-icons/bs";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  let items = [
    "New York",
    "London",
    "Dubai",
    "Chicago",
    "Mexico City",
    "Puebla",
  ];

  const handleSelectItem = (item: string) => console.log(item);
  const handleButtonClick = () => setShowAlert(true);
  const handleOnClose = () => setShowAlert(false);
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
    </>
  );
}

export default App;
