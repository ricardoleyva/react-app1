import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

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
    <div>
      {showAlert && <Alert onClose={handleOnClose}>Hello World</Alert>}
      <Button color="success" onClick={handleButtonClick}>
        Ricardo
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
