import React from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({ cardArray, handleDelete }) {
 
  const cardList = cardArray.map(e => <ListingCard 
    item={e} 
    key={e.id} 
    onHandleDelete={handleDelete}
  />)
  
  return (
    <main>
      <ul className="cards">
        {cardList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
