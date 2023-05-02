import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(resp => resp.json())
    .then(data => setCardArray(data))
  }, [])

  function handleDelete(removedItem) {
    const deletionArray = cardArray.filter(e => e.id !== removedItem.id);
    setCardArray(deletionArray);
  }

  function search(searchString) {
    fetch(`http://localhost:6001/listings`)
      .then(resp => resp.json())
      .then(data => {
        const searchItems = data.filter(e => e.description.toLowerCase().includes(searchString.toLowerCase()));
        if (searchItems === "") {
          setCardArray(data)
        } else {
          setCardArray(searchItems);
        }
      })
  }
  
  return (
    <div className="app">
      <Header search={search} />
      <ListingsContainer handleDelete={handleDelete} cardArray={cardArray} />
    </div>
  );
}

export default App;
